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

const initialState = Object.assign(initialData, {savings: 0, feedback: false});

export default class IncomeAndSpendContainer extends Component {
    constructor(props) {
        super(props);
        this.state = JSON.parse(window.localStorage.getItem("state")) || initialState;
        this.updateState = this.updateState.bind(this);
        this.setSavings = this.setSavings.bind(this);
    }

    componentWillMount() {
        this.setSavings();
    }

    updateState(e) {
        const newState = Object.assign({}, this.state);
        const stateKey = e.target.dataset.stateKey;
        const name = e.target.dataset.name;
        const key = e.target.dataset.key;
        newState[stateKey].find(obj => obj.name === name)[key] = Number(e.target.value);
        this.setState(newState, () => {
          window.localStorage.setItem("state", JSON.stringify(this.state));
          this.setSavings();
        });
    }

    setSavings() {
      const annualIncomes = this.state.incomes.filter(income => income.frequency === "annual");
      let totalAnnualIncomes = 0;
      if (annualIncomes) {
          totalAnnualIncomes = annualIncomes
                                  .map(income => income.amount)
                                  .reduce((a, b) => a + b, 0);
      }
      const monthlyIncomes = this.state.incomes.filter(income => income.frequency === "monthly");
      let totalMonthlyIncomes = 0;
      if (monthlyIncomes) {
          totalMonthlyIncomes = monthlyIncomes
                                  .map(income => income.amount)
                                  .reduce((a, b) => a + b, 0);
      }
      const annualExpenditures = this.state.expenditures.filter(expenditure => expenditure.frequency === "annual");
      let totalAnnualExpenditures = 0;
      if (annualExpenditures) {
          totalAnnualExpenditures = annualExpenditures
                                      .map(expenditure => expenditure.amount)
                                      .reduce((a, b) => a + b, 0);
      }
      const monthlyExpenditures = this.state.expenditures.filter(expenditure => expenditure.frequency === "monthly");
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

    render() {
        return(
          <div>
            <IncomeAndSpend {...this.state} updateParentState={this.updateState} />
          </div>
        );
    }
}
