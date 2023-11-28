import React from "react";
import styled from "styled-components";
import COVER_IMG from "../../../image/cover.jpg";

function Card({ card, handleChoise, flipped }) {
    const handleChange = () => {
        handleChoise(card);
    };

    return (
        <StyledScene className={flipped ? "move" : ""} onClick={handleChange}>
            <StyledCard className="cart">
                <StyledCardFace className="front"></StyledCardFace>
                <StyledCardFace className="back">
                    <img src={card.src} alt="" />
                </StyledCardFace>
            </StyledCard>
        </StyledScene>
    );
}

export default Card;

const StyledScene = styled.div`
    width: 130px;
    height: 200px;
    overflow: hidden;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    perspective: 700px;
    transition: box-shadow 3s;

    &.move {
        box-shadow: none;
        transition: none;

        .cart {
            transform: rotateY(180deg);
        }
    }

    img {
        width: inherit;
    }
`;

const StyledCard = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 1s;
`;

const StyledCardFace = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;

    &.front {
        background-image: url(${COVER_IMG});
        background-position: center;
        background-size: cover;
    }

    &.back {
        transform: rotateY(180deg);
        border-radius: 10px;
        border: 1px solid #d2d2d2;
    }
`;
