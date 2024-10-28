import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Alert, TouchableOpacity, ImageBackground } from 'react-native';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigation } from '@react-navigation/native';

export default function SignupScreen(){
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const isFormValid = () =>
    email.includes("@") && password === confirmPassword && password.length >= 8;

  const handleSignup = async () => {
    if (!isFormValid()) {
      Alert.alert(
        "Try again",
        "Please enter a valid email and matching passwords with at least 8 characters"
      );
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert("Success", "Account created successfully");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      navigation.navigate("Login");
    } catch (error) {
      Alert.alert("Error", `Error creating user: ${error.message}`);
    }
  };

  return (
    <ImageBackground style={styles.container} source={require('../assets/bg.jpg')}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Sign up</Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.buttonText}>Return</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backdropFilter: 'blur(5px)',
  },
  headerContainer: {
    marginBottom: 20,
  },
  header: {
    fontSize: 30,
    color: '#fff',
    marginBottom: 50,
  },
  formContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 300,
    marginBottom: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',  // Center align the placeholder
    marginTop: 10,
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 10,
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
});
