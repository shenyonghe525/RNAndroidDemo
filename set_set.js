/**
 * Created by shenyonghe689 on 16/3/3.
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
    Switch,
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
var _navigatorSetset;

var SettingSetModule = React.createClass({

    getInitialState: function () {
        return {
            trueSwitchIsOn: true,
            falseSwitchIsOn: false,
        };
    },


    configureScenceAndroid: function(){
        return Navigator.SceneConfigs.FadeAndroid;
    },

    renderSceneAndroid: function(route, navigator){
        _navigatorSetset = navigator;
        if(route.id === 'setset'){
            return (
                <View style={styles.container}>
                    <View style={styles.barBox}>
                        <TouchableHighlight
                            underlayColor="rgb(210, 230, 255)"
                            activeOpacity={0.5}
                            onPress={()=> this._onBcak()}>
                            <View style={{flexDirection:'row',alignItems: 'center',justifyContent: 'center',}}>
                                <Image source={require('./img/actionbar_back.png')} style={styles.imgStyleBar}/>
                                <Text style={styles.barTxtStyle}>返回</Text>
                            </View>
                        </TouchableHighlight>
                        <Text style={styles.barTitleStyle}>设置</Text>
                    </View>
                    <View style={{height:1,backgroundColor:'#cccccc'}}/>

                    <View style={{height:1,backgroundColor:'#cccccc',marginTop:20}}/>
                    <TouchableHighlight
                        underlayColor="rgb(210, 230, 255)"
                        activeOpacity={0.5}>
                        <View style={styles.itemBox}>
                            <Text style={styles.itemTxtStyle}>欢乐小助手</Text>
                            <View style={{flex:1}}/>
                            <Switch
                                onValueChange={(value) => this.setState({falseSwitchIsOn: value})}
                                style={{width:50,marginRight:10}}
                                value={this.state.falseSwitchIsOn}/>
                        </View>
                    </TouchableHighlight>
                    <View style={{height:1,backgroundColor:'#cccccc'}}/>

                    <View style={{height:1,backgroundColor:'#cccccc',marginTop:20}}/>
                    <TouchableHighlight
                        underlayColor="rgb(210, 230, 255)"
                        activeOpacity={0.5}
                        onPress={()=> _navigatorSetset.push({ title: 'settongzhi', id:'settongzhi'})}>
                        <View style={styles.itemBox}>
                            <Text style={styles.itemTxtStyle}>通知中心</Text>
                            <View style={{flex:1}}/>
                            <Image style={{width:15,height: 30,marginRight:10}} source={require('./img/ic_more.png')}/>
                        </View>
                    </TouchableHighlight>

                    <View style={{height:1,backgroundColor:'#cccccc'}}/>

                    <View style={{height:1,backgroundColor:'#cccccc',marginTop:20}}/>
                    <TouchableHighlight
                        underlayColor="rgb(210, 230, 255)"
                        activeOpacity={0.5}>
                        <View style={styles.itemBox}>
                            <Text style={styles.itemTxtStyle}>清除缓存</Text>
                            <View style={{flex:1}}/>
                            <Image style={{width:15,height: 30,marginRight:10}} source={require('./img/ic_more.png')}/>
                        </View>
                    </TouchableHighlight>

                    <View style={{height:1,backgroundColor:'#cccccc'}}/>

                    <View style={{height:1,backgroundColor:'#cccccc',marginTop:20}}/>
                    <TouchableHighlight
                        underlayColor="rgb(210, 230, 255)"
                        activeOpacity={0.5}>
                        <View style={styles.itemBox}>
                            <Text style={styles.barTitleStyle}>退出登录</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            );
        }

        if(route.id === 'settongzhi'){
            return (
               <SetTongZhiView />
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
                initialRoute={{ title: 'setset', id:'setset'}}
                configureScence={{ configureScence }}
                renderScene={renderScene}
            />
        );
    },

    _onBcak:function(){
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


var ItemView = React.createClass(
    {
        getInitialState: function () {
            return {
                trueSwitchIsOn: true,
                falseSwitchIsOn: false,
            };
        },

        render: function () {
            return (
                <TouchableHighlight
                    underlayColor="rgb(210, 230, 255)"
                    activeOpacity={0.5}>
                    <View style={styles.itemBox}>
                        <Text style={styles.itemTxtStyle}>{this.props.title}</Text>
                        <View style={{flex:1}}/>
                        <Switch
                            onValueChange={(value) => this.setState({falseSwitchIsOn: value})}
                            style={{width:50,marginRight:10}}
                            value={this.state.falseSwitchIsOn}/>
                    </View>
                </TouchableHighlight>
            );
        },

    }
);


var SetTongZhiView = React.createClass(
    {
        getInitialState: function () {
            return {
                trueSwitchIsOn: true,
                falseSwitchIsOn: false,
            };
        },

        render: function () {
            return (
                <View style={styles.container}>
                    <View style={styles.barBox}>
                        <TouchableHighlight
                            underlayColor="rgb(210, 230, 255)"
                            activeOpacity={0.5}
                            onPress={()=> this._onBcakTo()}>
                            <View style={{flexDirection:'row',alignItems: 'center',justifyContent: 'center',}}>
                                <Image source={require('./img/actionbar_back.png')} style={styles.imgStyleBar}/>
                                <Text style={styles.barTxtStyle}>返回</Text>
                            </View>
                        </TouchableHighlight>
                        <Text style={styles.barTitleStyle}>通知中心</Text>
                    </View>
                    <View style={{height:1,backgroundColor:'#cccccc'}}/>

                    <View style={{height:1,backgroundColor:'#cccccc',marginTop:20}}/>

                    <ItemView title="接收新通知"/>
                    <View style={{height:1,backgroundColor:'#cccccc'}}/>
                    <Text style={{marginLeft:20,marginTop:10}}>通知管理</Text>
                    <View style={{height:1,backgroundColor:'#cccccc',marginTop:5}}/>
                    <ItemView title="签报"/>
                    <View style={{height:1,backgroundColor:'#cccccc'}}/>
                    <ItemView title="财酷"/>
                    <View style={{height:1,backgroundColor:'#cccccc'}}/>
                    <ItemView title="人事"/>
                    <View style={{height:1,backgroundColor:'#cccccc'}}/>

                </View>
            );
        },

        _onBcakTo:function(){
            if (_navigatorSetset == null) {
                return false;
            }
            if (_navigatorSetset.getCurrentRoutes().length === 1) {
                return false;
            }
            _navigatorSetset.pop();
            return true;
        }

    }
);


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

    itemBox:{
        height:50,
        backgroundColor:'#ffffff',
        flexDirection: 'row',
        alignItems: 'center',
    },

    imgRightStyleBar: {
        width: 30,
        height: 30,
        marginRight: 10,
        alignSelf: 'center',
    },
    itemTxtStyle:{
        marginLeft:20,
        fontSize:15,
    }
});

module.exports = SettingSetModule;