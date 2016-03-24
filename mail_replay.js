/**
 * Created by shenyonghe689 on 16/2/26.
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
    TextInput,
    DatePickerAndroid,
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

var MailReplyView = React.createClass(
    {

        getInitialState: function () {
            return {
                trueSwitchIsOn: true,
                falseSwitchIsOn: false,
            };
        },

        render: function () {
            _navigator = this.props.navigator;

            return (
                <View style={styles.container}>
                    <View style={styles.barBox}>
                        <TouchableHighlight
                            underlayColor="rgb(210, 230, 255)"
                            activeOpacity={0.5}
                            onPress={() => this.onBackToMain()}>
                            <Image source={require('./img/actionbar_back.png')} style={styles.imgStyleBar}/>
                        </TouchableHighlight>
                        <Text style={styles.barTxtStyle}>工作台</Text>
                        <TouchableHighlight
                            underlayColor="rgb(210, 230, 255)"
                            activeOpacity={0.5}
                            onPress={() => this.onBackToMain()}>
                            <Text style={styles.saveTxtStyle}> 保存 </Text>
                        </TouchableHighlight>
                    </View>
                    <View style={{backgroundColor:'#666666',height: 1}}/>
                    <Text style={styles.remindTxtStyle}>开启后设置邮件外出答复</Text>
                    <View style={{backgroundColor:'#ffffff',height: 30,flexDirection:'row',alignItems: 'center'}}>
                        <Text style={styles.bigTxtStyle}>平安内部邮件自动答复</Text>
                        <View style={{flex:1}}/>
                        <Switch
                            onValueChange={(value) => this.setState({falseSwitchIsOn: value})}
                            style={{width:50,marginRight:10}}
                            value={this.state.falseSwitchIsOn}/>
                    </View>
                    <HideInView flage={this.state.falseSwitchIsOn}/>
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

var HideInView = React.createClass(
    {
        getInitialState: function () {
            return {
                trueSwitchIsOn: true,
                falseSwitchIsOn: false,
            };
        },
        render: function () {
            var flag = this.props.flage;
            if (flag) {
                return (
                    <View style={{marginTop:10}}>
                        <Text style={styles.remindTxtStyle}>开启后设置邮件外出答复</Text>
                        <TextInput
                            style={{height:30,backgroundColor:'#ffffff'}}
                            numberOfLines={3}
                            autoFocus={true}
                            underlineColorAndroid={'transparent'}
                            textAlign="start"
                        />
                        <Text style={styles.remindTxtStyle}>开启后设置邮件外出答复</Text>
                        <View style={{backgroundColor:'#ffffff',height: 30,flexDirection:'row',alignItems: 'center'}}>
                            <Text style={styles.bigTxtStyle}>平安外部邮件自动答复</Text>
                            <View style={{flex:1}}/>
                            <Switch
                                onValueChange={(value) => this.setState({falseSwitchIsOn: value})}
                                style={{width:50,marginRight:10}}
                                value={this.state.falseSwitchIsOn}/>
                        </View>
                        <HideOutView flage={this.state.falseSwitchIsOn}/>
                    </View>
                );
            }
            else {
                return (
                    <View />
                );
            }

        },
    });

var HideOutView = React.createClass(
    {
        getInitialState: function () {
            return {
                trueSwitchIsOn: true,
                falseSwitchIsOn: false,
            };
        },
        render: function () {
            var flag = this.props.flage;
            if (flag) {
                return (
                    <View style={{marginTop:10}}>
                        <Text style={styles.remindTxtStyle}>开启后设置邮件外出答复</Text>
                        <TextInput
                            style={{height:30,backgroundColor:'#ffffff'}}
                            numberOfLines={3}
                            autoFocus={true}
                            underlineColorAndroid={'transparent'}
                            textAlign="start"
                        />
                        <Text style={styles.remindTxtStyle}>开启后只在指定时间答复</Text>
                        <View style={{backgroundColor:'#ffffff',height: 30,flexDirection:'row',alignItems: 'center'}}>
                            <Text style={styles.bigTxtStyle}>指定时间答复</Text>
                            <View style={{flex:1}}/>
                            <Switch
                                onValueChange={(value) => this.setState({falseSwitchIsOn: value})}
                                style={{width:50,marginRight:10}}
                                value={this.state.falseSwitchIsOn}/>
                        </View>
                        <HideSetView flage={true}/>
                    </View>
                );
            }
            else {
                return (
                    <HideSetView flage={true}/>
                );
            }

        },
    });

var HideSetView = React.createClass(
    {
        getInitialState: function () {
            return {
                startText: '开始时间',
                endText: '结束时间',
            };
        },

        //进行创建时间日期选择器
        async showPicker(stateKey, options) {

            var newState = {};
            const {action, year, month, day} = await DatePickerAndroid.open(options);
            if (action === DatePickerAndroid.dismissedAction) {
                newState[stateKey + 'Text'] = 'dismissed';
            } else {
                var date = new Date(year, month, day);
                newState[stateKey + 'Text'] = date.toLocaleDateString();
                newState[stateKey + 'Date'] = date;
            }
            this.setState(newState);
        },

        render: function () {
            var flag = this.props.flage;
            if (flag) {
                return (
                    <View style={{marginTop:10}}>
                        <TouchableHighlight
                            underlayColor="rgb(210, 230, 255)"
                            activeOpacity={0.5}
                            onPress={this.showPicker.bind(this, 'start', {date: this.state.simpleDate,simpleDate:new Date()})}>
                            <View
                                style={{backgroundColor:'#ffffff',height: 50,flexDirection:'row',alignItems: 'center',marginTop:1}}>
                                <Text style={styles.bigTxtStyle}>开始时间</Text>
                                <View style={{flex:1}}/>
                                <CustomButton text={this.state.startText}
                                              onPress={this.showPicker.bind(this, 'start', {date: this.state.simpleDate,simpleDate:new Date()})}/>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            underlayColor="rgb(210, 230, 255)"
                            activeOpacity={0.5}>
                            <View
                                style={{backgroundColor:'#ffffff',height: 50,flexDirection:'row',alignItems: 'center',marginTop:1}}>
                                <Text style={styles.bigTxtStyle}>结束时间</Text>
                                <View style={{flex:1}}/>
                                <CustomButton text={this.state.endText}
                                              onPress={this.showPicker.bind(this, 'end', {date: this.state.simpleDate,simpleDate:new Date()})}/>
                            </View>
                        </TouchableHighlight>
                    </View>
                );
            }
            else {
                return (
                    <View />
                );
            }

        },
    });


var CustomButton = React.createClass(
    {

        render: function () {
            return (
                <TouchableHighlight
                    style={styles.button}
                    underlayColor="#a5a5a5"
                    onPress={this.props.onPress}>
                    <View style={{backgroundColor:'#ffffff',height:30,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:18,color:'#ffcc00'}}>{this.props.text}</Text>
                    </View>

                </TouchableHighlight>
            );
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

    remindTxtStyle: {
        color: '#999999',
        marginTop: 10,
        marginLeft: 5,
    },
    bigTxtStyle: {
        marginLeft: 10,
        color: '#000000',
        fontSize: 15
    },

    saveTxtStyle: {
        margin: 5,
        alignSelf: 'center',
        fontSize: 28,
        color: '#ff9900',
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

    imgStyleBar: {
        width: 30,
        height: 30,
        margin: 5,
        alignSelf: 'center',
    },

});

module.exports = MailReplyView;