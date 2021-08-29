import React from 'react';
import styled from 'styled-components/native';

// 백틱 안에는 css문법으로 사용
const ButtonContainer = styled.TouchableOpacity`
    background-color: ${props =>
        props.title === 'Button' ? props.theme.blue : props.theme.purple};
    border-radius: 15px;
    padding: 15px 40px;
    margin: 10px 0px;
    justify-content: center;
`;
const Title = styled.Text`
    font-size: 20px;
    font-weight: 600;
    color: ${props => props.theme.text};
`;


// 백틱 안에서 props에 접근 가능함
const Button = props => {
    return (
        <ButtonContainer title={props.title}>
            <Title>{props.title}</Title>
        </ButtonContainer>
    );
};

export default Button;