import React, { Component } from "react";
import IncomeAndSpend from "./IncomeAndSpend";

const initialData = {
  "incomes": [
    {
      "amount": 45300,
      "from_age": 30,
      "to_age": 67,
      "frequency": "annual",
      "name": "Annual salary"
    }
  ],
  "expenditures": [
    {
      "amount": 1199,
      "from_age": 30,
      "to_age": 65,
      "frequency": "monthly",
      "name": "Mortgage"
    },
    {
      "amount": 1199,
      "from_age": 30,
      "to_age": 65,
      "frequency": "monthly",
      "name": "Bills"
    },
    {
      "amount": 1199,
      "from_age": 30,
      "to_age": 65,
      "frequency": "monthly",
      "name": "General spending"
    }
  ]
};

export default class IncomeAndSpendContainer extends Component {
    constructor(props) {
        super(props);
        this.state = JSON.parse(window.localStorage.getItem("state")) || initialData;
        this.updateState = this.updateState.bind(this);
    }

    updateState(e) {
        const newState = Object.assign({}, this.state);
        const stateKey = e.target.dataset.stateKey;
        const name = e.target.dataset.name;
        const key = e.target.dataset.key;
        newState[stateKey].find(obj => obj.name === name)[key] = Number(e.target.value);
        this.setState(newState, () => {
          window.localStorage.setItem("state", JSON.stringify(this.state));
        });
    }

    render() {
        return <IncomeAndSpend {...this.state} updateParentState={this.updateState} />;
    }
}
