import React, {useState, useEffect, useCallback} from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { List, Avatar, Button, Card, Title, Paragraph, Badge } from 'react-native-paper';
import {Header, Icon, Divider, Input, BottomSheet, ListItem} from 'react-native-elements';


const MyCustomCenterComponent = () => {
  return(
      <Text style={styles.headText}>Comments</Text>
  )}

const CommentsScreen = ({navigation}) => {

  const MyCustomLeftComponent = () => {
    return(
        <TouchableOpacity onPress={() => {navigation.navigate('Home')}}>
        <Icon 
        name="arrow-back-ios"
        type="material"
        color='#ffffff'
        size= {30}  
        />
        </TouchableOpacity>
  )}

  return (
    <View style={styles.container}>
        <Header
        placement='center'
        leftComponent={<MyCustomLeftComponent />}
        centerComponent={<MyCustomCenterComponent />}
        containerStyle={{
          backgroundColor: 'rgba(242,160,191,1)',
          justifyContent: 'space-around',
          borderBottomColor: 'rgba(242,160,191,1)',
        }}
      />
      <ScrollView>
        <Divider style={{borderColor: '#ffffff', borderWidth: 1,}} />
        <List.Section>
            <List.Item  title="Nice Photo!. 12m" titleStyle={styles.notiStyle} left={() => <Avatar.Image style={styles.avatar}
                source={{
                uri: 'https://media.istockphoto.com/photos/close-up-portrait-of-brunette-woman-picture-id1154642632?k=6&m=1154642632&s=612x612&w=0&h=YTiNxRGupHJpMqQRu7Xh-U976mur5fp-cM_WEczpx04='}}
                size={50} />} 
            />
            <Divider style={{borderColor: '#ffffff', borderWidth: 1,}} />
            <List.Item  title="Beautifull. 14m" titleStyle={styles.notiStyle} left={() => <Avatar.Image style={styles.avatar}
                source={{
                uri: 'https://media.istockphoto.com/photos/close-up-portrait-of-brunette-woman-picture-id1154642632?k=6&m=1154642632&s=612x612&w=0&h=YTiNxRGupHJpMqQRu7Xh-U976mur5fp-cM_WEczpx04='}}
                size={50} />}
            />
            <Divider style={{borderColor: '#ffffff', borderWidth: 1,}} />
            <List.Item  title="Where are you?. 20m" titleStyle={styles.notiStyle} left={() => <Avatar.Image style={styles.avatar}
                source={{
                uri: 'https://media.istockphoto.com/photos/close-up-portrait-of-brunette-woman-picture-id1154642632?k=6&m=1154642632&s=612x612&w=0&h=YTiNxRGupHJpMqQRu7Xh-U976mur5fp-cM_WEczpx04='}}
                size={50} />} 
            />
            <Divider style={{borderColor: '#ffffff', borderWidth: 1,}} />
            <List.Item  title="Here goes a comment. 30m" titleStyle={styles.notiStyle} left={() => <Avatar.Image style={styles.avatar}
                source={{
                uri: 'https://media.istockphoto.com/photos/close-up-portrait-of-brunette-woman-picture-id1154642632?k=6&m=1154642632&s=612x612&w=0&h=YTiNxRGupHJpMqQRu7Xh-U976mur5fp-cM_WEczpx04='}}
                size={50} />}
            />
            <Divider style={{borderColor: '#ffffff', borderWidth: 1,}} />
            <List.Item  title="Here goes a comment. 30m" titleStyle={styles.notiStyle} left={() => <Avatar.Image style={styles.avatar}
                source={{
                uri: 'https://media.istockphoto.com/photos/close-up-portrait-of-brunette-woman-picture-id1154642632?k=6&m=1154642632&s=612x612&w=0&h=YTiNxRGupHJpMqQRu7Xh-U976mur5fp-cM_WEczpx04='}}
                size={50} />} 
            />
            <Divider style={{borderColor: '#ffffff', borderWidth: 1,}} />
            <List.Item  title="Here goes a comment. 30m" titleStyle={styles.notiStyle} left={() => <Avatar.Image style={styles.avatar}
                source={{
                uri: 'https://media.istockphoto.com/photos/close-up-portrait-of-brunette-woman-picture-id1154642632?k=6&m=1154642632&s=612x612&w=0&h=YTiNxRGupHJpMqQRu7Xh-U976mur5fp-cM_WEczpx04='}}
                size={50} />}
            />
            <Divider style={{borderColor: '#ffffff', borderWidth: 1,}} />
            <List.Item  title="Here goes a comment. 30m" titleStyle={styles.notiStyle} left={() => <Avatar.Image style={styles.avatar}
                source={{
                uri: 'https://media.istockphoto.com/photos/close-up-portrait-of-brunette-woman-picture-id1154642632?k=6&m=1154642632&s=612x612&w=0&h=YTiNxRGupHJpMqQRu7Xh-U976mur5fp-cM_WEczpx04='}}
                size={50} />} 
            />
            <Divider style={{borderColor: '#ffffff', borderWidth: 1,}} />
            <List.Item  title="Here goes a comment. 30m" titleStyle={styles.notiStyle} left={() => <Avatar.Image style={styles.avatar}
                source={{
                uri: 'https://media.istockphoto.com/photos/close-up-portrait-of-brunette-woman-picture-id1154642632?k=6&m=1154642632&s=612x612&w=0&h=YTiNxRGupHJpMqQRu7Xh-U976mur5fp-cM_WEczpx04='}}
                size={50} />}
            />
            <Divider style={{borderColor: '#ffffff', borderWidth: 1,}} />
            <List.Item  title="Here goes a comment. 30m" titleStyle={styles.notiStyle} left={() => <Avatar.Image style={styles.avatar}
                source={{
                uri: 'https://media.istockphoto.com/photos/close-up-portrait-of-brunette-woman-picture-id1154642632?k=6&m=1154642632&s=612x612&w=0&h=YTiNxRGupHJpMqQRu7Xh-U976mur5fp-cM_WEczpx04='}}
                size={50} />} 
            />
            <Divider style={{borderColor: '#ffffff', borderWidth: 1,}} />
            <List.Item  title="Here goes a comment. 30m" titleStyle={styles.notiStyle} left={() => <Avatar.Image style={styles.avatar}
                source={{
                uri: 'https://media.istockphoto.com/photos/close-up-portrait-of-brunette-woman-picture-id1154642632?k=6&m=1154642632&s=612x612&w=0&h=YTiNxRGupHJpMqQRu7Xh-U976mur5fp-cM_WEczpx04='}}
                size={50} />} 
            />
            <Divider style={{borderColor: '#ffffff', borderWidth: 1,}} />
            <List.Item  title="Here goes a comment. 30m" titleStyle={styles.notiStyle} left={() => <Avatar.Image style={styles.avatar}
                source={{
                uri: 'https://media.istockphoto.com/photos/close-up-portrait-of-brunette-woman-picture-id1154642632?k=6&m=1154642632&s=612x612&w=0&h=YTiNxRGupHJpMqQRu7Xh-U976mur5fp-cM_WEczpx04='}}
                size={50} />} 
            />
            <Divider style={{borderColor: '#ffffff', borderWidth: 1,}} />
        </List.Section>
        </ScrollView>
        <View>
          <Avatar.Image style={styles.avatar1}
                source={{
                uri: 'https://media.istockphoto.com/photos/close-up-portrait-of-brunette-woman-picture-id1154642632?k=6&m=1154642632&s=612x612&w=0&h=YTiNxRGupHJpMqQRu7Xh-U976mur5fp-cM_WEczpx04='}}
                size={60} 
          />
          <Input
            inputStyle={styles.inputBox}
            inputContainerStyle={styles.inputCont}
            containerStyle={styles.inputCont2}
            placeholder='Add a comment...'
            placeholderTextColor={'#ffffff'}
            rightIcon={
              <TouchableOpacity>
                <Icon
                  name="arrow-forward-ios"
                  type="material"
                  color='#ffffff'
                  size= {30}
                />
              </TouchableOpacity>
            }
          />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: 'rgba(242,160,191,1)',
      height: '100%',
    },
  headText: {
    color: '#fff', 
    fontFamily: 'BariolBold',
    fontSize: 25,
  },
  notiTitle: {
    color: '#fff', 
    fontFamily: 'BariolBold',
    fontSize: 25,
  },
  notiStyle: {
      color: '#fff', 
      fontFamily: 'BariolRegular',
      fontSize: 22,
    },
  notiCon: {
      width: '100%',
  },
  requestStyle: {
      color: '#fff', 
      fontFamily: 'BariolBold',
      fontSize: 22,
    },
  inputBox: {
      color: '#fff', 
      fontFamily: 'BariolBold',
      fontSize: 22,
  },
  inputCont: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
    padding: 5,
    marginLeft: 60,
  },
  inputCont2: {

  },
  avatar1: {
    marginLeft: 5,
    marginBottom: -60,
  }
});

export default CommentsScreen