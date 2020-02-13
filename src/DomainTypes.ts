enum FieldType {
  STRING,
  NUMBER
}

interface Field {
  id: string,
  displayName: string,
  columnName: string,
  type: FieldType
}

interface Operator {
  id: string,
  displayName: string,
  operatorValue: string,
  builder: (predicate: Array<string>, columnName: string, operator: string) => string
  type: FieldType,
}

interface CriteriaType {
  fieldId: string,
  operatorId: string,
  values: Array<string>
}

export {
  Field,
  Operator,
  FieldType,
  CriteriaType
}
