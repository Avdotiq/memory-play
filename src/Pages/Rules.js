import React from "react";
import styled from "styled-components";
import Button from "../components/Button/button";

function Rules() {
    return (
        <StyledDescription>
            <h3>How to play:</h3>
            <p>
                Memory is a counter game whee the object is to find pairs. When
                the game begins, all pictures are hidden.
            </p>
            <h3>To play:</h3>
            <ol>
                <li>Select two cards to try to match the pictures.</li>
                <li>If you match the pictures you can go again. </li>
                <li>If they don't match it is the computer turn them. </li>
                <li>The player that finds all pairs wins!</li>
                <li>Let's play!</li>
            </ol>
            <PlayButton to="/game">Play</PlayButton>
        </StyledDescription>
    );
}

export default Rules;

const StyledDescription = styled.div`
    background: linear-gradient(
        180deg,
        #e9faff 0%,
        rgba(233, 250, 255, 0) 100%
    );
    text-align: center;
`;

const PlayButton = styled(Button)`
    margin: auto;
`;
