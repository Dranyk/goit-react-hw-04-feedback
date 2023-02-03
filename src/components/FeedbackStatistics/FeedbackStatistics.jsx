import PropTypes from 'prop-types';
import css from './FeedbackStatistics.module.css'

const FeedbackStatistics = ({  good,
  neutral,
  bad,
  total,
  positivePercentage }) => {
return (
  <ul className={css.list}>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <li>Positive feedback: {positivePercentage}%</li>
        </ul>
);
};


export default FeedbackStatistics;

FeedbackStatistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}
