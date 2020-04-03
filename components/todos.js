import React,{useState} from 'react';
import {StyleSheet, Text, View, ToolbarAndroid} from 'react-native';

export default function Todo({item}){
    return(
        <View>
            <Text style={styles.item}>{item.text}</Text>
        </View>
    )
};


const styles = StyleSheet.create({
    item: {
      padding: 16,
      marginTop: 16,
      borderColor: '#bbb',
      borderWidth: 1,
      borderStyle: "dashed",
      borderRadius: 1,
      borderRadius: 10,
    }
  });