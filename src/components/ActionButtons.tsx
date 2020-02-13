import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

interface ActionButtonsProps {
  buildQuery: () => void,
  handleReset: () => void
}

const ActionButtons = (props: ActionButtonsProps) => (
  <div className="actionContainer">
    <div className="searchButton" onClick={props.buildQuery}>
      <div className="searchIcon">
        <FontAwesomeIcon icon={faSearch} size="xs" />
      </div>
      <div>Search</div>
    </div>
    <div className="resetButton" onClick={props.handleReset}>Reset</div>
  </div>
);

export default ActionButtons;
