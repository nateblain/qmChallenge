import { v1 as uuidv1 } from 'uuid';

import { FieldType } from '../types/DomainTypes';

const BETWEEN = 'BETWEEN';

const genericNumberBuilder = (
  predicate: Array<string>,
  columnName: string,
  operator: string,
) => ` ${columnName} ${operator} ${predicate[0]}`;

const fields = [
  {
    id: uuidv1(),
    displayName: 'User Email',
    columnName: 'user_email',
    type: FieldType.STRING,
  },
  {
    id: uuidv1(),
    displayName: 'Screen Width',
    columnName: 'screen_width',
    type: FieldType.NUMBER,
  },
  {
    id: uuidv1(),
    displayName: 'Screen Height',
    columnName: 'screen_height',
    type: FieldType.NUMBER,
  },
  {
    id: uuidv1(),
    displayName: 'Number of Visits',
    columnName: 'visits',
    type: FieldType.NUMBER,
  },
  {
    id: uuidv1(),
    displayName: 'First Name',
    columnName: 'user_first_name',
    type: FieldType.STRING,
  },
  {
    id: uuidv1(),
    displayName: 'Last Name',
    columnName: 'user_last_name',
    type: FieldType.STRING,
  },
  {
    id: uuidv1(),
    displayName: 'Page Response Time',
    columnName: 'page_response',
    type: FieldType.NUMBER,
  },
  {
    id: uuidv1(),
    displayName: 'Domain',
    columnName: 'domain',
    type: FieldType.STRING,
  },
  {
    id: uuidv1(),
    displayName: 'Page Path',
    columnName: 'path',
    type: FieldType.STRING,
  },
];

const operators = [
  {
    id: uuidv1(),
    displayName: 'equals',
    operatorValue: '=',
    builder: (predicate: Array<string>, columnName: string, operator: string) =>
      ` ${columnName}${operator}'${predicate[0]}'`,
    type: FieldType.STRING,
  },
  {
    id: uuidv1(),
    displayName: 'contains',
    operatorValue: 'LIKE',
    builder: (predicate: Array<string>, columnName: string, operator: string) =>
      ` ${columnName} ${operator} '%${predicate[0]}%'`,
    type: FieldType.STRING,
  },
  {
    id: uuidv1(),
    displayName: 'starts with',
    operatorValue: 'LIKE',
    builder: (predicate: Array<string>, columnName: string, operator: string) =>
      ` ${columnName} ${operator} '${predicate[0]}%'`,
    type: FieldType.STRING,
  },
  {
    id: uuidv1(),
    displayName: 'in list',
    operatorValue: 'IN',
    builder: (
      predicate: Array<string>,
      columnName: string,
      operator: string,
    ) => {
      const predicateList = predicate[0]
        .split(',')
        .map((p) => `'${p}'`)
        .join(', ');
      return ` ${columnName} ${operator} (${predicateList})`;
    },
    type: FieldType.STRING,
  },
  {
    id: uuidv1(),
    displayName: 'equals',
    operatorValue: '=',
    builder: genericNumberBuilder,
    type: FieldType.NUMBER,
  },
  {
    id: uuidv1(),
    displayName: 'between',
    operatorValue: BETWEEN,
    builder: (numbers: Array<string>, columnName: string) =>
      ` ${columnName} BETWEEN ${numbers[0]} AND ${numbers[1]}`,
    type: FieldType.NUMBER,
  },
  {
    id: uuidv1(),
    displayName: 'greater than',
    operatorValue: '>',
    builder: genericNumberBuilder,
    type: FieldType.NUMBER,
  },
  {
    id: uuidv1(),
    displayName: 'less than',
    operatorValue: '<',
    builder: genericNumberBuilder,
    type: FieldType.NUMBER,
  },
  {
    id: uuidv1(),
    displayName: 'in list',
    operatorValue: 'IN',
    builder: (
      predicate: Array<string>,
      columnName: string,
      operator: string,
    ) => {
      return ` ${columnName} ${operator} (${predicate[0]
        .split(',')
        .join(', ')})`;
    },
    type: FieldType.NUMBER,
  },
];

const sessionChartData = fields.map(({ type, ...rest }) => ({
  ...rest,
  count: 0,
}));

export { fields, operators, sessionChartData, BETWEEN };
