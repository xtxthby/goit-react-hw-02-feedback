import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import { BtnWrapper, StyledButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <BtnWrapper>
      {options.map(option => {
        return (
          <li key={option}>
            <StyledButton
              key={option}
              type="button"
              value={option}
              children={option}
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </StyledButton>
          </li>
        );
      })}
    </BtnWrapper>
  );
};
FeedbackOptions.propTypes = {
  options: arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};




