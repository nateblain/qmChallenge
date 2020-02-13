import React, { Component, ChangeEvent } from 'react'
import { cloneDeep } from 'lodash';

import CardContainer from './CardContainer';
import AddButton from './AddButton';
import ActionButtons from './ActionButtons';
import Result from './Result';

import { buildQuery } from '../utils/utils';

import { fields, operators, BETWEEN } from '../data/staticData';
import { CriteriaType } from '../types/DomainTypes';

import '../styles/main.css';

const defaultCriteriaRow = {
  fieldId: "",
  operatorId: "",
  values: new Array<string>()
};

interface State {
  generatedQuery: string,
  criteria: Array<CriteriaType>,
  addSearchTermDisabled: boolean,
}

class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      criteria: [cloneDeep(defaultCriteriaRow)],
      generatedQuery: "",
      addSearchTermDisabled: true,
    }
  }

  handleFieldSelect = (id: string, idx: number) => {
    const { criteria } = this.state
    const field = fields.find(field => field.id === id);
    const operator = operators.find(op => op.id === criteria[idx].operatorId);
    if (field) {
      if (operator) {
        const isOperatorTypeMatching = operator.type === field.type
        if (!isOperatorTypeMatching) {
          criteria[idx].operatorId = "";
        }
      }
      criteria[idx].fieldId = field.id;

      this.setState({ criteria: [...criteria] })
      this.isCardAddable([...criteria]);
    }
  }

  handleOperatorSelect = (id: string, idx: number) => {
    const { criteria } = this.state
    const operator = operators.find(operator => operator.id === id);
    if (operator) {
      criteria[idx].operatorId = operator.id;
      this.setState({ criteria: [...criteria] })
      this.isCardAddable([...criteria]);
    }
  }

  handleValueChange = (
    event: ChangeEvent<HTMLInputElement>,
    idx: number,
    valueIdx: number
  ) => {
    const { criteria } = this.state;
    const { value } = event.target
    criteria[idx].values[valueIdx] = value;
    this.setState({ criteria: [...criteria] });
    this.isCardAddable([...criteria]);
  }

  handleSearch = () => {
    this.setState({ generatedQuery: buildQuery(this.state.criteria)});
  }

  isCardAddable = (criteria: Array<CriteriaType>) => {
    const foundSearchTerm = criteria.find((term) => {
      if (term.operatorId) {
        const operator = operators.find(op => op.id === term.operatorId);
        const isBetweenOperatorType = operator.operatorValue === BETWEEN;
        if (isBetweenOperatorType) {
            return !term.fieldId || !term.operatorId || !term.values[0] || !term.values[1];
        }
        return !term.fieldId || !term.operatorId || !term.values[0];
      }
      return !term.fieldId || !term.operatorId || !term.values[0];
    });

    if (foundSearchTerm) {
      this.setState({ addSearchTermDisabled: true });
    } else {
      this.setState({ addSearchTermDisabled: false });
    }
  }

  addCardRow = () => {
    const { criteria } = this.state;
    const newCriteria = [...criteria, cloneDeep(defaultCriteriaRow)];
    this.setState({ criteria: newCriteria });
    this.isCardAddable(newCriteria);
  }

  removeCard = (idx: number) => {
    const { criteria } = this.state;
    if (idx === 0 && criteria.length === 1) {
      this.handleReset();
    } else {
      criteria.splice(idx, 1);
      this.setState({ criteria: [...criteria] });
      this.isCardAddable([...criteria]);
    }
  }

  handleReset = () => {
    this.setState({
      generatedQuery: "",
      criteria: [cloneDeep(defaultCriteriaRow)],
      addSearchTermDisabled: true
    });
  }

  render() {
    const { generatedQuery, criteria, addSearchTermDisabled } = this.state;
    return (
      <div className="appContainer">
        <div className="mainContainer">
          <div className="title">Search for Sessions</div>
          <CardContainer
            criteria={criteria}
            handleFieldSelect={this.handleFieldSelect}
            handleOperatorSelect={this.handleOperatorSelect}
            handleValueChange={this.handleValueChange}
            removeCard={this.removeCard}
          />
          <AddButton
            addCardRow={this.addCardRow}
            addSearchTermDisabled={addSearchTermDisabled}
          />
          <ActionButtons
            buildQuery={this.handleSearch}
            handleReset={this.handleReset}
          />
          <Result generatedQuery={generatedQuery} />
        </div>
      </div>
    );
  }
};

export default App;
