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
    Navigator,
    Switch,
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
var _navigatorAbout;

var AboutModule = React.createClass({

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
        _navigatorAbout = navigator;
        if(route.id === 'about'){
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
                        <Text style={styles.barTitleStyle}>关于</Text>
                    </View>
                    <View style={{height:1,backgroundColor:'#cccccc'}}/>

                    <View style={{height:150,alignItems: 'center',justifyContent: 'center',}}>
                        <Image source={require('./img/ic_setting_about.png')} style={{height: 40,width:40,alignSelf:'center'}}/>
                        <Text style={{alignSelf: 'center',fontSize: 20,color: '#000000',textAlign: 'center',}}>快乐平安</Text>
                        <Text>V 3.0.0</Text>
                    </View>
                    <View style={{height:1,backgroundColor:'#cccccc'}}/>
                    <TouchableHighlight
                        underlayColor="rgb(210, 230, 255)"
                        activeOpacity={0.5}
                        onPress={() => this.onItemClick(this.props.title)}>
                        <View
                            style={{height:50,flexDirection:'row',alignItems: 'center',backgroundColor:'#ffffff'}}>
                            <Text style={styles.itemTxtStyle}>版本更新</Text>
                            <View style={{flex:1}}/>
                            <Text >已经是最新版本</Text>
                        </View>
                    </TouchableHighlight>
                    <View style={{height:1,backgroundColor:'#cccccc'}}/>
                    <TouchableHighlight
                        underlayColor="rgb(210, 230, 255)"
                        activeOpacity={0.5}
                        onPress={() => this.onItemClick("最新版本说明")}>
                        <View
                            style={{height:50,flexDirection:'row',alignItems: 'center',backgroundColor:'#ffffff'}}>
                            <Text style={styles.itemTxtStyle}>最新版本说明</Text>
                            <View style={{flex:1}}/>
                            <Image source={require('./img/ic_more.png')} style={styles.itemImgRightStyle}/>
                        </View>
                    </TouchableHighlight>
                    <View style={{height:1,backgroundColor:'#cccccc'}}/>
                    <TouchableHighlight
                        underlayColor="rgb(210, 230, 255)"
                        activeOpacity={0.5}
                        onPress={() => this.onItemClick("二维码")}>
                        <View
                            style={{height:50,flexDirection:'row',alignItems: 'center',backgroundColor:'#ffffff'}}>
                            <Text style={styles.itemTxtStyle}>二维码</Text>
                            <View style={{flex:1}}/>
                            <Image source={require('./img/ic_more.png')} style={styles.itemImgRightStyle}/>
                        </View>
                    </TouchableHighlight>
                </View>
            );
        }

        else if(route.id === 'bbsm'){
            return (
                <BBSMView />
            );
        }

        else if(route.id === 'ewm'){
            return (
                <EWMView />
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
                initialRoute={{ title: 'About', id:'about'}}
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
    },

    onItemClick: function (title) {
        if(title === "最新版本说明"){
            _navigatorAbout.push({title:'bbsm',id:'bbsm'});
        }else if(title === "二维码"){
            _navigatorAbout.push({title:'ewm',id:'ewm'});
        }
    }
});

var BBSMView = React.createClass(
    {
        render: function () {
            return (
                <View style={{flex: 1,backgroundColor: "#ffffff"}}>
                    <View style={styles.barBox}>
                        <TouchableHighlight
                            underlayColor="rgb(210, 230, 255)"
                            activeOpacity={0.5}
                            onPress={() => this._onBcakTo()}>
                            <View style={{flexDirection:'row',alignItems: 'center',justifyContent: 'center',}}>
                                <Image source={require('./img/actionbar_back.png')} style={styles.imgStyleBar}/>
                                <Text style={styles.barTxtStyle}>返回</Text>
                            </View>
                        </TouchableHighlight>
                        <Text style={styles.barTitleStyle}>版本说明</Text>
                        <Text style={styles.barHideTxtStyle}>返回</Text>
                    </View>
                    <View style={{height:1,backgroundColor:'#cccccc'}}/>

                    <View style={{height:150,marginLeft:20,justifyContent: 'center',}}>
                        <Text style={{fontSize:20}}>设备</Text>
                        <Text style={{fontSize:15}}>1.支持Android4.0及以上版本.</Text>
                        <Text style={{fontSize:15}}>2.支持IOS6.0及以上版本.</Text>
                        <Text style={{fontSize:15}}>3.支持指纹解锁的苹果设备在ios8以后可以解锁快乐平安.</Text>
                    </View>
                    <View style={{height:1,backgroundColor:'#cccccc',marginLeft:20,}}/>

                    <View style={{height:150,marginLeft:20,justifyContent: 'center',}}>
                        <Text style={{fontSize:20}}>环境</Text>
                        <Text style={{fontSize:15}}>1.建议在稳定的网络环境下使用.</Text>
                        <Text style={{fontSize:15}}>2.视频会议需要大量的流量,建议在wifi环境下使用.</Text>
                    </View>
                    <View style={{height:1,backgroundColor:'#cccccc',marginLeft:20,}}/>

                </View>
            );
        },

        _onBcakTo:function(){
            if (_navigatorAbout == null) {
                return false;
            }
            if (_navigatorAbout.getCurrentRoutes().length === 1) {
                return false;
            }
            _navigatorAbout.pop();
            return true;
        },

    }
);


var EWMView = React.createClass(
    {
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
                        <Text style={styles.barTitleStyle}>二维码</Text>
                        <TouchableHighlight
                            underlayColor="rgb(210, 230, 255)"
                            activeOpacity={0.5}
                        >
                            <View style={{flexDirection:'row',alignItems: 'center',justifyContent: 'center',}}>
                                <Image source={require('./img/actionbar_work.png')} style={styles.imgRightStyleBar}/>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <View style={{flex:1,alignItems: 'center',justifyContent: 'center',}}>
                    <Image source={require('./img/erweima.png')} style={{margin: 10,height:200,width:200}}/>
                    </View>

                </View>
            );
        },

        _onBcakTo:function(){
            if (_navigatorAbout == null) {
                return false;
            }
            if (_navigatorAbout.getCurrentRoutes().length === 1) {
                return false;
            }
            _navigatorAbout.pop();
            return true;
        },

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
    },
    itemImgRightStyle: {
        margin: 10,
        height: 15,
        width: 10,
    },
    barHideTxtStyle: {
        margin: 5,
        alignSelf: 'center',
        fontSize: 20,
        color: '#00ff9900',
        textAlign: 'center',
    },
});

module.exports = AboutModule;