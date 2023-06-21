import React, { Component } from 'react';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = (type) => {
    this.setState((prevState) => ({
      [type]: prevState[type] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();
    return totalFeedback === 0 ? 0 : Math.round((good / totalFeedback) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <h2>Please give feedback:</h2>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.handleFeedback}
        />
{/* 
        <div>
          <h2>Statistics:</h2>
          <p>
            Good: <span>{good}</span>
          </p>
          <p>
            Neutral: <span>{neutral}</span>
          </p>
          <p>
            Bad: <span>{bad}</span>
          </p>
          <p>
            Total: <span>{totalFeedback}</span>
          </p>
          <p>
            Positive feedback: <span>{positivePercentage}%</span>
          </p>
        </div> */}
      </div>
    );
  }
}

export default App;
