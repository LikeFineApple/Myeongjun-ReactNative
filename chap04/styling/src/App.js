import React from 'react';
import { View, Text } from 'react-native';
// styles.js 불러오기
import { viewStyles, textStyles } from './styles';
// 정의된 컴포넌트 불러오기
import { Header, Contents, Footer } from './components/Layout';
// Shadow 태그 불러오기
import ShadowBox from './components/ShadowBox';
// 스타일드 컴포넌트로 만든 버튼 불러오기
import styled from 'styled-components/native';
import Button from './components/Button';

const Container = styled.View`
    
    background-color: #ffffff;
    align-items: center;
    justify-content: center;
`;

const App = () => {
    return (
        <View style={viewStyles.container}> 
            <Header />
            <Contents />
            <Footer /> 
            <ShadowBox />

            <Container>
                <Button title="new Button by styled component" />
            </Container>

        </View>        
        
    );
};

        // <View style={viewStyles.container}> 
        //     <Header />
        //     <Contents />
        //     <Footer /> 
        //     <ShadowBox />
        // </View>

export default App;