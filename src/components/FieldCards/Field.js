import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./Card/card";

function Field({ cards }) {
    const [choiseOne, setChoiseOne] = useState(null);
    const [choiseTwo, setChoiseTwo] = useState(null);

    const handleChoise = (card) => {
        choiseOne ? setChoiseTwo(card) : setChoiseOne(card);
    };

    const reset = () => {
        setChoiseOne(null);
        setChoiseTwo(null);
    };

    useEffect(() => {
        if (choiseOne !== null && choiseTwo !== null) {
            if (choiseOne.src === choiseTwo.src) {
                cards.map((card, index) => {
                    if (card.src === choiseOne.src) {
                        cards[index].matched = true;
                    }
                });
                reset();
            } else {
                setTimeout(() => reset(), 700);
            }
        }
    }, [choiseOne, choiseTwo]);

    return (
        <StyledField>
            {cards &&
                cards.map((card) => (
                    <Card
                        key={card.id}
                        card={card}
                        handleChoise={handleChoise}
                        flipped={
                            (choiseOne && choiseOne.id === card.id) ||
                            (choiseTwo && choiseTwo.id === card.id) ||
                            card.matched
                        }
                    />
                ))}
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
