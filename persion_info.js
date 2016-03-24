/**
 * Created by shenyonghe689 on 16/3/1.
 */

'use strict';
var React = require('react-native');
var {
    StyleSheet,
    Image,
    Text,
    View,
    BackAndroid,
    TouchableHighlight,
    Navigator,
    } = React;

BackAndroid.addEventListener('hardwareBackPress', function () {
    if (_navigator == null) {
        return false;
    }
    if (_navigator.getCurrentRoutes().length === 1) {
        return false;
    }
    _navigator.pop();
    return true;
});

var _navigator;
var _navigatorpersion;

var NameCardModule = require('./name_card.js');

var PersionInfoModule = React.createClass({

    configureScenceAndroid: function () {
        return Navigator.SceneConfigs.FadeAndroid;
    },

    renderSceneAndroid: function (route, navigator) {
        _navigatorpersion = navigator;

        if (route.id === 'persioninfo') {
            return (
                <View style={styles.container}>
                    <View style={styles.barBox}>
                        <TouchableHighlight
                            underlayColor="rgb(210, 230, 255)"
                            activeOpacity={0.5}
                            onPress={() => this.onBackToMain()}>
                            <View style={{flexDirection:'row',alignItems: 'center',justifyContent: 'center',}}>
                                <Image source={require('./img/actionbar_back.png')} style={styles.imgStyleBar}/>
                                <Text style={styles.barTxtStyle}>返回</Text>
                            </View>
                        </TouchableHighlight>
                        <Text style={styles.barTitleStyle}>个人资料</Text>
                        <Text style={styles.barHideTxtStyle}>返回</Text>
                    </View>
                    <View style={{height:1,backgroundColor:'#000000'}}/>
                    <View style={{height:1,backgroundColor:'#cccccc',marginTop:20}}/>
                    <View style={{backgroundColor:'#ffffff'}}>
                        <View style={{height:80,flexDirection:'row',alignItems: 'center',backgroundColor:'#ffffff'}}>
                            <Text style={styles.itemTxtStyle}>头像</Text>
                            <View style={{flex:1}}/>
                            <Image source={require('./img/man.png')} style={styles.photoStyle}/>
                        </View>
                        <View style={{height:1,backgroundColor:'#cccccc',marginLeft:20}}/>
                        <View style={{height:50,flexDirection:'row',alignItems: 'center',backgroundColor:'#ffffff'}}>
                            <Text style={styles.itemTxtStyle}>账号</Text>
                            <View style={{flex:1}}/>
                            <Text style={{color: '#cccccc',fontSize: 15,alignSelf: 'center',marginRight: 20}}>
                                SHENYONGHE689
                            </Text>
                        </View>
                        <View style={{height:1,backgroundColor:'#cccccc',marginLeft:20}}/>
                        <TouchableHighlight
                            underlayColor="rgb(210, 230, 255)"
                            activeOpacity={0.5}
                            style={{flex:1}}
                            onPress={() => _navigatorpersion.push({title:'NameCard',id:'namecard'})}>
                            <View style={{height:50,flexDirection:'row',alignItems: 'center',backgroundColor:'#ffffff'}}>
                                <Text style={styles.itemTxtStyle}>我的名片</Text>
                                <View style={{flex:1}}/>
                                <Image source={require('./img/ic_more.png')} style={styles.itemImgRightStyle}/>
                            </View>
                        </TouchableHighlight>
                        <View style={{height:1,backgroundColor:'#cccccc'}}/>
                    </View>
                </View>
            );
        }

        if(route.id === 'namecard'){
            return (
                <NameCardModule navigator={_navigatorpersion} route={route} />
            );
        }


    },

    render: function () {
        _navigator = this.props.navigator;
        var renderScene = this.renderSceneAndroid;
        var configureScence = this.configureScenceAndroid;
        return (
            <Navigator
                debugOverlay={false}
                initialRoute={{ title: 'PersionInfo', id:'persioninfo'}}
                configureScence={{configureScence}}
                renderScene={renderScene}
            />
        );
    },


    onBackToMain: function () {
        if (_navigator == null) {
            return false;
        }
        if (_navigator.getCurrentRoutes().length === 1) {
            return false;
        }
        _navigator.pop();
        return true;
    }
});

const styles = StyleSheet.create({


    container: {
        flex: 1,
        backgroundColor: "#eeeeee"
    },

    barBox: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        height: 50,
        backgroundColor: "#ffffff",
    },


    barHideTxtStyle: {
        margin: 5,
        alignSelf: 'center',
        fontSize: 20,
        color: '#00ff9900',
        textAlign: 'center',
    },

    barTxtStyle: {
        color: '#000000',
        fontSize: 15
    },

    barTitleStyle: {
        flex: 1,
        margin: 5,
        alignSelf: 'center',
        fontSize: 20,
        color: '#000000',
        textAlign: 'center',
    },

    imgStyleBar: {
        width: 10,
        height: 15,
        marginLeft: 5,
        alignSelf: 'center',
    },

    itemTxtStyle: {
        color: '#000000',
        fontSize: 15,
        alignSelf: 'center',
        marginLeft: 20,
    },

    photoStyle: {
        width: 60,
        height: 60,
        marginRight: 50,
        alignSelf: 'center',
    },

    itemImgRightStyle: {
        margin: 10,
        height: 15,
        width: 10,
    },

});

module.exports = PersionInfoModule;