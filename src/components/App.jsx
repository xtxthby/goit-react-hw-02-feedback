import React, { Component } from 'react';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  leaveFeedback = e => {
    //console.log(e); // good
    this.setState({ [e]: this.state[e] + 1 });
  };
  // Підрахунок усіх фітбеків
  countTotalFeedback = ({ good, neutral, bad }) => good + neutral + bad;
  // Вираховуємо позитивний фітбек у відсотках враховуючи статистичні дані на поточний момент
  countPositiveFeedbackPercentage = ({ good, neutral, bad }) =>
  Math.round((good * 100) / this.countTotalFeedback(this.state));
  render() {
    // дестриктуризація
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.leaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback(this.state)}
            positivePercentage={this.countPositiveFeedbackPercentage(
              this.state
            )}>
          </Statistics>
        </Section>
      </>
    );
  }
};
