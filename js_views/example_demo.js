/**
 * shenyonghe689
 */
'use strict';
import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Image,
    Text,
    View,
    TextInput,
    ViewPagerAndroid,
    TouchableHighlight,
    TouchableOpacity,
    TouchableNativeFeedback,
    ListView,
    WebView,
    Navigator,
} from 'react-native';

var ToolbarAndroid = require('ToolbarAndroid');

class RNAndroidHelloWorld2 extends Component {

    render() {
        return (
            <View>
                <ToolbarAndroid
                    actions={[{title: 'Settings', icon: require('./img/a.png'), show: 'always'}]}
                    navIcon={require('./img/a.png')}
                    style={styles.toolbar}
                    title="主标题"/>
                <Text style={{marginLeft:50,marginTop:50,textAlign:'center',fontStyle:'italic'}}
                >设置文本的间距,居左，居顶部50</Text>
                <Text numberOfLines={2} style={{lineHeight:50,textAlign:'center',fontStyle:'italic'}}>
                    测试行高 测试行高 测试行高 测试行高 测试行高 测试行高 测试行高 测试行高 测试行高 测试行高 测试行高
                    测试行高 测试行高 测试行高 测试行高 测试行高 测试行高
                </Text>
                <View style={{marginLeft:5,marginTop:10,marginRight:5}}>

                    <View style={{flexDirection:'row'}}>
                        <View style={{width:150}}>
                            <Image source={require('./img/a.png')} style={styles.imgStyle}/>
                            <Text style={styles.imageTxtStyle}>KTV</Text>
                        </View>
                        <View style={{width:150}}>
                            <Image source={require('./img/a.png')} style={styles.imgStyle}/>
                            <Text style={styles.imageTxtStyle}>外卖</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',marginTop:10}}>
                        <View style={{width:150}}>
                            <Image source={require('./img/a.png')} style={styles.imgStyle}/>
                            <Text style={styles.imageTxtStyle}>今日新单</Text>
                        </View>
                        <View style={{width:150}}>
                            <Image source={require('./img/a.png')} style={styles.imgStyle}/>
                            <Text style={styles.imageTxtStyle}>丽人</Text>
                        </View>
                    </View>
                </View>
                <ViewPagerAndroid style={styles.pageStyle} initialPage={0}>
                    <View style={{backgroundColor:"red"}}>
                        <Text>First Page!</Text>
                    </View>
                    <View style={{backgroundColor:"yellow"}}>
                        <Text>Second Page!</Text>
                    </View>
                </ViewPagerAndroid>
            </View>
        );
    }
}

var TouchableDemo = React.createClass({
    getInitialState: function () {
        return {
            eventLog: [],
        };
    },
    render: function () {
        return (
            <View >
                <ToolbarAndroid
                    actions={[{title: 'Settings', icon: require('./img/a.png'), show: 'always'}]}
                    navIcon={require('./img/a.png')}
                    style={styles.toolbar}
                    title="主标题"/>
                <View style={[styles.row, {justifyContent: 'center'}]}>
                    <TouchableOpacity
                        style={styles.wrapper}
                        onPress={() => this._appendEvent('press')}
                        onPressIn={() => this._appendEvent('pressIn')}
                        onPressOut={() => this._appendEvent('pressOut')}
                        onLongPress={() => this._appendEvent('longPress')}>
                        <Text style={styles.button}>
                            Press Me
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.eventLogBox}>
                    {this.state.eventLog.map((e, ii) => <Text key={ii}>{e}</Text>)}
                </View>
            </View>
        );
    },
    _appendEvent: function (eventName) {
        var limit = 6;
        var eventLog = this.state.eventLog.slice(0, limit - 1);
        eventLog.unshift(eventName);
        this.setState({eventLog});
        alert(eventName);
    },
});

var TouchableButtonDemo = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    TouchableNativeFeedback实例
                </Text>
                <TouchableNativeFeedback style={{marginTop:20}}
                                         background={TouchableNativeFeedback.SelectableBackground()}>
                    <View style={{width: 150, height: 100,backgroundColor:"#e9eaed"}}>
                        <Text style={{margin: 30}}>Button</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }
});

var THUMB_URLS = [
    require('./img/a.png'),
    require('./img/a.png'),
    require('./img/a.png'),
    require('./img/a.png'),
    require('./img/a.png'),
    require('./img/a.png'),
    require('./img/a.png'),
    require('./img/a.png'),
    require('./img/a.png'),
    require('./img/a.png'),
    require('./img/a.png'),
    require('./img/a.png'),
    require('./img/a.png'),
];

var ListViewDemo = React.createClass({
    getInitialState: function () {
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return {
            dataSource: ds.cloneWithRows(['row 1', 'row 2', 'row 3', 'row 4', 'row 5', 'row 6', 'row 7', 'row 8', 'row 9', 'row 10', 'row 11', 'row 12']),
        };
    },
    _renderRow: function (rowData:string, sectionID:number, rowID:number) {
        var imgSource = THUMB_URLS[rowID];
        return (
            <TouchableOpacity>
                <View>
                    <View style={styles.row}>
                        <Image style={styles.thumb} source={imgSource}/>
                        <Text style={{flex:1,fontSize:16,color:'blue'}}>
                            {rowData + '我是测试行号哦~'}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    },
    render: function () {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this._renderRow}
            />
        );
    }
});

var DEFAULT_URL = 'http://www.baidu.com';

var WebViewDemo = React.createClass({
    render: function () {
        return (
            <View style={{flex:1}}>
                <Text style={{height:40}}>简单的网页显示</Text>
                <WebView style={styles.webview_style}
                         url={DEFAULT_URL}
                         startInLoadingState={true}
                         domStorageEnabled={true}
                         javaScriptEnabled={true}
                >
                </WebView>
            </View>
        );
    },
});

//登录模块
var TestInput = React.createClass({
    render: function () {
        return (
            <View style={{backgroundColor:'#f4f4f4',flex:1}}>
                <Image
                    style={styles.style_image}
                    source={require('./img/a.png')}/>
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
                    onPress={() => this._appendEvent(1)}>
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
    webview_style: {
        backgroundColor: '#00ff00',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#F6F6F6',
    },
    thumb: {
        width: 50,
        height: 50,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    toolbar: {
        backgroundColor: '#e9eaed',
        height: 56,
    },
    horizontal: {
        flexDirection: 'row',
    },
    imgStyle: {
        alignSelf: 'center',
        width: 70,
        height: 70,
    },
    imageTxtStyle: {
        marginTop: 5,
        alignSelf: 'center',
        fontSize: 11,
        color: '#555555',
        textAlign: 'center',
    },
    pageStyle: {
        alignItems: 'center',
        padding: 20,
        height: 200,
    },
    button: {
        width: 150,
        height: 50,
        textAlign: 'center',
        backgroundColor: '#007AFF',
    },
    wrapper: {
        borderRadius: 8,
    },
    eventLogBox: {
        padding: 10,
        margin: 10,
        height: 120,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#f0f0f0',
        backgroundColor: '#f9f9f9',
    },
    containerNar: {
        flex: 1,
    },
    messageText: {
        fontSize: 17,
        fontWeight: '500',
        padding: 15,
        marginTop: 50,
        marginLeft: 15,
    },
    buttonNar: {
        backgroundColor: 'white',
        padding: 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#CDCDCD',
    },

    //登录
    style_image: {
        borderRadius: 35,
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

class NavButton extends React.Component {
    render() {
        return (
            <TouchableHighlight
                style={styles.buttonNar}
                underlayColor="#B5B5B5"
                onPress={this.props.onPress}>
                <Text style={styles.buttonText}>{this.props.text}</Text>
            </TouchableHighlight>
        );
    }
}

class NavMenu extends React.Component {
    render() {
        return (
            <View style={styles.scene}>
                <Text style={styles.messageText}>{this.props.message}</Text>
                <NavButton
                    onPress={() => {
            this.props.navigator.push({
              message: '向右拖拽关闭页面',
              sceneConfig: Navigator.SceneConfigs.FloatFromRight,
            });
          }}
                    text="从右边向左切入页面(带有透明度变化)"
                />
                <NavButton
                    onPress={() => {
            this.props.navigator.push({
              message: '向下拖拽关闭页面',
              sceneConfig: Navigator.SceneConfigs.FloatFromBottom,
            });
          }}
                    text="从下往上切入页面(带有透明度变化)"
                />
                <NavButton
                    onPress={() => {
            this.props.navigator.pop();
          }}
                    text="页面弹出(回退一页)"
                />
                <NavButton
                    onPress={() => {
            this.props.navigator.popToTop();
          }}
                    text="页面弹出(回退到最后一页)"
                />
            </View>
        );
    }
}

class NavigatorDemo extends Component {
    render() {
        return (
            <Navigator
                style={styles.containerNar}
                initialRoute={{ message: '初始页面', }}
                renderScene={ (route, navigator) => <NavMenu
            message={route.message}
            navigator={navigator}
          />}
                configureScene={(route) => {
          if (route.sceneConfig) {
            return route.sceneConfig;
          }
          return Navigator.SceneConfigs.FloatFromBottom;
        }}
            />
        );
    }
}

module.exports = ExampleMoudle;
