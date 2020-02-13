import React, { ChangeEvent } from 'react';

import Card from './Card';

import { fields, operators } from '../data/staticData';
import { CriteriaType } from '../types/DomainTypes';

interface CardContainerProps {
  criteria: Array<CriteriaType>,
  handleFieldSelect: (id: string, idx: number) => void,
  handleOperatorSelect: (id: string, idx: number) => void,
  handleValueChange: (
    event: ChangeEvent<HTMLInputElement>,
    idx: number,
    valueIdx: number
  ) => void,
  removeCard: (idx: number) => void
}

const CardContainer = (props: CardContainerProps) => {
  const {
    criteria,
    handleFieldSelect,
    handleOperatorSelect,
    handleValueChange,
    removeCard
  } = props;

  const criteriaRows = criteria.map((item, idx) => {
    const field = fields.find(field => field.id === item.fieldId);
    const operator = operators.find(operator => operator.id === item.operatorId);

    return (
      <Card
        key={idx}
        idx={idx}
        field={field}
        operator={operator}
        item={item}
        handleFieldSelect={handleFieldSelect}
        handleOperatorSelect={handleOperatorSelect}
        handleValueChange={handleValueChange}
        removeCard={removeCard}
      />
    );
  });

  return (
    <div className="cardContainer">
      {criteriaRows}
    </div>
  );
}

export default CardContainer;
