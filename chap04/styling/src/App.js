import React, { useState } from 'react';
import { View, Text, Switch } from 'react-native';
// styles.js 불러오기
import { viewStyles, textStyles } from './styles';
// 정의된 컴포넌트 불러오기
import { Header, Contents, Footer } from './components/Layout';
// Shadow 태그 불러오기
import ShadowBox from './components/ShadowBox';
// 스타일드 컴포넌트로 만든 버튼 불러오기
import styled, { ThemeProvider }from 'styled-components/native';
import Button from './components/Button';
import Input from './components/Input';

//테마
import { lightTheme, darkTheme } from './theme';

const Container = styled.View`
    
    background-color: ${props => props.theme.background};
    align-items: center;
    justify-content: center;
`;

const App = () => {
    const [isDark, setIsDark] = useState(false);
    const _toggleSwitch = () => setIsDark(!isDark);

    return (
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
            <View style={viewStyles.container}> 
                <Header />
                <Contents />
                <Footer /> 
                <ShadowBox />

                <Container>
                    <Switch value={isDark} onValueChange={_toggleSwitch} />
                    
                    <View style={{flexDirection: 'row'}}>
                        <Button title="Button" />
                        <Input borderColor="#3498db" />
                        <Input borderColor="#9b59b6" />
                    </View>
                    
                </Container>

            </View>        
        </ThemeProvider>

        
    );
};


export default App;