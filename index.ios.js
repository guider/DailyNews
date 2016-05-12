/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


'use strict'

import React, {
    AppRegistry,
    Component,
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    ListView
} from 'react-native';

let HOME_TAB = 'homeTab';
let HOME_NORMAL = require('./images/icon_home_nor.png');
let HOME_SELECT = require('./images/icon_home_pre.png');


let MESSAGE_TAB = 'messageTab';
let MESSAGE_NORMAL = require('./images/icon_message_nor.png');
let MESSAGE_SELECT = require('./images/icon_message_pre.png');

let FIND_TAB = 'findTab';
let FIND_NORMAL = require('./images/icon_find_nor.png');
let FIND_SELECT = require('./images/icon_find_pre.png');

let ME_TAB = 'meTab';
let ME_NORMAL = require('./images/icon_user_nor.png');
let ME_SELECT = require('./images/icon_user_pre.png');
import TabNavigator from 'react-native-tab-navigator';
import Message from './views/Message';
import Find from './views/Find';
import TopNav from './views/TopNav';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: HOME_TAB,
            tabBarshow: true
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <TabNavigator
                    hidesTabTouch={false}
                    sceneStyle={{paddingBottom :0}}
                    tabBarStyle={styles.tabNav}>
                    {this.renderTabItem(HOME_TAB, HOME_NORMAL, '首页', HOME_SELECT)}
                    {this.renderTabItem(MESSAGE_TAB, MESSAGE_NORMAL, '消息', MESSAGE_SELECT)}
                    {this.renderTabItem(FIND_TAB, FIND_NORMAL, '发现', FIND_SELECT)}
                    {this.renderTabItem(ME_TAB, ME_NORMAL, '我的', ME_SELECT)}
                </TabNavigator>
            </View>
        )
    }

    renderTabItem(tag, img, title, selectedImage) {
        return (
            <TabNavigator.Item
                selected={this.state.selectedTab===tag}
                renderIcon={()=><Image style ={{width:30,height:30}} source={img}/>}
                title={title}
                renderSelectedIcon={()=><Image  style ={{width:30,height:30}} source={selectedImage}/>}
                onPress={()=>this.setState({selectedTab:tag})}
            >
                {this.createChildView(tag)}
            </TabNavigator.Item>
        );

    }


    createChildView(tag) {
        let childView;
        switch (tag) {
            case HOME_TAB:
                childView = <TopNav/>
                break;
            case MESSAGE_TAB:
                childView = <Message/>
                break;
            case FIND_TAB:
                childView = <Find/>
                break;
            default :
                childView = <TopNav/>
                break
        }

        return (<View style={styles.container}>{childView}</View>);
    }


}
const styles = StyleSheet.create({
    container: {
        top: 10,
        bottom: 10,
        flex: 1,
    },
    tabNav: {
        bottom: 10,
        height: 50,
        backgroundColor: '#FFFF',
        alignItems: 'center',
        borderTopWidth: 0.5,
        borderTopColor: '#e8e8e8',
    }
});
AppRegistry.registerComponent('DailyNews', () => App);
