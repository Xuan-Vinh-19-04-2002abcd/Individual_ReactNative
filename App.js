import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import BtnInput from './components/Login/BtnInput';
import Btn from './components/Login/Btn';
export default function App() {
  return (
    
    <SafeAreaView style = {styles.layout}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.logo}>SalesApp</Text>
        <BtnInput ></BtnInput>
        <BtnInput></BtnInput>
        <TouchableOpacity><Text style={styles.forgot}>Forgot Password</Text></TouchableOpacity>
        <Btn></Btn>
      </ScrollView>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  layout:{
    flex:1,
    backgroundColor: '#003f5c',
  },
  container: {
    alignItems: 'center',
  },
  logo: {
    fontSize: 40,
    fontWeight: "bold",
    color: '#d54d65',
    marginBottom: 50

  },
  textView: {
    width: '80%',
    backgroundColor: "#465881",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20
  },
  forgot: {
    color: 'white',
    fontSize: '15'
  },

  signupBtn: {
    marginTop: 10
  }
});
