/**
 * Created by shenyonghe689 on 16/2/24.
 */

'use strict';
var React = require('react-native');
var {
    StyleSheet,
    Image,
    Text,
    View,
    TouchableHighlight,
    ScrollView,
    Navigator,
    Alert,
    ToastAndroid,
    NativeModules
    } = React;

var MailReplyView = require('./mail_replay.js');
var SortModule = require('./sort.js');
var PersionInfoModule = require('./persion_info.js');
var UnLockWayModule = require('./set_unlockway.js');
var SettingSetModule = require('./set_set.js');
var OpinionBackModule = require('./opinionback.js');
var InstructionsModule = require('./instructions.js');
var AboutModule = require('./about.js');
var PayRollModule = require('./payroll.js');
var YGXQModule = require('./ygxqplan.js');
var YGHDModule = require('./yghdqu.js');
var KaoQinModule = require('./kaoqin.js');
var QianBaoModule = require('./qianbao.js');
var TeleconFerenceModule = require('./teleconference.js');
var DZHYYDModule = require('./dzhysq.js');
var JIXIAOModule = require('./jixiaoguanli.js');
var AddressBookModule = require('./address_book.js');
var GWGGModule = require('./gwgg.js');
var YGZXModule = require('./ygzx.js');

var _navigator;

var MainView = React.createClass({

    getInitialState: function () {
        return {
            pageName: '工作台',
        };
    },

    isActive: function (menu) {
        return menu === this.state.pageName;
    },

    configureScenceAndroid: function () {
        return Navigator.SceneConfigs.FloatFromBottom;
    },

    renderSceneAndroid: function (route, navigator) {
        _navigator = navigator;

        if (route.id === 'main') {
            return (
                <View style={styles.container}>
                    <PageView pageName={this.state.pageName}/>
                    <View style={styles.barBox}>
                        <TouchableHighlight
                            underlayColor="rgb(210, 230, 255)"
                            activeOpacity={0.5}
                            style={{flex:1}}
                            onPress={() => this._onClickEvent("工作台")}>
                            <View >
                                <Image
                                    source={this.isActive("工作台") ? require('./img/ic_main_workspace_select.png'): require('./img/ic_main_workspace_normal.png')}
                                    style={styles.imgStyleBottomBar}/>
                                <Text style={styles.imageTxtStyle}>工作台</Text>
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight
                            underlayColor="rgb(210, 230, 255)"
                            activeOpacity={0.5}
                            style={{flex:1}}
                            onPress={() => this._onClickEvent("通知")}>
                            <View >
                                <Image
                                    source={this.isActive("通知") ? require('./img/ic_main_workspace_select.png'): require('./img/ic_main_workspace_normal.png')}
                                    style={styles.imgStyleBottomBar}/>
                                <Text style={styles.imageTxtStyle}>通知</Text>
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight
                            underlayColor="rgb(210, 230, 255)"
                            activeOpacity={0.5}
                            style={{flex:1}}
                            onPress={() => this._onClickEvent("天下通")}>
                            <View >
                                <Image
                                    source={this.isActive("天下通") ? require('./img/ic_main_workspace_select.png'): require('./img/ic_main_workspace_normal.png')}
                                    style={styles.imgStyleBottomBar}/>
                                <Text style={styles.imageTxtStyle}>天下通</Text>
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight
                            underlayColor="rgb(210, 230, 255)"
                            activeOpacity={0.5}
                            style={{flex:1}}
                            onPress={() => this._onClickEvent("个人中心")}>
                            <View >
                                <Image
                                    source={this.isActive("个人中心") ? require('./img/ic_main_workspace_select.png'): require('./img/ic_main_workspace_normal.png')}
                                    style={styles.imgStyleBottomBar}/>
                                <Text style={styles.imageTxtStyle}>个人中心</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
            );
        }

        else if (route.id === 'mail') {
            return (
                <MailReplyView navigator={_navigator} route={route}/>
            );
        }

        else if (route.id === 'sort') {
            return (
                <SortModule navigator={_navigator} route={route}/>
            );
        }

        else if (route.id === 'persion') {
            return (
                <PersionInfoModule navigator={_navigator} route={route}/>
            );
        }

        else if (route.id === 'unlockway') {
            return (
                <UnLockWayModule navigator={_navigator} route={route}/>
            );
        }

        else if (route.id === 'setset') {
            return (
                <SettingSetModule navigator={_navigator} route={route}/>
            );
        }

        else if (route.id === 'opinionback') {
            return (
                <OpinionBackModule navigator={_navigator} route={route}/>
            );
        }

        else if (route.id === 'instructions') {
            return (
                <InstructionsModule navigator={_navigator} route={route}/>
            );
        }

        else if (route.id === 'about') {
            return (
                <AboutModule navigator={_navigator} route={route}/>
            );
        }

        else if (route.id === 'payroll') {
            return (
                <PayRollModule navigator={_navigator} route={route}/>
            );
        }

        else if (route.id === 'ygxq') {
            return (
                <YGXQModule navigator={_navigator} route={route}/>
            );
        }

        else if (route.id === 'yghd') {
            return (
                <YGHDModule navigator={_navigator} route={route}/>
            );
        }

        else if (route.id === 'kaoqin') {
            return (
                <KaoQinModule navigator={_navigator} route={route}/>
            );
        }

        else if (route.id === 'qianbao') {
            return (
                <QianBaoModule navigator={_navigator} route={route}/>
            );
        }

        else if (route.id === 'teleconference') {
            return (
                <TeleconFerenceModule navigator={_navigator} route={route}/>
            );
        }

        else if (route.id === 'dhhyyd') {
            return (
                <DZHYYDModule navigator={_navigator} route={route}/>
            );
        }

        else if (route.id === 'jxgl') {
            return (
                <JIXIAOModule navigator={_navigator} route={route}/>
            );
        }

        else if (route.id === 'addressbook') {
            return (
                <AddressBookModule navigator={_navigator} route={route}/>
            );
        }

        else if (route.id === 'gwgg') {
            return (
                <GWGGModule navigator={_navigator} route={route}/>
            );
        }

        else if (route.id === 'ygzx') {
            return (
                <YGZXModule navigator={_navigator} route={route}/>
            );
        }

    },

    render: function () {
        var renderScene = this.renderSceneAndroid;
        return (
            <Navigator
                debugOverlay={false}
                initialRoute={{ title: 'Main', id:'main'}}
                configureScence={() => Navigator.SceneConfigs.FadeAndroid}
                renderScene={renderScene}
            />
        );
    },

    _onClickEvent: function (title) {
        if (title === "天下通") {
        var MyToastAndroid = NativeModules.MyToastAndroid;
            Alert.alert('温馨提醒', '是否要跳到天下通?', [
                {text: '取消', onPress: ()=>MyToastAndroid.show('你点击了取消~', MyToastAndroid.SHORT)},
                {text: '确定', onPress: ()=>ToastAndroid.show('你点击了确定~', ToastAndroid.SHORT)}
            ])
        }
        else {
            this.setState({pageName: title});
        }
    },

});


/**
 * 工作台页面
 */
var PageView = React.createClass(
    {

        render: function () {
            var pageName = this.props.pageName;

            if (pageName === "工作台") {
                return (
                    <WorkView />
                );
            }

            else if(pageName === "通知"){
                return (
                    <NotifiCation />
                );
            }

            else if(pageName === "个人中心"){
                return (
                    <SettingView />
                );
            }

            else {
                return (
                    <Text>未定义页面</Text>
                );
            }

        },
    }
);

var WorkView = React.createClass(
    {
        render: function () {
            return (
                <View style={styles.container}>
                    <View style={styles.barBox}>
                        <TouchableHighlight
                            underlayColor="rgb(210, 230, 255)"
                            activeOpacity={0.5}
                            onPress={() => _navigator.push({title:'MailReplay',id:'mail'})}>
                            <Image source={require('./img/icon_mail_reply.png')} style={styles.imgStyleBar}/>
                        </TouchableHighlight>
                        <Text style={styles.barTxtStyle}>工作台</Text>
                        <TouchableHighlight
                            underlayColor="rgb(210, 230, 255)"
                            activeOpacity={0.5}
                            onPress={() => _navigator.push({title:'Sort',id:'sort'})}>
                            <Image source={require('./img/ic_main_sort_normal.png')} style={styles.imgStyleBar}/>
                        </TouchableHighlight>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={true} style={{flex:1}}>
                        <View style={{flexDirection:'row'}}>
                            <ImgBoxView src={require('./img/ic_tongxunlu_nor.png')} title="员工心晴计划"/>
                            <ImgBoxView src={require('./img/ic_tongxunlu_nor.png')} title="员工互动区"/>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <ImgBoxView src={require('./img/ic_tongxunlu_nor.png')} title="考勤"/>
                            <ImgBoxView src={require('./img/ic_tongxunlu_nor.png')} title="签报"/>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <ImgBoxView src={require('./img/ic_tongxunlu_nor.png')} title="电话会议"/>
                            <ImgBoxView src={require('./img/ic_tongxunlu_nor.png')} title="电子会议预定"/>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <ImgBoxView src={require('./img/ic_tongxunlu_nor.png')} title="查工资"/>
                            <ImgBoxView src={require('./img/ic_tongxunlu_nor.png')} title="财酷"/>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <ImgBoxView src={require('./img/ic_tongxunlu_nor.png')} title="绩效管理"/>
                            <ImgBoxView src={require('./img/ic_tongxunlu_nor.png')} title="企业通讯录"/>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <ImgBoxView src={require('./img/ic_tongxunlu_nor.png')} title="公文公告"/>
                            <ImgBoxView src={require('./img/ic_tongxunlu_nor.png')} title="员工专享"/>
                        </View>
                    </ScrollView>
                </View>
            );
        },
    }
);

var ImgBoxView = React.createClass(
    {
        render: function () {
            return (
                <TouchableHighlight
                    underlayColor="rgb(210, 230, 255)"
                    activeOpacity={0.5}
                    style={{flex:1}}
                    onPress={() => this._onClickEvent(this.props.title)}>
                    <View style={styles.imgBox}>
                        <Image source={this.props.src} style={styles.imgStyle}/>
                        <Text style={styles.imageTxtStyle}>{this.props.title}</Text>
                    </View>
                </TouchableHighlight>
            );
        },
        _onClickEvent: function (title) {
            if (title === "查工资") {
                _navigator.push({title: 'payroll', id: 'payroll'});
            }
            else if (title === "员工心晴计划") {
                _navigator.push({title: 'ygxq', id: 'ygxq'});
            }
            else if (title === "员工互动区") {
                _navigator.push({title: 'yghd', id: 'yghd'});
            }
            else if (title === "考勤") {
                _navigator.push({title: 'kaoqin', id: 'kaoqin'});
            }
            else if (title === "签报") {
                _navigator.push({title: 'qianbao', id: 'qianbao'});
            }
            else if (title === "电话会议") {
                _navigator.push({title: 'teleconference', id: 'teleconference'});
            }
            else if (title === "电子会议预定") {
                _navigator.push({title: 'dhhyyd', id: 'dhhyyd'});
            }
            else if (title === "财酷") {
                Alert.alert('温馨提醒', '是否要跳到财酷H5页面?', [
                    {text: '取消', onPress: ()=>ToastAndroid.show('你点击了取消~', ToastAndroid.SHORT)},
                    {text: '确定', onPress: ()=>ToastAndroid.show('你点击了确定~', ToastAndroid.SHORT)}
                ])
            }
            else if (title === "绩效管理") {
                _navigator.push({title: 'jxgl', id: 'jxgl'});
            }
            else if (title === "企业通讯录") {
                _navigator.push({title: 'addressbook', id: 'addressbook'});
            }
            else if (title === "公文公告") {
                _navigator.push({title: 'gwgg', id: 'gwgg'});
            }
            else if (title === "员工专享") {
                _navigator.push({title: 'ygzx', id: 'ygzx'});
            }
        },
    }
);

/**
 * 通知页面
 */
var NotifiCation = React.createClass(
    {
        render: function () {
            return (
                <View style={{flex:1,backgroundColor:'#cccccc'}}>
                    <View style={styles.barBox}>
                        <Text style={{fontSize:20,color: '#000000'}}>通知</Text>
                    </View>
                </View>
            );
        },
    }
);

/**
 * 设置页面
 */
var SettingView = React.createClass(
    {
        render: function () {
            return (
                <View style={{flex:1,backgroundColor:'#ffffff'}}>
                    <View style={styles.barBox}>
                        <Text style={styles.barTxtStyle}>个人中心</Text>
                    </View>
                    <View style={styles.itemLineStyle}/>
                    <ScrollView showsVerticalScrollIndicator={true} style={{flex:1}}>
                        <View style={styles.photoStyle}>
                            <Image source={require('./img/man.png')} style={styles.photoImgStyle}/>
                            <Text style={styles.bigTxtStyle}>申永鹤</Text>
                        </View>
                        <View style={styles.itemDivLineStyle}/>
                        <ItemView src={require('./img/icon_persional_info.png')} title="个人资料"/>
                        <View style={styles.itemShortLineStyle}/>
                        <ItemView src={require('./img/icon_yqb_info.png')} title="壹钱包"/>
                        <View style={styles.itemLineStyle}/>

                        <View style={styles.itemDivLineStyle}/>
                        <ItemView src={require('./img/icon_persional_info.png')} title="解锁方式"/>
                        <View style={styles.itemShortLineStyle}/>
                        <ItemView src={require('./img/icon_yqb_info.png')} title="设置"/>
                        <View style={styles.itemLineStyle}/>

                        <View style={styles.itemDivLineStyle}/>
                        <ItemView src={require('./img/icon_persional_info.png')} title="意见反馈"/>
                        <View style={styles.itemShortLineStyle}/>
                        <ItemView src={require('./img/icon_yqb_info.png')} title="小安机器人"/>
                        <View style={styles.itemLineStyle}/>

                        <View style={styles.itemDivLineStyle}/>
                        <ItemView src={require('./img/icon_persional_info.png')} title="使用手册"/>
                        <View style={styles.itemShortLineStyle}/>
                        <ItemView src={require('./img/icon_yqb_info.png')} title="关于"/>
                        <View style={styles.itemLineStyle}/>


                        <View style={styles.itemDivLineStyle}/>
                    </ScrollView>

                </View>
            );
        },

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
                    <View style={styles.itemBoxStyle}>
                        <Image source={this.props.src} style={styles.itemImgLeftStyle}/>
                        <Text style={styles.itemTxtStyle}>{this.props.title}</Text>
                        <Image source={require('./img/ic_more.png')} style={styles.itemImgRightStyle}/>
                    </View>
                </TouchableHighlight>
            );
        },
        onItemClick: function (title) {

            if (title === "个人资料") {
                _navigator.push({title: 'persion', id: 'persion'});
            }
            else if (title === "壹钱包") {
                alert("跳转到壹钱包相关页面");
            }
            else if (title === "解锁方式") {
                _navigator.push({title: 'unlock', id: 'unlockway'});
            }
            else if (title === "设置") {
                _navigator.push({title: 'Setset', id: 'setset'});
            }
            else if (title === "意见反馈") {
                _navigator.push({title: 'Opinionback', id: 'opinionback'});
            }
            else if (title === "小安机器人") {
                alert("跳转到小安机器人相关页面");
            }
            else if (title === "使用手册") {
                _navigator.push({title: 'Instructions', id: 'instructions'});
            }
            else if (title === "关于") {
                _navigator.push({title: 'About', id: 'about'});
            }

        }
    }
);


const styles = StyleSheet.create({


    container: {
        flex: 1,
        backgroundColor: "#cc9966"
    },

    barBox: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        height: 60,
        backgroundColor: "#ffffff",
    },

    imgBox: {
        margin: 10,
        height: 70,
        backgroundColor: "#0a333333",
        flex: 1
    },

    imgStyle: {
        marginTop: 10,
        alignSelf: 'center',
        width: 35,
        height: 35,
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
    imgStyleBottomBar: {
        marginTop: 5,
        width: 30,
        height: 30,
        alignSelf: 'center',
    },

    imageTxtStyle: {
        marginTop: 5,
        alignSelf: 'center',
        fontSize: 11,
        color: '#555555',
        textAlign: 'center',
    },
    photoStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 150,
        backgroundColor: "#ff6347",
    },

    photoImgStyle: {
        height: 70,
        width: 70,
    },

    itemImgLeftStyle: {
        margin: 10,
        height: 30,
        width: 30,
    },
    itemImgRightStyle: {
        margin: 10,
        height: 15,
        width: 10,
    },

    itemTxtStyle: {
        flex: 1,
        margin: 5,
        alignSelf: 'center',
        fontSize: 18,
        textAlign: 'left',
    },

    itemBoxStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
    },

    itemShortLineStyle: {
        height: 1,
        backgroundColor: '#cccccc',
        marginLeft: 60
    },

    itemLineStyle: {
        height: 1,
        backgroundColor: '#cccccc',
    },

    itemDivLineStyle: {
        height: 1,
        backgroundColor: '#cccccc',
        marginTop: 20,
    }

});

module.exports = MainView;