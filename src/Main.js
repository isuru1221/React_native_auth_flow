import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import firebase from 'firebase'

export default class Main extends React.Component {

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => { this.props.navigation.navigate( user ? 'Home' : 'SignUp')})
    }

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#fff" />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C70039',
        justifyContent: 'center',
        alignItems: 'center',
    }
})
