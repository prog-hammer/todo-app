import React from 'react';
import {Text,StyleSheet,View} from 'react-native';

export default function Header(){
    return (
        <View style={styles.header}> 
            <Text style={styles.title}>
                My todos
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
      paddingTop:10,
      backgroundColor: 'coral',
    },
    title: {
      textAlign: 'center',
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
    }
  });