/**
 * Created by shenyonghe689 on 16/3/18.
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
    ScrollView,
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
var _navigatorJX;


var JIXIAOModule = React.createClass({

    getInitialState: function () {
        return {
            pageNum: 1,
            maxText: '2016/3',
            language: '',
            num:'',
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
        _navigatorJX = navigator;
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
                        <Text style={styles.barTitleStyle}>写汇报</Text>
                        <TouchableHighlight
                            underlayColor="rgb(210, 230, 255)"
                            activeOpacity={0.5}>
                            <View style={{flexDirection:'row',alignItems: 'center',justifyContent: 'center',}}>
                                <Image source={require('./img/actionbar_work.png')} style={styles.imgRightStyleBar}/>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <View style={{height:1,backgroundColor:'#cccccc'}}/>
                    <View
                        style={{height:40,alignItems:'center',justifyContent:'center',flexDirection:'row',backgroundColor:'#ffffff'}}>
                        <CustomButton style={{marginLeft: 100}}
                                      text={this.state.maxText}
                                      onPress={this.showPicker.bind(this, 'max', {date: this.state.maxDate,maxDate:new Date()})}/>
                        <Text style={{marginLeft:10,color:'#FFA500'}}>未提交</Text>
                    </View>
                    <View style={{height:1,backgroundColor:'#cccccc'}}/>

                    <View style={{height:40,backgroundColor:'#cccccc',flexDirection:'row',alignItems:'center',}}>
                        <Image source={require('./img/ic_login_unlock.png')}
                               style={{height:20,width:20,marginLeft:20}}/>
                        <Text style={{marginLeft:10,fontSize:18,color:'#000000'}}>KPI工作计划</Text>
                    </View>
                    <TouchableHighlight
                        underlayColor="rgb(210, 230, 255)"
                        activeOpacity={0.5}
                        onPress={()=> alert(1)}>
                        <View style={{height:40,backgroundColor:'#ffffff',flexDirection:'row',alignItems:'center',}}>
                            <Image source={require('./img/free_wifi_sequence1.png')}
                                   style={{height:20,width:20,marginLeft:20}}/>
                            <Text style={{marginLeft:10,fontSize:14,color:'#000000'}}>需求实现率(30天\14天)</Text>
                            <View style={{flex:1}}/>
                            <Image style={{width:15,height: 15,marginRight:5}}
                                   source={require('./img/ic_more.png')}/>
                        </View>
                    </TouchableHighlight>

                    <View style={{height:40,backgroundColor:'#cccccc',flexDirection:'row',alignItems:'center',}}>
                        <Image source={require('./img/ic_login_unlock.png')}
                               style={{height:20,width:20,marginLeft:20}}/>
                        <Text style={{marginLeft:10,fontSize:18,color:'#000000'}}>关键工作计划</Text>
                    </View>

                    <TouchableHighlight
                        underlayColor="rgb(210, 230, 255)"
                        activeOpacity={0.5}
                        onPress={()=> _navigatorJX.push({title: 'wdjxxq', id: 'wdjxxq'})}>
                        <View style={{height:40,backgroundColor:'#ffffff',flexDirection:'row',alignItems:'center',}}>
                            <Image source={require('./img/free_wifi_sequence1.png')}
                                   style={{height:20,width:20,marginLeft:20}}/>
                            <Text style={{marginLeft:10,fontSize:14,color:'#000000'}}>1 继续支持人社通...</Text>
                            <View style={{flex:1}}/>
                            <Text style={{marginLeft:10,fontSize:14,color:'#ffd700'}}>正在进行</Text>
                            <Image style={{width:15,height: 15,marginRight:5}}
                                   source={require('./img/ic_more.png')}/>
                        </View>
                    </TouchableHighlight>
                </View>
            );
        }

        else if (route.id === 'wdjxxq') {
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
                        <Text style={styles.barTitleStyle}>我的3月汇报</Text>
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
                        <View
                            style={{height:40,alignItems:'center',justifyContent:'center',flexDirection:'row',backgroundColor:'#ffffff'}}>
                            <CustomButton style={{marginLeft: 100}}
                                          text={this.state.maxText}
                                          onPress={this.showPicker.bind(this, 'max', {date: this.state.maxDate,maxDate:new Date()})}/>
                            <Text style={{marginLeft:10,color:'#FFA500'}}>未提交</Text>
                        </View>
                        <View style={{height:40,backgroundColor:'#cccccc',flexDirection:'row',alignItems:'center',}}>
                            <Image source={require('./img/ic_login_unlock.png')}
                                   style={{height:20,width:20,marginLeft:20}}/>
                            <Text style={{marginLeft:10,fontSize:18,color:'#000000'}}>KPI工作计划</Text>
                        </View>

                        <View style={{height:70,backgroundColor:'#ffffff',justifyContent:'center'}}>
                            <Text style={{marginLeft:10,fontSize:14}}>预期目标:</Text>
                            <Text style={{marginLeft:10,fontSize:14,color:'#000000'}}>30天需求实现率达成95%,14天需求实现率达成85%</Text>
                        </View>
                        <View style={{height:1,backgroundColor:'#cccccc'}}/>

                        <View style={{height:70,backgroundColor:'#ffffff',justifyContent:'center'}}>
                            <Text style={{marginLeft:10,fontSize:14}}>本月完成:</Text>
                            <TextInput
                                style={{height:30,backgroundColor:'#ffffff'}}
                                numberOfLines={3}
                                autoFocus={true}
                                underlineColorAndroid={'transparent'}
                                textAlign="start"/>
                        </View>

                        <View style={{height:40,backgroundColor:'#cccccc',flexDirection:'row',alignItems:'center',}}>
                            <Image source={require('./img/ic_login_unlock.png')}
                                   style={{height:20,width:20,marginLeft:20}}/>
                            <Text style={{marginLeft:10,fontSize:18,color:'#000000'}}>关键工作计划</Text>
                        </View>


                        <View style={{height:40,backgroundColor:'#ffffff',flexDirection:'row',alignItems:'center',}}>
                            <Image source={require('./img/free_wifi_sequence1.png')}
                                   style={{height:20,width:20,marginLeft:20}}/>
                            <Text style={{marginLeft:10,fontSize:14,color:'#000000'}}>1 继续支持人社通...</Text>
                            <View style={{flex:1}}/>
                            <Text style={{marginLeft:10,fontSize:14,color:'#ffd700'}}>正在进行</Text>
                            <Image style={{width:15,height: 15,marginRight:5}}
                                   source={require('./img/ic_more.png')}/>
                        </View>
                        <View style={{height:1,backgroundColor:'#cccccc'}}/>

                        <View style={{height:100,backgroundColor:'#ffffff'}}>
                            <Text style={{marginLeft:10,fontSize:14}}>上月安排:</Text>
                            <Text style={{marginLeft:10,fontSize:14,color:'#000000'}}>1.智慧社通https网络框架编写.
                                2.react-native的调研工作以及快乐平安页面版的编写. 3.人社通项目交接.</Text>
                        </View>
                        <View style={{height:1,backgroundColor:'#cccccc'}}/>
                        <View style={{height:70,backgroundColor:'#ffffff',justifyContent:'center'}}>
                            <Text style={{marginLeft:10,fontSize:14}}>实际完成:</Text>
                            <TextInput
                                style={{height:30,backgroundColor:'#ffffff'}}
                                numberOfLines={3}
                                autoFocus={true}
                                underlineColorAndroid={'transparent'}
                                textAlign="start"/>
                        </View>
                        <View style={{height:1,backgroundColor:'#cccccc'}}/>
                        <View style={{height:70,backgroundColor:'#ffffff',justifyContent:'center'}}>
                            <Text style={{marginLeft:10,fontSize:14}}>下月完成:</Text>
                            <TextInput
                                style={{height:30,backgroundColor:'#ffffff'}}
                                numberOfLines={3}
                                autoFocus={true}
                                underlineColorAndroid={'transparent'}
                                textAlign="start"/>
                        </View>
                        <View style={{height:1,backgroundColor:'#cccccc'}}/>
                        <View style={{height:50,backgroundColor:'#ffffff',alignItems:'center',flexDirection:'row'}}>
                            <Text style={{marginLeft:10,fontSize:18}}>完成情况:</Text>
                            <Picker
                                style={{width:200,marginLeft:20,}}
                                selectedValue={this.state.language}
                                onValueChange={(value) => this.setState({language: value})}>
                                <Picker.Item label="正在进行" value="正在进行"/>
                                <Picker.Item label="已完成" value="已完成"/>
                            </Picker>
                        </View>
                        <View style={{height:1,backgroundColor:'#cccccc',marginBottom:20}}/>

                    </ScrollView>
                    <View style={{height:1,backgroundColor:'#cccccc'}}/>
                    <View style={{height:50,backgroundColor:'#ffffff',alignItems:'center',flexDirection:'row'}}>
                        <TouchableHighlight
                            style={{flex:1}}
                            underlayColor="rgb(210, 230, 255)"
                            activeOpacity={0.5}
                            onPress={()=> alert('开始会议')}>
                            <View style={{margin:10,height:30,backgroundColor:'#1E90FF',alignItems:'center',flex:1,
                            justifyContent:'center',borderRadius: 5,borderColor:'#eeeeee',borderStyle:'solid',borderWidth:1}}>
                                <Text>保存</Text>
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight
                            style={{flex:1}}
                            underlayColor="rgb(210, 230, 255)"
                            activeOpacity={0.5}
                            onPress={()=> _navigatorJX.push({title: 'pingfen', id: 'pingfen'})}>
                            <View style={{margin:10,height:30,backgroundColor:'#ff6600',alignItems:'center',flex:1,
                            justifyContent:'center',borderRadius: 5,borderColor:'#eeeeee',borderStyle:'solid',borderWidth:1}}>
                                <Text>评分</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
            );
        }

        else if (route.id === 'pingfen') {
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
                        <Text style={styles.barTitleStyle}>评分</Text>
                        <TouchableHighlight
                            underlayColor="rgb(210, 230, 255)"
                            activeOpacity={0.5}>
                            <View style={{flexDirection:'row',alignItems: 'center',justifyContent: 'center',}}>
                                <Image source={require('./img/actionbar_work.png')} style={styles.imgRightStyleBar}/>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <View style={{height:1,backgroundColor:'#cccccc'}}/>
                    <View style={{marginLeft:10,marginTop:10,marginRight:10,height:40,backgroundColor:'#ffffff',flexDirection:'row',alignItems:'center',}}>
                        <Text style={{marginLeft:10,fontSize:18,color:'#000000'}}>关键工作计划</Text>
                        <View style={{flex:1}}/>
                        <Text style={{marginLeft:10,fontSize:18,color:'#000000'}}>权重</Text>
                        <Text style={{marginLeft:10,marginRight:10,fontSize:18,color:'#000000'}}>评分</Text>
                    </View>
                    <View style={{marginLeft:10,marginRight:10,height:1,backgroundColor:'#cccccc'}}/>
                    <View style={{marginLeft:10,marginBottom:10,marginRight:10,height:40,backgroundColor:'#ffffff',flexDirection:'row',alignItems:'center',}}>
                        <View style={{flex:1}}/>
                        <Text style={{marginLeft:10,fontSize:18,color:'#000000'}}>总评分</Text>
                        <Text style={{marginLeft:10,marginRight:10,fontSize:18,color:'#000000'}}>0.00</Text>
                    </View>

                    <View style={{margin:10,height:40,backgroundColor:'#ffffff',flexDirection:'row',alignItems:'center',}}>
                        <Text style={{marginLeft:10,fontSize:18,color:'#000000'}}>总评分</Text>
                        <Picker
                            style={{width:200,marginLeft:20,}}
                            selectedValue={this.state.num}
                            onValueChange={(value) => this.setState({num: value})}>
                            <Picker.Item label="4.0" value="4.0"/>
                            <Picker.Item label="5.0" value="5.0"/>
                        </Picker>
                    </View>
                    <View style={{flex:1}}/>

                    <View style={{height:50,backgroundColor:'#ffffff',alignItems:'center',flexDirection:'row'}}>
                        <TouchableHighlight
                            style={{flex:1}}
                            underlayColor="rgb(210, 230, 255)"
                            activeOpacity={0.5}
                            onPress={()=> alert('已保存')}>
                            <View style={{margin:10,height:30,backgroundColor:'#1E90FF',alignItems:'center',flex:1,
                            justifyContent:'center',borderRadius: 5,borderColor:'#eeeeee',borderStyle:'solid',borderWidth:1}}>
                                <Text>保存</Text>
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight
                            style={{flex:1}}
                            underlayColor="rgb(210, 230, 255)"
                            activeOpacity={0.5}
                            onPress={()=> alert('已提交')}>
                            <View style={{margin:10,height:30,backgroundColor:'#ff6600',alignItems:'center',flex:1,
                            justifyContent:'center',borderRadius: 5,borderColor:'#eeeeee',borderStyle:'solid',borderWidth:1}}>
                                <Text>提交</Text>
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

    _onBcakTo: function () {
        if (_navigatorJX == null) {
            return false;
        }
        if (_navigatorJX.getCurrentRoutes().length === 1) {
            return false;
        }
        _navigatorJX.pop();
        return true;
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
        fontSize: 18
    },

    ChooseItem: {
        fontSize: 18,
        backgroundColor: '#ccff00'
    }
});

module.exports = JIXIAOModule;