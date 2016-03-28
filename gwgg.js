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
var _navigatorGG;
var TitleBarView = require('./title_bar.js');

/**
 * 公文公告模块页面
 */
var GWGGModule = React.createClass({

    getInitialState: function () {
        return {
            pageName: "公司公文",
        };
    },

    isMyPage: function (menu) {
        return menu === this.state.pageName;
    },

    configureScenceAndroid: function () {
        return Navigator.SceneConfigs.FadeAndroid;
    },

    renderSceneAndroid: function (route, navigator) {
        _navigatorGG = navigator;
        if (route.id === 'gwgg') {
            return (
                <View style={styles.container}>

                    <PagesView pageName={this.state.pageName}/>
                    <View style={{height:60,alignItems:'center',flexDirection:'row',backgroundColor:'#eeeeee'}}>
                        <TouchableHighlight
                            style={{flex:1}}
                            underlayColor="rgb(210, 230, 255)"
                            activeOpacity={0.5}
                            onPress={()=> this._onChangePage('公司公文')}>
                            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                                <Image source={require('./img/ic_gongwen_press.png')} style={{width:30,height:30}}/>
                                <Text style={this.isMyPage('公司公文') ? styles.ChooseItem:styles.notChooseItem}>公司公文</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            style={{flex:1}}
                            underlayColor="rgb(210, 230, 255)"
                            activeOpacity={0.5}
                            onPress={()=> this._onChangePage('公司公告')}>
                            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                                <Image source={require('./img/ic_gongwen_press.png')} style={{width:30,height:30}}/>
                                <Text style={this.isMyPage('公司公告') ? styles.ChooseItem:styles.notChooseItem}>公司公告</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            style={{flex:1}}
                            underlayColor="rgb(210, 230, 255)"
                            activeOpacity={0.5}
                            onPress={()=> this._onChangePage('平安要闻')}>
                            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                                <Image source={require('./img/ic_gongwen_press.png')} style={{width:30,height:30}}/>
                                <Text style={this.isMyPage('平安要闻') ? styles.ChooseItem:styles.notChooseItem}>平安要闻</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            style={{flex:1}}
                            underlayColor="rgb(210, 230, 255)"
                            activeOpacity={0.5}
                            onPress={()=> this._onChangePage('新闻通稿')}>
                            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                                <Image source={require('./img/ic_gongwen_press.png')} style={{width:30,height:30}}/>
                                <Text style={this.isMyPage('新闻通稿') ? styles.ChooseItem:styles.notChooseItem}>新闻通稿</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            style={{flex:1}}
                            underlayColor="rgb(210, 230, 255)"
                            activeOpacity={0.5}
                            onPress={()=> this._onChangePage('机构动态')}>
                            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                                <Image source={require('./img/ic_gongwen_press.png')} style={{width:30,height:30}}/>
                                <Text style={this.isMyPage('机构动态') ? styles.ChooseItem:styles.notChooseItem}>机构动态</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
            );

        }

        else if (route.id === 'hysz') {
            return (
                <View style={styles.container}>

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
                initialRoute={{ title: 'gwgg', id:'gwgg'}}
                configureScence={{ configureScence }}
                renderScene={renderScene}
            />
        );
    },

    _onChangePage: function (pageName) {
        this.setState({pageName: pageName})
    },
});

var PagesView = React.createClass(
    {

        getInitialState: function () {
            var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            return {
                dataSource: ds.cloneWithRows(['关于XXX任职通知', '关于XXX任职通知', '关于XXX任职通知', '关于XXX任职通知', '关于XXX任职通知', '关于XXX任职通知', '关于XXX任职通知',
                    '关于XXX任职通知', '关于XXX任职通知', '关于XXX任职通知', '关于XXX任职通知', '关于XXX任职通知']),
            };
        },

        _renderRow: function (rowData:string, sectionID:number, rowID:number) {
            return (
                <TouchableOpacity>
                    <View style={{margin: 10,height:70,backgroundColor:'#ffffff',justifyContent:'center',alignItems:'center',
                        borderRadius: 5,borderColor:'#eeeeee',borderStyle:'solid',borderWidth:1}}>
                        <View style={{margin:5,backgroundColor:'#ffffff',justifyContent:'center'}}>
                            <Text style={{marginLeft:10,fontSize:16,color:'#000000'}}>{rowData}</Text>
                        </View>
                        <View
                            style={{margin:5,backgroundColor:'#ffffff',justifyContent:'center',flexDirection:'row'}}>
                            <Text style={{marginLeft:10,fontSize:14}}>公司公文-平安8号</Text>
                            <View style={{flex:1}}/>
                            <Text style={{marginRight:10,fontSize:14}}>2016-03-14</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            );
        },

        render: function () {

            var pageName = this.props.pageName;
            if (pageName === "公司公文") {
                return (
                    <View style={{flex:1}}>
                        <TitleBarView onPress={()=>this._onBcak()} title="公司公文" />
                        <View style={{height:1,backgroundColor:'#cccccc'}}/>
                        <ListView
                            dataSource={this.state.dataSource}
                            renderRow={this._renderRow}
                        />
                    </View>
                );
            }
            else if (pageName === "公司公告") {
                return (
                    <View style={{flex:1}}>
                        <TitleBarView onPress={()=>this._onBcak()} title="公司公告" />
                        <View style={{height:1,backgroundColor:'#cccccc'}}/>
                        <ListView
                            dataSource={this.state.dataSource}
                            renderRow={this._renderRow}
                        />
                    </View>
                );
            }
            else if (pageName === '平安要闻') {
                return (
                    <View style={{flex:1}}>
                        <TitleBarView onPress={()=>this._onBcak()} title="平安新闻" />
                        <View style={{height:1,backgroundColor:'#cccccc'}}/>
                        <ListView
                            dataSource={this.state.dataSource}
                            renderRow={this._renderRow}
                        />
                    </View>
                );
            }
            else if (pageName === '新闻通稿') {
                return (
                    <View style={{flex:1}}>
                        <TitleBarView onPress={()=>this._onBcak()} title="新闻通稿" />
                        <View style={{height:1,backgroundColor:'#cccccc'}}/>
                        <ListView
                            dataSource={this.state.dataSource}
                            renderRow={this._renderRow}
                        />
                    </View>
                );
            }
            else if (pageName === '机构动态') {
                return (
                    <View style={{flex:1}}>
                        <TitleBarView onPress={()=>this._onBcak()} title="机构动态" />
                        <View style={{height:1,backgroundColor:'#cccccc'}}/>
                        <ListView
                            dataSource={this.state.dataSource}
                            renderRow={this._renderRow}
                        />
                    </View>
                );
            }

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
        fontSize: 12
    },

    ChooseItem: {
        fontSize: 12,
        backgroundColor: '#ccff00'
    }

});

module.exports = GWGGModule;