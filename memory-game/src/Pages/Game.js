import React from "react";
import styled from "styled-components";
import Button from "../components/Button/button";
import Field from "../components/FieldCards/Field";
import { Arrows } from "../helpers/icon";

function Game() {
    return (
        <StyledHeader>
            <nav>
                <Button to="/"><Arrows /> Go back</Button>
                <ul>
                    <li>Click counter</li>
                    <li>Timer</li>
                </ul>
            </nav>
            <Field />
        </StyledHeader>
    );
}

export default Game;

const StyledHeader = styled.div`
    padding: 30px;

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
    }

    ul {
        display: flex;
        list-style: none;
    }
`;
