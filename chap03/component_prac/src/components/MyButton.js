import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';


const MyButton = props => {
    
    return (
        <TouchableOpacity 
            style={{ 
                fontSize : 24, 
                margin: 10, 
                backgroundColor: '#3498db', 
                padding: 10,
                borderRadius: 8
            }} 
            
            onPress={ () => props.onPress()}
        >
            
            <Text style={{color:'white', fontSize:15}}>{props.children || props.title}</Text>

        </TouchableOpacity>
    );
};

// 디폴트 정해주기
MyButton.defaultProps = {
    title: '이것 디폴트'
};

// props 타입 지정, 필수 여부 자정
MyButton.propTypes = {
    title: PropTypes.string,
};

export default MyButton;