/**
 * Created by apple on 16/4/27.
 */
'use strict'

import React,{
    Component,
    StyleSheet,
    Navigator,
    View,
    Text,

} from 'react-native';
import Main from './main'
export default class TopNav extends Component {

    render() {
        let defaultName = 'Home';
        let defaultComponent = Main;

        return (<Navigator
            style={styles.navigator}
            initialRoute={{ name: defaultName, component: defaultComponent }}
            configureScene={(route) => {
                return Navigator.SceneConfigs.HorizontalSwipeJump;
            }}
            renderScene={(route,navigator)=>{
                let Component = route.component;
                return <Component {...route.params} navigator={navigator}/>
            }}
        />);
    }

}

//       render(){
//           let defaultName= 'Home';
//           let defaultComponent = Main;
//
//           return (<Navigator
//               style = {styles.navigator}
//               initialRoute={{name:defaultName,component:defaultComponent}}
//               configureScence ={this._renderScenceConfig}
//               renderSence={this._renderSence}
//               >
//               </Navigator>);
//
//
//       }
//
//    _renderScenceConfig(){
//        return Navigator.ScenceConfig.HorizontalSwipeJump;
//    }
//    _renderSence(route,navigator){
//        let Cpt  = route.component;
//        return <Cpt route = {route} navigator = {navigator}/>
//    }
//}
//
const styles = StyleSheet.create({
    navigator: {
        flex: 1,
        height: 45,
    },
//
});