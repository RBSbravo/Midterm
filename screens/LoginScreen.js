import React, { useState } from 'react';
import { Image,ImageBackground, View, TouchableOpacity, Text, TextInput, StyleSheet, Alert, Dimensions, Platform, SafeAreaView, StatusBar, KeyboardAvoidingView } from 'react-native';
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User logged in successfully:", user);
        navigation.navigate("HomeScreen");
      })
      .catch((error) => {
        Alert.alert("Error", "Invalid credentials");
      });
  };

    const handleSignUpPress = () => {
      navigation.navigate('Signup');
    };

    return (
        <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#000" barStyle="light-content" />
        <ImageBackground source={require('../assets/bg.jpg')} style={styles.backgroundImage}>
        <KeyboardAvoidingView behavior={Platform.OS === "android" ? "padding" : "height"} style={styles.keyboardAvoidingView}>
          <View style={styles.content}>
            <View style={styles.section}>
              <View style={styles.logoContainer}>
                <Image source={require('../assets/logo.png')} style={styles.logo} />
                <Text style={styles.header}>Physical Education</Text>
              </View>
            </View>
            <View style={styles.section}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
              />            
            </View>
            <View style={styles.section}>
              <Text style={styles.label}>Password</Text>
              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
              />            
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={handleLogin} style={styles.button}>
                <Text style={styles.buttonText}>Log in</Text>
              </TouchableOpacity>
              <View style={styles.spacer} />
              <TouchableOpacity onPress={handleSignUpPress} style={styles.button}>
                <Text style={styles.buttonText}>Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.footer}>
            <Text style={styles.footerText}> Copyright  @2024 Physical Education App</Text>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
      </SafeAreaView>    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1a202c',
    },
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
    },
    keyboardAvoidingView: {
      flex: 1,
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      borderRadius: 10,
      padding: 20,
    },
    section: {
      marginBottom: 20,
      marginHorizontal: 20,
    },
    logoContainer: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
      width: 150,
      height: 150,
      borderRadius: 75,
      marginRight: 10,
      marginBottom: 10,
    },
    header: {
      color: '#fff',
      marginBottom: 50,
      fontSize: 40,
      fontWeight: 'bold',
      textAlign: 'center',
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: { width: 2, height: 2 },
      textShadowRadius: 10,
    },
    label: {
      color: '#fff',
      fontSize: 16,
      marginBottom: 10,
    },
    input: {
      height: 40,
      paddingHorizontal: 20,
      paddingVertical: 10,
      color: '#fff',
      textAlign: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      width: 300,
      borderRadius: 10,
      borderColor: '#1a202c',
      borderWidth: 1,
      blurRadius: 10,
    },

    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 20,
      marginTop: 20,
    },
    button: {
      width: 135,
      padding: 20,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#1a202c',
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
    },
    spacer: {
      width: 30,
    },
    footer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 20,
      zIndex: 0,
    },
    footerText: {
      color: '#fff',
      fontSize: 11,
    },
  }, {
    footerContainer: {
      flex: 1,
      justifyContent: 'flex-end',
    }
  });

export default LoginScreen;


