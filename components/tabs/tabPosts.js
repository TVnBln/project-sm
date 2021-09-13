import React from 'react';
import {
    View,
    Text,
    StyleSheet,
  } from 'react-native'

const TabPosts = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.pageText}>Posts</Text>
      </View>
    )
}

const styles = StyleSheet.create({ 
    container: {
        height: '100%',
        backgroundColor: 'rgba(242,163,193,1)',
    },
    pageText: {
        color: '#ffffff',
        fontFamily: 'BariolRegular',
        fontSize: 20,
    },
});
  
  export default TabPosts