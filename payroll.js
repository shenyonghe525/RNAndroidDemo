/**
 * Created by shenyonghe689 on 16/3/4.
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
var _navigatorPay;

var PayRollModule = React.createClass({


    configureScenceAndroid: function(){
        return Navigator.SceneConfigs.FadeAndroid;
    },

    renderSceneAndroid: function(route, navigator){
        _navigatorPay = navigator;
        if(route.id === 'paymonth'){
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
                        <Text style={styles.barTitleStyle}>工资单</Text>
                        <TouchableHighlight
                            underlayColor="rgb(210, 230, 255)"
                            activeOpacity={0.5}
                        >
                            <View style={{flexDirection:'row',alignItems: 'center',justifyContent: 'center',}}>
                                <Image source={require('./img/actionbar_work.png')} style={styles.imgRightStyleBar}/>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <View style={{height:1,backgroundColor:'#cccccc'}}/>

                    <ScrollView showsVerticalScrollIndicator={true} style={{flex:1}}>
                        <MonthPay month="12月" />
                        <MonthPay month="11月" />
                        <MonthPay month="10月" />
                        <MonthPay month="9月" />
                        <MonthPay month="8月" />
                        <MonthPay month="7月" />
                        <MonthPay month="6月" />
                        <MonthPay month="5月" />
                        <MonthPay month="4月" />
                        <MonthPay month="3月" />
                        <MonthPay month="2月" />
                        <MonthPay month="1月" />
                    </ScrollView>

                </View>
            );
        }

        if(route.id === 'monthdetails'){
            return (
                <View style={{flex: 1,backgroundColor: "#ffffff"}}>
                    <View style={styles.barBox}>
                        <TouchableHighlight
                            underlayColor="rgb(210, 230, 255)"
                            activeOpacity={0.5}
                            onPress={()=> this._onBcakTo()}>
                            <View style={{flexDirection:'row',alignItems: 'center',justifyContent: 'center',}}>
                                <Image source={require('./img/actionbar_back.png')} style={styles.imgStyleBar}/>
                                <Text style={styles.barTxtStyle}>返回</Text>
                            </View>
                        </TouchableHighlight>
                        <Text style={styles.barTitleStyle}>2015年12月</Text>
                        <TouchableHighlight
                            underlayColor="rgb(210, 230, 255)"
                            activeOpacity={0.5}
                        >
                            <View style={{flexDirection:'row',alignItems: 'center',justifyContent: 'center',}}>
                                <Image source={require('./img/actionbar_work.png')} style={styles.imgRightStyleBar}/>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <View style={{height:1,backgroundColor:'#cccccc'}}/>
                    <ScrollView showsVerticalScrollIndicator={true} style={{flex:1}}>
                        <View style={{flexDirection:'row',alignItems: 'center',justifyContent: 'center',marginTop:10,marginBottom:10}}>
                            <View style={{flex:1}}/>
                            <View style={{width:100,height:100,backgroundColor:'#1E90FF',borderRadius: 4,alignItems: 'center',justifyContent: 'center',}}>
                                <Image source={require('./img/money_1x.png')} style={{width:30,height:30}}/>
                                <Text style={{fontSize:18,color:'#ffffff'}}>总报酬</Text>
                                <Text style={{fontSize:18,color:'#ffffff'}}>13000.00</Text>
                            </View>
                            <View style={{flex:1}}/>
                            <View style={{width:100,height:100,backgroundColor:'#EE7600',borderRadius: 4,alignItems: 'center',justifyContent: 'center'}}>
                                <Image source={require('./img/money_1x.png')} style={{width:30,height:30}}/>
                                <Text style={{fontSize:18,color:'#ffffff'}}>总收入</Text>
                                <Text style={{fontSize:18,color:'#ffffff'}}>10000.00</Text>
                            </View>
                            <View style={{flex:1}}/>
                            <View style={{width:100,height:100,backgroundColor:'#FFA500',borderRadius: 4,alignItems: 'center',justifyContent: 'center'}}>
                                <Image source={require('./img/money_1x.png')} style={{width:30,height:30}}/>
                                <Text style={{fontSize:18,color:'#ffffff'}}>净收入</Text>
                                <Text style={{fontSize:18,color:'#ffffff'}}>8888.00</Text>
                            </View>
                            <View style={{flex:1}}/>
                        </View>
                        <View style={{height:30,backgroundColor:'#4169E1'}}>
                            <Text style={{fontSize:18,color:'#ffffff',justifyContent: 'center',marginLeft:10}}>个人收入</Text>
                        </View>

                        <PayItem num="1" name="底薪/基本工资" value="8000.00"/>
                        <PayItem num="2" name="内勤绩效" value="2000.00"/>

                        <View style={{flexDirection: 'row',height:40,backgroundColor:'#ffffff',justifyContent: 'center',}}>
                            <Text style={{fontSize:18,marginLeft:10}}>个人收入</Text>
                            <View style={{flex:1}}/>
                            <Text style={{fontSize:18,marginRight:10}}>8000.00</Text>
                        </View>
                        <View style={{height:1,backgroundColor:'#cccccc'}}/>

                        <PayItem num="1" name="养老保险扣款" value="666.00"/>
                        <PayItem num="2" name="医疗保险扣款" value="150.00"/>
                        <PayItem num="3" name="住房公积金扣款" value="666.00"/>
                        <PayItem num="4" name="代扣个人所得税" value="350.00"/>
                        <PayItem num="5" name="代扣工会费" value="11.00"/>

                        <View style={{height:30,backgroundColor:'#4169E1',marginTop:10}}>
                            <Text style={{fontSize:18,color:'#ffffff',justifyContent: 'center',marginLeft:10}}>公司项</Text>
                        </View>

                        <PayItem num="1" name="养老保险(公司)" value="666.00"/>
                        <PayItem num="2" name="医疗保险(公司)" value="150.00"/>
                        <PayItem num="3" name="住房公积金(公司)" value="666.00"/>
                        <PayItem num="4" name="工伤保险(公司)" value="350.00"/>
                        <PayItem num="5" name="综合福利(公司)" value="11.00"/>

                        <View style={{height:30,backgroundColor:'#4169E1',marginTop:10}}>
                            <Text style={{fontSize:18,color:'#ffffff',justifyContent: 'center',marginLeft:10}}>分配明细</Text>
                        </View>

                        <Text style={{color:'#4169E1',marginLeft:10}}>66213767127631672367123</Text>

                        <View style={{flexDirection:'row',height:40,justifyContent: 'center',}}>
                            <Text style={{fontSize:18,marginLeft:10}}>100%</Text>
                            <View style={{flex:1}}/>
                            <Text style={{fontSize:18,marginRight:10}}>8000.00</Text>
                        </View>
                        <View style={{height:1,backgroundColor:'#cccccc'}}/>

                        <View style={{height:1,backgroundColor:'#cccccc',marginTop:20}}/>
                    </ScrollView>
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
                initialRoute={{ title: 'paymonth', id:'paymonth'}}
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
        if (_navigatorPay == null) {
            return false;
        }
        if (_navigatorPay.getCurrentRoutes().length === 1) {
            return false;
        }
        _navigatorPay.pop();
        return true;
    }
});

var MonthPay = React.createClass(
    {

        render: function () {
            return (
                <TouchableHighlight
                    underlayColor="rgb(210, 230, 255)"
                    activeOpacity={0.5}
                    onPress={()=> this._onGoDetails(this.props.month)}>
                    <View style={{backgroundColor:'#ffffff',marginLeft:10,marginTop:10,marginRight:10,height:60}}>
                        <View style={{backgroundColor:'#ffffff',flexDirection: 'row',}}>
                            <View style={{ marginTop: 10,marginLeft: 10,backgroundColor: '#EE7600',width: 28,height:28,borderRadius: 14,justifyContent: 'center',alignItems: 'center',}}>
                                <Text style={{fontSize:8,color:'#ffffff'}}>{this.props.month}</Text>
                            </View>

                            <View style={{marginLeft: 10,justifyContent: 'center',height:60}}>
                                <Text style={{fontSize:12}}>净收入</Text>
                                <Text style={{fontSize:18,color: '#000000',}}>8888.00</Text>
                            </View>

                            <View style={{flex:1}}/>

                            <View style={{margin: 5,width:1,height:50,backgroundColor:'#cccccc'}}/>

                            <View style={{margin: 10,justifyContent: 'center',height:40}}>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={{fontSize:12}}>收入:</Text>
                                    <Text style={{fontSize:12,color: '#00FF7F',}}>10000.00</Text>
                                </View>
                                <View style={{backgroundColor:'#cccccc',height:1,width:90}}/>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={{fontSize:12}}>扣减:</Text>
                                    <Text style={{fontSize:12,color: '#CD6839',}}>1112.00</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableHighlight>
            );
        },

        _onGoDetails:function(month){
           _navigatorPay.push({title:"monthdetails",id:"monthdetails"});
        }

    }
);

var PayItem = React.createClass(
    {

        render: function () {
            return (
                <View >
                    <View style={{backgroundColor:'#ffffff',flexDirection: 'row',height:40,alignItems: 'center',}}>
                        <View style={{marginLeft:10,backgroundColor: '#EE7600',width: 24,height:24,borderRadius: 12,justifyContent: 'center',alignItems: 'center',}}>
                            <Text style={{fontSize:10,color:'#ffffff'}}>{this.props.num}</Text>
                        </View>
                        <Text style={{fontSize:18,marginLeft:10}}>{this.props.name}</Text>
                        <View style={{flex:1}}/>
                        <Text style={{fontSize:18,marginRight:10}}>{this.props.value}</Text>
                    </View>
                    <View style={{height:1,backgroundColor:'#cccccc'}}/>
                </View>
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

    imgRightStyleBar: {
        width: 30,
        height: 30,
        marginRight: 10,
        alignSelf: 'center',
    },

});

module.exports = PayRollModule;