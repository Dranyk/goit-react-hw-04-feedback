import { useState } from 'react';

import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import FeedbackStatistics from './FeedbackStatistics/FeedbackStatistics';
import Notification from './Notification/Notification';

export default function App() {
  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleStatisticChange = option => {
    setState({ ...state, [option]: state[option] + 1 });
  };

  const countTotalFeedback = () => {
    return state.good + state.neutral + state.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((state.good / countTotalFeedback()) * 100);
  };

  return (
    <div>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={Object.keys(state)}
          onLeaveFeedback={handleStatisticChange}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <FeedbackStatistics
            state={state}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}