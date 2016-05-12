/**
 * Created by apple on 16/4/26.
 */
'use strict'

import React, {
    AppRegistry,
    Component,
    Platform,
    StyleSheet,
    TouchableHighlight,
    Text,
    View,
    Image,
    ListView
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Details from './details';

var URL = 'http://apis.baidu.com/tngou/info/news';
var API_KEY = 'd5bc9b95ce98c6e0e6584804a44ff758';
export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2)=> row1 !== row2
            }),
            loading: true
        };
        this._renderRow = this._renderRow.bind(this);
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        var myHeaders = new Headers();
        myHeaders.append('apikey', API_KEY);
        var myInit = {
            method: 'GET',
            headers: myHeaders,
            mode: 'cors',
            cache: 'default'
        };

        fetch(URL, myInit)
            .then((response)=>response.json())
            .then((responseData)=> {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.tngou), loading: false
                })
            })
            .done();

    }

    renderLoading() {
        return (<View style={styles.container}>
            <Text> Loading</Text>
        </View>);
    }

    _renderRow(tngou) {
        return (
            <TouchableHighlight onPress={()=>this._selectItem(tngou)} underlayColor='#af9d83'>
                <View style={styles.cell}>
                    <Image style={styles.img} source={{uri: 'http://tnfs.tngou.net/img'+tngou.img}}/>
                    <View style={styles.rightContainer}>
                        <Text style={styles.keywords}>
                            {tngou.keywords}
                        </Text>
                        <Text style={styles.description}>{tngou.description}</Text>
                    </View>

                </View>
            </TouchableHighlight>
        );
    }

    _selectItem(tngou) {
        let {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name: 'Details',
                component: Details,
                params: {tngou: tngou}
            });
        }

    }

    render() {

        if (this.state.loading) {
            return this.renderLoading();
        }
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this._renderRow}
                style={styles.listView}/>
        );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    rightContainer: {
        flex: 1,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    listview: {
        backgroundColor: "white",
        paddingTop: 20,
    },
    img: {
        width: 120,
        height: 90,
        backgroundColor: '#ff00ff',
    },
    cell: {
        flexDirection: 'row',
        //justifyContent:'center',
        alignItems: 'center',
        padding: 5,
    },
    keywords: {
        margin: 8,
        textAlign: 'center',
        fontSize: 18,
        color: '#ff00ff',
    },
    description: {
        margin: 8,
        textAlign: 'center',
        fontSize: 14,
        color: 'black',
    },

});
//
//import React,{
//    StyleSheet,
//    View,
//    Image,
//    Text,
//    ListView,
//    Component,
//
//} from 'react-native';
//
//
// export default class Main extends Component{
//
//
//
//
//}
//
//
//const styles = StyleSheet.create({
//
//
//
//});




