import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

import DropdownOptions from './DropdownOptions';

import { Field, Operator } from '../DomainTypes';

interface SelectProps {
  currentRowIdx: number,
  handleSelect: (id: string, idx: number) => void,
  currentValue: Field | Operator,
  options?: Array<Operator | Field>,
  disabled?: boolean
}

const NOT_FOUND: undefined = undefined;

const Select = (props: SelectProps) => {
  const {
    currentRowIdx,
    handleSelect,
    currentValue,
    options,
    disabled,
  } = props;

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSelectorClick = () => {
    if (disabled !== true) {
      setIsDropdownOpen(!isDropdownOpen);
    }
  }

  return (
    <div
      onClick={handleSelectorClick}
      className="selector"
    >
      <div className="selectedDisplayContainer">
        <div className="selectedDisplay">
          { currentValue === NOT_FOUND ? "Select an value..." : currentValue.displayName}
        </div>
        <div>
          <FontAwesomeIcon icon={faChevronDown} size="xs" />
        </div>
      </div>
      {isDropdownOpen ?
        <DropdownOptions
          idx={currentRowIdx}
          options={options}
          handleSelect={handleSelect}
        />
        : null
      }
    </div>
  );
}

export default Select;
