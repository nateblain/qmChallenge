import React, { Component, ChangeEvent } from 'react';
import { cloneDeep } from 'lodash';

import CardContainer from './CardContainer';
import AddButton from './AddButton';
import ActionButtons from './ActionButtons';
import Result from './Result';
import ChartComponent from './Chart';

import { buildQuery, partialQueryErrorMsg } from '../utils/utils';
import {
  fields,
  operators,
  sessionChartData,
  BETWEEN,
} from '../data/staticData';

import { CriteriaType, SessionChartData, Chart } from '../types/DomainTypes';

import chart from '../chart/chart';

const defaultCriteriaRow = {
  fieldId: '',
  operatorId: '',
  values: new Array<string>(),
};

interface State {
  generatedQuery: string;
  criteria: Array<CriteriaType>;
  addSearchTermDisabled: boolean;
  sessionChartData: SessionChartData[];
  chart: Chart;
}

class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      criteria: [cloneDeep(defaultCriteriaRow)],
      generatedQuery: '',
      addSearchTermDisabled: true,
      sessionChartData,
      chart: chart(),
    };
  }

  componentDidMount = () => {
    this.state.chart.buildBarChart(this.state.sessionChartData);
  };

  componentDidUpdate = () => {
    this.state.chart.updateChart(this.state.sessionChartData);
  };

  handleFieldSelect = (id: string, idx: number) => {
    const { criteria } = this.state;
    const field = fields.find((field) => field.id === id);
    const operator = operators.find((op) => op.id === criteria[idx].operatorId);
    if (field) {
      if (operator) {
        const isOperatorTypeMatching = operator.type === field.type;
        if (!isOperatorTypeMatching) {
          criteria[idx].operatorId = '';
        }
      }
      criteria[idx].fieldId = field.id;

      this.setState({ criteria: [...criteria] });
      this.isCardAddable([...criteria]);
    }
  };

  handleOperatorSelect = (id: string, idx: number) => {
    const { criteria } = this.state;
    const operator = operators.find((operator) => operator.id === id);
    if (operator) {
      criteria[idx].operatorId = operator.id;
      this.setState({ criteria: [...criteria] });
      this.isCardAddable([...criteria]);
    }
  };

  handleValueChange = (
    event: ChangeEvent<HTMLInputElement>,
    idx: number,
    valueIdx: number,
  ) => {
    const { criteria } = this.state;
    const { value } = event.target;
    criteria[idx].values[valueIdx] = value;
    this.setState({ criteria: [...criteria] });
    this.isCardAddable([...criteria]);
  };

  handleSearch = () => {
    const generatedQuery = buildQuery(this.state.criteria);
    const sessionChartData =
      generatedQuery !== partialQueryErrorMsg
        ? this.state.sessionChartData.map((data) => {
            const foundFieldIds = this.state.criteria.filter(
              (val) => val.fieldId === data.id,
            );
            if (foundFieldIds.length) {
              return {
                ...data,
                count: data.count + foundFieldIds.length,
              };
            }
            return data;
          })
        : this.state.sessionChartData;

    this.setState({
      generatedQuery: generatedQuery,
      sessionChartData,
    });
  };

  isCardAddable = (criteria: Array<CriteriaType>) => {
    const foundSearchTerm = criteria.find((term) => {
      if (term.operatorId) {
        const operator = operators.find((op) => op.id === term.operatorId);
        const isBetweenOperatorType = operator
          ? operator.operatorValue === BETWEEN
          : false;
        if (isBetweenOperatorType) {
          return (
            !term.fieldId ||
            !term.operatorId ||
            !term.values[0] ||
            !term.values[1]
          );
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
  };

  addCardRow = () => {
    const { criteria } = this.state;
    const newCriteria = [...criteria, cloneDeep(defaultCriteriaRow)];
    this.setState({ criteria: newCriteria });
    this.isCardAddable(newCriteria);
  };

  removeCard = (idx: number) => {
    const { criteria } = this.state;
    if (idx === 0 && criteria.length === 1) {
      this.handleReset();
    } else {
      criteria.splice(idx, 1);
      this.setState({ criteria: [...criteria] });
      this.isCardAddable([...criteria]);
    }
  };

  handleReset = () => {
    this.setState({
      generatedQuery: '',
      criteria: [cloneDeep(defaultCriteriaRow)],
      addSearchTermDisabled: true,
    });
  };

  handleChartReset = () => {
    this.setState({ sessionChartData });
  };

  render() {
    const { generatedQuery, criteria, addSearchTermDisabled } = this.state;
    return (
      <div className="appContainer">
        <div className="mainContainer">
          <div className="title">Search Sessions Table</div>
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
            handleChartReset={this.handleChartReset}
          />
          <Result generatedQuery={generatedQuery} />
          <ChartComponent />
        </div>
      </div>
    );
  }
}

export default App;
