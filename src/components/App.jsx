import { Component } from 'react';

import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import FeedbackStatistics from './FeedbackStatistics/FeedbackStatistics';
import Notification from './Notification/Notification';


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  handleStatisticChange = option => {
    this.setState(prevState => 
      ({ [option]: prevState[option] + 1 }));
    
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleStatisticChange} />
      </Section>
      <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <FeedbackStatistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
    </div>
    );
  }
}

export default App;