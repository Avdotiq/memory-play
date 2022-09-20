import React, { useState } from "react";
import styled from "styled-components";
import COVER_IMG from "../../../image/cover.jpg";

function Cart({ url }) {
    const [animation, setAnimation] = useState(false);

    return (
        <StyledScene
            className={animation ? "move" : ""}
            onClick={() => setAnimation(animation ? false : true)}
        >
            <StyledCart className="cart">
                <StyledCartFace className="front"></StyledCartFace>
                <StyledCartFace className="back">
                    <img src={url} alt="" />
                </StyledCartFace>
            </StyledCart>
        </StyledScene>
    );
}

export default Cart;

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

const StyledCart = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 1s;
`;

const StyledCartFace = styled.div`
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
    }
`;
