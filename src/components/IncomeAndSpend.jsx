import React, { Component } from "react";
import { Row, Col, InputGroup, ControlLabel, FormControl } from "react-bootstrap";

export default class IncomeAndSpend extends Component {
    render() {
        const annualIncomesSection = this.props.incomes.filter(income => income.frequency === "annual").map((income, i) => {
            return (
                <Row key={`income${i}`}>
                    <Col md={5}>
                        <ControlLabel>{income.name}:</ControlLabel>
                        <InputGroup>
                            <InputGroup.Addon>£</InputGroup.Addon>
                            <FormControl type="number" step="any" onChange={this.props.updateParentState} value={this.props.incomes.find(incomeObj => incomeObj.name === income.name).amount} data-state-key="incomes" data-name={income.name} data-key="amount" />
                        </InputGroup>
                    </Col>
                    <Col md={7}>
                        <Col md={6}>
                            <ControlLabel>From age:</ControlLabel>
                            <FormControl type="number" onChange={this.props.updateParentState} value={this.props.incomes.find(incomeObj => incomeObj.name === income.name).from_age} data-state-key="incomes" data-name={income.name} data-key="from_age" />
                        </Col>
                        <Col md={6}>
                            <ControlLabel>To age:</ControlLabel>
                            <FormControl type="number" onChange={this.props.updateParentState} value={this.props.incomes.find(incomeObj => incomeObj.name === income.name).to_age} data-state-key="incomes" data-name={income.name} data-key="to_age" />
                        </Col>
                    </Col>
                </Row>
            );
        });

        const monthlyExpendituresSection = this.props.expenditures.filter(expenditure => expenditure.frequency === "monthly").map((expenditure, i) => {
            return (
                <Row key={`expenditure${i}`}>
                    <Col md={5}>
                        <ControlLabel>{expenditure.name}:</ControlLabel>
                        <InputGroup>
                            <InputGroup.Addon>£</InputGroup.Addon>
                            <FormControl type="number" step="any" onChange={this.props.updateParentState} value={this.props.expenditures.find(expenditureObj => expenditureObj.name === expenditure.name).amount} data-state-key="expenditures" data-name={expenditure.name} data-key="amount" />
                        </InputGroup>
                    </Col>
                    <Col md={7}>
                        <Col md={6}>
                            <ControlLabel>From age:</ControlLabel>
                            <FormControl type="number" onChange={this.props.updateParentState} value={this.props.expenditures.find(expenditureObj => expenditureObj.name === expenditure.name).from_age} data-state-key="expenditures" data-name={expenditure.name} data-key="from_age" />
                        </Col>
                        <Col md={6}>
                            <ControlLabel>To age:</ControlLabel>
                            <FormControl type="number" onChange={this.props.updateParentState} value={this.props.expenditures.find(expenditureObj => expenditureObj.name === expenditure.name).to_age} data-state-key="expenditures" data-name={expenditure.name} data-key="to_age" />
                        </Col>
                    </Col>
                </Row>
            );
        });

        return (
            <div className="widget income-and-spend">
                <div className="heading">Your income & spend</div>

                <div className="body">
                    <div className="group">Annual income</div>
                    {annualIncomesSection}

                    <div className="group">Monthly spending</div>
                    {monthlyExpendituresSection}
                </div>
            </div>
        );
    }
}
