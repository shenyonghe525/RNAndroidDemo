/**
 * Created by Diablo on 16/3/8.
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
    TextInput,
    Picker,
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
var _navigatorKQ;


var KaoQinModule = React.createClass({

    getInitialState: function () {
        return {
            pageNum: 1,
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

    isMyPage: function (menu) {
        return menu == this.state.pageNum;
    },

    configureScenceAndroid: function () {
        return Navigator.SceneConfigs.FadeAndroid;
    },

    renderSceneAndroid: function (route, navigator) {
        _navigatorKQ = navigator;
        if (route.id === 'kaoqin') {
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
                        <Text style={styles.barTitleStyle}>考勤</Text>
                        <TouchableHighlight
                            underlayColor="rgb(210, 230, 255)"
                            activeOpacity={0.5}>
                            <View style={{flexDirection:'row',alignItems: 'center',justifyContent: 'center',}}>
                                <Image source={require('./img/actionbar_work.png')} style={styles.imgRightStyleBar}/>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <View style={{height:1,backgroundColor:'#cccccc'}}/>
                    <View style={{flexDirection:'row',height:50,backgroundColor:'#ffffff',alignItems:'center'}}>
                        <TouchableHighlight
                            underlayColor="rgb(210, 230, 255)"
                            style={{flex:1,alignItems:'center'}}
                            activeOpacity={0.5}
                            onPress={()=> this._onChangePage(1)}>
                            <Text style={this.isMyPage(1) ? styles.ChooseItem:styles.notChooseItem}>异常</Text>
                        </TouchableHighlight>
                        <View style={{width:1,height:30,backgroundColor:'#cccccc'}}/>
                        <TouchableHighlight
                            underlayColor="rgb(210, 230, 255)"
                            style={{flex:1,alignItems:'center'}}
                            activeOpacity={0.5}
                            onPress={()=> this._onChangePage(2)}>
                            <Text style={this.isMyPage(2) ? styles.ChooseItem:styles.notChooseItem}>假单</Text>
                        </TouchableHighlight>
                        <View style={{width:1,height:30,backgroundColor:'#cccccc'}}/>
                        <TouchableHighlight
                            underlayColor="rgb(210, 230, 255)"
                            style={{flex:1,alignItems:'center'}}
                            activeOpacity={0.5}
                            onPress={()=> this._onChangePage(3)}>
                            <Text style={this.isMyPage(3) ? styles.ChooseItem:styles.notChooseItem}>请假</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={{height:1,backgroundColor:'#cccccc'}}/>


                    <PagesView pageNum={this.state.pageNum}/>

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
                initialRoute={{ title: 'kaoqin', id:'kaoqin'}}
                configureScence={{ configureScence }}
                renderScene={renderScene}
            />
        );
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

    _onChangePage: function (pageNum) {
        this.setState({pageNum: pageNum})
    },

});

var PagesView = React.createClass(
    {


        getInitialState: function () {
            var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            return {
                isWholeDay: true,
                maxText: '2016/3',
                startText: '开始时间',
                endText: '结束时间',
                allDate: new Date(2020, 4, 5),
                language: '原因',
                dataSource: ds.cloneWithRows(['临时因公外出7.58小时', '临时因公外出7.58小时', '临时因公外出7.58小时', '临时因公外出7.58小时', '临时因公外出7.58小时', '临时因公外出7.58小时', '临时因公外出7.58小时', '临时因公外出7.58小时', '临时因公外出7.58小时', '临时因公外出7.58小时', '临时因公外出7.58小时', '申永鹤']),
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

        _renderRow: function (rowData:string, sectionID:number, rowID:number) {
            return (
                <TouchableOpacity>
                    <View>
                        <View style={{height:60,backgroundColor:'#ffffff'}}>
                            <View style={{flexDirection:'row',margin: 5,alignItems:'center'}}>
                                <View style={{marginLeft: 20,justifyContent: 'center'}}>
                                    <Text style={{fontSize:16,color:'#000000'}}>{rowData}</Text>
                                    <Text style={{fontSize:12,color:'#cccccc'}}>2016年2月14日至2016年2月14日</Text>
                                </View>
                                <View style={{flex:1}}/>
                                <Text style={{marginRight:20,fontSize:14,color:'#ffcc00'}}>已批准</Text>
                            </View>
                            <View style={{height:1,backgroundColor:'#cccccc'}}/>
                        </View>
                    </View>
                </TouchableOpacity>
            );
        },

        render: function () {
            var pageNum = this.props.pageNum;
            if (pageNum == 1) {
                return (
                    <View style={{flex:1}}>
                        <CustomButton text={this.state.maxText}
                                      onPress={this.showPicker.bind(this, 'max', {date: this.state.maxDate,maxDate:new Date()})}/>
                        <ListView
                            dataSource={this.state.dataSource}
                            renderRow={this._renderRow}
                        />
                    </View>

                );
            }
            else if (pageNum == 2) {
                return (
                    <View style={{flex:1}}>
                        <CustomButton text={this.state.maxText}
                                      onPress={this.showPicker.bind(this, 'max', {date: this.state.maxDate,maxDate:new Date()})}/>
                        <ListView
                            dataSource={this.state.dataSource}
                            renderRow={this._renderRow}
                        />
                    </View>
                );
            }
            else if (pageNum == 3) {
                return (
                    <View style={{flex:1}}>
                        <View style={{height:1,backgroundColor:'#aaaaaa'}}/>
                        <View style={{flexDirection:'row',alignItems:'center',height:45}}>
                            <Text style={{marginLeft:20,fontSize:14,}}>请假类型:</Text>
                            <Picker
                                style={{width:200,marginLeft:20,}}
                                selectedValue={this.state.language}
                                onValueChange={(value) => this.setState({language: value})}>
                                <Picker.Item label="临时因公外出" value="临时因公外出"/>
                                <Picker.Item label="Java" value="java" />
                                <Picker.Item label="JavaScript" value="js" />
                                <Picker.Item label="事假" value="事假"/>
                                <Picker.Item label="病假" value="病假"/>
                                <Picker.Item label="出差" value="出差"/>
                                <Picker.Item label="年休假" value="年休假"/>
                                <Picker.Item label="漏打卡" value="漏打卡"/>
                                <Picker.Item label="婚假" value="婚假"/>
                                <Picker.Item label="产假" value="产假"/>
                                <Picker.Item label="培训" value="培训"/>
                            </Picker>
                            <View style={{flex:1}}/>
                            <Image style={{width:15,height: 30,marginRight:10}} source={require('./img/ic_more.png')}/>
                        </View>
                        <View style={{height:1,backgroundColor:'#aaaaaa'}}/>

                        <View style={{flexDirection:'row',alignItems:'center',height:45}}>
                            <Text style={{marginLeft:20,fontSize:14,marginRight:20}}>开始日期:</Text>
                            <CustomButton text={this.state.startText}
                                          onPress={this.showPicker.bind(this, 'start', {date: this.state.allDate,allDate:new Date()})}/>
                            <View style={{flex:1}}/>
                            <Image style={{width:15,height: 30,marginRight:10}} source={require('./img/ic_more.png')}/>
                        </View>
                        <View style={{height:1,backgroundColor:'#aaaaaa'}}/>

                        <View style={{flexDirection:'row',alignItems:'center',height:45}}>
                            <Text style={{marginLeft:20,fontSize:14,marginRight:20}}>结束日期:</Text>
                            <CustomButton text={this.state.endText}
                                          onPress={this.showPicker.bind(this, 'end', {date: this.state.simpleDate,simpleDate:new Date()})}/>
                            <View style={{flex:1}}/>
                            <Image style={{width:15,height: 30,marginRight:10}} source={require('./img/ic_more.png')}/>
                        </View>
                        <View style={{height:1,backgroundColor:'#aaaaaa'}}/>

                        <View style={{flexDirection:'row',alignItems:'center',height:45}}>

                            <Text style={{marginLeft:20,fontSize:14,marginRight:20}}>非整日请假:</Text>
                            <TouchableHighlight
                                underlayColor="rgb(210, 230, 255)"
                                activeOpacity={0.5}
                                onPress={()=> this._onChangeFlag}>
                                <Text style={{fontSize:18}}>整天</Text>
                            </TouchableHighlight>
                            <View style={{flex:1}}/>
                            <Image style={{width:15,height: 30,marginRight:10}} source={require('./img/ic_more.png')}/>
                        </View>
                        <View style={{height:1,backgroundColor:'#aaaaaa'}}/>

                        <View style={{flexDirection:'row',alignItems:'center',height:45}}>
                            <Text style={{marginLeft:20,fontSize:14,marginRight:20}}>开始日小时数:</Text>
                            <TextInput
                                style={{backgroundColor:'#ffffff',height:40,width:100}}
                                numberOfLines={1}
                                autoFocus={true}
                                placeholder='0.00'
                                underlineColorAndroid={'transparent'}
                                textAlign="start"/>
                        </View>
                        <View style={{height:1,backgroundColor:'#aaaaaa'}}/>

                        <View style={{flexDirection:'row',alignItems:'center',height:45}}>
                            <Text style={{marginLeft:20,fontSize:14,marginRight:20}}>请假原因:</Text>
                            <TextInput
                                style={{backgroundColor:'#ffffff',height:40,flex:1}}
                                numberOfLines={3}
                                autoFocus={true}
                                placeholder='请假原因'
                                underlineColorAndroid={'transparent'}
                                textAlign="start"/>
                        </View>
                        <View style={{height:1,backgroundColor:'#aaaaaa'}}/>

                        <TouchableHighlight
                            style={{alignItems:'center',marginTop:20}}
                            underlayColor="rgb(210, 230, 255)"
                            activeOpacity={0.5}
                            onPress={()=> alert('提交')}>
                        <View style={{height:40,width:100,backgroundColor:'#aaaaaa',alignItems:'center',justifyContent:'center'}}>
                            <Text style={{fontSize:16}}>提交</Text>
                        </View>
                        </TouchableHighlight>
                    </View>
                );
            }

        },

        _onChangeFlag: function () {
            if (this.state.isWholeDay) {
                this.setState({isWholeDay: false})
            } else {
                this.setState({isWholeDay: true})
            }
        }

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

module.exports = KaoQinModule;