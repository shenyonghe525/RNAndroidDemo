/**
 * Created by shenyonghe689 on 16/2/26.
 */
'use strict';
var React = require('react-native');
var {
    StyleSheet,
    Text,
    View,
    BackAndroid,
    TouchableHighlight,
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

var SortModule = React.createClass({

    render: function () {
        _navigator = this.props.navigator;

        return (
            <View style={styles.container}>
                <View style={styles.barBox}>
                    <Text style={styles.bigHideTxtStyle}>完成</Text>
                    <Text style={styles.barTxtStyle}>模块制定</Text>
                    <TouchableHighlight
                        underlayColor="rgb(210, 230, 255)"
                        activeOpacity={0.5}
                        onPress={() => this.onBackToMain()}>
                        <Text style={styles.bigTxtStyle}>完成</Text>
                    </TouchableHighlight>
                </View>
                <View style={{height:1,backgroundColor:'#666666'}} />
                <View style={{flexDirection:'row',alignItems: 'center',height:40,backgroundColor:'#ffffff'}}>
                    <Text style={styles.norTxtStyle}>我的模块</Text>
                    <Text>长按拖动排序,点击进入</Text>
                </View>
                <View style={{height:1,backgroundColor:'#666666'}} />
                <View style={{flexDirection:'row'}}>
                    <TxtBoxView title="员工心晴计划"/>
                    <TxtBoxView title="员工互动区"/>
                </View>
                <View style={{flexDirection:'row'}}>
                    <TxtBoxView title="考勤"/>
                    <TxtBoxView title="签报"/>
                </View>
                <View style={{flexDirection:'row'}}>
                    <TxtBoxView title="电话会议"/>
                    <TxtBoxView title="电子会议签报"/>
                </View>
                <View style={{flexDirection:'row'}}>
                    <TxtBoxView title="查工资"/>
                    <TxtBoxView title="财酷"/>
                </View>
                <View style={{flexDirection:'row'}}>
                    <TxtBoxView title="绩效管理"/>
                    <TxtBoxView title="企业通讯录"/>
                </View>
                <View style={{flexDirection:'row'}}>
                    <TxtBoxView title="公文公告"/>
                    <TxtBoxView title="员工专享"/>
                </View>
                <View style={{height:1,backgroundColor:'#666666',marginTop: 10}} />
                <View style={{flexDirection:'row',alignItems: 'center',height:40,backgroundColor:'#ffffff'}}>
                    <Text style={styles.norTxtStyle}>更多模块</Text>
                    <Text>点击"+"添加到"我的模块"</Text>
                </View>
                <View style={{height:1,backgroundColor:'#666666'}} />

            </View>
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
    }

});

var TxtBoxView = React.createClass(
    {
        render: function () {
            return (
                <TouchableHighlight
                    underlayColor="rgb(210, 230, 255)"
                    activeOpacity={0.5}
                    style={{flex:1}}>
                    <View style={styles.TxtBox}>
                        <Text >{this.props.title}</Text>
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

    remindTxtStyle: {
        color: '#999999',
        marginTop: 10,
        marginLeft: 5,
    },
    bigTxtStyle: {
        margin: 5,
        alignSelf: 'center',
        fontSize: 20,
        color: '#ff9900',
        textAlign: 'center',
    },
    TxtBox:{
        margin: 5,
        height:40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#ffffff",
        flex: 1
    },

    norTxtStyle: {
        margin: 5,
        alignSelf: 'center',
        fontSize: 16,
        textAlign: 'center',
    },
    bigHideTxtStyle: {
        margin: 5,
        alignSelf: 'center',
        fontSize: 20,
        color: '#00ff9900',
        textAlign: 'center',
    },
    barTxtStyle: {
        flex: 1,
        margin: 5,
        alignSelf: 'center',
        fontSize: 28,
        color: '#666666',
        textAlign: 'center',
    },


});

module.exports = SortModule;