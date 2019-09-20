import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
export default class Home extends React.Component {
    render() {

        return (
            <View style={styles.container}>
                <Text>
                    Hi {currentUser && currentUser.email}!
                </Text>
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
