/**
 * Created by apple on 16/4/27.
 */
'use strict'

import React,{
    Component,
    StyleSheet,
    Image,
    Text,
    View,
    Navigator,
    TouchableOpacity,

} from 'react-native';

export default class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {tngou: null};
    }

    _back() {
        const navigator = this.props.navigator;
        const routers = navigator.getCurrentRoutes();
        if (routers.length > 1) {
            navigator.pop();
            return true;
        }
        return false;

    }

    render() {
        let {tngou} = this.props;
        console.log(tngou);
        return (
            <View>
                <TouchableOpacity onPress={()=>this._back()}>
                    <Text style={{width :50,height:50,backgroundColor:'#ff0fff'}}> 测试 </Text>
                </TouchableOpacity>

            </View>
        );
    }
}