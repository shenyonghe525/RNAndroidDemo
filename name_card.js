/**
 * Created by shenyonghe689 on 16/3/1.
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

var NameCardModule = React.createClass({


    render: function () {
        _navigator = this.props.navigator;
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
                    <Text style={styles.barTitleStyle}>个人资料</Text>
                    <TouchableHighlight
                        underlayColor="rgb(210, 230, 255)"
                        activeOpacity={0.5}
                        >
                        <View style={{flexDirection:'row',alignItems: 'center',justifyContent: 'center',}}>
                            <Image source={require('./img/actionbar_work.png')} style={styles.imgRightStyleBar}/>
                        </View>
                    </TouchableHighlight>
                </View>

                <Image source={require('./img/name_card.png')} style={{flex:1,margin: 10,width:340,}}/>

            </View>
        );
    },
    _onBcak:function(){
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

module.exports = NameCardModule;