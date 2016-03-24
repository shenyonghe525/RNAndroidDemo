/**
 * Created by shenyonghe689 on 16/3/2.
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

var UnLockWayModule = React.createClass({



    render: function () {
        _navigator = this.props.navigator;
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
                    <Text style={styles.barTitleStyle}>解锁方式</Text>
                </View>
                <View style={{height:1,backgroundColor:'#cccccc'}}/>

                <Text style={{marginLeft:15,marginTop:10}}>快乐平安登录解锁</Text>
                <View style={{height:1,backgroundColor:'#cccccc',marginTop:5}}/>

                <ItemView title="人脸识别"/>
                <View style={{height:1,backgroundColor:'#cccccc'}}/>

                <View style={{height:1,backgroundColor:'#cccccc',marginTop:20}}/>
                <ItemView title="手势密码"/>
                <View style={{height:1,backgroundColor:'#cccccc'}}/>
                <ItemView title="显示手势"/>
                <View style={{height:1,backgroundColor:'#cccccc'}}/>
                <TouchableHighlight
                    underlayColor="rgb(210, 230, 255)"
                    activeOpacity={0.5}>
                    <View style={styles.itemBox}>
                        <Text style={styles.itemTxtStyle}>修改手势密码</Text>
                        <View style={{flex:1}}/>
                        <Image style={{width:15,height: 30,marginRight:10}} source={require('./img/ic_more.png')}/>
                    </View>
                </TouchableHighlight>
                <View style={{height:1,backgroundColor:'#cccccc',marginTop:20}}/>
                <ItemView title="指纹解锁"/>
                <View style={{height:1,backgroundColor:'#cccccc'}}/>
                <Text style={{marginLeft:15,marginTop:10}}>工作台模块解锁</Text>
                <View style={{height:1,backgroundColor:'#cccccc',marginTop:5}}/>
                <ItemView title="查工资"/>
                <View style={{height:1,backgroundColor:'#cccccc'}}/>
                <Text style={{marginLeft:15,marginTop:10}}>开启后需要验证</Text>
            </View>
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

module.exports = UnLockWayModule;