/**
 * Created by Diablo on 16/3/8.
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
var _navigatorHD;
var TitleBarView = require('./title_bar.js');

/**
 * 员工互动区
 */
var YGHDModule = React.createClass({

    getInitialState: function () {
        return {
            page:1,
            pageName:'问卷调查',
        };
    },

    isMyPage: function (menu) {
        return menu === this.state.pageName;
    },

    configureScenceAndroid: function () {
        return Navigator.SceneConfigs.FadeAndroid;
    },

    renderSceneAndroid: function (route, navigator) {
        _navigatorHD = navigator;
        if (route.id === 'yghd') {
            return (
                <View style={styles.container}>
                    <TitleBarView onPress={()=>this._onBcak()} title="员工互动区" />
                    <View style={{height:1,backgroundColor:'#cccccc'}}/>

                    <TouchableHighlight
                        underlayColor="rgb(210, 230, 255)"
                        activeOpacity={0.5}
                        onPress={()=> _navigatorHD.push({title:'wjdc',id:'wjdc'})}>
                        <View
                            style={{height:70,backgroundColor:'#ffffff',borderRadius:3,flexDirection:'row',margin:5,alignItems: 'center'}}>
                            <Image source={require('./img/ic_interaction.png')} style={{height:70,width:80}}/>
                            <View style={{margin:5}}>
                                <Text style={{fontSize:15,color: '#000000'}}>问卷调查</Text>
                                <Text style={{fontSize:12}}>来自平安内部的问卷调查</Text>
                            </View>
                            <View style={{flex:1}}/>
                            <Image source={require('./img/ic_more.png')} style={{height:30,width:20,marginRight:5}}/>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight
                        underlayColor="rgb(210, 230, 255)"
                        activeOpacity={0.5}
                        onPress={()=> _navigatorHD.push({title:'hltd',id:'hltd'})}>
                        <View
                            style={{height:70,backgroundColor:'#ffffff',borderRadius:3,flexDirection:'row',margin:5,alignItems: 'center'}}>
                            <Image source={require('./img/ic_xqjh.png')} style={{height:70,width:80}}/>
                            <View style={{margin:5}}>
                                <Text style={{fontSize:15,color: '#000000'}}>欢乐天地</Text>
                                <Text style={{fontSize:12}}>平安人的乐园</Text>
                            </View>
                            <View style={{flex:1}}/>
                            <Image source={require('./img/ic_more.png')} style={{height:30,width:20,marginRight:5}}/>
                        </View>
                    </TouchableHighlight>

                    <Text style={{fontSize:12,alignSelf: 'center'}}>更多精精彩敬请期待</Text>

                </View>
            );
        }

        else if (route.id === 'wjdc') {
            return (
                <View style={{flex: 1,backgroundColor: "#ffffff"}}>
                    <TitleBarView onPress={()=>this._onBcakTo()} title="调查问卷" />
                    <View style={{height:1,backgroundColor:'#cccccc'}}/>

                    <View style={{flexDirection:'row',height:50,backgroundColor:'#ffffff',alignItems:'center'}}>
                        <TouchableHighlight
                            underlayColor="rgb(210, 230, 255)"
                            style={{flex:1,alignItems:'center'}}
                            activeOpacity={0.5}
                            onPress={()=> this._onSetValue('问卷调查')}>
                            <Text style={this.isMyPage('问卷调查') ? styles.ChooseItem:styles.notChooseItem}>问卷调查</Text>
                        </TouchableHighlight>
                        <View style={{width:1,height:30,backgroundColor:'#cccccc'}}/>
                        <TouchableHighlight
                            underlayColor="rgb(210, 230, 255)"
                            style={{flex:1,alignItems:'center'}}
                            activeOpacity={0.5}
                            onPress={()=> this._onSetValue('我发起的')}>
                            <Text style={this.isMyPage('我发起的') ? styles.ChooseItem:styles.notChooseItem}>我发起的</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={{height:1,backgroundColor:'#cccccc'}}/>

                    <SwitchView flage={this.state.pageName}/>

                </View>
            );
        }

        else if (route.id === 'hltd') {
            return (
                <View style={{flex: 1,backgroundColor: "#ffffff"}}>
                    <TitleBarView onPress={()=>this._onBcakTo()} title="欢乐天地" />

                    <View style={{height:1,backgroundColor:'#cccccc'}}/>
                    <Image source={require('./img/youxi.png')} style={{flex:1,resizeMode:'cover'}}/>
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
                initialRoute={{ title: 'yghd', id:'yghd'}}
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
        if (_navigatorHD == null) {
            return false;
        }
        if (_navigatorHD.getCurrentRoutes().length === 1) {
            return false;
        }
        _navigatorHD.pop();
        return true;
    },

    _onSetValue: function (value) {
        this.setState({pageName: value})
    }
});


var SwitchView = React.createClass(
    {

        getInitialState: function () {
            var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            return {
                dataSource: ds.cloneWithRows(['夏斯勇', '陈文景', '姜洪波', '蔡行', '龙宽', '黄志君', '刘文龙', '陈结', '马富林', '徐云辉', '那啥', '申永鹤']),
            };
        },
        _renderRow: function (rowData:string, sectionID:number, rowID:number) {
            return (
                <TouchableOpacity>
                    <View>
                        <View style={{height:60,}}>
                            <Text style={{fontSize:18,marginLeft:10}}>{rowData}</Text>

                            <View style={{marginLeft:10,flexDirection:'row',margin: 5,alignItems:'center'}}>
                                <Text style={{fontSize:12}}>平安银行烂七八糟部门</Text>
                                <View style={{flex:1}}/>
                                <Text style={{marginRight:20,fontSize:16,color:'#ffcc00'}}>2.29</Text>
                            </View>
                            <View style={{height:1,backgroundColor:'#cccccc'}}/>
                        </View>
                    </View>
                </TouchableOpacity>
            );
        },

        render: function () {
            var flag = this.props.flage;
            if (flag === "问卷调查") {
                return (
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this._renderRow}
                    />
                );
            }
            else {
                return (
                    <View style={{flex:1,marginTop:10}}>
                    </View>
                );
            }

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

    notChooseItem:{
        fontSize:18
    },

    ChooseItem:{
        fontSize:18,
        backgroundColor:'#ccff00'
    }

});

module.exports = YGHDModule;