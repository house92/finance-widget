import React, { Component } from "react";
import { Row, Col, InputGroup, ControlLabel, FormControl, Glyphicon } from "react-bootstrap";
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

export default class IncomeAndSpend extends Component {
    render() {
        const annualIncomesSection = this.props.incomes.filter(income => income.frequency === "annual").map((income, i) => {
            return (
                <Row key={`income${i}`}>
                    <Col md={5}>
                        <ControlLabel>{income.name}:</ControlLabel>
                        <InputGroup>
                            <InputGroup.Addon>£</InputGroup.Addon>
                            <FormControl type="number" step="10" onChange={this.props.updateParentState} value={this.props.incomes.find(incomeObj => incomeObj.name === income.name).amount} data-state-key="incomes" data-name={income.name} data-key="amount" />
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
                            <FormControl type="number" step="10" onChange={this.props.updateParentState} value={this.props.expenditures.find(expenditureObj => expenditureObj.name === expenditure.name).amount} data-state-key="expenditures" data-name={expenditure.name} data-key="amount" />
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

        const savingSliders = this.props.expenditures.filter(expenditure => expenditure.frequency === "monthly").map((expenditure, i) => {
            const amount = this.props.expenditures.find(innerExpenditure => innerExpenditure.name === expenditure.name).amount;
            return (
                <Row className={expenditure.name} key={`slider${i}`}>
                    <Col md={5}>
                        <label>{expenditure.name}</label>
                    </Col>
                    <Col md={7}>
                        <Slider
                            min={0}
                            max={amount}
                            value={amount}
                            onChange={this.updateParentState}
                            data-state-key="expenditures"
                            data-name={expenditure.name}
                            data-key="amount"
                        />
                    </Col>
                </Row>
            );
        });

        let feedback;
        if (this.props.feedback) {
            if (this.props.feedback === "positive") {
                feedback = (
                    <div className="feedback">
                        <span>Thanks for your feedback!</span>
                    </div>
                );
            } else {
                feedback = (
                    <div className="feedback">
                        <span><a href="https://www.google.co.uk" target="_blank" rel="noopener noreferrer">Want to let us know how we could do better?</a></span>
                    </div>
                );
            }
        } else {
            feedback = (
                <div className="feedback">
                    <span>Was this helpful?</span>
                    <Glyphicon className="like" glyph="thumbs-up" onClick={this.props.handleFeedbackClick} />
                    <Glyphicon className="dislike" glyph="thumbs-down" onClick={this.props.handleFeedbackClick} />
                </div>
            );
        }

        return (
            <div>
                <div className="widget income-and-spend">
                    <div className="heading">Your income & spend</div>

                    <div className="body">
                        <div className="group">Annual income</div>
                        {annualIncomesSection}

                        <div className="group">Monthly spending</div>
                        {monthlyExpendituresSection}
                    </div>
                </div>

                <div className="widget spend-less">
                    <div className="heading">Spend less</div>

                    <div className="body">
                        <div className="tagline">Try reducing your monthly spending to see how your forecast could improve!</div>

                        {savingSliders}

                        <div className="saving">This means you're saving <span className="saving-amount">£{this.props.savings}</span> per month!</div>

                        <div className="find-ways-to-save">
                            <a href="https://www.google.co.uk" target="_blank" rel="noopener noreferrer">Find ways to save</a>
                        </div>

                        {feedback}
                    </div>
                </div>
            </div>
        );
    }
}
