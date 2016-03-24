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


var InstructionsModule = React.createClass({

    configureScenceAndroid: function () {
        return Navigator.SceneConfigs.FadeAndroid;
    },

    renderSceneAndroid: function (route, navigator) {
        _navigatorpersion = navigator;

        if (route.id === 'instructions') {
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
                        <Text style={styles.barTitleStyle}>使用手册</Text>
                        <Text style={styles.barHideTxtStyle}>返回</Text>
                    </View>
                    <View style={{height:1,backgroundColor:'#000000'}}/>

                    <View style={{height:1,backgroundColor:'#cccccc',marginTop :20}}/>
                    <ItemView title="快乐平安" />
                    <View style={{height:1,backgroundColor:'#cccccc'}}/>
                    <ItemView title="视频会议" />
                    <View style={{height:1,backgroundColor:'#cccccc'}}/>
                    <ItemView title="电话会议" />
                    <View style={{height:1,backgroundColor:'#cccccc'}}/>
                    <ItemView title="解锁指南" />
                    <View style={{height:1,backgroundColor:'#cccccc'}}/>
                </View>
            );
        }

        else if (route.id === 'klpa') {
            return (
                <KLPAView />
            );
        }

        else if (route.id === 'sphy') {
            return (
                <SPHYView />
            );
        }

        else if (route.id === 'dhhy') {
            return (
                <DHHYView />
            );
        }

        else if (route.id === 'jszn') {
            return (
                <JSZNView />
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
                initialRoute={{ title: 'Instructions', id:'instructions'}}
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
    },

    onBack: function () {
        if (_navigatorpersion == null) {
            return false;
        }
        if (_navigatorpersion.getCurrentRoutes().length === 1) {
            return false;
        }
        _navigatorpersion.pop();
        return true;
    }
});

var KLPAView = React.createClass(
    {
        render: function () {
            return (
                <View style={{flex: 1,backgroundColor: "#ffffff"}}>
                    <View style={styles.barBox}>
                        <TouchableHighlight
                            underlayColor="rgb(210, 230, 255)"
                            activeOpacity={0.5}
                            onPress={() => this.onBack()}>
                            <View style={{flexDirection:'row',alignItems: 'center',justifyContent: 'center',}}>
                                <Image source={require('./img/actionbar_back.png')} style={styles.imgStyleBar}/>
                                <Text style={styles.barTxtStyle}>返回</Text>
                            </View>
                        </TouchableHighlight>
                        <Text style={styles.barTitleStyle}>快乐平安</Text>
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
        onBack: function () {
            if (_navigatorpersion == null) {
                return false;
            }
            if (_navigatorpersion.getCurrentRoutes().length === 1) {
                return false;
            }
            _navigatorpersion.pop();
            return true;
        }
    }
);

var SPHYView = React.createClass(
    {
        render: function () {
            return (
                <View style={{flex: 1,backgroundColor: "#ffffff"}}>
                    <View style={styles.barBox}>
                        <TouchableHighlight
                            underlayColor="rgb(210, 230, 255)"
                            activeOpacity={0.5}
                            onPress={() => this.onBack()}>
                            <View style={{flexDirection:'row',alignItems: 'center',justifyContent: 'center',}}>
                                <Image source={require('./img/actionbar_back.png')} style={styles.imgStyleBar}/>
                                <Text style={styles.barTxtStyle}>返回</Text>
                            </View>
                        </TouchableHighlight>
                        <Text style={styles.barTitleStyle}>视频会议</Text>
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
        onBack: function () {
            if (_navigatorpersion == null) {
                return false;
            }
            if (_navigatorpersion.getCurrentRoutes().length === 1) {
                return false;
            }
            _navigatorpersion.pop();
            return true;
        }
    }
);

var DHHYView = React.createClass(
    {
        render: function () {
            return (
                <View style={{flex: 1,backgroundColor: "#ffffff"}}>
                    <View style={styles.barBox}>
                        <TouchableHighlight
                            underlayColor="rgb(210, 230, 255)"
                            activeOpacity={0.5}
                            onPress={() => this.onBack()}>
                            <View style={{flexDirection:'row',alignItems: 'center',justifyContent: 'center',}}>
                                <Image source={require('./img/actionbar_back.png')} style={styles.imgStyleBar}/>
                                <Text style={styles.barTxtStyle}>返回</Text>
                            </View>
                        </TouchableHighlight>
                        <Text style={styles.barTitleStyle}>视频电话</Text>
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
        onBack: function () {
            if (_navigatorpersion == null) {
                return false;
            }
            if (_navigatorpersion.getCurrentRoutes().length === 1) {
                return false;
            }
            _navigatorpersion.pop();
            return true;
        }
    }
);

var JSZNView = React.createClass(
    {
        render: function () {
            return (
                <View style={{flex: 1,backgroundColor: "#ffffff"}}>
                    <View style={styles.barBox}>
                        <TouchableHighlight
                            underlayColor="rgb(210, 230, 255)"
                            activeOpacity={0.5}
                            onPress={() => this.onBack()}>
                            <View style={{flexDirection:'row',alignItems: 'center',justifyContent: 'center',}}>
                                <Image source={require('./img/actionbar_back.png')} style={styles.imgStyleBar}/>
                                <Text style={styles.barTxtStyle}>返回</Text>
                            </View>
                        </TouchableHighlight>
                        <Text style={styles.barTitleStyle}>解锁指南</Text>
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
        onBack: function () {
            if (_navigatorpersion == null) {
                return false;
            }
            if (_navigatorpersion.getCurrentRoutes().length === 1) {
                return false;
            }
            _navigatorpersion.pop();
            return true;
        }
    }
);

var ItemView = React.createClass(
    {
        render: function () {
            return (
                <TouchableHighlight
                    underlayColor="rgb(210, 230, 255)"
                    activeOpacity={0.5}
                    onPress={() => this.onItemClick(this.props.title)}>
                    <View
                        style={{height:50,flexDirection:'row',alignItems: 'center',backgroundColor:'#ffffff'}}>
                        <Text style={styles.itemTxtStyle}>{this.props.title}</Text>
                        <View style={{flex:1}}/>
                        <Image source={require('./img/ic_more.png')} style={styles.itemImgRightStyle}/>
                    </View>
                </TouchableHighlight>
            );
        },
        onItemClick: function (title) {
            if(title === "快乐平安"){
                _navigatorpersion.push({title: 'klpa', id: 'klpa'});
            }
            else if(title === "视频会议")
            {
                _navigatorpersion.push({title: 'sphy', id: 'sphy'});
            }
            else if(title === "电话会议")
            {
                _navigatorpersion.push({title: 'dhhy', id: 'dhhy'});
            }
            else if(title === "解锁指南")
            {
                _navigatorpersion.push({title: 'jszn', id: 'jszn'});
            }
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

module.exports = InstructionsModule;