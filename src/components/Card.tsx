import React, { ChangeEvent } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import Select from './Select';
import ValueInputs from './ValueInputs';

import { fields, operators } from '../staticAssets';
import { Field, Operator, CriteriaType } from '../DomainTypes';

interface CardProps {
  idx: number,
  field: Field,
  operator: Operator,
  item: CriteriaType,
  handleFieldSelect: (id: string, idx: number) => void,
  handleOperatorSelect: (id: string, idx: number) => void,
  handleValueChange: (
    event: ChangeEvent<HTMLInputElement>,
    idx: number,
    valueIdx: number
  ) => void,
  removeCard: (idx: number) => void
}

const Card = (props: CardProps) => {
  const {
    idx,
    field,
    operator,
    item,
    handleFieldSelect,
    handleOperatorSelect,
    handleValueChange,
    removeCard
  } = props;
  const filteredOperators = field ? operators.filter(op => op.type === field.type) : [];
  const disabled = !field;

  return (
    <div className="card">
      <div className="closeIcon" onClick={() => removeCard(idx)}>
        <FontAwesomeIcon icon={faTimes} size="sm" />
      </div>
      <Select
        currentRowIdx={idx}
        currentValue={field}
        options={fields}
        handleSelect={handleFieldSelect}
      />
      <Select
        currentRowIdx={idx}
        currentValue={operator}
        options={filteredOperators}
        handleSelect={handleOperatorSelect}
        disabled={disabled}
      />
      <ValueInputs
        operatorValue={operator ? operator.operatorValue : ""}
        values={item.values}
        idx={idx}
        handleValueChange={handleValueChange}
      />
    </div>
  );
}

export default Card;
