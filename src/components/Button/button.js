import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Button({ children, to, ...props}) {
    return (
        <StyledButton to={to} {...props}>
            {children}
        </StyledButton>
    );
}

export default Button;

const StyledButton = styled(Link)`
    display: block;
    width: fit-content;
    padding: 10px 30px;
    background: #00b6f0;
    border-radius: 20px;
    text-decoration: none;
    font-weight: 700;
    font-size: 18px;
    line-height: 20px;
    color: #ffffff;
    margin: ${margin => margin ? margin : "none"};
    &:hover {
        box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
`;
