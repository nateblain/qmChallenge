import React from 'react';

import { Field, Operator } from '../types/DomainTypes';

interface DropdownOptionsProps {
  idx: number,
  options: Array<Field | Operator>,
  handleSelect: (optionId: string, idx: number) => void
}

const DropdownOptions = (props: DropdownOptionsProps) => {
  const { idx, options, handleSelect } = props;
  const optionList = options.map(option => {
    return (
      <div
        key={option.id}
        id={option.id}
        className="dropdownOption"
        onClick={() => handleSelect(option.id, idx)}
      >
        {option.displayName}
      </div>
    );
  });
  return (
    <div className="dropdownContainer">
      {optionList}
    </div>
  )
}

export default DropdownOptions;
