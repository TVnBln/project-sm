import * as React from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native'
import {Header, Divider, Badge, Icon, BottomSheet, ListItem} from 'react-native-elements'
import {Avatar,} from 'react-native-paper'

const MyCustomCenterComponent = () => {
  return(
    <Text style={styles.headText}>Radar</Text>
)}

const RadarScreen = () => {

  return (
    <View style={styles.container}>
      <Header
        placement='center'
        centerComponent={<MyCustomCenterComponent />}
        containerStyle={{
          backgroundColor: 'rgba(242,160,191,1)',
          justifyContent: 'space-around',
          borderBottomColor: 'rgba(242,160,191,1)',
        }}
      />
      <Divider style={{borderColor: '#ffffff', borderWidth: 1,}} />
      <ImageBackground source={require('../images/radarCirkel2.png')} style={styles.image}>
        <View style={styles.avatarContainer}>
          <Text style={styles.userName}>Moreno0184</Text>
          <Avatar.Image
            source={{
            uri: 'https://media.istockphoto.com/photos/close-up-portrait-of-brunette-woman-picture-id1154642632?k=6&m=1154642632&s=612x612&w=0&h=YTiNxRGupHJpMqQRu7Xh-U976mur5fp-cM_WEczpx04='}}
            size={110}
          />
          <View style={styles.ratingContainer}>
            <Icon 
              name="star-border"
              type="material"
              color='#ffffff'
              size= {33}  
            />
            <Text style={styles.ratingInfo}>4.5</Text>
          </View>
        </View>
        <View style={styles.containerAvatar}>
          <Avatar.Image
            source={{
            uri: 'https://media.istockphoto.com/photos/close-up-portrait-of-brunette-woman-picture-id1154642632?k=6&m=1154642632&s=612x612&w=0&h=YTiNxRGupHJpMqQRu7Xh-U976mur5fp-cM_WEczpx04='}}
            size={80}
          />
        </View>
        <TouchableOpacity>
          <Avatar.Image style={styles.avatar}
            source={{
            uri: 'https://media.istockphoto.com/photos/close-up-portrait-of-brunette-woman-picture-id1154642632?k=6&m=1154642632&s=612x612&w=0&h=YTiNxRGupHJpMqQRu7Xh-U976mur5fp-cM_WEczpx04='}}
            size={50}
          />
          <Badge
            status=""
            value="3.7"
            containerStyle={{ position: 'absolute', bottom: 185, left: 70, width: 150, padding: 5,}}
            textStyle={{fontSize: 16, fontFamily: 'BariolBold',}}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Avatar.Image style={styles.avatar2}
            source={{
            uri: 'https://media.istockphoto.com/photos/close-up-portrait-of-brunette-woman-picture-id1154642632?k=6&m=1154642632&s=612x612&w=0&h=YTiNxRGupHJpMqQRu7Xh-U976mur5fp-cM_WEczpx04='}}
            size={50}
          />
          <Badge
            status=""
            value="4.3"
            containerStyle={{ position: 'absolute',left: 270, bottom: 130, width: 150, padding: 5,}}
            textStyle={{fontSize: 16, fontFamily: 'BariolBold',}}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Avatar.Image style={styles.avatar3}
            source={{
            uri: 'https://media.istockphoto.com/photos/close-up-portrait-of-brunette-woman-picture-id1154642632?k=6&m=1154642632&s=612x612&w=0&h=YTiNxRGupHJpMqQRu7Xh-U976mur5fp-cM_WEczpx04='}}
            size={50}
          />
          <Badge
            status=""
            value="4.7"
            containerStyle={{ position: 'absolute',right: 25, bottom: 5, width: 150, padding: 5,}}
            textStyle={{fontSize: 16, fontFamily: 'BariolBold',}}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Avatar.Image style={styles.avatar4}
            source={{
            uri: 'https://media.istockphoto.com/photos/close-up-portrait-of-brunette-woman-picture-id1154642632?k=6&m=1154642632&s=612x612&w=0&h=YTiNxRGupHJpMqQRu7Xh-U976mur5fp-cM_WEczpx04='}}
            size={50}
          />
          <Badge
            status=""
            value="3.5"
            containerStyle={{ position: 'absolute',left: 20, bottom: 5, width: 150, padding: 5,}}
            textStyle={{fontSize: 16, fontFamily: 'BariolBold',}}
          />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    resizeMode: "stretch",
    justifyContent: "center",
    width: '100%',
  },
  headText: {
    color: '#fff', 
    fontFamily: 'BariolBold',
    fontSize: 25,
  },
  avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -100
  },
  containerAvatar: {
    alignItems: 'center',
    marginTop: 200,
  },
  userName: {
    color: '#fff', 
    fontFamily: 'BariolBold',
    fontSize: 28,
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingInfo: {
    color: '#fff', 
    fontFamily: 'BariolRegular',
    fontSize: 27,
  },
  ratingInfo2: {
    color: '#fff', 
    fontFamily: 'BariolRegular',
    fontSize: 15,
    marginTop: 20,
  },
  avatar: {
    marginLeft: 80,
    marginTop: -230,
  },
  avatar2: {
    marginLeft: 280,
    marginTop: -175,
  },
  avatar3: {
    marginLeft: 250,
  },
  avatar4: {
    marginLeft: 30,
  }
});

export default RadarScreen