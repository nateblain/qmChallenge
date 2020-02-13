import { fields, operators, BETWEEN } from '../data/staticData';

import { CriteriaType, FieldType } from '../types/DomainTypes';

const integerErrorMsg = "One or more search criteria have an integer field but the value is a string. Adjust the value to be a valid integer."

const hasNoSearchParameters = (criteria: Array<CriteriaType>) => {
  const firstCriteria = criteria[0];
  if (criteria.length === 1 && !firstCriteria.fieldId && !firstCriteria.operatorId && !criteria.values.length) {
    return true;
  }
  return false;
};

const isPartialSearch = (criteria: Array<CriteriaType>) => {
  const missingCriteria = !!criteria.find(item => {
    if (item.operatorId) {
      const operator = operators.find(operator => operator.id === item.operatorId);
      if (operator.operatorValue === BETWEEN) {
        return !item.fieldId || !item.operatorId || !item.values[0] || !item.values[1];
      }
    }
    return !item.fieldId || !item.operatorId || !item.values[0];
  });
  return missingCriteria;
}

const maybeAddSemiColon = (criteria: Array<CriteriaType>, query: string, idx: number) => {
  if (idx === criteria.length - 1) {
    return `${query};`
  }
  return query
}

const buildQuery = (criteria: Array<CriteriaType>) => {
  const baseQuery = `SELECT * FROM session`;

  if (hasNoSearchParameters(criteria)) {
    return `${baseQuery};`;
  }
  if (isPartialSearch(criteria)) {
    return "One or more values are missing from the search criteria. Make sure all fields have values.";
  }

  const query = criteria.reduce((acc, cur, idx) => {
    const field = fields.find(field => field.id === cur.fieldId);
    const operator = operators.find(operator => operator.id === cur.operatorId);
    if (acc === integerErrorMsg) {
      return integerErrorMsg;
    }

    if (operator && field) {

      if (field.type === FieldType.NUMBER) {
        const foundNaN = cur.values.map(v => parseInt(v)).find(v => isNaN(v));
        if (foundNaN !== undefined && isNaN(foundNaN)) {
          return integerErrorMsg;
        }
      }

      if (idx === 0) {
        acc = `${acc} WHERE`;
      } else {
        acc = `${acc} AND`;
      }

      return maybeAddSemiColon(
        criteria,
        `${acc} ${operator.builder(
          cur.values,
          field.columnName,
          operator.operatorValue
        )}`,
        idx
      );
    }
    return `${acc};`;
  }, `${baseQuery}`);
  return query;
}

export {
  buildQuery
}
