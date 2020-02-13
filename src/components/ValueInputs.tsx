import React, { ChangeEvent } from 'react';

import { BETWEEN } from '../data/staticData';

interface ValueInputProps {
  operatorValue: string,
  values: Array<string>,
  idx: number,
  handleValueChange: (
    event: ChangeEvent<HTMLInputElement>,
    idx: number,
    valueIdx: number
  ) => void
}

const ValueInputs = (props: ValueInputProps) => {
  const { operatorValue, values, idx, handleValueChange } = props;

  if (operatorValue === BETWEEN) {
    return (
      <>
        <div className="staticField">is</div>
        <div>
          <input
            className="valueInput"
            defaultValue={values[0]}
            onChange={(e) => handleValueChange(e, idx, 0)}
            placeholder="Add a value to search..."
          />
        </div>
        <div className="staticField">and</div>
        <div>
          <input
            className="valueInput"
            defaultValue={values[1]}
            onChange={(e) => handleValueChange(e, idx, 1)}
            placeholder="Add a value to search..."
          />
        </div>
      </>
    )
  }

  return (
    <div>
      <input
        className="valueInput"
        value={values[0] || ""}
        onChange={(e) => handleValueChange(e, idx, 0)}
        placeholder="Add a value to search..."
      />
    </div>
  );
}

export default ValueInputs;
