/**
 * Created by Diablo on 16/3/14.
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
    DatePickerAndroid,
    Navigator,
    ListView,
    Picker,
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
var _navigatorDZHYYD;
var _navigatorPage;
var TitleBarView = require('./title_bar.js');

/**
 * 电子会议预定
 */
var DZHYYDModule = React.createClass({

    getInitialState: function () {
        return {
            pageName: "预定",
        };
    },

    isMyPage: function (menu) {
        return menu === this.state.pageName;
    },

    configureScenceAndroid: function () {
        return Navigator.SceneConfigs.FadeAndroid;
    },

    renderSceneAndroid: function (route, navigator) {
        _navigatorDZHYYD = navigator;
        if (route.id === 'dhhyyd') {
            return (
                <View style={styles.container}>

                    <PagesView pageName={this.state.pageName}/>
                    <View style={{height:60,alignItems:'center',flexDirection:'row',backgroundColor:'#eeeeee'}}>
                        <TouchableHighlight
                            style={{flex:1}}
                            underlayColor="rgb(210, 230, 255)"
                            activeOpacity={0.5}
                            onPress={()=> this._onChangePage('预定')}>
                            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                                <Image source={require('./img/ic_gongwen_press.png')} style={{width:30,height:30}}/>
                                <Text style={this.isMyPage('预定') ? styles.ChooseItem:styles.notChooseItem}>预定</Text>
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
                            onPress={()=> this._onChangePage('查询')}>
                            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                                <Image source={require('./img/ic_gongwen_press.png')} style={{width:30,height:30}}/>
                                <Text style={this.isMyPage('查询') ? styles.ChooseItem:styles.notChooseItem}>查询</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
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
                initialRoute={{ title: 'dhhyyd', id:'dhhyyd'}}
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
            return {
                pageName: "会议室日程",
                yudingPN: "预订成功的会议",
                yiwanPN: '一周内会议',
            };
        },

        isMyPage: function (menu) {
            return menu === this.state.pageName;
        },

        isYYDMyPage: function (menu) {
            return menu === this.state.yudingPN;
        },

        isYWMyPage: function (menu) {
            return menu === this.state.yiwanPN;
        },

        configureScenceAndroid: function () {
            return Navigator.SceneConfigs.FadeAndroid;
        },

        renderSceneAndroid: function (route, navigator) {
            _navigatorDZHYYD = navigator;
            if (route.id === 'wdhy') {
                return (
                    <View style={{flex:1}}>
                        <TitleBarView onPress={()=> this._onBcak()} title="我的会议"/>
                        <View style={{height:1,backgroundColor:'#cccccc'}}/>

                        <View style={{height:1,backgroundColor:'#cccccc',marginTop: 30}}/>
                        <TouchableHighlight
                            underlayColor="rgb(210, 230, 255)"
                            activeOpacity={0.5}
                            onPress={()=> _navigatorDZHYYD.push({title: 'yydhy', id: 'yydhy'})}>
                            <View style={{flexDirection:'row',alignItems:'center',height:50}}>
                                <Text style={{marginLeft:20,fontSize:16,marginRight:20}}>已预订的会议</Text>
                                <View style={{flex:1}}/>
                                <Image style={{width:15,height: 30,marginRight:10}}
                                       source={require('./img/ic_more.png')}/>
                            </View>
                        </TouchableHighlight>
                        <View style={{height:1,backgroundColor:'#cccccc',marginLeft: 20}}/>

                        <TouchableHighlight
                            underlayColor="rgb(210, 230, 255)"
                            activeOpacity={0.5}
                            onPress={()=>  _navigatorDZHYYD.push({title: 'zzzk', id: 'zzzk'})}>
                            <View style={{flexDirection:'row',alignItems:'center',height:50}}>
                                <Text style={{marginLeft:20,fontSize:16,marginRight:20}}>正在召开的会议</Text>
                                <View style={{flex:1}}/>
                                <Image style={{width:15,height: 30,marginRight:10}}
                                       source={require('./img/ic_more.png')}/>
                            </View>
                        </TouchableHighlight>
                        <View style={{height:1,backgroundColor:'#cccccc',marginLeft: 20}}/>

                        <TouchableHighlight
                            underlayColor="rgb(210, 230, 255)"
                            activeOpacity={0.5}
                            onPress={()=> _navigatorDZHYYD.push({title: 'ywchy', id: 'ywchy'})}>
                            <View style={{flexDirection:'row',alignItems:'center',height:50}}>
                                <Text style={{marginLeft:20,fontSize:16,marginRight:20}}>已完成的会议</Text>
                                <View style={{flex:1}}/>
                                <Image style={{width:15,height: 30,marginRight:10}}
                                       source={require('./img/ic_more.png')}/>
                            </View>
                        </TouchableHighlight>
                        <View style={{height:1,backgroundColor:'#cccccc',}}/>
                    </View>
                );
            }

            else if (route.id === 'yydhy') {
                return (
                    <View style={{flex:1}}>
                        <TitleBarView onPress={()=> this._onBcakTo()} title="已预订会议"/>
                        <View style={{height:1,backgroundColor:'#cccccc'}}/>

                        <View style={{flexDirection:'row',alignItems: 'center',justifyContent: 'center',}}>

                            <TouchableHighlight
                                underlayColor="rgb(210, 230, 255)"
                                activeOpacity={0.5}
                                onPress={()=> this._onYYDChangePage('预订成功的会议')}>
                                <View
                                    style={{height:40,alignItems: 'center',justifyContent: 'center',borderRadius: 3,borderColor:'#eeeeee',borderStyle:'solid',borderWidth:1}}>
                                    <Text style={this.isYYDMyPage('预订成功的会议') ? styles.ChooseItem:styles.notChooseItem}>预订成功的会议</Text>
                                </View>
                            </TouchableHighlight>

                            <TouchableHighlight
                                underlayColor="rgb(210, 230, 255)"
                                activeOpacity={0.5}
                                onPress={()=> this._onYYDChangePage('待审批会议')}>
                                <View
                                    style={{height:40,alignItems: 'center',justifyContent: 'center',borderRadius: 3,borderColor:'#eeeeee',borderStyle:'solid',borderWidth:1}}>
                                    <Text style={this.isYYDMyPage('待审批会议') ? styles.ChooseItem:styles.notChooseItem}>待审批的会议</Text>
                                </View>
                            </TouchableHighlight>

                        </View>

                        <YYDView pageName={this.state.yudingPN}/>

                    </View>
                );
            }

            else if (route.id === 'zzzk') {
                return (
                    <View style={{flex:1}}>
                        <TitleBarView onPress={()=> this._onBcakTo()} title="正在召开的会议"/>
                        <View style={{height:1,backgroundColor:'#cccccc'}}/>
                        <Text>暂无数据</Text>
                    </View>
                );
            }

            else if (route.id === 'ywchy') {
                return (
                    <View style={{flex:1}}>
                        <TitleBarView onPress={()=> this._onBcakTo()} title="已完成的会议"/>
                        <View style={{height:1,backgroundColor:'#cccccc'}}/>

                        <View style={{flexDirection:'row',alignItems: 'center',justifyContent: 'center',}}>

                            <TouchableHighlight
                                underlayColor="rgb(210, 230, 255)"
                                activeOpacity={0.5}
                                onPress={()=> this._onYWChangePage('一周内会议')}>
                                <View
                                    style={{height:40,alignItems: 'center',justifyContent: 'center',borderRadius: 3,borderColor:'#eeeeee',borderStyle:'solid',borderWidth:1}}>
                                    <Text style={this.isYWMyPage('一周内会议') ? styles.ChooseItem:styles.notChooseItem}>一周内会议</Text>
                                </View>
                            </TouchableHighlight>

                            <TouchableHighlight
                                underlayColor="rgb(210, 230, 255)"
                                activeOpacity={0.5}
                                onPress={()=> this._onYWChangePage('一月内会议')}>
                                <View
                                    style={{height:40,alignItems: 'center',justifyContent: 'center',borderRadius: 3,borderColor:'#eeeeee',borderStyle:'solid',borderWidth:1}}>
                                    <Text style={this.isYWMyPage('一月内会议') ? styles.ChooseItem:styles.notChooseItem}>一月内会议</Text>
                                </View>
                            </TouchableHighlight>

                            <TouchableHighlight
                                underlayColor="rgb(210, 230, 255)"
                                activeOpacity={0.5}
                                onPress={()=> this._onYWChangePage('自定义时间内会议')}>
                                <View
                                    style={{height:40,alignItems: 'center',justifyContent: 'center',borderRadius: 3,borderColor:'#eeeeee',borderStyle:'solid',borderWidth:1}}>
                                    <Text style={this.isYWMyPage('自定义时间内会议') ? styles.ChooseItem:styles.notChooseItem}>自定义时间内会议</Text>
                                </View>
                            </TouchableHighlight>

                        </View>
                        <View style={{height:1,backgroundColor:'#cccccc'}}/>
                        <YWCView pageName={this.state.yiwanPN}/>

                    </View>
                );
            }

            else if (route.id === 'hyxq') {
                return (
                    <View style={{flex:1,backgroundColor:'#ffffff'}}>
                        <TitleBarView onPress={()=> this._onBcakTo()} title="会议详情"/>

                        <ScrollView showsVerticalScrollIndicator={true} style={{flex:1}}>
                            <View style={{height:1,backgroundColor:'#cccccc'}}/>
                            <View style={{backgroundColor:'#eeeeee',height:30}}>
                                <Text style={{marginLeft: 10}}>会议信息</Text>
                            </View>
                            <View style={{height:1,backgroundColor:'#cccccc'}}/>

                            <View style={{flexDirection:'row',height:40,backgroundColor:'#ffffff',alignItems:'center'}}>
                                <Text style={{marginLeft:40}}>会议名称</Text>
                                <Text style={{marginLeft:10,fontSize:18,color:'#000000'}}>1603小组例会</Text>
                            </View>
                            <View style={{height:1,backgroundColor:'#cccccc',marginLeft: 20}}/>
                            <View style={{flexDirection:'row',height:40,backgroundColor:'#ffffff',alignItems:'center'}}>
                                <Text style={{marginLeft:40}}>会议类型</Text>
                                <Text style={{marginLeft:10,fontSize:18,color:'#000000'}}>视频会议</Text>
                            </View>
                            <View style={{height:1,backgroundColor:'#cccccc',marginLeft: 20}}/>
                            <View style={{flexDirection:'row',height:40,backgroundColor:'#ffffff',alignItems:'center'}}>
                                <Text style={{marginLeft:40}}>会议状态</Text>
                                <Text style={{marginLeft:10,fontSize:18,color:'#000000'}}>预订成功</Text>
                            </View>
                            <View style={{height:1,backgroundColor:'#cccccc',marginLeft: 20}}/>
                            <View style={{flexDirection:'row',height:40,backgroundColor:'#ffffff',alignItems:'center'}}>
                                <Text style={{marginLeft:40}}>开始时间</Text>
                                <Text style={{marginLeft:10,fontSize:18,color:'#000000'}}>2016-03-18 16:30</Text>
                            </View>
                            <View style={{height:1,backgroundColor:'#cccccc',marginLeft: 20}}/>
                            <View style={{flexDirection:'row',height:40,backgroundColor:'#ffffff',alignItems:'center'}}>
                                <Text style={{marginLeft:40}}>结束时间</Text>
                                <Text style={{marginLeft:10,fontSize:18,color:'#000000'}}>2016-03-18 17:30</Text>
                            </View>
                            <View style={{height:1,backgroundColor:'#cccccc',marginLeft: 20}}/>
                            <View style={{flexDirection:'row',height:40,backgroundColor:'#ffffff',alignItems:'center'}}>
                                <Text style={{marginLeft:40}}>执委领导</Text>
                                <Text style={{marginLeft:10,fontSize:18,color:'#000000'}}>无</Text>
                            </View>
                            <View style={{height:1,backgroundColor:'#cccccc'}}/>

                            <View style={{backgroundColor:'#eeeeee',height:30}}>
                                <Text style={{marginLeft: 10}}>申请人信息</Text>
                            </View>
                            <View style={{height:1,backgroundColor:'#cccccc'}}/>
                            <View style={{flexDirection:'row',height:40,backgroundColor:'#ffffff',alignItems:'center'}}>
                                <Text style={{marginLeft:40}}>申请人</Text>
                                <Text style={{marginLeft:10,fontSize:18,color:'#000000'}}>申永鹤</Text>
                            </View>
                            <View style={{height:1,backgroundColor:'#cccccc',marginLeft: 20}}/>
                            <View style={{flexDirection:'row',height:40,backgroundColor:'#ffffff',alignItems:'center'}}>
                                <Text style={{marginLeft:40}}>联系电话</Text>
                                <Text style={{marginLeft:10,fontSize:18,color:'#000000'}}>636938</Text>
                            </View>
                            <View style={{height:1,backgroundColor:'#cccccc'}}/>

                            <View style={{backgroundColor:'#eeeeee',height:30}}>
                                <Text style={{marginLeft: 10}}>IP电话</Text>
                            </View>
                            <View style={{height:1,backgroundColor:'#cccccc'}}/>
                            <View style={{flexDirection:'row',height:40,backgroundColor:'#ffffff',alignItems:'center'}}>
                                <Text style={{marginLeft:40,fontSize:18,color:'#000000'}}>123456</Text>
                            </View>
                            <View style={{height:1,backgroundColor:'#cccccc'}}/>

                            <View style={{backgroundColor:'#eeeeee',height:30}}>
                                <Text style={{marginLeft: 10}}>与会会场</Text>
                            </View>
                            <View style={{height:1,backgroundColor:'#cccccc'}}/>
                            <View style={{flexDirection:'row',height:40,backgroundColor:'#ffffff',alignItems:'center'}}>
                                <Text style={{marginLeft:40,fontSize:18,color:'#000000'}}>上海张江</Text>
                            </View>
                            <View style={{height:1,backgroundColor:'#cccccc'}}/>

                            <View style={{backgroundColor:'#eeeeee',height:30}}>
                            </View>
                        </ScrollView>
                    </View>
                );
            }
        },

        render: function () {

            var renderScene = this.renderSceneAndroid;
            var configureScence = this.configureScenceAndroid;
            var pageName = this.props.pageName;
            if (pageName === "预定") {
                return (
                    <View style={{flex:1}}>
                        <TitleBarView onPress={()=> this._onBcak()} title="预定会议"/>
                        <View style={{height:1,backgroundColor:'#cccccc'}}/>
                        <OrderNumView />
                    </View>

                );
            }

            else if (pageName === "我的会议") {
                return (
                    <Navigator
                        debugOverlay={false}
                        initialRoute={{ title: 'wdhy', id:'wdhy'}}
                        configureScence={{ configureScence }}
                        renderScene={renderScene}
                    />
                );
            }

            else if (pageName === '查询') {
                return (
                    <View style={{flex:1}}>
                        <View style={styles.barBox}>
                            <TouchableHighlight
                                underlayColor="rgb(210, 230, 255)"
                                activeOpacity={0.5}
                                onPress={()=> this._onBcak()}>
                                <View style={{flexDirection:'row',alignItems: 'center',justifyContent: 'center',}}>
                                    <Image source={require('./img/actionbar_back.png')} style={styles.imgStyleBar}/>
                                </View>
                            </TouchableHighlight>
                            <View style={{flexDirection:'row',flex:1,alignItems: 'center',justifyContent: 'center',}}>

                                <TouchableHighlight
                                    underlayColor="rgb(210, 230, 255)"
                                    activeOpacity={0.5}
                                    onPress={()=> this._onChangePage('会议室日程')}>
                                    <View
                                        style={{height:40,alignItems: 'center',justifyContent: 'center',borderRadius: 3,borderColor:'#eeeeee',borderStyle:'solid',borderWidth:1}}>
                                        <Text style={this.isMyPage('会议室日程') ? styles.ChooseItem:styles.notChooseItem}>会议室日程</Text>
                                    </View>
                                </TouchableHighlight>

                                <TouchableHighlight
                                    underlayColor="rgb(210, 230, 255)"
                                    activeOpacity={0.5}
                                    onPress={()=> this._onChangePage('会议室信息')}>
                                    <View
                                        style={{height:40,alignItems: 'center',justifyContent: 'center',borderRadius: 3,borderColor:'#eeeeee',borderStyle:'solid',borderWidth:1}}>
                                        <Text style={this.isMyPage('会议室信息') ? styles.ChooseItem:styles.notChooseItem}>会议室信息</Text>
                                    </View>
                                </TouchableHighlight>

                            </View>
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
                        <ChaXunView pageName={this.state.pageName}/>
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

        _onBcakTo: function () {
            if (_navigatorDZHYYD == null) {
                return false;
            }
            if (_navigatorDZHYYD.getCurrentRoutes().length === 1) {
                return false;
            }
            _navigatorDZHYYD.pop();
            return true;
        },

        _onChangePage: function (pageName) {
            this.setState({pageName: pageName})
        },

        _onYYDChangePage: function (pageName) {
            this.setState({yudingPN: pageName})
        },

        _onYWChangePage: function (pageName) {
            this.setState({yiwanPN: pageName})
        },

    });


var OrderNumView = React.createClass(
    {

        getInitialState: function () {
            return {
                startText: '开始时间',
                endText: '结束时间',
                location: '',
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

        configureScenceAndroid: function () {
            return Navigator.SceneConfigs.FadeAndroid;
        },

        renderSceneAndroid: function (route, navigator) {
            _navigatorPage = navigator;
            if (route.id === 'diyiye') {
                return (
                    <View style={styles.container}>
                        <View style={{height:1,backgroundColor:'#cccccc',marginTop:30}}/>
                        <View style={{height:40,backgroundColor:'#ffffff',alignItems:'center',
                                     flexDirection:'row'}}>
                            <View style={{marginLeft:20,height:40,justifyContent: 'center',}}>
                                <Text style={{color:'#000000',fontSize:16}}>会议名称</Text>
                            </View>
                            <TextInput
                                style={{marginLeft:20,backgroundColor:'#ffffff',height:40,flex:1}}
                                numberOfLines={1}
                                placeholder='输入会议名称'
                                underlineColorAndroid={'transparent'}
                                textAlign="start"/>
                        </View>
                        <View style={{height:1,backgroundColor:'#cccccc',marginLeft:20}}/>
                        <View style={{height:40,backgroundColor:'#ffffff',alignItems:'center',
                                     flexDirection:'row'}}>
                            <View style={{marginLeft:20,height:40,justifyContent: 'center',}}>
                                <Text style={{color:'#000000',fontSize:16}}>申请人电话</Text>
                            </View>
                            <TextInput
                                style={{marginLeft:20,backgroundColor:'#ffffff',height:40,flex:1}}
                                numberOfLines={1}
                                placeholder='请输入申请人电话'
                                underlineColorAndroid={'transparent'}
                                textAlign="start"/>
                        </View>
                        <View style={{height:1,backgroundColor:'#cccccc',marginLeft:20}}/>

                        <View style={{height:40,backgroundColor:'#ffffff',alignItems:'center',
                                     flexDirection:'row'}}>
                            <View style={{marginLeft:20,height:40,justifyContent: 'center',}}>
                                <Text style={{color:'#000000',fontSize:16}}>会议类型</Text>
                            </View>
                            <View style={{marginLeft:30,height:40,justifyContent: 'center',}}>
                                <Text>本地会议</Text>
                            </View>
                            <View style={{marginLeft:30,height:40,justifyContent: 'center',}}>
                                <Text>视频会议</Text>
                            </View>
                        </View>
                        <View style={{height:1,backgroundColor:'#cccccc'}}/>

                        <View style={{flex:1}}/>

                        <TouchableHighlight
                            underlayColor="rgb(210, 230, 255)"
                            activeOpacity={0.5}
                            onPress={()=>_navigatorPage.push({title: 'dry', id: 'dry'})}>
                            <View style={{marginLeft:10,marginBottom:10,height:40,width:340,backgroundColor:'#ffffff',alignItems:'center',
                            justifyContent:'center',borderRadius: 5,borderColor:'#ff9900',borderStyle:'solid',borderWidth:1}}>
                                <Text style={{color:'#ff9900',fontSize:16}}>下一步</Text>
                            </View>
                        </TouchableHighlight>
                        <View style={{height:1,backgroundColor:'#cccccc'}}/>
                    </View>
                );
            }

            else if (route.id === 'dry') {
                return (
                    <View style={styles.container}>
                        <View style={{marginLeft:20,height:40,justifyContent: 'center',}}>
                            <Text style={{fontSize:14}}>会议时间</Text>
                        </View>
                        <View style={{height:1,backgroundColor:'#cccccc'}}/>
                        <View style={{flexDirection:'row',alignItems:'center',height:50}}>
                            <Text style={{marginLeft:20,fontSize:16,marginRight:20}}>开始时间:</Text>
                            <CustomButton text={this.state.startText}
                                          onPress={this.showPicker.bind(this, 'start', {date: this.state.simpleDate,simpleDate:new Date()})}/>
                            <View style={{flex:1}}/>
                            <Image style={{width:15,height: 30,marginRight:10}} source={require('./img/ic_more.png')}/>
                        </View>
                        <View style={{height:1,backgroundColor:'#cccccc',marginLeft:20}}/>
                        <View style={{flexDirection:'row',alignItems:'center',height:50}}>
                            <Text style={{marginLeft:20,fontSize:16,marginRight:20}}>结束时间:</Text>
                            <CustomButton text={this.state.endText}
                                          onPress={this.showPicker.bind(this, 'end', {date: this.state.simpleDate,simpleDate:new Date()})}/>
                            <View style={{flex:1}}/>
                            <Image style={{width:15,height: 30,marginRight:10}} source={require('./img/ic_more.png')}/>
                        </View>
                        <View style={{height:1,backgroundColor:'#cccccc'}}/>

                        <View style={{flexDirection:'row',alignItems:'center',height:50}}>
                            <Text style={{marginLeft:20,fontSize:16,marginRight:20}}>会议地点</Text>
                            <View style={{flex:1}}/>
                            <Picker
                                style={{width:100,marginRight:10,}}
                                selectedValue={this.state.location}
                                onValueChange={(value) => this.setState({location: value})}>
                                <Picker.Item label="上海张江" value="上海张江"/>
                                <Picker.Item label="崂山路" value="崂山路"/>
                                <Picker.Item label="陆家嘴" value="陆家嘴"/>
                            </Picker>
                        </View>
                        <View style={{flex:1}}/>

                        <View style={{flexDirection:'row',alignItems:'center',height:50}}>
                            <TouchableHighlight
                                style={{flex:1}}
                                underlayColor="rgb(210, 230, 255)"
                                activeOpacity={0.5}
                                onPress={()=> this._onBcak()}>
                                <View style={{margin:10,marginBottom:10,height:40,flex:1,backgroundColor:'#ff6600',alignItems:'center',
                            justifyContent:'center',borderRadius: 5,borderColor:'#eeeeee',borderStyle:'solid',borderWidth:1}}>
                                    <Text>上一步</Text>
                                </View>
                            </TouchableHighlight>

                            <TouchableHighlight
                                style={{flex:1}}
                                underlayColor="rgb(210, 230, 255)"
                                activeOpacity={0.5}
                                onPress={()=> _navigatorPage.push({title: 'dsy', id: 'dsy'})}>
                                <View style={{margin:10,marginBottom:10,height:40,flex:1,backgroundColor:'#ff6600',alignItems:'center',
                            justifyContent:'center',borderRadius: 5,borderColor:'#eeeeee',borderStyle:'solid',borderWidth:1}}>
                                    <Text>下一步</Text>
                                </View>
                            </TouchableHighlight>

                        </View>

                    </View>
                );
            }

            else if (route.id === 'dsy') {
                return (
                    <View style={styles.container}>
                        <TextInput
                            style={{margin:10,backgroundColor:'#eeeeee',height:40,}}
                            numberOfLines={1}
                            placeholder='请输入会议名称或短号'
                            underlineColorAndroid={'transparent'}
                            textAlign="center"/>
                        <View style={{marginLeft:20,height:40,justifyContent: 'center',}}>
                            <Text style={{fontSize:14}}>会议地点</Text>
                        </View>
                        <View style={{height:1,backgroundColor:'#cccccc'}}/>
                        <View style={{flexDirection:'row',alignItems:'center',height:50}}>
                            <Picker
                                style={{width:100,marginRight:10,}}
                                selectedValue={this.state.location}
                                onValueChange={(value) => this.setState({location: value})}>
                                <Picker.Item label="上海张江" value="上海张江"/>
                                <Picker.Item label="崂山路" value="崂山路"/>
                                <Picker.Item label="陆家嘴" value="陆家嘴"/>
                            </Picker>
                        </View>
                        <View style={{height:1,backgroundColor:'#cccccc'}}/>

                        <View style={{flex:1}}/>

                        <View style={{flexDirection:'row',alignItems:'center',height:50}}>
                            <TouchableHighlight
                                style={{flex:1}}
                                underlayColor="rgb(210, 230, 255)"
                                activeOpacity={0.5}
                                onPress={()=> this._onBcak()}>
                                <View style={{margin:10,marginBottom:10,height:40,flex:1,backgroundColor:'#ff6600',alignItems:'center',
                            justifyContent:'center',borderRadius: 5,borderColor:'#eeeeee',borderStyle:'solid',borderWidth:1}}>
                                    <Text>上一步</Text>
                                </View>
                            </TouchableHighlight>

                            <TouchableHighlight
                                style={{flex:1}}
                                underlayColor="rgb(210, 230, 255)"
                                activeOpacity={0.5}
                                onPress={()=> alert("完成")}>
                                <View style={{margin:10,marginBottom:10,height:40,flex:1,backgroundColor:'#ff6600',alignItems:'center',
                            justifyContent:'center',borderRadius: 5,borderColor:'#eeeeee',borderStyle:'solid',borderWidth:1}}>
                                    <Text>下一步</Text>
                                </View>
                            </TouchableHighlight>

                        </View>

                    </View>
                );
            }

        },

        render: function () {
            var renderScene = this.renderSceneAndroid;
            var configureScence = this.configureScenceAndroid;
            return (
                <Navigator
                    debugOverlay={false}
                    initialRoute={{ title: 'diyiye', id:'diyiye'}}
                    configureScence={{ configureScence }}
                    renderScene={renderScene}
                />
            );
        },

        _onBcak: function () {
            if (_navigatorPage == null) {
                return false;
            }
            if (_navigatorPage.getCurrentRoutes().length === 1) {
                return false;
            }
            _navigatorPage.pop();
            return true;
        },

    });


var ChaXunView = React.createClass(
    {
        getInitialState: function () {
            return {
                startText: '查询日期',
                pageName: "名称",
                location1:'',
                location2:'',
                location3:'',
                location4:'',
                location5:'',
                location6:'',
            };
        },

        isMyPage: function (menu) {
            return menu === this.state.pageName;
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
            var pageName = this.props.pageName;
            if (pageName === '会议室日程') {
                return (
                    <ScrollView showsVerticalScrollIndicator={true} style={{flex:1}}>
                        <View style={{flexDirection:'row',height:50,alignItems: 'center'}}>
                            <Text style={{marginLeft:20,fontSize:18,color:'#000000'}}>会议室名称</Text>
                            <TextInput
                                style={{margin:10,backgroundColor:'#eeeeee',height:40,flex:1}}
                                numberOfLines={1}
                                placeholder='会议室名称'
                                underlineColorAndroid={'transparent'}
                                textAlign="start"/>
                        </View>
                        <View style={{marginLeft:20,height:1,backgroundColor:'#cccccc'}}/>

                        <View style={{flexDirection:'row',alignItems:'center',height:50}}>
                            <Text style={{marginLeft:20,fontSize:16,marginRight:20}}>查询日期</Text>
                            <CustomButton text={this.state.startText}
                                          onPress={this.showPicker.bind(this, 'start', {date: this.state.simpleDate,simpleDate:new Date()})}/>
                            <View style={{flex:1}}/>
                            <Image style={{width:15,height: 30,marginRight:10}} source={require('./img/ic_more.png')}/>
                        </View>
                        <View style={{marginLeft:20,height:1,backgroundColor:'#cccccc'}}/>

                        <View style={{flexDirection:'row',alignItems:'center',height:50}}>
                            <Text style={{marginLeft:20,fontSize:16,marginRight:20}}>级别</Text>
                            <Picker
                                style={{width:200,marginLeft:10,}}
                                selectedValue={this.state.location1}
                                onValueChange={(value) => this.setState({location1: value})}>
                                <Picker.Item label="全部" value="全部"/>
                                <Picker.Item label="总部级" value="总部级"/>
                                <Picker.Item label="二级机构" value="二级机构"/>
                                <Picker.Item label="三级机构" value="三级机构"/>
                            </Picker>
                            <View style={{flex:1}}/>
                            <Image style={{width:15,height: 30,marginRight:10}} source={require('./img/ic_more.png')}/>
                        </View>
                        <View style={{marginLeft:20,height:1,backgroundColor:'#cccccc'}}/>

                        <View style={{flexDirection:'row',alignItems:'center',height:50}}>
                            <Text style={{marginLeft:20,fontSize:16,marginRight:20}}>系列名称</Text>
                            <Picker
                                style={{width:200,marginLeft:10,}}
                                selectedValue={this.state.location2}
                                onValueChange={(value) => this.setState({location2: value})}>
                                <Picker.Item label="全部" value="全部"/>
                                <Picker.Item label="平安科技" value="平安科技"/>
                                <Picker.Item label="平安寿险" value="平安寿险"/>
                                <Picker.Item label="平安产险" value="平安产险"/>
                            </Picker>
                            <View style={{flex:1}}/>
                            <Image style={{width:15,height: 30,marginRight:10}} source={require('./img/ic_more.png')}/>
                        </View>
                        <View style={{marginLeft:20,height:1,backgroundColor:'#cccccc'}}/>

                        <View style={{flexDirection:'row',alignItems:'center',height:50}}>
                            <Text style={{marginLeft:20,fontSize:16,marginRight:20}}>二级系列</Text>
                            <Picker
                                style={{width:200,marginLeft:10,}}
                                selectedValue={this.state.location3}
                                onValueChange={(value) => this.setState({location3: value})}>
                                <Picker.Item label="全部" value="全部"/>
                                <Picker.Item label="平安科技南京" value="平安科技南京"/>
                                <Picker.Item label="平安科技成都" value="平安科技成都"/>
                            </Picker>
                            <View style={{flex:1}}/>
                            <Image style={{width:15,height: 30,marginRight:10}} source={require('./img/ic_more.png')}/>
                        </View>
                        <View style={{marginLeft:20,height:1,backgroundColor:'#cccccc'}}/>

                        <View style={{flexDirection:'row',alignItems:'center',height:50}}>
                            <Text style={{marginLeft:20,fontSize:16,marginRight:20}}>三级系列</Text>
                            <Picker
                                style={{width:200,marginLeft:10,}}
                                selectedValue={this.state.location4}
                                onValueChange={(value) => this.setState({location4: value})}>
                                <Picker.Item label="全部" value="全部"/>
                                <Picker.Item label="平安科技南京" value="平安科技南京"/>
                            </Picker>
                            <View style={{flex:1}}/>
                            <Image style={{width:15,height: 30,marginRight:10}} source={require('./img/ic_more.png')}/>
                        </View>
                        <View style={{marginLeft:20,height:1,backgroundColor:'#cccccc'}}/>

                        <View style={{flexDirection:'row',alignItems:'center',height:50}}>
                            <Text style={{marginLeft:20,fontSize:16,marginRight:20}}>四级系列</Text>
                            <Picker
                                style={{width:200,marginLeft:10,}}
                                selectedValue={this.state.location5}
                                onValueChange={(value) => this.setState({location5: value})}>
                                <Picker.Item label="全部" value="全部"/>
                                <Picker.Item label="平安科技南京" value="平安科技南京"/>
                            </Picker>
                            <View style={{flex:1}}/>
                            <Image style={{width:15,height: 30,marginRight:10}} source={require('./img/ic_more.png')}/>
                        </View>
                        <View style={{marginLeft:20,height:1,backgroundColor:'#cccccc'}}/>

                        <View style={{flexDirection:'row',alignItems:'center',height:50}}>
                            <Text style={{marginLeft:20,fontSize:16,marginRight:20}}>使用状态</Text>
                            <View style={{flex:1}}/>
                        </View>
                        <View style={{marginLeft:20,height:1,backgroundColor:'#cccccc'}}/>

                        <View style={{flexDirection:'row',alignItems:'center',height:50}}>
                            <Text style={{marginLeft:20,fontSize:16,marginRight:20}}>会议功能</Text>
                            <View style={{flex:1}}/>
                        </View>
                        <View style={{marginLeft:20,height:1,backgroundColor:'#cccccc'}}/>

                        <View style={{flexDirection:'row',alignItems:'center',height:50}}>
                            <Text style={{marginLeft:20,fontSize:16,marginRight:20}}>可容纳人数</Text>
                            <Picker
                                style={{width:200,marginLeft:10,}}
                                selectedValue={this.state.location6}
                                onValueChange={(value) => this.setState({location6: value})}>
                                <Picker.Item label="全部" value="全部"/>
                                <Picker.Item label="0<人数<=20" value="0<人数<=20"/>
                                <Picker.Item label="20<人数<=40" value="20<人数<=40"/>
                                <Picker.Item label="40<人数" value="40<人数"/>
                            </Picker>
                            <View style={{flex:1}}/>
                            <Image style={{width:15,height: 30,marginRight:10}} source={require('./img/ic_more.png')}/>
                        </View>
                        <View style={{height:1,backgroundColor:'#cccccc',marginBottom:20}}/>
                    </ScrollView>
                );
            }

            else if (pageName === '会议室信息') {
                return (
                    <View style={{flex:1,height:50,justifyContent: 'center'}}>
                        <View style={{margin:10,flexDirection:'row',alignItems: 'center',justifyContent: 'center',}}>

                            <TouchableHighlight
                                underlayColor="rgb(210, 230, 255)"
                                activeOpacity={0.5}
                                onPress={()=> this._onChangePage('名称')}>
                                <View
                                    style={{height:40,width:100,alignItems: 'center',justifyContent: 'center',borderRadius: 3,borderColor:'#eeeeee',borderStyle:'solid',borderWidth:1}}>
                                    <Text style={this.isMyPage('名称') ? styles.ChooseItem:styles.notChooseItem}>名称</Text>
                                </View>
                            </TouchableHighlight>

                            <TouchableHighlight
                                underlayColor="rgb(210, 230, 255)"
                                activeOpacity={0.5}
                                onPress={()=> this._onChangePage('短号')}>
                                <View
                                    style={{height:40,width:100,alignItems: 'center',justifyContent: 'center',borderRadius: 3,borderColor:'#eeeeee',borderStyle:'solid',borderWidth:1}}>
                                    <Text style={this.isMyPage('短号') ? styles.ChooseItem:styles.notChooseItem}>短号</Text>
                                </View>
                            </TouchableHighlight>
                        </View>

                        <View style={{flexDirection:'row',height:40,alignItems: 'center'}}>
                            <TextInput
                                style={{margin:10,backgroundColor:'#eeeeee',height:40,width: 200}}
                                numberOfLines={1}
                                placeholder='会议室名称'
                                underlineColorAndroid={'transparent'}
                                textAlign="start"/>

                            <TouchableHighlight
                                underlayColor="rgb(210, 230, 255)"
                                activeOpacity={0.5}
                                onPress={()=> alert('开始会议')}>
                                <View style={{marginLeft:10,height:40,width:60,alignItems:'center',
                            justifyContent:'center',borderRadius: 5,borderColor:'#eeeeee',borderStyle:'solid',borderWidth:1}}>
                                    <Text style={{color:'#99ff00'}}>搜索</Text>
                                </View>
                            </TouchableHighlight>
                            <View style={{flex:1}}/>
                        </View>
                        <View style={{flex:1}}></View>
                    </View>
                );
            }
        },

        _onBcak: function () {
            if (_navigatorPage == null) {
                return false;
            }
            if (_navigatorPage.getCurrentRoutes().length === 1) {
                return false;
            }
            _navigatorPage.pop();
            return true;
        },
        _onChangePage: function (pageName) {
            this.setState({pageName: pageName})
        },

    });


var YWCView = React.createClass(
    {

        getInitialState: function () {
            return {
                startText: '开始时间',
                endText: '结束时间',
                pageName: "名称",
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
            var pageName = this.props.pageName;
            if (pageName === '一周内会议') {
                return (
                    <View style={{flex: 1}}>
                        <View style={{height:100,alignItems:'center',justifyContent:'center'}}>
                            <Text>暂无数据</Text>
                        </View>
                    </View>
                );
            }

            else if (pageName === '一月内会议') {
                return (
                    <View style={{flex: 1}}>
                        <View style={{height:100,alignItems:'center',justifyContent:'center'}}>
                            <Text>暂无数据</Text>
                        </View>
                    </View>
                );
            }

            else if (pageName === '自定义时间内会议') {
                return (
                    <View style={{flex: 1}}>
                        <View style={{height:1,backgroundColor:'#cccccc'}}/>
                        <View style={{flexDirection:'row',alignItems:'center',height:50}}>
                            <Text style={{marginLeft:20,fontSize:16,marginRight:20}}>开始时间:</Text>
                            <CustomButton text={this.state.startText}
                                          onPress={this.showPicker.bind(this, 'start', {date: this.state.simpleDate,simpleDate:new Date()})}/>
                            <View style={{flex:1}}/>
                            <Image style={{width:15,height: 30,marginRight:10}} source={require('./img/ic_more.png')}/>
                        </View>
                        <View style={{height:1,backgroundColor:'#cccccc'}}/>

                        <View style={{flexDirection:'row',alignItems:'center',height:50}}>
                            <Text style={{marginLeft:20,fontSize:16,marginRight:20}}>结束时间:</Text>
                            <CustomButton text={this.state.endText}
                                          onPress={this.showPicker.bind(this, 'end', {date: this.state.simpleDate,simpleDate:new Date()})}/>
                            <View style={{flex:1}}/>
                            <Image style={{width:15,height: 30,marginRight:10}} source={require('./img/ic_more.png')}/>
                        </View>
                        <View style={{height:1,backgroundColor:'#cccccc'}}/>
                        <View style={{height:100,alignItems:'center',justifyContent:'center'}}>
                            <Text>暂无数据</Text>
                        </View>
                    </View>
                );
            }
        },

        _onBcak: function () {
            if (_navigatorPage == null) {
                return false;
            }
            if (_navigatorPage.getCurrentRoutes().length === 1) {
                return false;
            }
            _navigatorPage.pop();
            return true;
        },

    });


var YYDView = React.createClass(
    {
        render: function () {
            var pageName = this.props.pageName;
            if (pageName === '预订成功的会议') {
                return (
                    <ScrollView showsVerticalScrollIndicator={true} style={{flex:1}}>
                        <View style={{height:1,backgroundColor:'#cccccc'}}/>
                        <TouchableHighlight
                            style={styles.button}
                            underlayColor="#a5a5a5"
                            onPress={()=> _navigatorDZHYYD.push({title: 'hyxq', id: 'hyxq'})}>
                            <View style={{height: 60,justifyContent: 'center'}}>
                                <Text style={{marginLeft:10,fontSize:18,color:'#000000'}}>1603小组会议</Text>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={{fontSize:14,marginLeft:10}}>时间: 03-18 16:30至17:30</Text>
                                    <View style={{flex:1}}/>
                                    <Text style={{fontSize:14,marginRight:10}}>类型: 视频会议</Text>
                                </View>
                            </View>
                        </TouchableHighlight>
                        <View style={{height:1,backgroundColor:'#cccccc'}}/>
                    </ScrollView>
                );
            }

            else if (pageName === '待审批会议') {
                return (
                    <ScrollView showsVerticalScrollIndicator={true} style={{flex:1}}>
                        <View style={{height:1,backgroundColor:'#cccccc'}}/>
                        <Text style={{fontSize:18}}>暂无</Text>
                    </ScrollView>
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
        fontSize: 14,
        margin: 5,
    },

    ChooseItem: {
        margin: 5,
        fontSize: 14,
        backgroundColor: '#ccff00'
    }

});

module.exports = DZHYYDModule;