import React, { Component, ChangeEvent, ErrorInfo } from 'react'
import { cloneDeep } from 'lodash';

import CardContainer from './CardContainer';
import Actions from './Actions';
import Result from './Result';

import { buildQuery } from '../utils/utils';

import { fields, operators } from '../staticAssets';
import { CriteriaType } from '../DomainTypes';

import '../styles/main.css';

const defaultCriteriaRow = {
  fieldId: "",
  operatorId: "",
  values: new Array<string>()
};

interface State {
  generatedQuery: string,
  criteria: Array<CriteriaType>,
}

class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
        criteria: [cloneDeep(defaultCriteriaRow)],
        generatedQuery: "",
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
    }
  }

  handleOperatorSelect = (id: string, idx: number) => {
    const { criteria } = this.state
    const operator = operators.find(operator => operator.id === id);
    if (operator) {
      criteria[idx].operatorId = operator.id;
      this.setState({ criteria: [...criteria] })
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
  }

  handleSearch = () => {
    this.setState({
      generatedQuery: buildQuery(this.state.criteria)
    });
  }

  isCriteriaRowAddable = () => {
    const { criteria } = this.state;
    // this is tottally wrong
    const current = criteria[criteria.length - 1];
    return current.fieldId && current.operatorId && current.values[0];
  }

  addCriteriaRow = () => {
    const { criteria } = this.state;
    this.setState({ criteria: [...criteria, cloneDeep(defaultCriteriaRow)] });
  }

  removeCard = (idx: number) => {
    const { criteria } = this.state;
    if (idx === 0 && criteria.length === 1) {
      this.handleReset();
    } else {
      criteria.splice(idx, 1);
      this.setState({ criteria: [...criteria] });
    }
  }

  handleReset = () => {
    this.setState({
      generatedQuery: "",
      criteria: [cloneDeep(defaultCriteriaRow)]
    });
  }

  render() {
    const { generatedQuery, criteria } = this.state;

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
          <div className="addButtonContainer">
            <button
              className="addButton"
              disabled={!this.isCriteriaRowAddable()}
              onClick={this.addCriteriaRow}
            >
              And
            </button>
          </div>
          <Actions
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
