/**
 * Created by shenyonghe689 on 16/3/22.
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
var TitleBarView = require('./title_bar.js');

/**
 * 员工专享
 */
var YGZXModule = React.createClass({

    getInitialState: function () {
        return {
            page: 1,
            pageName: '问卷调查',
        };
    },

    configureScenceAndroid: function () {
        return Navigator.SceneConfigs.FadeAndroid;
    },

    renderSceneAndroid: function (route, navigator) {
        if (route.id === 'ygzx') {
            return (
                <View style={styles.container}>
                    <TitleBarView onPress={()=>this._onBcak()} title="员工专享" />
                    <View style={{height:1,backgroundColor:'#cccccc'}}/>

                    <TouchableHighlight
                        underlayColor="rgb(210, 230, 255)"
                        activeOpacity={0.5}
                        onPress={()=> alert("跳到易赚钱")}>
                        <View
                            style={{height:70,backgroundColor:'#ffffff',borderRadius:3,flexDirection:'row',margin:5,alignItems: 'center'}}>
                            <Image source={require('./img/ic_interaction.png')} style={{height:70,width:80}}/>
                            <View style={{margin:5}}>
                                <Text style={{fontSize:15,color: '#000000'}}>易赚钱</Text>
                                <Text style={{fontSize:12}}>平安大华日增利货币基金</Text>
                            </View>
                            <View style={{flex:1}}/>
                            <Image source={require('./img/ic_more.png')} style={{height:30,width:20,marginRight:5}}/>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight
                        underlayColor="rgb(210, 230, 255)"
                        activeOpacity={0.5}
                        onPress={()=> alert("跳到网店")}>
                        <View
                            style={{height:70,backgroundColor:'#ffffff',borderRadius:3,flexDirection:'row',margin:5,alignItems: 'center'}}>
                            <Image source={require('./img/ic_xqjh.png')} style={{height:70,width:80}}/>
                            <View style={{margin:5}}>
                                <Text style={{fontSize:15,color: '#000000'}}>金融旗舰店</Text>
                                <Text style={{fontSize:12}}>一站式金融服务平台</Text>
                            </View>
                            <View style={{flex:1}}/>
                            <Image source={require('./img/ic_more.png')} style={{height:30,width:20,marginRight:5}}/>
                        </View>
                    </TouchableHighlight>

                    <Text style={{fontSize:12,alignSelf: 'center'}}>更多精精彩敬请期待</Text>

                </View>
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
                initialRoute={{ title: 'ygzx', id:'ygzx'}}
                configureScence={{ configureScence }}
                renderScene={renderScene}
            />
        );
    },

    _onBcak: function () {
        if (_navigator == null) {
            return false;
        }
        if (_navigator.getCurrentRoutes().length === 1) {
            return false;
        }
        _navigator.pop();
        return true;
    },

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
        marginLeft: 10,
        alignSelf: 'center',
    },

    imgRightStyleBar: {
        width: 30,
        height: 30,
        marginRight: 10,
        alignSelf: 'center',
    },

    notChooseItem: {
        fontSize: 18
    },

    ChooseItem: {
        fontSize: 18,
        backgroundColor: '#ccff00'
    }

});

module.exports = YGZXModule;