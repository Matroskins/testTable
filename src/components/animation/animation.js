import React from 'react';
import styled from 'styled-components';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

export const Animation = ({children}) => {
    const appearDuration = 500;
    const transitionName = `example`;

    const Container = styled.section`

        &.${transitionName}-appear {
            opacity: 0.01;
        }

        &.${transitionName}-appear-active {
            opacity: 1;
            transition: opacity ${appearDuration}ms ease-out;
        }`;

    debugger;
    return (
        <CSSTransitionGroup
            transitionName={transitionName}
            transitionAppear={true}
            transitionAppearTimeout={appearDuration}>
            <Container />
                {/* {children ? children : ''}
            </Container> */}
        </CSSTransitionGroup>
    );
};

