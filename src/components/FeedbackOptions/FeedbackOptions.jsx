import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import { List } from './FeedbackOptions.styled';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <List>
    {options.map(name => (
      <li key={nanoid()}>
        <button name={name} type="button" onClick={() => onLeaveFeedback(name)}>
          {name}
        </button>
      </li>
    ))}
  </List>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
