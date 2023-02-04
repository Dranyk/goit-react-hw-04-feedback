import PropTypes from 'prop-types';
import css from './FeedbackStatistics.module.css'

const FeedbackStatistics = ({  state,
  total,
  positivePercentage }) => {
return (
  <ul className={css.list}>
          <li>Good: {state.good}</li>
          <li>Neutral: {state.neutral}</li>
          <li>Bad: {state.bad}</li>
          <li>Total: {total}</li>
          <li>Positive feedback: {positivePercentage}%</li>
        </ul>
);
};


export default FeedbackStatistics;

FeedbackStatistics.propTypes = {
  state: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}
