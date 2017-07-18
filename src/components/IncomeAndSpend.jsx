import React, { Component } from "react";
import { Row, Col, InputGroup, ControlLabel, FormControl, Button } from "react-bootstrap";

export default class IncomeAndSpend extends Component {
    render() {
        return (
            <div className="widget income-and-spend">
                <div className="heading">Your income & spend</div>

                <div className="body">
                    <div className="group">Annual income</div>
                    <Row>
                        <Col md={5}>
                            <ControlLabel>Annual salary:</ControlLabel>
                            <InputGroup>
                                <InputGroup.Addon>£</InputGroup.Addon>
                                <FormControl type="number" step="any" onChange={this.props.updateParentState} value={this.props.inputValues.annualSalary} data-state-key="annualSalary" />
                            </InputGroup>
                        </Col>
                        <Col md={7}>
                            <Col md={6}>
                                <ControlLabel>From age:</ControlLabel>
                                <FormControl type="number" onChange={this.props.updateParentState} value={this.props.inputValues.annualSalaryFromAge} data-state-key="annualSalaryFromAge" />
                            </Col>
                            <Col md={6}>
                                <ControlLabel>To age:</ControlLabel>
                                <FormControl type="number" onChange={this.props.updateParentState} value={this.props.inputValues.annualSalaryToAge} data-state-key="annualSalaryToAge" />
                            </Col>
                        </Col>
                    </Row>

                    <div className="group">Monthly spending</div>
                    <Row>
                        <Col md={5}>
                            <ControlLabel>Mortgage:</ControlLabel>
                            <InputGroup>
                                <InputGroup.Addon>£</InputGroup.Addon>
                                <FormControl type="number" step="any" onChange={this.props.updateParentState} value={this.props.inputValues.mortgage} data-state-key="mortgage" />
                            </InputGroup>
                        </Col>
                        <Col md={7}>
                            <Col md={6}>
                                <ControlLabel>From age:</ControlLabel>
                                <FormControl type="number" onChange={this.props.updateParentState} value={this.props.inputValues.mortgageFromAge} data-state-key="mortgageFromAge" />
                            </Col>
                            <Col md={6}>
                                <ControlLabel>To age:</ControlLabel>
                                <FormControl type="number" onChange={this.props.updateParentState} value={this.props.inputValues.mortgageToAge} data-state-key="mortgageToAge" />
                            </Col>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={5}>
                            <ControlLabel>Bills:</ControlLabel>
                            <InputGroup>
                                <InputGroup.Addon>£</InputGroup.Addon>
                                <FormControl type="number" step="any"  onChange={this.props.updateParentState} value={this.props.inputValues.bills} data-state-key="bills" />
                            </InputGroup>
                        </Col>
                        <Col md={7}>
                            <Col md={6}>
                                <ControlLabel>From age:</ControlLabel>
                                <FormControl type="number"  onChange={this.props.updateParentState} value={this.props.inputValues.billsFromAge} data-state-key="billsFromAge" />
                            </Col>
                            <Col md={6}>
                                <ControlLabel>To age:</ControlLabel>
                                <FormControl type="number"  onChange={this.props.updateParentState} value={this.props.inputValues.billsToAge} data-state-key="billsToAge" />
                            </Col>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={5}>
                            <ControlLabel>General spending:</ControlLabel>
                            <InputGroup>
                                <InputGroup.Addon>£</InputGroup.Addon>
                                <FormControl type="number" step="any" onChange={this.props.updateParentState} value={this.props.inputValues.generalSpending} data-state-key="generalSpending" />
                            </InputGroup>
                        </Col>
                        <Col md={7}>
                            <Col md={6}>
                                <ControlLabel>From age:</ControlLabel>
                                <FormControl type="number" onChange={this.props.updateParentState} value={this.props.inputValues.generalSpendingFromAge} data-state-key="generalSpendingFromAge" />
                            </Col>
                            <Col md={6}>
                                <ControlLabel>To age:</ControlLabel>
                                <FormControl type="number" onChange={this.props.updateParentState} value={this.props.inputValues.generalSpendingToAge} data-state-key="generalSpendingToAge" />
                            </Col>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}
