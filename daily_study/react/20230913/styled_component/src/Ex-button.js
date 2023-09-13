import React from "react";
import styled, { css } from 'styled-components'

const NomalBtn = styled.button`
    color: #fff;
    background-color: royalblue;
    padding: 10px;
    border: ${(props) => (props.border ? null: 'none')};
    border-radius: ${(props) => (props.round ? '10px': null)};
    box-shadow:  ${(props) => (props.shadow ? '0px 0px 10px 0px rgba(0,0,0,0.5);': null)};
`;

const RoundBtn = styled(NomalBtn)`
    color: #000;
    font-weight: bold;
`

const RoundBtnGreen = styled(NomalBtn)`
    background-color: green;
`


const ExButton = () => {
    return (
    <>
        <NomalBtn border={true} round={false} shadow={false}>버튼1</NomalBtn>
        <RoundBtn border={false} round={true} shadow={true}>버튼2</RoundBtn>
        <RoundBtnGreen border={false} round={true} shadow={true}>버튼3</RoundBtnGreen>
    </>

    );
};

export default ExButton;