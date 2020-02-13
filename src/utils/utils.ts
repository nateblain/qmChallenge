import { fields, operators } from '../staticAssets';

import { CriteriaType } from '../DomainTypes';

const hasNoSearchParameters = (criteria: Array<CriteriaType>) => {
  const firstCriteria = criteria[0];
  if (criteria.length === 1 && !firstCriteria.fieldId && !firstCriteria.operatorId && !criteria.values.length) {
    return true;
  }
  return false;
};

const isPartialSearch = (criteria: Array<CriteriaType>) =>
  !!criteria.find(item => !item.fieldId || !item.operatorId || !item.values.length);

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
    // still need to handle this
    console.log("Search must have all valid values");
    return;
  }

  const query = criteria.reduce((acc, cur, idx) => {
    const field = fields.find(field => field.id === cur.fieldId);
    const operator = operators.find(operator => operator.id === cur.operatorId);
    if (operator && field) {

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
