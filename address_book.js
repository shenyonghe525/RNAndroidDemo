/**
 * Created by shenyonghe689 on 16/3/21.
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
    Navigator,
    ListView,
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
var _navigatorAB;
var TitleBarView = require('./title_bar.js');

/**
 * 企业通讯录
 */
var AddressBookModule = React.createClass({

    getInitialState: function () {
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return {
            dataSource: ds.cloneWithRows(['平安银行', '平安寿险', '平安产险', '平安养老险', '平安银行', '平安银行', '平安银行',
                '平安银行', '平安银行', '平安银行', '平安银行', '平安银行']),
            language: '',
            num: '',
        };
    },

    _renderRow: function (rowData:string, sectionID:number, rowID:number) {
        return (
            <TouchableOpacity>
                <View>
                    <View style={{height:50,backgroundColor:'#ffffff',justifyContent:'center'}}>
                        <Text style={{marginLeft:10,fontSize:16,color:'#000000'}}>{rowData}</Text>
                    </View>
                    <View style={{height:1,backgroundColor:'#cccccc'}}/>
                </View>
            </TouchableOpacity>
        );
    },

    configureScenceAndroid: function () {
        return Navigator.SceneConfigs.FadeAndroid;
    },

    renderSceneAndroid: function (route, navigator) {
        _navigatorAB = navigator;
        if (route.id === 'adressbook') {
            return (
                <View style={styles.container}>
                    <TitleBarView onPress={()=>this._onBcak()} title="企业通讯录" />
                    <View style={{height:1,backgroundColor:'#cccccc'}}/>
                    <TextInput
                        style={{height:40,backgroundColor:'#ffffff',margin:10}}
                        numberOfLines={3}
                        autoFocus={true}
                        underlineColorAndroid={'transparent'}
                        placeholder='组织/姓名/UM/座机/手机/各种组合'
                        onSubmitEditing={()=> _navigatorAB.push({title: 'grxx', id: 'grxx'})}
                        textAlign="center"/>
                    <View style={{height:1,backgroundColor:'#cccccc'}}/>

                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this._renderRow}
                    />

                </View>
            );
        }

        else if (route.id === 'grxx') {
            return (
                <View style={styles.container}>
                    <TitleBarView onPress={()=>this._onBcakTo()} title="详细资料" />
                    <View style={{height:1,backgroundColor:'#cccccc'}}/>

                    <ScrollView showsVerticalScrollIndicator={true} style={{flex:1}}>
                        <View
                            style={{height:150,alignItems: 'center',justifyContent: 'center',backgroundColor:'#ffffff'}}>
                            <Image source={require('./img/man.png')} style={{width:80,height:80,margin:5}}/>
                            <Text style={{color:'#000000',fontSize:16}}>XXX</Text>
                        </View>
                        <View style={{height:1,backgroundColor:'#cccccc'}}/>

                        <View style={{height:50,alignItems: 'center',backgroundColor:'#ffffff',flexDirection:'row'}}>
                            <Text style={{marginLeft:10,color:'#000000',fontSize:16}}>职称</Text>
                            <Text style={{marginLeft:10,fontSize:14}}>XXX工程师</Text>
                        </View>
                        <View style={{marginLeft:10,height:1,backgroundColor:'#cccccc'}}/>

                        <View style={{height:50,alignItems: 'center',backgroundColor:'#ffffff',flexDirection:'row'}}>
                            <Text style={{marginLeft:10,color:'#000000',fontSize:16}}>部门</Text>
                            <Text style={{marginLeft:10,fontSize:14}}>XXX系统开发部</Text>
                        </View>
                        <View style={{height:1,backgroundColor:'#cccccc'}}/>
                        <View style={{height:20,backgroundColor:'#eeeeee'}}/>
                        <View style={{height:1,backgroundColor:'#cccccc'}}/>

                        <View style={{height:50,alignItems: 'center',backgroundColor:'#ffffff',flexDirection:'row'}}>
                            <Text style={{marginLeft:10,color:'#000000',fontSize:16}}>邮件</Text>
                            <Text style={{marginLeft:10,fontSize:14}}>XXX@PINGAN.COM.CN</Text>
                            <View style={{flex:1}}/>
                            <Image source={require('./img/contact_detail_email.png')}
                                   style={{width:27,height:23,marginRight:10}}/>
                        </View>
                        <View style={{marginLeft:10,height:1,backgroundColor:'#cccccc'}}/>

                        <View style={{height:50,alignItems: 'center',backgroundColor:'#ffffff',flexDirection:'row'}}>
                            <Text style={{marginLeft:10,color:'#000000',fontSize:16}}>座机</Text>
                            <Text style={{marginLeft:10,fontSize:14}}>XXXXXXXXXXX</Text>
                            <View style={{flex:1}}/>
                            <Image source={require('./img/contact_detail_email.png')}
                                   style={{width:27,height:23,marginRight:10}}/>
                        </View>
                        <View style={{marginLeft:10,height:1,backgroundColor:'#cccccc'}}/>

                        <View style={{height:50,alignItems: 'center',backgroundColor:'#ffffff',flexDirection:'row'}}>
                            <Text style={{marginLeft:10,color:'#00000000',fontSize:16}}>邮件</Text>
                            <Text style={{marginLeft:10,fontSize:14}}>XXXXXX</Text>
                            <View style={{flex:1}}/>
                            <Image source={require('./img/contact_detail_email.png')}
                                   style={{width:27,height:23,marginRight:10}}/>
                        </View>
                        <View style={{marginLeft:10,height:1,backgroundColor:'#cccccc'}}/>

                        <View style={{height:50,alignItems: 'center',backgroundColor:'#ffffff',flexDirection:'row'}}>
                            <Text style={{marginLeft:10,color:'#000000',fontSize:16}}>手机</Text>
                            <Text style={{marginLeft:10,fontSize:14}}>123456789000</Text>
                            <View style={{flex:1}}/>
                            <Image source={require('./img/contact_detail_email.png')}
                                   style={{width:27,height:23,marginRight:10}}/>
                        </View>
                        <View style={{height:1,backgroundColor:'#cccccc'}}/>
                        <View style={{height:20,backgroundColor:'#eeeeee'}}/>
                        <View style={{height:1,backgroundColor:'#cccccc'}}/>

                        <TouchableHighlight
                            underlayColor="rgb(210, 230, 255)"
                            activeOpacity={0.5}
                            onPress={()=> _navigatorAB.push({title: 'zuzhi', id: 'zuzhi'})}>
                            <View
                                style={{height:50,alignItems: 'center',backgroundColor:'#ffffff',flexDirection:'row'}}>
                                <Text style={{marginLeft:10,color:'#000000',fontSize:16}}>组织</Text>
                                <View style={{flex:1}}/>
                                <Image source={require('./img/ic_more.png')}
                                       style={{width:27,height:23,marginRight:10}}/>
                            </View>
                        </TouchableHighlight>

                        <View style={{height:1,backgroundColor:'#cccccc'}}/>
                        <View style={{height:20,backgroundColor:'#eeeeee'}}/>
                        <View style={{height:1,backgroundColor:'#cccccc'}}/>
                    </ScrollView>
                </View>
            );
        }

        else if (route.id === 'zuzhi') {
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
                        <Text style={styles.barTitleStyle}>XXX的组织</Text>
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
                        <View style={{height:30,alignItems: 'center',backgroundColor:'#eeeeee',flexDirection:'row'}}>
                            <Text style={{marginLeft:10}}>上级</Text>
                        </View>
                        <View style={{height:1,backgroundColor:'#cccccc'}}/>
                        <Item title="职务: XXX分组经理(开发)"/>
                        <View style={{height:1,backgroundColor:'#cccccc'}}/>

                        <View style={{height:30,alignItems: 'center',backgroundColor:'#eeeeee',flexDirection:'row'}}>
                            <Text style={{marginLeft:10}}>同级</Text>
                        </View>
                        <View style={{height:1,backgroundColor:'#cccccc'}}/>

                        <Item title="XXX开发工程师"/>
                        <View style={{height:1,backgroundColor:'#cccccc'}}/>

                        <Item title="XXX开发工程师"/>
                        <View style={{height:1,backgroundColor:'#cccccc'}}/>

                        <Item title="XXX开发工程师"/>
                        <View style={{height:1,backgroundColor:'#cccccc'}}/>

                        <Item title="XXX开发工程师"/>
                        <View style={{height:1,backgroundColor:'#cccccc'}}/>

                        <Item title="XXX开发工程师"/>
                        <View style={{height:1,backgroundColor:'#cccccc'}}/>

                        <Item title="XXX开发工程师"/>
                        <View style={{height:1,backgroundColor:'#cccccc'}}/>

                        <Item title="XXX开发工程师"/>
                        <View style={{height:1,backgroundColor:'#cccccc'}}/>

                        <Item title="XXX开发工程师"/>
                        <View style={{height:1,backgroundColor:'#cccccc'}}/>

                        <Item title="XXX开发工程师"/>
                        <View style={{height:1,backgroundColor:'#cccccc'}}/>
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
                initialRoute={{ title: 'adressbook', id:'adressbook'}}
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
        if (_navigatorAB == null) {
            return false;
        }
        if (_navigatorAB.getCurrentRoutes().length === 1) {
            return false;
        }
        _navigatorAB.pop();
        return true;
    },

});

var Item = React.createClass(
    {

        render: function () {
            return (
                <View style={{height:60,justifyContent: 'center',backgroundColor:'#ffffff',}}>
                    <Text style={{marginLeft:10,color:'#000000',fontSize:16}}>XXX</Text>
                    <Text style={{marginLeft:10,fontSize:14}}>{this.props.title}</Text>
                </View>
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
        fontSize: 18
    },

    ChooseItem: {
        fontSize: 18,
        backgroundColor: '#ccff00'
    }
});

module.exports = AddressBookModule;
