/**
 * Created by xiatian on 2017/8/16.
 */
import React, {Component} from 'react'
import {
    StyleSheet,
    Text,
}from 'react-native';
class Home extends Component {
    render() {
        return (
            <Text style={styles.text}>首页</Text>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
})
module.exports = Home;