/**
 * Created by apple on 16/4/28.
 */
'use strict'

import React,{
    Component,
    View,
    StyleSheet,
    ListView,
    TouchableHighlight,
    ScrollView,
    Image,
    Text,
    Alert,

}from "react-native";

export default class Message extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        var array = new Array();
        for(var i = 0;i<10;i++ ){
            array.push(<Item/>)
        }

        let COLOR = 'AF98D83';

        return (<View style={styles.container}>
            <ScrollView>
                {array}
            </ScrollView>
        </View>);
    }
}
const styles = StyleSheet.create({
    container: {
        top: 10,
        backgroundColor: '#fff',
        flex: 1,
    },
    thumb: {
        width: 50,
        height: 50
    },
    item_container: {
        padding: 10,
        flexDirection: 'row'
    },
    item_text_zone: {
        flex: 2,
        paddingLeft: 10
    },
    item_caption: {
        fontSize: 16,
        marginBottom: 15
    },
    no_msg_txt: {
        fontSize: 14,
        color: '#999'
    },
    separator: {
        marginLeft: 64,
        height: 1,
        backgroundColor: '#E8E8E8'
    }
});

class Item extends Component {

    render() {

        return (<View>
            <TouchableHighlight
                onPress={() => this._itemClick()}
                underlayColor={'#af9d83'}>
                <View>
                    <View style={styles.item_container}>
                        <Image style={styles.thumb} source={require('../images/icon_user_info_name.png')}/>
                        <View style={styles.item_text_zone}>
                            <Text style={styles.item_caption}>谁看过我</Text>
                            <Text style={styles.no_msg_txt}>暂无新消息</Text>
                        </View>
                    </View>
                    <View style={styles.separator}/>
                </View>
            </TouchableHighlight>
        </View>);


    }
    _itemClick() {
        Alert.alert('提示', '尚未开发完成', [{text: '确定', onPress: () =>this. _confirm()}])
    }

    _confirm() {
        console.log('confirm  click --- >>>  ');
    }

}