/**
 * Created by apple on 16/4/28.
 */

'use strict'

import React,{
    Component,
    Text,
    Platform,
    Image,
    StyleSheet,
    PixelRatio,
    ListView,
    View,

} from 'react-native';

let BANNER_IMGS = [
    require('../images/job1.jpg'),
    require('../images/job2.jpg'),
    require('../images/job3.jpg'),
    require('../images/job4.jpg')
];
import ViewPager from 'react-native-viewpager';
export default class Find extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pagerSource: new ViewPager.DataSource({pageHasChanged: (p1, p2)=>p1 !== p2})
                .cloneWithPages(BANNER_IMGS)
        };
    }

    render() {
        return (<View style={styles.container}>
            <ViewPager style = {{width:200,height:300}}
                renderPage={this._renderPager}
                isLoop={true}
                autoPlay={true}
                dataSource={this.state.pagerSource}/>
        </View>);
    }

    _renderPager(path) {
        return (<View>
            <Image
                style = {{width:375,height:200}}
                source={path}></Image>
        </View>);

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

});