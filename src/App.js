import React, { Component } from 'react';
import './App.css';
import IncomeAndSpendContainer from "./components/IncomeAndSpendContainer";
import SpendLessContainer from "./components/SpendLessContainer";

class App extends Component {
  render() {
    return (
      <div>
        <IncomeAndSpendContainer />
        <SpendLessContainer />
      </div>
    );
  }
}

export default App;
