import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

export default function Btn() {
  return (
    <TouchableOpacity style={styles.loginBtn}><Text style={styles.loginText}>Login</Text></TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    loginBtn: {
        width: '80%',
        backgroundColor: "#b45f5f",
        borderRadius: 25,
        height: 50,
        marginTop: 40,
        marginBottom: 10,
        justifyContent: "center",
      },
      loginText: {
        alignSelf: 'center',
        fontSize: 20,
        color: 'white'
      },
})