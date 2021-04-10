export enum FieldType {
  STRING,
  NUMBER,
}

export interface Field {
  id: string;
  displayName: string;
  columnName: string;
  type: FieldType;
}

export interface Operator {
  id: string;
  displayName: string;
  operatorValue: string;
  builder: (
    predicate: Array<string>,
    columnName: string,
    operator: string,
  ) => string;
  type: FieldType;
}

export interface CriteriaType {
  fieldId: string;
  operatorId: string;
  values: Array<string>;
}

export interface SessionChartData {
  id: string;
  displayName: string;
  columnName: string;
  count: number;
}

export interface Chart {
  buildBarChart: (sessionChartData: SessionChartData[]) => void;
  updateChart: (sessionChartData: SessionChartData[]) => void;
}
