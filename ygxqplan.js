/**
 * Created by Diablo on 16/3/7.
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
    TouchableOpacity,
    Navigator,
    ListView,
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
var _navigatorXQ;
var TitleBarView = require('./title_bar.js');

/**
 * 员工心情计划
 */
var YGXQModule = React.createClass({

    getInitialState: function() {
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return {
            dataSource: ds.cloneWithRows(['夏斯勇', '陈文景','姜洪波','蔡行','龙宽','黄志君','刘文龙','陈结','马富林','徐云辉','那啥','申永鹤']),
        };
    },
    _renderRow: function(rowData: string, sectionID: number, rowID: number) {
        return (
            <TouchableOpacity>
                <View>
                    <View style={{height:60,flexDirection:'row',alignItems:'center'}}>
                        <Image style={{height:50,width: 50,margin :5}} source={require('./img/man.png')} />
                        <View style={{margin: 5,alignItems:'center'}}>
                            <Text style={{fontSize:16}}>{rowData}</Text>
                            <Text style={{fontSize:12}}>04月11日 生日</Text>
                        </View>
                        <View style={{flex:1}}/>
                        <Text style={{marginRight:20,fontSize:16,color:'#ffcc00'}}>20天</Text>
                    </View>
                    <View style={{height:1,backgroundColor:'#cccccc'}}/>
                </View>
            </TouchableOpacity>
        );
    },

    configureScenceAndroid: function () {
        return Navigator.SceneConfigs.FadeAndroid;
    },

    renderSceneAndroid: function (route, navigator) {
        _navigatorXQ = navigator;
        if (route.id === 'ygxq') {
            return (
                <View style={styles.container}>
                    <TitleBarView onPress={()=>this._onBcak()} title="员工心晴计划" />
                    <View style={{height:1,backgroundColor:'#cccccc'}}/>

                    <TouchableHighlight
                        underlayColor="rgb(210, 230, 255)"
                        activeOpacity={0.5}
                        onPress={()=> _navigatorXQ.push({title:'xqrx',id:'xqrx'})}>
                        <View
                            style={{height:70,backgroundColor:'#ffffff',borderRadius:3,flexDirection:'row',margin:5,alignItems: 'center'}}>
                            <Image source={require('./img/ic_xqjh.png')} style={{height:70,width:80}}/>
                            <View style={{margin:5}}>
                                <Text style={{fontSize:15,color: '#000000'}}>心情热线</Text>
                                <Text style={{fontSize:12}}>平安员工辅导热线~</Text>
                            </View>
                            <View style={{flex:1}}/>
                            <Image source={require('./img/ic_more.png')} style={{height:30,width:20,marginRight:5}}/>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight
                        underlayColor="rgb(210, 230, 255)"
                        activeOpacity={0.5}
                        onPress={()=> _navigatorXQ.push({title:'srgh',id:'srgh'})}>
                        <View
                            style={{height:70,backgroundColor:'#ffffff',borderRadius:3,flexDirection:'row',margin:5,alignItems: 'center'}}>
                            <Image source={require('./img/ic_xqjh.png')} style={{height:70,width:80}}/>
                            <View style={{margin:5}}>
                                <Text style={{fontSize:15,color: '#000000'}}>生日关怀</Text>
                                <Text style={{fontSize:12}}>平安员工送关怀~</Text>
                            </View>
                            <View style={{flex:1}}/>
                            <Image source={require('./img/ic_more.png')} style={{height:30,width:20,marginRight:5}}/>
                        </View>
                    </TouchableHighlight>

                    <Text style={{fontSize:12,alignSelf: 'center'}}>更多精精彩敬请期待</Text>

                </View>
            );
        }

        else if (route.id === 'xqrx') {
            return (
                <View style={{flex: 1,backgroundColor: "#cccccc"}}>
                    <TitleBarView onPress={()=>this._onBcakTo()} title="心晴热线" />

                    <View style={{height:1,backgroundColor:'#cccccc'}}/>

                    <Image source={require('./img/xqjh_head.png')} style={{width:360,height:170}}/>

                    <View style={{height:160,backgroundColor:'#ffffff',marginTop:10}}>
                        <Text style={{margin:5}}>预约热线(点击呼叫):</Text>
                        <View style={{flexDirection:'row',backgroundColor:'#ffffff'}}>
                            <Image source={require('./img/xqrx_phone.png')} style={{margin:5,width:150,height:45}}/>
                            <Image source={require('./img/xqjh_fuzhi.png')} style={{margin:5,width:75,height:45}}/>
                            <Image source={require('./img/xqjh_fuzhi.png')} style={{margin:5,width:75,height:45}}/>
                        </View>

                        <View style={{flexDirection:'row',backgroundColor:'#ffffff'}}>
                            <View style={{flex:1}} />
                            <Image source={require('./img/xqjh_yali.png')} style={{margin:5,width:70,height:58}}/>
                            <View style={{flex:1}} />
                            <Image source={require('./img/xqjh_yali.png')} style={{margin:5,width:70,height:58}}/>
                            <View style={{flex:1}} />
                            <Image source={require('./img/xqjh_yali.png')} style={{margin:5,width:70,height:58}}/>
                            <View style={{flex:1}} />
                            <Image source={require('./img/xqjh_yali.png')} style={{margin:5,width:70,height:58}}/>
                            <View style={{flex:1}} />
                        </View>

                    </View>

                    <Image source={require('./img/xqjh_bottom.png')} style={{marginTop:10,width:360,height:100}}/>

                    <Text style={{marginLeft:10,marginTop:20}}>登录 www.hdworklife.com获得更多健康信息</Text>

                </View>
            );
        }

        else if (route.id === 'srgh') {
            return (
                <View style={{flex: 1,backgroundColor: "#ffffff"}}>
                    <TitleBarView onPress={()=>this._onBcakTo()} title="生日关怀" />
                    <View style={{height:1,backgroundColor:'#cccccc'}}/>

                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this._renderRow}
                    />

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
                initialRoute={{ title: 'ygxq', id:'ygxq'}}
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

    _onBcakTo: function () {
        if (_navigatorXQ == null) {
            return false;
        }
        if (_navigatorXQ.getCurrentRoutes().length === 1) {
            return false;
        }
        _navigatorXQ.pop();
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

});

module.exports = YGXQModule;