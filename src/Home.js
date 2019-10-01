import React from 'react'
import {StyleSheet, Platform, Button, Text, View, TouchableOpacity} from 'react-native'
import  firebase from 'firebase'
export default class Home extends React.Component {
    state = { currentUser: null }
    componentDidMount() {
        const { currentUser } = firebase.auth()
        this.setState({ currentUser })
    }
    render() {
        const { currentUser } = this.state
        return (
            <View style={styles.container}>
                <Text style={styles.header}>
                    Hi {"\n"} {currentUser && currentUser.email}!
                </Text>
                <TouchableOpacity style={styles.button} onPress={() => firebase.auth().signOut()}>
                    <Text style={styles.buttonTouch}>Sign Out</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#C70039',
        alignItems: 'center'
    },
    header:{
        color: '#C2FCBA',
        fontSize:20,
        textAlign:'center',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    },
    button:{
        backgroundColor: '#27B337',
        elevation: 3,
        height: 40,
        width: 250,
        marginTop:10,
        marginBottom:10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 20
    }
})
