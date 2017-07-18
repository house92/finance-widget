import React, { Component } from "react";
import { Row, Col, Glyphicon } from "react-bootstrap";

export default class SpendLess extends Component {
    render() {
        const savingSliders = this.props.expenditures.filter(expenditure => expenditure.frequency === "monthly").map((expenditure, i) => {
            const amount = this.props.expenditures.find(expenditure => expenditure.name === expenditure.name).amount;
            return (
                <Row className={expenditure.name} key={`slider${i}`}>
                    <Col md={5}>
                        <label>{expenditure.name}</label>
                    </Col>
                    <Col md={7}>
                        <input
                            type="range"
                            min="0"
                            max={amount + amount / 10}
                            step="10"
                            value={amount}
                            onChange={this.props.updateParentState}
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
            <div className="widget spend-less">
                <div className="heading">Spend less</div>

                <div className="body">
                    <div className="tagline">Try reducing your monthly spending to see how your forecast could improve!</div>

                    {savingSliders}

                    <div className="saving">This means you're saving <span className="saving-amount">£{this.props.saving}</span> per month!</div>

                    <div className="find-ways-to-save">
                        <a href="https://www.google.co.uk" target="_blank" rel="noopener noreferrer">Find ways to save</a>
                    </div>

                    {feedback}
                </div>
            </div>
        );
    }
}
