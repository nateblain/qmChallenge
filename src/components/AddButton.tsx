import React from 'react';

interface AddButtonProps {
  addSearchTermDisabled: boolean,
  addCardRow: () => void
}

const AddButton = (props: AddButtonProps) => (
  <div className="addButtonContainer">
    <button
      className="addButton"
      disabled={props.addSearchTermDisabled}
      onClick={props.addCardRow}
    >
      And
    </button>
  </div>
);

export default AddButton;
