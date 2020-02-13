import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

interface ActionProps {
  buildQuery: () => void,
  handleReset: () => void
}

const Actions = (props: ActionProps) => (
  <div className="actionContainer">
    <div className="searchButton" onClick={props.buildQuery}>
      <FontAwesomeIcon icon={faSearch} size="xs" />
      Search
    </div>
    <div className="resetButton" onClick={props.handleReset}>Reset</div>
  </div>
);

export default Actions;
