import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native'

const Logo = () => {
    return (
        <View style={styles.container}>
            <Image style={{width: 110, height: 110}}
            source={require('../images/therrappy.png')}/>
            <Text style={styles.logoText}>therrappy</Text>
        </View>
    )
  }
  const styles = StyleSheet.create({
    container:{
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: -65,
    },
    logoText:{
        fontSize:35,
        marginBottom: 35,
        marginTop: 5,
        color: '#ffffff',
        fontFamily: 'BariolBold',
        alignItems: 'center',
        justifyContent: 'center',
    }
  });

export default Logo