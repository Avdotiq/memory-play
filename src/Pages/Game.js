import React from "react";
import styled from "styled-components";
import Button from "../components/Button/button";
import Field from "../components/FieldCards/Field";
import { Arrows } from "../helpers/icon";
import IMG1 from "../image/1.png";
import IMG2 from "../image/2.png";
import IMG3 from "../image/3.png";
import IMG4 from "../image/4.png";
import IMG5 from "../image/5.png";
import IMG6 from "../image/6.png";
import IMG7 from "../image/7.png";
import IMG8 from "../image/8.png";

function Game() {
    const data = [
        { src: IMG1, matched: false },
        { src: IMG2, matched: false },
        { src: IMG3, matched: false },
        { src: IMG4, matched: false },
        { src: IMG5, matched: false },
        { src: IMG6, matched: false },
        { src: IMG7, matched: false },
        { src: IMG8, matched: false },
    ];

    const shuffledCards = [...data, ...data]
        .sort(() => Math.random() - 0.5)
        .map((card) => ({ ...card, id: Math.random() }));

    
    return (
        <StyledHeader>
            <nav>
                <Button to="/"><Arrows /> Go back</Button>
                <ul>
                    <li>Click counter</li>
                    <li>Timer</li>
                </ul>
            </nav>
            <Field cards={shuffledCards} />
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
