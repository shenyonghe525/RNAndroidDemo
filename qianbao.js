/**
 * Created by Diablo on 16/3/10.
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
    DatePickerAndroid,
    Navigator,
    Picker,
    TextInput,
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
var _navigatorQB;
var TitleBarView = require('./title_bar.js');

/**
 * 签报
 */
var QianBaoModule = React.createClass({

    getInitialState: function () {
        return {
            pageNum: 1,
        };
    },

    isMyPage: function (menu) {
        return menu == this.state.pageNum;
    },

    configureScenceAndroid: function () {
        return Navigator.SceneConfigs.FadeAndroid;
    },

    renderSceneAndroid: function (route, navigator) {
        _navigatorQB = navigator;
        if (route.id === 'qianbao') {
            return (
                <View style={styles.container}>
                    <PagesView pageNum={this.state.pageNum}/>
                    <View style={{height:60,alignItems:'center',flexDirection:'row',backgroundColor:'#eeeeee'}}>
                        <TouchableHighlight
                            style={{flex:1}}
                            underlayColor="rgb(210, 230, 255)"
                            activeOpacity={0.5}
                            onPress={()=> this._onChangePage(1)}>
                            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                                <Image source={require('./img/ic_gongwen_press.png')} style={{width:30,height:30}}/>
                                <Text>待处理文件</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            style={{flex:1}}
                            underlayColor="rgb(210, 230, 255)"
                            activeOpacity={0.5}
                            onPress={()=> this._onChangePage(2)}>
                            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                                <Image source={require('./img/ic_gongwen_press.png')} style={{width:30,height:30}}/>
                                <Text>签报查询</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            style={{flex:1}}
                            underlayColor="rgb(210, 230, 255)"
                            activeOpacity={0.5}
                            onPress={()=> this._onChangePage(3)}>
                            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                                <Image source={require('./img/ic_gongwen_press.png')} style={{width:30,height:30}}/>
                                <Text>授权管理</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
            );

        }

        else if (route.id === 'qbxiangqing') {
            return (
                <View style={styles.container}>
                    <View style={styles.barBox}>
                        <TouchableHighlight
                            underlayColor="rgb(210, 230, 255)"
                            activeOpacity={0.5}
                            onPress={()=> this._onBcak()}>
                            <View style={{flexDirection:'row',alignItems: 'center',justifyContent: 'center',}}>
                                <Image source={require('./img/actionbar_back.png')} style={styles.imgStyleBar}/>
                            </View>
                        </TouchableHighlight>
                        <Text style={styles.barTitleStyle}>签报详情</Text>
                        <TouchableHighlight
                            underlayColor="rgb(210, 230, 255)"
                            activeOpacity={0.5}>
                            <View style={{flexDirection:'row',alignItems: 'center',justifyContent: 'center',}}>
                                <Image source={require('./img/actionbar_work.png')} style={styles.imgRightStyleBar}/>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <View style={{height:1,backgroundColor:'#cccccc'}}/>
                    <View style={{flexDirection:'row',margin:5}}>
                        <Text style={{marginLeft:10,flex:1}}>事项</Text>
                        <Text style={{marginRight:10,flex:3}}>APP升级</Text>
                    </View>
                    <View style={{height:1,backgroundColor:'#cccccc'}}/>

                    <View style={{flexDirection:'row',margin:5}}>
                        <Text style={{marginLeft:10,flex:1}}>题头</Text>
                        <Text style={{marginRight:10,flex:3}}>平安科技深圳有限公司</Text>
                    </View>
                    <View style={{height:1,backgroundColor:'#cccccc'}}/>

                    <View style={{flexDirection:'row',margin:5}}>
                        <Text style={{marginLeft:10,flex:1}}>经办人</Text>
                        <Text style={{marginRight:10,flex:3}}>申永鹤</Text>
                    </View>
                    <View style={{height:1,backgroundColor:'#cccccc'}}/>

                    <View style={{flexDirection:'row',margin:5}}>
                        <Text style={{marginLeft:10,flex:1}}>请示事项具体内容</Text>
                        <Text style={{marginRight:10,flex:3}}>智慧人社通android2.1.2版本升级申请,截图见附件.</Text>
                    </View>
                    <View style={{height:1,backgroundColor:'#cccccc'}}/>
                    <View style={{flexDirection:'row',margin:5}}>
                        <Text style={{marginLeft:10,flex:1}}>审批意见</Text>
                        <Text style={{marginRight:10,flex:3}}>同意</Text>
                    </View>
                    <View style={{flexDirection:'row',margin:5}}>
                        <Text style={{flex:1}}></Text>
                        <Text style={{marginRight:10}}>罗庆霖/2016-03-07 15:23:00</Text>
                    </View>
                    <View style={{flexDirection:'row',margin:5}}>
                        <Text style={{flex:1}}></Text>
                        <View style={{flex:3,backgroundColor:'#cccccc',height:1}}/>
                    </View>

                    <View style={{flexDirection:'row',margin:5}}>
                        <Text style={{marginLeft:10,flex:1}}></Text>
                        <Text style={{marginRight:10,flex:3}}>同意</Text>
                    </View>
                    <View style={{flexDirection:'row',margin:5}}>
                        <Text style={{flex:1}}></Text>
                        <Text style={{marginRight:10}}>丁睿/2016-03-07 15:23:00</Text>
                    </View>
                    <View style={{flexDirection:'row',margin:5}}>
                        <Text style={{flex:1}}></Text>
                        <View style={{flex:3,backgroundColor:'#cccccc',height:1}}/>
                    </View>


                    <View style={{flexDirection:'row',margin:5}}>
                        <Text style={{marginLeft:10,flex:1}}></Text>
                        <Text style={{marginRight:10,flex:3}}>同意</Text>
                    </View>
                    <View style={{flexDirection:'row',margin:5}}>
                        <Text style={{flex:1}}></Text>
                        <Text style={{marginRight:10}}>朱晨烨/2016-03-07 15:23:00</Text>
                    </View>
                    <View style={{flexDirection:'row',margin:5}}>
                        <Text style={{flex:1}}></Text>
                        <View style={{flex:3,backgroundColor:'#cccccc',height:1}}/>
                    </View>


                    <View style={{flexDirection:'row',margin:5}}>
                        <Text style={{marginLeft:10,flex:1}}></Text>
                        <Text style={{marginRight:10,flex:3}}>同意</Text>
                    </View>
                    <View style={{flexDirection:'row',margin:5}}>
                        <Text style={{flex:1}}></Text>
                        <Text style={{marginRight:10}}>陈莹莹/2016-03-07 15:23:00</Text>
                    </View>
                    <View style={{flexDirection:'row',margin:5}}>
                        <Text style={{flex:1}}></Text>
                        <View style={{flex:3,backgroundColor:'#cccccc',height:1}}/>
                    </View>

                    <View style={{height:1,marginTop:10,backgroundColor:'#cccccc'}}/>
                    <Text>管理员备注</Text>
                    <View style={{height:1,marginTop:10,backgroundColor:'#cccccc'}}/>
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
                initialRoute={{ title: 'qianbao', id:'qianbao'}}
                configureScence={{ configureScence }}
                renderScene={renderScene}
            />
        );
    },

    _onBcak: function () {
        if (_navigatorQB == null) {
            return false;
        }
        if (_navigatorQB.getCurrentRoutes().length === 1) {
            return false;
        }
        _navigatorQB.pop();
        return true;
    },

    _onChangePage: function (pageNum) {
        this.setState({pageNum: pageNum})
    },

});

var PagesView = React.createClass(
    {
        getInitialState: function () {
            return {
                pageNum: 1,
                pageNum1: 1,
                type: '',
                startText: '开始时间',
                endText: '结束时间',
            };
        },

        isMyPage: function (menu) {
            return menu == this.state.pageNum;
        },

        isMyPage1: function (menu) {
            return menu == this.state.pageNum1;
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

            var pageNum = this.props.pageNum;
            if (pageNum == 1) {
                return (
                    <View style={{flex:1}}>
                        <TitleBarView onPress={()=> this._onBcak()} title="待处理文件"/>
                        <View style={{height:1,backgroundColor:'#cccccc'}}/>

                    </View>

                );
            }
            else if (pageNum == 2) {
                return (
                    <View style={{flex:1}}>
                        <TitleBarView onPress={()=> this._onBcak()} title="签报查询"/>
                        <View style={{height:1,backgroundColor:'#cccccc'}}/>
                        <View
                            style={{margin:10,height:40,flexDirection:'row',backgroundColor:'#eeeeee',borderRadius: 3}}>
                            <TouchableHighlight
                                style={{flex:1}}
                                underlayColor="rgb(210, 230, 255)"
                                activeOpacity={0.5}
                                onPress={()=> this._onChangePage(1)}>
                                <View style={{height:40,flex:1,alignItems:'center',justifyContent: 'center',}}>
                                    <Text style={this.isMyPage(1) ? styles.ChooseItem:styles.notChooseItem}>处理中</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                style={{flex:1}}
                                underlayColor="rgb(210, 230, 255)"
                                activeOpacity={0.5}
                                onPress={()=> this._onChangePage(2)}>
                                <View style={{height:40,flex:1,alignItems:'center',justifyContent: 'center',}}>
                                    <Text style={this.isMyPage(2) ? styles.ChooseItem:styles.notChooseItem}>已完成</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                        <View style={{marginLeft:10,marginRight:10,height:35,flexDirection:'row',alignItems:'center',justifyContent:'center',
                        borderColor:'#eeeeee',borderStyle:'solid',borderWidth:1}}>
                            <Text>类型</Text>
                            <Picker
                                style={{width:100,marginLeft:10,}}
                                selectedValue={this.state.type}
                                onValueChange={(value) => this.setState({type: value})}>
                                <Picker.Item label="申请" value="申请"/>
                                <Picker.Item label="审批" value="审批"/>
                            </Picker>
                            <Text style={{marginLeft:10,}}>所属系统</Text>
                            <Text style={{marginLeft:10,}}>全部文件</Text>
                        </View>

                        <TouchableHighlight
                            style={{flex:1}}
                            underlayColor="rgb(210, 230, 255)"
                            activeOpacity={0.5}
                            onPress={()=> _navigatorQB.push({title:'qbxiangqing',id:'qbxiangqing'})}>
                            <View style={{margin:10,height:100,borderRadius: 3,
                        borderColor:'#eeeeee',borderStyle:'solid',borderWidth:1}}>
                                <View style={{height:40,flexDirection:'row',alignItems:'center'}}>
                                    <Text style={{marginLeft:10}}>智慧人社通APP版本升级申请</Text>
                                    <View style={{flex:1}}/>
                                    <Image style={{width:15,height: 30,marginRight:10}}
                                           source={require('./img/ic_more.png')}/>
                                </View>
                                <View style={{height:1,backgroundColor:'#eeeeee'}}/>
                                <View style={{flex:1,justifyContent:'center'}}>
                                    <Text style={{marginLeft:10}}>平安科技有限公司(申永鹤)</Text>
                                    <View style={{justifyContent:'center',flexDirection:'row'}}>
                                        <Text style={{marginLeft:10}}>内部工作签报</Text>
                                        <View style={{flex:1}}/>
                                        <Text style={{marginRight:10}}>2016-03-07</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableHighlight>

                    </View>
                );
            }
            else if (pageNum == 3) {
                return (
                    <View style={{flex:1}}>
                        <TitleBarView onPress={()=> this._onBcak()} title="授权管理"/>
                        <View style={{height:1,backgroundColor:'#cccccc'}}/>
                        <View
                            style={{margin:10,height:40,flexDirection:'row',backgroundColor:'#eeeeee',borderRadius: 3}}>
                            <TouchableHighlight
                                style={{flex:1}}
                                underlayColor="rgb(210, 230, 255)"
                                activeOpacity={0.5}
                                onPress={()=> this._onChangePage1(1)}>
                                <View style={{height:40,flex:1,alignItems:'center',justifyContent: 'center',}}>
                                    <Text style={this.isMyPage1(1) ? styles.ChooseItem:styles.notChooseItem}>授权</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                style={{flex:1}}
                                underlayColor="rgb(210, 230, 255)"
                                activeOpacity={0.5}
                                onPress={()=> this._onChangePage1(2)}>
                                <View style={{height:40,flex:1,alignItems:'center',justifyContent: 'center',}}>
                                    <Text style={this.isMyPage1(2) ? styles.ChooseItem:styles.notChooseItem}>撤销</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                style={{flex:1}}
                                underlayColor="rgb(210, 230, 255)"
                                activeOpacity={0.5}
                                onPress={()=> this._onChangePage1(3)}>
                                <View style={{height:40,flex:1,alignItems:'center',justifyContent: 'center',}}>
                                    <Text style={this.isMyPage1(3) ? styles.ChooseItem:styles.notChooseItem}>查询</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                        <TextInput
                            style={{marginLeft:10,marginRight:10,borderRadius: 3,height:35,backgroundColor:'#eeeeee',borderStyle:'solid',borderWidth:1}}
                            placeholder='被授权人'
                            numberOfLines={1}
                            underlineColorAndroid={'transparent'}
                            textAlign='center'
                        />

                        <View
                            style={{marginLeft:10,marginRight:10,height:40,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                            <TouchableHighlight
                                style={{flex:1}}
                                underlayColor="rgb(210, 230, 255)"
                                activeOpacity={0.5}
                                onPress={this.showPicker.bind(this, 'start', {date: this.state.simpleDate,simpleDate:new Date()})}>
                                <View style={{margin:10,height:30,borderRadius: 3,width:150,alignItems:'center',
                                  borderColor:'#eeeeee',borderStyle:'solid',borderWidth:1,justifyContent:'center'}}>
                                    <Text>{this.state.startText}</Text>
                                </View>
                            </TouchableHighlight>
                            <View style={{width:10,height:1,backgroundColor:'#ccff00'}}/>
                            <TouchableHighlight
                                style={{flex:1}}
                                underlayColor="rgb(210, 230, 255)"
                                activeOpacity={0.5}
                                onPress={this.showPicker.bind(this, 'end', {date: this.state.simpleDate,simpleDate:new Date()})}>
                                <View style={{margin:10,height:30,width:150,borderRadius: 3,alignItems:'center',
                                   borderColor:'#eeeeee',borderStyle:'solid',borderWidth:1,justifyContent:'center'}}>
                                    <Text>{this.state.endText}</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </View>
                );
            }

        },

        _onChangePage: function (pageNum) {
            this.setState({pageNum: pageNum})
        },

        _onChangePage1: function (pageNum) {
            this.setState({pageNum1: pageNum})
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
    notChooseItem:{
        fontSize:18
    },

    ChooseItem:{
        fontSize:18,
        backgroundColor:'#ccff00'
    }

});

module.exports = QianBaoModule;