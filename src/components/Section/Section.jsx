import React from 'react';
import { SectionWrapper } from './Section.styled';
import PropTypes from 'prop-types';
import { Header } from 'components/Header/Header';




export const Section = ({title, children}) => {
    return (
        <SectionWrapper>
            <Header title={title} />
        {children}
        </SectionWrapper>
    );
}
Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired,
};