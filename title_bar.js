/**
 * Created by shenyonghe689 on 16/3/28.
 */

'use strict';
var React = require('react-native');
var {
    StyleSheet,
    Image,
    Text,
    View,
    TouchableHighlight,
    } = React;

var TitleBarView = React.createClass(
    {

        render: function () {
            return (
                <View style={styles.barBox}>
                    <TouchableHighlight
                        underlayColor="rgb(210, 230, 255)"
                        activeOpacity={0.5}
                        onPress={this.props.onPress}>
                        <View style={{flexDirection:'row',alignItems: 'center',justifyContent: 'center',}}>
                            <Image source={require('./img/actionbar_back.png')} style={styles.imgStyleBar}/>
                        </View>
                    </TouchableHighlight>
                    <Text style={styles.barTitleStyle}>{this.props.title}</Text>
                    <TouchableHighlight
                        underlayColor="rgb(210, 230, 255)"
                        activeOpacity={0.5}>
                        <View style={{flexDirection:'row',alignItems: 'center',justifyContent: 'center',}}>
                            <Image source={require('./img/actionbar_work.png')} style={styles.imgRightStyleBar}/>
                        </View>
                    </TouchableHighlight>
                </View>
            );
        },

    });

const styles = StyleSheet.create({

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
        width: 20,
        height: 30,
        margin: 10,
        alignSelf: 'center',
    },

    imgRightStyleBar: {
        width: 40,
        height: 30,
        marginRight: 10,
        alignSelf: 'center',
    },

});

module.exports = TitleBarView;