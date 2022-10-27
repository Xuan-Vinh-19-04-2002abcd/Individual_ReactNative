import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'

export default function BtnInput({plaholderTexInput}) {
  return (
    <View style={styles.textView}>
    <TextInput
      placeholder='Email...'
      placeholderTextColor={'#162330'}
    />
  </View>
  )
}

const styles = StyleSheet.create({
    textView: {
        width: '80%',
        backgroundColor: "#465881",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
      }
})