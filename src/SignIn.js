import React from 'react'
import {StyleSheet, Text, TextInput, View, Button, TouchableOpacity} from 'react-native'
import  firebase from 'firebase'
export default class SignIn extends React.Component {
    state = { email: '', password: '', errorMessage: null }
    _login = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => this.props.navigation.navigate('Main'))
            .catch(error => this.setState({ errorMessage: error.message }))
    };

    render() {
        return (
            <View style={styles.container}>
                <Text  style={styles.header}>Login</Text>
                {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
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
                <TouchableOpacity style={styles.button} onPress={this._login} >
                    <Text style={styles.buttonTouch}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('SignUp')}>
                    <Text style={styles.buttonTouch}>Sign Up</Text>
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
        color: '#C2FCCA',
        fontSize:30,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    },
    error:{
        color:'#C2FCCA'
    },
    textInput: {
        alignSelf: 'stretch',
        color:'#C2FCCA',

        padding: 10,
        marginLeft: 50,
        margin:5,
        marginRight:50,
        borderBottomColor: '#C2FCCA',
        borderBottomWidth: 1
    },
    button:{
        backgroundColor: '#27B338',
        elevation: 3,
        height: 40,
        width: 250,
        marginTop:10,
        marginBottom:10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 20
    },
    buttonTouch:{
        color: '#C2FCCA',
    }

})
