import React from 'react';
import { View, Text } from 'react-native';
// styles.js 불러오기
import { viewStyles, textStyles } from './styles';
// 정의된 컴포넌트 불러오기
import { Header, Contents, Footer } from './components/Layout';
// Shadow 태그 불러오기
import ShadowBox from './components/ShadowBox';

const App = () => {
    return (
        <View style={viewStyles.container}> 

            <Header />
            <Contents />
            <Footer /> 
            <ShadowBox />

        </View>
    );
};



export default App;