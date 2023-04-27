import React from 'react';
import PropTypes from 'prop-types';
import { StaticList, DescriptStatistics } from './Statistics.styled';
import { Notification } from '../Notification/Notification';

export const Statistics = ({
  good,
  neutral,
  bad,
  total = 0,
  positivePercentage = 0,
}) => {
    return total ? (
        <StaticList>
            <li>
                <DescriptStatistics>
                    Good: <span>{good}</span>
                </DescriptStatistics>
            </li>
            <li>
                <DescriptStatistics>
                    Neutral: <span>{neutral}</span>
                </DescriptStatistics>
            </li>
            <li>
                <DescriptStatistics>
                    Bad: <span>{bad}</span>
                </DescriptStatistics></li>
            <li>
                <DescriptStatistics>
                    Total: <span>{total}</span>
                </DescriptStatistics>
            </li>
            <li>
                <DescriptStatistics>
                    Positive feedback: <span>{positivePercentage}%</span>
                </DescriptStatistics>
            </li>
        </StaticList>
    ) : (<Notification message="There is no feedback" />);
}
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};