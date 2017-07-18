import React, { Component } from "react";
import SpendLess from "./SpendLess";

export default class SpendLessContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expenditures: this.props.expenditures,
            saving: 0,
            feedback: false
        };
        this.updateState = this.updateState.bind(this);
        this.handleFeedbackClick = this.handleFeedbackClick.bind(this);
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
        return <SpendLess expenditures={this.state.expenditures} saving={this.state.saving} updateParentState={this.updateState} feedback={this.state.feedback} handleFeedbackClick={this.handleFeedbackClick} />;
    }
}
