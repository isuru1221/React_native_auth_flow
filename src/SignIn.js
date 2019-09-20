import React from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import  firebase from 'firebase'
export default class SignIn extends React.Component {
    state = { email: '', password: '', errorMessage: null }
    _Login = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => this.props.navigation.navigate('Main'))
            .catch(error => this.setState({ errorMessage: error.message }))
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Login</Text>
                {this.state.errorMessage &&
                <Text style={{ color: 'red' }}>
                    {this.state.errorMessage}
                </Text>}
                <TextInput
                    style={styles.textInput}
                    autoCapitalize="none"
                    placeholder="Email"
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                />
                <TextInput
                    secureTextEntry
                    style={styles.textInput}
                    autoCapitalize="none"
                    placeholder="Password"
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}
                />
                <Button title="Login" onPress={this._Login} />
                <Button
                    title="Sign Up"
                    onPress={() => this.props.navigation.navigate('SignUp')}
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
    },

})
