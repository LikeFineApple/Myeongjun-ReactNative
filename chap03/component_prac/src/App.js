import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import MyButton from './components/MyButton';
import Counter from './components/Counter';
import EventButton from './components/EventButton';
import EventInput from './components/EventInput';

const App = () => {
    const name = "myeongjun";
    return (
        <View style={styles.container}>
            
            {/* 변수 사용 */}
            <Text style={styles.title}>{name} app bye bye</Text>
            
            {/* 조건문 */}
            <Text>
                {(() => {
                    if (name === 'myeongjun') return '이것이 조건문';
                    else if (name === 'hello') return '안녕';
                    else return '그 무엇도 아님'
                })()}
            </Text>

            {/* 삼항 연산자 */}
            <Text>
                {name === 'myeongjun' ? '너 이름 맞음' : '너 아니래'}
            </Text>

            {/* 버튼 */}
            <Button title="Button" onPress={() => alert('Click !!!')} />

            {/* 불러온 커스텀 버튼 */}
            <MyButton title="버튼 상속" onPress={() => alert('props')}/>
            <MyButton title="버튼 상속" onPress={() => alert('child')}>얘는 자식</MyButton>
            <MyButton onPress={() => alert('default')}/>
        
            {/* useState 함수 사용 */}
            <Counter />

            {/* Event */}
            <EventButton />
            <EventInput />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    title: {
        fontSize: 30,
    },
});

export default App;