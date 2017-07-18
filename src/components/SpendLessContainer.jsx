import React, { Component } from "react";
import SpendLess from "./SpendLess";

export default class SpendLessContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            saving: 0
        };
    }

    render() {
        return <SpendLess saving={this.state.saving} />;
    }
}
