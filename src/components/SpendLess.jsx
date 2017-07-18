import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

export default class SpendLess extends Component {
    render() {
        return (
            <div className="widget spend-less">
                <div className="heading">Spend less</div>

                <div className="body">
                    <div className="tagline">Try reducing your monthly spending to see how your forecast could improve!</div>

                    <Row>
                        <Col md={5}>
                            <label>Mortgage</label>
                        </Col>
                        <Col md={7}>

                        </Col>
                    </Row>
                    <Row>
                        <Col md={5}>
                            <label>Bills</label>
                        </Col>
                        <Col md={7}>

                        </Col>
                    </Row>
                    <Row>
                        <Col md={5}>
                            <label>General spending</label>
                        </Col>
                        <Col md={7}>

                        </Col>
                    </Row>

                    <div className="saving">This means you're saving <span className="saving-amount">£{this.props.saving}</span> per month!</div>
                </div>
            </div>
        );
    }
}
