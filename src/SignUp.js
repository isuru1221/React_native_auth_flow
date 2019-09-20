import React from 'react'
import { StyleSheet, Text, TextInput, View, Button,TouchableOpacity } from 'react-native'
import firebase from 'firebase';

export default class SignUp extends React.Component {
    state = { email: '', password: '', errorMessage: null };
    _SignUp = () => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => this.props.navigation.navigate('Home'))
            .catch(error => this.setState({ errorMessage: error.message }))
    };
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Sign Up</Text>

                {this.state.errorMessage && <Text style={styles.error}> {this.state.errorMessage} </Text>}

                <TextInput
                    placeholder="Email"
                    autoCapitalize="none"
                    style={styles.textInput}
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                />
                <TextInput
                    secureTextEntry
                    placeholder="Password"
                    autoCapitalize="none"
                    style={styles.textInput}
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}
                />

                <TouchableOpacity style={styles.button} onPress={this._SignUp}>
                    <Text style={styles.buttonTouch}> Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('SignIn')}>
                    <Text style={styles.buttonTouch}>Already have an account?Login</Text>
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
});
