import React from "react";
import styled from "styled-components";
import Card from "./Card/card";
import IMG1 from "../../image/1.png";
import IMG2 from "../../image/2.png";
import IMG3 from "../../image/3.png";
import IMG4 from "../../image/4.png";
import IMG5 from "../../image/5.png";
import IMG6 from "../../image/6.png";
import IMG7 from "../../image/7.png";
import IMG8 from "../../image/8.png";

function Field() {
    const data = [
        { src: IMG1 },
        { src: IMG2 },
        { src: IMG3 },
        { src: IMG4 },
        { src: IMG5 },
        { src: IMG6 },
        { src: IMG7 },
        { src: IMG8 },
    ];

    const shuffledCards = [...data, ...data]
        .sort(() => Math.random() - 0.5)
        .map((card) => ({ ...card, id: Math.random() }));

    return (
        <StyledField>
            {shuffledCards &&
                shuffledCards.map((cart) => <Card src={cart.src} />)}
        </StyledField>
    );
}

export default Field;

const StyledField = styled.div`
    padding: 30px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 30px;
    column-gap: 30px;
`;
