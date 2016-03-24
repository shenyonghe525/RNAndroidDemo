/**
 * Created by shenyonghe689 on 16/2/26.
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
    Switch,
    TextInput,
    } = React;

/**
 * 按钮
 */
var Button = React.createClass(
    {
        render: function () {

            return (
                <TouchableHighlight
                    underlayColor="rgb(210, 230, 255)"
                    activeOpacity={0.5}
                    onPress={()=> alert('开始会议')}>
                    <View style={{marginLeft:30,marginBottom:10,height:40,width:300,backgroundColor:'#ff6600',alignItems:'center',
                            justifyContent:'center',borderRadius: 5,borderColor:'#eeeeee',borderStyle:'solid',borderWidth:1}}>
                        <Text>开始会议(1/10)</Text>
                    </View>
                </TouchableHighlight>
            );
        },

    });

/**
 * 导航
 */
var BarView = React.createClass(
    {

        render: function () {

            return (
                <View style={styles.barBox}>
                    <TouchableHighlight
                        underlayColor="rgb(210, 230, 255)"
                        activeOpacity={0.5}
                        onPress={()=> this._onBcak()}>
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
        }

    });

/**
 * 时间选择器 下拉列表 list
 */
var PagesView = React.createClass(
    {


        getInitialState: function () {
            var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            return {
                isWholeDay: true,
                startText: '开始时间',
                endText: '结束时间',
                allDate: new Date(2020, 4, 5),
                language: '',
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