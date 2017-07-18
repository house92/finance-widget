import React, { Component } from "react";
import IncomeAndSpend from "./IncomeAndSpend";

export default class IncomeAndSpendContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            annualSalary: 0,
            annualSalaryFromAge: 25,
            annualSalaryToAge: 65,
            mortgage: 0,
            mortgageFromAge: 25,
            mortgageToAge: 65,
            bills: 0,
            billsFromAge: 25,
            billsToAge: 65,
            generalSpending: 0,
            generalSpendingFromAge: 25,
            generalSpendingToAge: 65
        };
        this.updateState = this.updateState.bind(this);
    }

    updateState(e) {
        const newState = Object.assign({}, this.state);
        const stateKey = e.target.dataset.stateKey;
        newState[stateKey] = Number(e.target.value);
        this.setState(newState);
    }

    render() {
        return <IncomeAndSpend inputValues={this.state} updateParentState={this.updateState} />;
    }
}
