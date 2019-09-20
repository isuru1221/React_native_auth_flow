import React from 'react'
import { StyleSheet, Platform, Button, Text, View } from 'react-native'
import  firebase from 'firebase'
export default class Home extends React.Component {
    state = { User: null }
    componentDidMount() {
        const { User } = firebase.auth()
        this.setState({ User })
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    Hi {this.state.User && this.state.User.email}!
                </Text>
                <Button
                    title="Sign out"
                    onPress={() => firebase.auth().signOut()}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
