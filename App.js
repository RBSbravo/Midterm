import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import { Platform } from 'react-native';
import { ImageBackground } from 'react-native';
import { View, Text, TextInput, StyleSheet, SafeAreaView, Dimensions, StatusBar, Image, Button, Alert, TouchableOpacity } from 'react-native';

const Stack = createStackNavigator();

const App = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { height } = Dimensions.get('window');

  const handleLoginPress = () => {
    if (username === '' || password === '') {
      Alert.alert('Error', 'Please enter your username and password.');
    } else {
      navigation.navigate('Dashboard', { username, password });
    }
  };

  const handleSignUpPress = () => {
    Alert.alert('Success', 'Sign up successful!');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <KeyboardAvoidingView behavior={Platform.OS === "android" ? "padding" : "height"} style={{ flex: 1 }}>
        <View style={styles.content}>
          <View style={[styles.section, { marginBottom: 50 }]}>
            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <Image source={require('./assets/logo.png')} style={{ width: 150, height: 150, borderRadius: 75, marginRight: 10, marginBottom: 10 }} />
              <Text style={[styles.header, { alignSelf: 'center', textAlign: 'center', marginBottom: 50, fontSize: 40, fontWeight: 'bold', color: '#fff', textShadowColor: 'rgba(0, 0, 0, 0.75)', textShadowOffset: { width: 2, height: 2 }, textShadowRadius: 10 }]}>Physical Education</Text>
            </View>
          </View>
          <View style={styles.section}>
            <TextInput placeholder="Username" value={username} onChangeText={(text) => setUsername(text)} style={[styles.input, { width: 250, textAlign: 'center', backgroundColor: '#2c3e50', borderRadius: 10, borderWidth: 1, borderColor: '#1a202c', color: '#fff' }]} />
          </View>
          <View style={styles.section}>
            <TextInput placeholder="Password" secureTextEntry={true} value={password} onChangeText={(text) => setPassword(text)} style={[styles.input, { width: 250, textAlign: 'center', backgroundColor: '#2c3e50', borderRadius: 10, borderWidth: 1, borderColor: '#1a202c', color: '#fff' }]} />
          </View>
          <View style={[styles.section, { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 20, marginTop: 20 }]}>
            <TouchableOpacity onPress={handleLoginPress} style={[styles.button, { backgroundColor: '#2c3e50', borderColor: '#1a202c' }]}>
              <Text style={{ color: '#fff', fontSize: 16 }}>Log in</Text>
            </TouchableOpacity>
            <View style={{ width: 20 }} />
            <TouchableOpacity onPress={handleSignUpPress} style={[styles.button, { backgroundColor: '#2c3e50', borderColor: '#1a202c' }]}>
              <Text style={{ color: '#fff', fontSize: 16 }}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[{ position: 'absolute', bottom: 0, left: 0, right: 0, alignItems: 'center', justifyContent: 'center', marginBottom: 20, zIndex: 0 }, Platform.OS === 'android' && { opacity: 0.5 }]}>
          <Text style={{color: '#fff', fontSize: 11 }}> Copyright  @2024 Physical Education App</Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a202c',
    borderRadius: 10,
    padding: 20,
  },
  section: {
    marginBottom: 20,
    marginHorizontal: 20,
  },
  input: {
    height: 40,
    padding: 10,
    color: '#fff',
    textAlign: 'center',
    backgroundColor: '#2c3e50',
  },
  button: {
    width: 120,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#1a202c',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="App" component={App} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="AboutUs" component={AboutUs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const Dashboard = ({ route, navigation }) => {
  const { username, password } = route.params ?? {};
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require('./assets/bg.jpg')}
        resizeMode="cover"
        style={{ flex: 1 }}
      >
        <ScrollView style={{ flex: 1 }}>
          <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: 20, margin: 20, borderRadius: 10 }}>
            <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold', textAlign: 'left' }}>Welcome {username}!</Text>
          </View>
          <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: 20, margin: 20, borderRadius: 10 }}>
            <Text style={{ color: '#fff', fontSize: 16, textAlign: 'center' }}>
              Physical education is a vital part of our lives. It helps us develop our physical skills, achieve our fitness goals, and live a healthy lifestyle. It is also important for our mental well-being, as it helps us reduce stress and anxiety, and improve our mood. Furthermore, regular physical activity can help us increase our energy levels, reduce the risk of chronic diseases, and even improve our sleep quality. So, it is essential to make physical education a priority in our lives.
            </Text>
          </View>
          <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: 20, margin: 20, borderRadius: 10 }}>
            <Text style={{ color: '#fff', fontSize: 16, textAlign: 'center' }}>
              In addition to these benefits, physical education also helps us build our social skills, as it provides us with the opportunity to interact with other people, make new friends, and develop our communication skills. It also helps us learn important values such as teamwork, discipline, and sportsmanship.
            </Text>
          </View>
          <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: 20, margin: 20, borderRadius: 10 }}>
            <Text style={{ color: '#fff', fontSize: 16, textAlign: 'center' }}>
              Furthermore, physical education can also help us develop our cognitive skills, as it requires us to think strategically, make quick decisions, and solve problems. It also helps us build our self-confidence, as it provides us with the opportunity to challenge ourselves, set goals, and achieve them. So, it is essential to make physical education a priority in our lives.
            </Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 20, marginBottom: 20, marginVertical: 10 }}>
            <TouchableOpacity onPress={() => navigation.navigate('App')} style={{ backgroundColor: '#2980b9', borderRadius: 10, padding: 10 }}>
              <Text style={{ color: '#fff', fontSize: 16 }}>Back to login</Text>
            </TouchableOpacity>
            <View style={{ width: 20 }} />
            <TouchableOpacity onPress={() => navigation.navigate('AboutUs')} style={{ backgroundColor: '#2980b9', borderRadius: 10, padding: 10 }}>
              <Text style={{ color: '#fff', fontSize: 16 }}>About us</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const AboutUs = ({ navigation }) => {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#032B44',
      backgroundGradient: 'linear-gradient(to bottom, #032B44, #34C759, #FFC107)',
    }}>
      <Text>About us  </Text>
      <TouchableOpacity onPress={() => navigation.goBack()} style={{ backgroundColor: '#3498db', borderRadius: 10, padding: 10, marginVertical: 20 }}>
        <Text style={{ color: '#fff', fontSize: 16 }}>Back to dashboard</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AppContainer;

