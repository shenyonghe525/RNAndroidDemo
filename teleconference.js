/**
 * Created by Diablo on 16/3/11.
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
    TextInput,
    ScrollView,
    Switch,
    Alert,
    ToastAndroid,
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
var _navigatorTF;
var TitleBarView = require('./title_bar.js');

/**
 * 电话会议
 */
var TeleconFerenceModule = React.createClass({

    getInitialState: function () {
        return {
            pageName: "历史会议",
            trueSwitchIsOn1: true,
            falseSwitchIsOn1: false,

            trueSwitchIsOn2: true,
            falseSwitchIsOn2: false,

            trueSwitchIsOn3: true,
            falseSwitchIsOn3: false,

            trueSwitchIsOn4: true,
            falseSwitchIsOn4: false,
        };
    },

    isMyPage: function (menu) {
        return menu === this.state.pageName;
    },

    configureScenceAndroid: function () {
        return Navigator.SceneConfigs.FadeAndroid;
    },

    renderSceneAndroid: function (route, navigator) {
        _navigatorTF = navigator;
        if (route.id === 'teleconference') {
            return (
                <View style={styles.container}>

                    <PagesView pageName={this.state.pageName}/>
                    <View style={{height:60,alignItems:'center',flexDirection:'row',backgroundColor:'#eeeeee'}}>
                        <TouchableHighlight
                            style={{flex:1}}
                            underlayColor="rgb(210, 230, 255)"
                            activeOpacity={0.5}
                            onPress={()=> this._onChangePage('历史会议')}>
                            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                                <Image source={require('./img/ic_gongwen_press.png')} style={{width:30,height:30}}/>
                                <Text style={this.isMyPage('历史会议') ? styles.ChooseItem:styles.notChooseItem}>历史会议</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            style={{flex:1}}
                            underlayColor="rgb(210, 230, 255)"
                            activeOpacity={0.5}
                            onPress={()=> this._onChangePage('召开会议')}>
                            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                                <Image source={require('./img/ic_gongwen_press.png')} style={{width:30,height:30}}/>
                                <Text style={this.isMyPage('召开会议') ? styles.ChooseItem:styles.notChooseItem}>召开会议</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            style={{flex:1}}
                            underlayColor="rgb(210, 230, 255)"
                            activeOpacity={0.5}
                            onPress={()=> this._onChangePage('我的会议')}>
                            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                                <Image source={require('./img/ic_gongwen_press.png')} style={{width:30,height:30}}/>
                                <Text style={this.isMyPage('我的会议') ? styles.ChooseItem:styles.notChooseItem}>我的会议</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            style={{flex:1}}
                            underlayColor="rgb(210, 230, 255)"
                            activeOpacity={0.5}
                            onPress={()=> this._onChangePage('会场管理')}>
                            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                                <Image source={require('./img/ic_gongwen_press.png')} style={{width:30,height:30}}/>
                                <Text style={this.isMyPage('会场管理') ? styles.ChooseItem:styles.notChooseItem}>会场管理</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            style={{flex:1}}
                            underlayColor="rgb(210, 230, 255)"
                            activeOpacity={0.5}
                            onPress={()=> this._onChangePage('系统管理')}>
                            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                                <Image source={require('./img/ic_gongwen_press.png')} style={{width:30,height:30}}/>
                                <Text style={this.isMyPage('系统管理') ? styles.ChooseItem:styles.notChooseItem}>系统管理</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
            );

        }

        else if (route.id === 'hysz') {
            return (
                <View style={styles.container}>
                    <View style={styles.barBox}>
                        <TouchableHighlight
                            underlayColor="rgb(210, 230, 255)"
                            activeOpacity={0.5}
                            onPress={()=> this._onBcakTo()}>
                            <View style={{flexDirection:'row',alignItems: 'center',justifyContent: 'center',}}>
                                <Image source={require('./img/actionbar_back.png')} style={styles.imgStyleBar}/>
                            </View>
                        </TouchableHighlight>
                        <Text style={styles.barTitleStyle}>会议设置</Text>
                        <TouchableHighlight
                            underlayColor="rgb(210, 230, 255)"
                            activeOpacity={0.5}>
                            <View style={{flexDirection:'row',alignItems: 'center',justifyContent: 'center',}}>
                                <Image source={require('./img/actionbar_work.png')} style={styles.imgRightStyleBar}/>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <View style={{height:1,backgroundColor:'#cccccc'}}/>
                    <ScrollView showsVerticalScrollIndicator={true} style={{flex:1}}>

                        <View style={{height:1,backgroundColor:'#cccccc'}}/>
                        <TouchableHighlight
                            underlayColor="rgb(210, 230, 255)"
                            activeOpacity={0.5}
                            onPress={()=> alert('会议')}>
                            <View style={{height:60,backgroundColor:'#ffffff',alignItems:'center',
                                     flexDirection:'row'}}>
                                <View style={{width:60,height:60,justifyContent: 'center',}}>
                                    <Image source={require('./img/man.png')}
                                           style={{width:30,height:30,margin:10}}/>
                                </View>
                                <View style={{width:100,height:50,justifyContent: 'center',}}>
                                    <Text>会议主题</Text>
                                </View>
                                <TextInput
                                    style={{backgroundColor:'#ffffff',height:40,flex:1}}
                                    numberOfLines={1}
                                    autoFocus={true}
                                    placeholder='会议主题'
                                    underlineColorAndroid={'transparent'}
                                    textAlign="start"/>
                            </View>
                        </TouchableHighlight>
                        <View style={{height:1,backgroundColor:'#cccccc'}}/>

                        <TouchableHighlight
                            underlayColor="rgb(210, 230, 255)"
                            activeOpacity={0.5}
                            onPress={()=> alert('会议')}>
                            <View style={{height:60,backgroundColor:'#ffffff',alignItems:'center',
                                     flexDirection:'row'}}>
                                <View style={{width:60,height:60,justifyContent: 'center',}}>
                                    <Image source={require('./img/man.png')}
                                           style={{width:30,height:30,margin:10}}/>
                                </View>
                                <View style={{width:100,height:50,justifyContent: 'center',}}>
                                    <Text>预订人</Text>
                                </View>

                            </View>
                        </TouchableHighlight>
                        <View style={{height:1,backgroundColor:'#cccccc'}}/>

                        <TouchableHighlight
                            underlayColor="rgb(210, 230, 255)"
                            activeOpacity={0.5}
                            onPress={()=> alert('会议')}>
                            <View style={{height:60,backgroundColor:'#ffffff',alignItems:'center',
                                     flexDirection:'row'}}>
                                <View style={{width:60,height:60,justifyContent: 'center',}}>
                                    <Image source={require('./img/man.png')}
                                           style={{width:30,height:30,margin:10}}/>
                                </View>
                                <View style={{width:100,height:50,justifyContent: 'center',}}>
                                    <Text>预订人是否参加会议</Text>
                                </View>
                                <View style={{flex:1}}/>
                                <Switch
                                    onValueChange={(value) => this.setState({falseSwitchIsOn1: value})}
                                    style={{width:50,marginRight:10}}
                                    value={this.state.falseSwitchIsOn1}/>
                            </View>
                        </TouchableHighlight>
                        <View style={{height:1,backgroundColor:'#cccccc'}}/>

                        <TouchableHighlight
                            underlayColor="rgb(210, 230, 255)"
                            activeOpacity={0.5}
                            onPress={()=> alert('会议')}>
                            <View style={{height:60,backgroundColor:'#ffffff',alignItems:'center',
                                     flexDirection:'row'}}>
                                <View style={{width:60,height:60,justifyContent: 'center',}}>
                                    <Image source={require('./img/man.png')}
                                           style={{width:30,height:30,margin:10}}/>
                                </View>
                                <View style={{width:100,height:50,justifyContent: 'center',}}>
                                    <Text>预订人参会号码</Text>
                                </View>
                                <TextInput
                                    style={{backgroundColor:'#ffffff',height:40,flex:1}}
                                    numberOfLines={1}
                                    autoFocus={true}
                                    placeholder='参会号码'
                                    underlineColorAndroid={'transparent'}
                                    textAlign="start"/>
                            </View>
                        </TouchableHighlight>
                        <View style={{height:1,backgroundColor:'#cccccc'}}/>

                        <TouchableHighlight
                            underlayColor="rgb(210, 230, 255)"
                            activeOpacity={0.5}
                            onPress={()=> alert('会议')}>
                            <View style={{height:60,backgroundColor:'#ffffff',alignItems:'center',
                                     flexDirection:'row'}}>
                                <View style={{width:60,height:60,justifyContent: 'center',}}>
                                    <Image source={require('./img/man.png')}
                                           style={{width:30,height:30,margin:10}}/>
                                </View>
                                <View style={{width:100,height:50,justifyContent: 'center',}}>
                                    <Text>短信通知</Text>
                                </View>
                                <View style={{flex:1}}/>
                                <Switch
                                    onValueChange={(value) => this.setState({falseSwitchIsOn2: value})}
                                    style={{width:50,marginRight:10}}
                                    value={this.state.falseSwitchIsOn2}/>
                            </View>
                        </TouchableHighlight>
                        <View style={{height:1,backgroundColor:'#cccccc'}}/>

                        <TouchableHighlight
                            underlayColor="rgb(210, 230, 255)"
                            activeOpacity={0.5}
                            onPress={()=> alert('会议')}>
                            <View style={{height:60,backgroundColor:'#ffffff',alignItems:'center',
                                     flexDirection:'row'}}>
                                <View style={{width:60,height:60,justifyContent: 'center',}}>
                                    <Image source={require('./img/man.png')}
                                           style={{width:30,height:30,margin:10}}/>
                                </View>
                                <View style={{width:100,height:50,justifyContent: 'center',}}>
                                    <Text>全体静音</Text>
                                </View>
                                <View style={{flex:1}}/>
                                <Switch
                                    onValueChange={(value) => this.setState({falseSwitchIsOn3: value})}
                                    style={{width:50,marginRight:10}}
                                    value={this.state.falseSwitchIsOn3}/>
                            </View>
                        </TouchableHighlight>
                        <View style={{height:1,backgroundColor:'#cccccc'}}/>

                        <TouchableHighlight
                            underlayColor="rgb(210, 230, 255)"
                            activeOpacity={0.5}
                            onPress={()=> alert('会议')}>
                            <View style={{height:60,backgroundColor:'#ffffff',alignItems:'center',
                                     flexDirection:'row'}}>
                                <View style={{width:60,height:60,justifyContent: 'center',}}>
                                    <Image source={require('./img/man.png')}
                                           style={{width:30,height:30,margin:10}}/>
                                </View>
                                <View style={{width:100,height:50,justifyContent: 'center',}}>
                                    <Text>预约会议</Text>
                                </View>
                                <View style={{flex:1}}/>
                                <Switch
                                    onValueChange={(value) => this.setState({falseSwitchIsOn4: value})}
                                    style={{width:50,marginRight:10}}
                                    value={this.state.falseSwitchIsOn4}/>
                            </View>
                        </TouchableHighlight>
                        <View style={{height:1,backgroundColor:'#cccccc'}}/>


                    </ScrollView>

                    <TouchableHighlight
                        underlayColor="rgb(210, 230, 255)"
                        activeOpacity={0.5}
                        onPress={()=> alert('开始会议')}>
                        <View style={{marginLeft:10,marginBottom:10,height:40,width:340,backgroundColor:'#ff6600',alignItems:'center',
                            justifyContent:'center',borderRadius: 5,borderColor:'#eeeeee',borderStyle:'solid',borderWidth:1}}>
                            <Text>确认</Text>
                        </View>
                    </TouchableHighlight>

                </View>
            );
        }

        else if (route.id === 'wtfk') {
            return (
                <View style={styles.container}>
                    <View style={styles.barBox}>
                        <TouchableHighlight
                            underlayColor="rgb(210, 230, 255)"
                            activeOpacity={0.5}
                            onPress={()=> this._onBcakTo()}>
                            <View style={{flexDirection:'row',alignItems: 'center',justifyContent: 'center',}}>
                                <Image source={require('./img/actionbar_back.png')} style={styles.imgStyleBar}/>
                            </View>
                        </TouchableHighlight>
                        <Text style={styles.barTitleStyle}>系统管理</Text>
                        <TouchableHighlight
                            underlayColor="rgb(210, 230, 255)"
                            activeOpacity={0.5}>
                            <View style={{flexDirection:'row',alignItems: 'center',justifyContent: 'center',}}>
                                <Image source={require('./img/actionbar_work.png')} style={styles.imgRightStyleBar}/>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <View style={{height:1,backgroundColor:'#cccccc'}}/>
                    <TextInput
                        style={{backgroundColor:'#ffffff',height:60}}
                        numberOfLines={1}
                        autoFocus={true}
                        placeholder='联系电话'
                        underlineColorAndroid={'transparent'}
                        textAlign="start"/>
                    <View style={{height:1,backgroundColor:'#cccccc'}}/>
                    <TextInput
                        style={{backgroundColor:'#ffffff',height:200}}
                        numberOfLines={5}
                        autoFocus={true}
                        placeholder='请输入描述'
                        underlineColorAndroid={'transparent'}
                        textAlign="start"/>
                    <View style={{height:1,backgroundColor:'#cccccc'}}/>
                    <View style={{flex:1}}/>
                    <TouchableHighlight
                        underlayColor="rgb(210, 230, 255)"
                        activeOpacity={0.5}
                        onPress={()=> alert('开始会议')}>
                        <View style={{marginLeft:10,marginBottom:10,height:40,width:340,backgroundColor:'#ff6600',alignItems:'center',
                            justifyContent:'center',borderRadius: 5,borderColor:'#eeeeee',borderStyle:'solid',borderWidth:1}}>
                            <Text>提交</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            );
        }

        else if (route.id === 'ckjrh') {
            {
                return (
                    <View style={styles.container}>
                        <View style={styles.barBox}>
                            <TouchableHighlight
                                underlayColor="rgb(210, 230, 255)"
                                activeOpacity={0.5}
                                onPress={()=> this._onBcakTo()}>
                                <View style={{flexDirection:'row',alignItems: 'center',justifyContent: 'center',}}>
                                    <Image source={require('./img/actionbar_back.png')} style={styles.imgStyleBar}/>
                                </View>
                            </TouchableHighlight>
                            <Text style={styles.barTitleStyle}>系统管理</Text>
                            <TouchableHighlight
                                underlayColor="rgb(210, 230, 255)"
                                activeOpacity={0.5}>
                                <View style={{flexDirection:'row',alignItems: 'center',justifyContent: 'center',}}>
                                    <Image source={require('./img/actionbar_work.png')}
                                           style={styles.imgRightStyleBar}/>
                                </View>
                            </TouchableHighlight>
                        </View>
                        <View style={{height:1,backgroundColor:'#cccccc'}}/>
                        <View
                            style={{height:60,justifyContent:'center',borderRadius: 3,borderColor:'#eeeeee',borderStyle:'solid',borderWidth:1}}>
                            <Text style={{fontSize:20}}>参会者拨打以下号码接入会议:</Text>
                        </View>

                        <View style={{marginLeft:10,height:40,justifyContent:'center',}}>
                            <Text style={{fontSize:14}}>1 公司内线IP电话拨打: 662000</Text>
                        </View>
                        <View style={{marginLeft:10,height:40,justifyContent:'center',}}>
                            <Text style={{fontSize:14}}>2 公司内线(国内均可拨打): 662000</Text>
                        </View>
                        <View style={{marginLeft:10,height:40,justifyContent:'center',}}>
                            <Text style={{fontSize:14}}>3 港澳台或国外拨打: 00852-37629000</Text>
                        </View>
                    </View>
                );
            }
        }

        else if (route.id === 'bzzx') {
            {
                return (
                    <View style={styles.container}>
                        <View style={styles.barBox}>
                            <TouchableHighlight
                                underlayColor="rgb(210, 230, 255)"
                                activeOpacity={0.5}
                                onPress={()=> this._onBcakTo()}>
                                <View style={{flexDirection:'row',alignItems: 'center',justifyContent: 'center',}}>
                                    <Image source={require('./img/actionbar_back.png')} style={styles.imgStyleBar}/>
                                </View>
                            </TouchableHighlight>
                            <Text style={styles.barTitleStyle}>系统管理</Text>
                            <TouchableHighlight
                                underlayColor="rgb(210, 230, 255)"
                                activeOpacity={0.5}>
                                <View style={{flexDirection:'row',alignItems: 'center',justifyContent: 'center',}}>
                                    <Image source={require('./img/actionbar_work.png')}
                                           style={styles.imgRightStyleBar}/>
                                </View>
                            </TouchableHighlight>
                        </View>
                        <View style={{height:1,backgroundColor:'#cccccc'}}/>
                        <View
                            style={{height:60,justifyContent:'center',borderRadius: 3,borderColor:'#eeeeee',borderStyle:'solid',borderWidth:1}}>
                            <Text style={{fontSize:20}}>帮助中心</Text>
                        </View>

                        <View style={{marginLeft:10,height:40,justifyContent:'center',}}>
                            <Text style={{fontSize:14}}>1 公司内线IP电话拨打: 662000</Text>
                        </View>
                        <View style={{marginLeft:10,height:40,justifyContent:'center',}}>
                            <Text style={{fontSize:14}}>2 公司内线(国内均可拨打): 662000</Text>
                        </View>
                        <View style={{marginLeft:10,height:40,justifyContent:'center',}}>
                            <Text style={{fontSize:14}}>3 港澳台或国外拨打: 00852-37629000</Text>
                        </View>
                    </View>
                );
            }
        }

        else if (route.id === 'sqkt') {
            {
                return (
                    <View style={styles.container}>
                        <View style={styles.barBox}>
                            <TouchableHighlight
                                underlayColor="rgb(210, 230, 255)"
                                activeOpacity={0.5}
                                onPress={()=> this._onBcakTo()}>
                                <View style={{flexDirection:'row',alignItems: 'center',justifyContent: 'center',}}>
                                    <Image source={require('./img/actionbar_back.png')} style={styles.imgStyleBar}/>
                                </View>
                            </TouchableHighlight>
                            <Text style={styles.barTitleStyle}>系统管理</Text>
                            <TouchableHighlight
                                underlayColor="rgb(210, 230, 255)"
                                activeOpacity={0.5}>
                                <View style={{flexDirection:'row',alignItems: 'center',justifyContent: 'center',}}>
                                    <Image source={require('./img/actionbar_work.png')}
                                           style={styles.imgRightStyleBar}/>
                                </View>
                            </TouchableHighlight>
                        </View>
                        <View style={{height:1,backgroundColor:'#cccccc'}}/>
                        <View
                            style={{height:60,justifyContent:'center',borderRadius: 3,borderColor:'#eeeeee',borderStyle:'solid',borderWidth:1}}>
                            <Text style={{fontSize:20}}>申请开通</Text>
                        </View>

                        <View style={{marginLeft:10,height:40,justifyContent:'center',}}>
                            <Text style={{fontSize:14}}>如需开通预约会议功能:</Text>
                        </View>
                        <View style={{marginLeft:10,height:40,justifyContent:'center',}}>
                            <Text style={{fontSize:14}}>请访问访问公司内部网CASE系统,通过IP电话服务>>电话会议APP预约会议功能申请通道申请</Text>
                        </View>
                    </View>
                );
            }
        }
    },


    render: function () {
        _navigator = this.props.navigator;
        var renderScene = this.renderSceneAndroid;
        var configureScence = this.configureScenceAndroid;
        return (
            <Navigator
                debugOverlay={false}
                initialRoute={{ title: 'teleconference', id:'teleconference'}}
                configureScence={{ configureScence }}
                renderScene={renderScene}
            />
        );
    },

    _onChangePage: function (pageName) {
        if (pageName === '会场管理') {
            Alert.alert('温馨提醒', '您当前莫有正在进行的会议', [
                {text: '确定', onPress: ()=>ToastAndroid.show('你点击了确定~', ToastAndroid.SHORT)}
            ])
        }
        else {
            this.setState({pageName: pageName})
        }

    },

    _onBcakTo: function () {
        if (_navigatorTF == null) {
            return false;
        }
        if (_navigatorTF.getCurrentRoutes().length === 1) {
            return false;
        }
        _navigatorTF.pop();
        return true;
    },

});

var PagesView = React.createClass(
    {

        getInitialState: function () {
            return {
                pageName: "已预约的会议(0)",
            };
        },

        isMyPage: function (menu) {
            return menu === this.state.pageName;
        },

        render: function () {

            var pageName = this.props.pageName;
            if (pageName === "历史会议") {
                return (
                    <View style={{flex:1}}>
                        <TitleBarView onPress={()=>this._onBcak()} title="历史会议" />
                        <View style={{height:1,backgroundColor:'#cccccc'}}/>
                    </View>

                );
            }
            else if (pageName === "召开会议") {
                return (
                    <View style={{flex:1}}>
                        <TitleBarView onPress={()=>this._onBcak()} title="召开会议" />
                        <View style={{height:1,backgroundColor:'#cccccc'}}/>
                        <View style={{height:40,flexDirection:'row',justifyContent:'center',}}>
                            <View style={{marginLeft:10,height:40,width:40,flexDirection:'row',alignItems:'center',
                            justifyContent:'center',borderRadius: 3,borderColor:'#eeeeee',borderStyle:'solid',borderWidth:1}}>
                                <Image source={require('./img/add_friend_normal.png')} style={{width:30,height:30}}/>
                            </View>
                            <TextInput
                                style={{marginLeft:10,height:40,width:200,backgroundColor:'#eeeeee'}}
                                numberOfLines={1}
                                autoFocus={true}
                                placeholder='分机/手机/座机'
                                textAlign="center"/>
                            <View style={{height:40,width:1,backgroundColor:'#cc6600'}}/>
                            <TouchableHighlight
                                underlayColor="rgb(210, 230, 255)"
                                activeOpacity={0.5}
                                onPress={()=> alert('添加')}>
                                <View
                                    style={{height:40,width:40,alignItems:'center',justifyContent:'center',borderRadius: 3,borderColor:'#eeeeee',borderStyle:'solid',borderWidth:1}}>
                                    <Text style={{color:'#cc6600',fontSize:15}}>添加</Text>
                                </View>
                            </TouchableHighlight>

                            <TouchableHighlight
                                underlayColor="rgb(210, 230, 255)"
                                activeOpacity={0.5}
                                onPress={()=> _navigatorTF.push({title: 'hysz', id: 'hysz'})}>
                                <View style={{marginLeft:10,height:40,width:40,flexDirection:'row',alignItems:'center',
                            justifyContent:'center',borderRadius: 3,borderColor:'#eeeeee',borderStyle:'solid',borderWidth:1}}>
                                    <Text style={{color:'#cc6600',fontSize:15}}>设置</Text>
                                </View>
                            </TouchableHighlight>
                        </View>

                        <View style={{height:1,backgroundColor:'#cccccc'}}/>

                        <ScrollView showsVerticalScrollIndicator={true} style={{flex:1}}>

                            <View style={{height:1,backgroundColor:'#cccccc'}}/>
                            <TouchableHighlight
                                underlayColor="rgb(210, 230, 255)"
                                activeOpacity={0.5}
                                onPress={()=> alert('会议')}>
                                <View style={{height:100,backgroundColor:'#ffffff',alignItems:'center',
                                     flexDirection:'row'}}>
                                    <View style={{width:100,height:100,justifyContent: 'center',}}>
                                        <Image source={require('./img/man.png')}
                                               style={{width:75,height:75,margin:10}}/>
                                    </View>
                                    <View style={{width:50,height:50,justifyContent: 'center',}}>
                                        <Text>636968</Text>
                                    </View>
                                    <View style={{flex:1}}/>
                                    <View style={{width:50,height:20,justifyContent: 'center',}}>
                                        <Text>主持人</Text>
                                    </View>
                                    <View style={{flex:1}}/>
                                </View>
                            </TouchableHighlight>
                            <View style={{height:1,backgroundColor:'#cccccc'}}/>


                        </ScrollView>

                        <TouchableHighlight
                            underlayColor="rgb(210, 230, 255)"
                            activeOpacity={0.5}
                            onPress={()=> alert('开始会议')}>
                            <View style={{marginLeft:10,marginBottom:10,height:40,width:340,backgroundColor:'#ff6600',alignItems:'center',
                            justifyContent:'center',borderRadius: 5,borderColor:'#eeeeee',borderStyle:'solid',borderWidth:1}}>
                                <Text>开始会议(1/10)</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                );
            }
            else if (pageName === '我的会议') {
                return (
                    <View style={{flex:1}}>
                        <TitleBarView onPress={()=>this._onBcak()} title="我的会议" />
                        <View style={{height:1,backgroundColor:'#cccccc'}}/>
                        <View style={{height:40,backgroundColor:'#ffffff',flexDirection:'row',alignItems: 'center',}}>
                            <TouchableHighlight
                                style={{flex:1}}
                                underlayColor="rgb(210, 230, 255)"
                                activeOpacity={0.5}
                                onPress={()=> this._onChangePage('已预约的会议(0)')}>
                                <View
                                    style={{height:40,backgroundColor:'#ffffff',flex:1,alignItems: 'center',justifyContent: 'center'}}>
                                    <Text style={this.isMyPage('已预约的会议(0)') ? styles.ChooseItem:styles.notChooseItem}>已预约的会议(0)</Text>
                                </View>
                            </TouchableHighlight>
                            <View style={{height:20,width:1,backgroundColor:'#cccccc'}}/>
                            <TouchableHighlight
                                style={{flex:1}}
                                underlayColor="rgb(210, 230, 255)"
                                activeOpacity={0.5}
                                onPress={()=> this._onChangePage('被邀请的会议(0)')}>
                                <View
                                    style={{height:40,backgroundColor:'#ffffff',flex:1,alignItems: 'center',justifyContent: 'center'}}>
                                    <Text style={this.isMyPage('被邀请的会议(0)') ? styles.ChooseItem:styles.notChooseItem}>被邀请的会议(0)</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                        <View style={{height:1,backgroundColor:'#cccccc'}}/>
                    </View>
                );
            }
            else if (pageName === '系统管理') {
                return (
                    <View style={{flex:1}}>
                        <TitleBarView onPress={()=>this._onBcak()} title="系统管理" />
                        <View style={{height:1,backgroundColor:'#cccccc'}}/>
                        <View style={{height:50,backgroundColor:'#ffffff',alignItems:'center',
                                     flexDirection:'row'}}>
                            <View style={{height:50,justifyContent: 'center',marginLeft:10}}>
                                <Text style={{fontSize:18}}>用户账号</Text>
                            </View>
                            <View style={{flex:1}}/>
                            <View style={{height:50,justifyContent: 'center',marginRight:10}}>
                                <Text style={{fontSize:18}}>SHENYONGHE689</Text>
                            </View>
                        </View>
                        <View style={{height:1,backgroundColor:'#cccccc'}}/>

                        <View style={{height:50,backgroundColor:'#ffffff',alignItems:'center',
                                     flexDirection:'row'}}>
                            <View style={{height:50,justifyContent: 'center',marginLeft:10}}>
                                <Text style={{fontSize:18}}>参会号码</Text>
                            </View>
                            <View style={{flex:1}}/>
                            <View style={{height:50,justifyContent: 'center',marginRight:10}}>
                                <Text style={{fontSize:14}}>636968</Text>
                            </View>
                            <Image style={{width:15,height: 30,marginRight:10}} source={require('./img/ic_more.png')}/>
                        </View>
                        <View style={{height:1,backgroundColor:'#cccccc'}}/>

                        <View style={{height:50,backgroundColor:'#ffffff',alignItems:'center',
                                     flexDirection:'row'}}>
                            <View style={{height:50,justifyContent: 'center',marginLeft:10}}>
                                <Text style={{fontSize:18}}>人数上限</Text>
                            </View>
                            <View style={{flex:1}}/>
                            <View style={{height:50,justifyContent: 'center',marginRight:10}}>
                                <Text style={{fontSize:14}}>10人</Text>
                            </View>
                        </View>
                        <View style={{height:1,backgroundColor:'#cccccc'}}/>

                        <View style={{height:1,backgroundColor:'#cccccc',marginTop:50}}/>
                        <TouchableHighlight
                            underlayColor="rgb(210, 230, 255)"
                            activeOpacity={0.5}
                            onPress={()=> _navigatorTF.push({title: 'wtfk', id: 'wtfk'})}>
                            <View style={{height:50,backgroundColor:'#ffffff',alignItems:'center',
                                     flexDirection:'row'}}>
                                <View style={{height:50,justifyContent: 'center',marginLeft:10}}>
                                    <Text style={{fontSize:18}}>问题反馈</Text>
                                </View>
                                <View style={{flex:1}}/>
                                <Image style={{width:15,height: 30,marginRight:10}}
                                       source={require('./img/ic_more.png')}/>
                            </View>
                        </TouchableHighlight>
                        <View style={{height:1,backgroundColor:'#cccccc'}}/>
                        <TouchableHighlight
                            underlayColor="rgb(210, 230, 255)"
                            activeOpacity={0.5}
                            onPress={()=> _navigatorTF.push({title: 'ckjrh', id: 'ckjrh'})}>
                            <View style={{height:50,backgroundColor:'#ffffff',alignItems:'center',
                                     flexDirection:'row'}}>
                                <View style={{height:50,justifyContent: 'center',marginLeft:10}}>
                                    <Text style={{fontSize:18}}>查看接入号</Text>
                                </View>
                                <View style={{flex:1}}/>
                                <Image style={{width:15,height: 30,marginRight:10}}
                                       source={require('./img/ic_more.png')}/>
                            </View>
                        </TouchableHighlight>
                        <View style={{height:1,backgroundColor:'#cccccc'}}/>
                        <TouchableHighlight
                            underlayColor="rgb(210, 230, 255)"
                            activeOpacity={0.5}
                            onPress={()=> _navigatorTF.push({title: 'bzzx', id: 'bzzx'})}>
                            <View style={{height:50,backgroundColor:'#ffffff',alignItems:'center',
                                     flexDirection:'row'}}>
                                <View style={{height:50,justifyContent: 'center',marginLeft:10}}>
                                    <Text style={{fontSize:18}}>使用帮助</Text>
                                </View>
                                <View style={{flex:1}}/>
                                <Image style={{width:15,height: 30,marginRight:10}}
                                       source={require('./img/ic_more.png')}/>
                            </View>
                        </TouchableHighlight>
                        <View style={{height:1,backgroundColor:'#cccccc'}}/>
                        <TouchableHighlight
                            underlayColor="rgb(210, 230, 255)"
                            activeOpacity={0.5}
                            onPress={()=> _navigatorTF.push({title: 'sqkt', id: 'sqkt'})}>
                            <View style={{height:50,backgroundColor:'#ffffff',alignItems:'center',
                                     flexDirection:'row'}}>
                                <View style={{height:50,justifyContent: 'center',marginLeft:10}}>
                                    <Text style={{fontSize:18}}>申请开通</Text>
                                </View>
                                <View style={{flex:1}}/>
                                <Image style={{width:15,height: 30,marginRight:10}}
                                       source={require('./img/ic_more.png')}/>
                            </View>
                        </TouchableHighlight>
                        <View style={{height:1,backgroundColor:'#cccccc'}}/>

                    </View>
                );
            }

        },

        _onChangePage: function (pageName) {
            this.setState({pageName: pageName})
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
        backgroundColor: "#ffffff"
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

module.exports = TeleconFerenceModule;