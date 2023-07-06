import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Platform,
    StatusBar,
    TouchableOpacity,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard,
    ImageBackground
} from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from '@react-navigation/native'
import { firebase_auth } from '../firebase';
import Alert from '../components/Alert';

const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [alert, setAlert] = useState()
    const auth = firebase_auth

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.replace("Home")
            }
        })

        return unsubscribe
    }, [])

    const handleSignUp = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Registered with:', user.email);
            })
            .catch(error => setAlert(error.message))
    }
    const navigation = useNavigation();
    return (
        <ImageBackground source={require('../assets/bg-loginscreen.jpeg')} resizeMode="cover" style={styles.image}>

            <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
                <SafeAreaView style={styles.container}>

                    <Text style={styles.loginText}>SIGN IN</Text>
                    <Alert msg={alert} />
                    <TextInput
                        placeholder="Email"
                        style={[styles.textInput]}
                        inputMode="email"
                        onChangeText={((text) => setEmail(text))}
                        keyboardAppearance='dark'
                    />
                    <TextInput
                        placeholder="Password"
                        secureTextEntry
                        style={styles.textPasswordInput}
                        inputMode='none'
                        onChangeText={((text) => setPassword(text))}
                        keyboardAppearance='dark'
                    />
                    <TouchableOpacity style={styles.signinButton} onPress={handleSignUp}>
                        <Text style={styles.signinButtonText}>SIGN IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.goToSignUp} onPress={() => {
                        navigation.replace('Register');
                    }}>
                        <Text style={styles.goToSignUpText}>Don’t have an account? Sign up here</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </TouchableWithoutFeedback>
        </ImageBackground>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        justifyContent: "center"
    },
    loginText: {
        textAlign: 'center',
        color: '#3D4267',
        fontSize: 40,
        fontFamily: "VarelaRound"
    },
    signinButton: {
        margin: 10,
        backgroundColor: '#401333',
        borderRadius: 10
    },
    signinButtonText: {
        marginVertical: 10,
        marginHorizontal: 50,
        color: "#fff",
        fontSize: 20,
        fontFamily: "VarelaRound"
    },
    textInput: {
        marginBottom: 5,
        marginTop: 2,
        height: 40,
        width: 200,
        fontSize: 20,
        textAlign: 'center',
        backgroundColor: "rgba(44, 19, 64, 0.2)",
        borderRadius: 10,
        padding: 10,
        fontFamily: "VarelaRound",
        fontSize: 14
    },
    textPasswordInput: {
        margin: 5,
        fontSize: 20,
        height: 40,
        width: 200,
        textAlign: 'center',
        backgroundColor: "rgba(44, 19, 64, 0.25)",
        borderRadius: 10,
        padding: 10,
        fontFamily: "VarelaRound",
        fontSize: 14
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    goToSignUp: {
        padding: 1
    },
    goToSignUpText: {
        fontSize: 14,
        fontFamily: "VarelaRound"
    }
})