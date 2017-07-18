import React, { Component } from "react";
import SpendLess from "./SpendLess";

export default class SpendLessContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expenditures: Object.assign([], this.props.expenditures),
            savings: 0,
            feedback: false
        };
        this.updateState = this.updateState.bind(this);
        this.handleFeedbackClick = this.handleFeedbackClick.bind(this);
        this.setSavings = this.setSavings.bind(this);
    }

    componentWillMount() {
        this.setSavings();
    }

    componentDidMount() {
        this.setSavings();
    }

    setSavings() {
        const annualIncomes = this.props.incomes.filter(income => income.frequency === "annual");
        let totalAnnualIncomes = 0;
        if (annualIncomes) {
            totalAnnualIncomes = annualIncomes
                                    .map(income => income.amount)
                                    .reduce((a, b) => a + b, 0);
        }
        const monthlyIncomes = this.props.incomes.filter(income => income.frequency === "monthly");
        let totalMonthlyIncomes = 0;
        if (monthlyIncomes) {
            totalMonthlyIncomes = monthlyIncomes
                                    .map(income => income.amount)
                                    .reduce((a, b) => a + b, 0);
        }
        const annualExpenditures = this.props.expenditures.filter(expenditure => expenditure.frequency === "annual");
        let totalAnnualExpenditures = 0;
        if (annualExpenditures) {
            totalAnnualExpenditures = annualExpenditures
                                        .map(expenditure => expenditure.amount)
                                        .reduce((a, b) => a + b, 0);
        }
        const monthlyExpenditures = this.props.expenditures.filter(expenditure => expenditure.frequency === "monthly");
        let totalMonthlyExpenditures = 0;
        if (monthlyExpenditures) {
            totalMonthlyExpenditures = monthlyExpenditures
                                        .map(expenditure => expenditure.amount)
                                        .reduce((a, b) => a + b, 0);
        }
        const totalIncome = totalAnnualIncomes + totalMonthlyIncomes * 12;
        const totalExpenditure = totalAnnualExpenditures + totalMonthlyExpenditures * 12;
        const monthlySavings = Math.round(((totalIncome - totalExpenditure) / 12) * 100) / 100
        this.setState({savings: monthlySavings});
    }

    updateState(e) {
        const newState = Object.assign({}, this.state);
        const stateKey = e.target.dataset.stateKey;
        const name = e.target.dataset.name;
        const key = e.target.dataset.key;
        newState[stateKey].find(obj => obj.name === name)[key] = Number(e.target.value);
        this.setState(newState);
    }

    handleFeedbackClick(e) {
        const feedback = Array.from(e.target.classList).includes("like") ? "positive" : "negative";
        this.setState({feedback});
    }

    render() {
        return <SpendLess
            expenditures={this.state.expenditures}
            actualExpenditures={this.props.expenditures}
            savings={this.state.savings}
            updateParentState={this.updateState}
            feedback={this.state.feedback}
            handleFeedbackClick={this.handleFeedbackClick}
        />;
    }
}
