'use strict';

var React = require('react-native');

var {
    AppRegistry,
    } =  React;

var LoginModule = require('./login.js');

AppRegistry.registerComponent('RNAndroidDemo', () => LoginModule);