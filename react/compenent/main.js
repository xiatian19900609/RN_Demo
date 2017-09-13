/**
 * Created by xiatian on 2017/8/16.
 */
import React, {Component} from 'react'
import {
    StyleSheet,
    Image,
}from 'react-native';
import {
    TabNavigator
} from 'react-navigation';

import Home from './main/home'
import Guess from './main/guess'
import News from './main/news'
import Score from './main/score'
import My from './main/my'
const MainPage = TabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: '大厅',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('./home_lobby.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
        }
    },
    Guess: {
        screen: Guess,
        navigationOptions: {
            tabBarLabel: '竞猜',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('./home_guess.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
        }
    },
    News: {
        screen: News,
        navigationOptions: {
            tabBarLabel: '爆料',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('./home_news.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
        }
    },
    Score: {
        screen: Score,
        navigationOptions: {
            tabBarLabel: '比分',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('./home_score.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
        }
    },
    Me: {
        screen: My,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('./home_me.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
        }
    },
}, {
    initialRouteName: 'Home',
    animationEnabled: false,//切换页面时是否有动画效果
    tabBarPosition: 'bottom',// 显示在底端，android 默认是显示在页面顶端的
    swipeEnabled: true,// 是否可以左右滑动切换tab
    backBehavior: 'none',// 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    tabBarOptions: {
        activeTintColor: '#ff0000', // 文字和图片选中颜色
        inactiveTintColor: '#999', // 文字和图片未选中颜色
        showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
        indicatorStyle: {
            height: 0  // 如TabBar下面显示有一条线，可以设高度为0后隐藏
        },
        style: {
            backgroundColor: '#fff', // TabBar 背景色
            height: 54
        },
        labelStyle: {
            fontSize: 10, // 文字大小
            marginTop: 2
        },
    },
});


const styles = StyleSheet.create({
    icon: {
        width: 29,
        height: 25,
    },
});
module.exports = MainPage;