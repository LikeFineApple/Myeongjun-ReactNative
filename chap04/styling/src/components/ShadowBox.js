import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';

export default () => {
    return <View style={styles.shadow}></View>;
};

const styles = StyleSheet.create({
    shadow: {
        backgroundColor: '#fff',
        width: 100,
        height: 100,
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: {
                    width: 10,
                    height: 10,
                },
                whadowOpacity: 0.5,
                shadowRadius: 10,
            },
            android: {
                elevation: 20,
            },
        }),
    },
});