import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

import DropdownOptions from "./DropdownOptions";

import { Field, Operator } from "../types/DomainTypes";

interface SelectProps {
  currentRowIdx: number;
  handleSelect: (id: string, idx: number) => void;
  currentValue?: Field | Operator;
  options: Array<Operator | Field>;
  disabled?: boolean;
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
  const [showTooltip, setShowTootip] = useState(false);

  const handleSelectorClick = () => {
    if (disabled !== true) {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  const handleMouseOverOut = () => {
    if (disabled) {
      setShowTootip(!showTooltip);
    }
  };

  return (
    <div
      onClick={handleSelectorClick}
      className="selector"
      onMouseOver={handleMouseOverOut}
      onMouseOut={handleMouseOverOut}
    >
      {showTooltip ? (
        <div className="tooltip">
          Operator is disabled because the search field has not yet been set.
        </div>
      ) : null}
      <div className="selectedDisplayContainer">
        <div className="selectedDisplay">
          {currentValue === NOT_FOUND ? (
            <p className="defaultSelector">Select a value...</p>
          ) : (
            currentValue.displayName
          )}
        </div>
        <div>
          <FontAwesomeIcon
            icon={isDropdownOpen ? faChevronUp : faChevronDown}
            size="xs"
          />
        </div>
      </div>
      {isDropdownOpen ? (
        <DropdownOptions
          idx={currentRowIdx}
          options={options}
          handleSelect={handleSelect}
        />
      ) : null}
    </div>
  );
};

export default Select;
