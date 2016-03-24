/**
 * shenyonghe689
 */
'use strict';

var React = require('react-native');

var {
    StyleSheet,
    Image,
    Text,
    View,
    TextInput,
    TouchableHighlight,
    Navigator,
    } =  React;

var _navigator; //全局navigator对象
var MainView = require('./main.js');

//登录模块
var LoginModule = React.createClass({


    configureScenceAndroid: function(){
        return Navigator.SceneConfigs.FadeAndroid;
    },

    renderSceneAndroid: function(route, navigator){
        _navigator = navigator;
        if(route.id === 'login'){
            return (
                <View style={{backgroundColor:'#f4f4f4',flex:1}}>
                    <Image
                        style={styles.style_image}
                        source={require('./img/ic_setting_about.png')}/>
                    <TextInput
                        style={styles.style_user_input}
                        placeholder='QQ号/手机号/邮箱'
                        numberOfLines={1}
                        autoFocus={true}
                        underlineColorAndroid={'transparent'}
                        textAlign='center'
                    />
                    <View style={{height:1,backgroundColor:'#f4f4f4'}}/>
                    <TextInput
                        style={styles.style_pwd_input}
                        placeholder='密码'
                        numberOfLines={1}
                        underlineColorAndroid={'transparent'}
                        secureTextEntry={true}
                        textAlign='center'/>

                    <TouchableHighlight
                        underlayColor="rgb(210, 230, 255)"
                        activeOpacity={0.5}
                        style={{ borderRadius: 8,padding: 6,marginTop:5}}
                        onPress={() => _navigator.push({title:'Main',id:'main'})}>
                        <View style={styles.style_view_commit}>
                            <Text style={{color:'#fff'}}>
                                登录
                            </Text>
                        </View>
                    </TouchableHighlight>


                    <View style={{flex:1,flexDirection:'row',alignItems: 'flex-end',bottom:10}}>
                        <TouchableHighlight
                            underlayColor="rgb(210, 230, 255)"
                            activeOpacity={0.5}
                            style={{ borderRadius: 8,padding: 6,marginTop:5}}
                            onPress={() => this._appendEvent(2)}>

                            <Text style={styles.style_view_unlogin}>
                                无法登录?
                            </Text>
                        </TouchableHighlight>

                        <TouchableHighlight
                            underlayColor="rgb(210, 230, 255)"
                            activeOpacity={0.5}
                            style={{ borderRadius: 8,padding: 6,marginTop:5}}
                            onPress={() => this._appendEvent(3)}>
                            <Text style={styles.style_view_register}>
                                新用户
                            </Text>
                        </TouchableHighlight>
                    </View>
                </View>
            );
        }

        if(route.id === 'main'){
            return (
                <MainView />
            );
        }

    },

    render: function () {
        var renderScene = this.renderSceneAndroid;
        var configureScence = this.configureScenceAndroid;
        return (
            <Navigator
                debugOverlay={false}
                initialRoute={{ title: 'Login', id:'login'}}
                configureScence={{ configureScence }}
                renderScene={renderScene}
            />
        );
    },
    _appendEvent: function (eventType) {
        if (eventType == 1) {
            alert("登录");
        }
        else if(eventType == 2){
            alert("无法登录");
        }
        else if(eventType == 3){
            alert("新用户");
        }
    },
});

const styles = StyleSheet.create({

    //登录
    style_image: {
        height: 70,
        width: 70,
        marginTop: 40,
        alignSelf: 'center',
    },
    style_user_input: {
        backgroundColor: '#fff',
        marginTop: 10,
        height: 35,
    },
    style_pwd_input: {
        backgroundColor: '#fff',
        height: 35,
    },
    style_view_commit: {
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#63B8FF',
        height: 35,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    style_view_unlogin: {
        fontSize: 12,
        color: '#63B8FF',
        marginLeft: 10,
    },
    style_view_register: {
        fontSize: 12,
        color: '#63B8FF',
        marginRight: 10,
        alignItems: 'flex-end',
        flex: 1,
        flexDirection: 'row',
        textAlign: 'right',
    }
});

module.exports = LoginModule;
