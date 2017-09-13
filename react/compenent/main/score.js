/**
 * Created by xiatian on 2017/8/16.
 */
import React, {Component} from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    ListView
}from 'react-native';
const REQUEST_SCORE_URL = 'http://query-api.8win.com/command/execute?command=200015&matchDate=2017-08-02';
class Score extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
        }
    }
    componentDidMount() {
        this.fetchData();
    }

    render() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderMovie}
                style={styles.listView}
            />
        );
    }

    fetchData() {
        fetch(REQUEST_SCORE_URL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.data.history),
                    loaded: true,
                });
            })
            .done();
    }

    renderLoadingView() {
        return (
            <View style={styles.container}>
                <Text>
                    Loading movies...
                </Text>
            </View>
        );
    }

    renderMovie(movie) {
        return (
            <View style={styles.container}>
                <Image
                    source={{uri: movie.homeLogo}}
                    style={styles.thumbnail}
                />
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{movie.homeName}</Text>
                    <Text style={styles.year}>{movie.homeId}</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: 'center',
    },
    rightContainer: {
        flex: 1,
    },
    year: {
        textAlign: 'center'
    },
    thumbnail: {
        width: 50,
        height: 50,
    },
});
module.exports = Score;