import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native'
import { List, Avatar, Button, Card, Title, Paragraph, Badge } from 'react-native-paper';
import {Header, Icon, Divider, BottomSheet, ListItem} from 'react-native-elements';

const MyCustomCenterComponent = () => {
    return(
      <Text style={styles.headText}>Notifications</Text>
  )}

const NotificationScreen = ({navigation}) => {

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
        <TouchableOpacity>
            <List.Item title="Friends request" titleStyle={styles.requestStyle} left={() => <Icon 
            name="group-add" 
            type="material" 
            color='#ffffff' 
            size= {40}/>} 
            />
        </TouchableOpacity>
        <Divider style={{borderColor: '#ffffff', borderWidth: 1,}} />
        <List.Section>
            <List.Subheader style={styles.notiTitle}>This week</List.Subheader>
            <List.Item  title="Barry liked rated your post. 2d" titleStyle={styles.notiStyle} left={() => <Avatar.Image style={styles.avatar}
                source={{
                uri: 'https://media.istockphoto.com/photos/close-up-portrait-of-brunette-woman-picture-id1154642632?k=6&m=1154642632&s=612x612&w=0&h=YTiNxRGupHJpMqQRu7Xh-U976mur5fp-cM_WEczpx04='}}
                size={50} />} 
            />
            <List.Item  title="Rob Gobert is now friends with you. 2d" titleStyle={styles.notiStyle} left={() => <Avatar.Image style={styles.avatar}
                source={{
                uri: 'https://media.istockphoto.com/photos/close-up-portrait-of-brunette-woman-picture-id1154642632?k=6&m=1154642632&s=612x612&w=0&h=YTiNxRGupHJpMqQRu7Xh-U976mur5fp-cM_WEczpx04='}}
                size={50} />}
            />
        </List.Section>
        <Divider style={{borderColor: '#ffffff', borderWidth: 1,}} />
        <List.Section>
            <List.Subheader style={styles.notiTitle}>Last Month</List.Subheader>
            <List.Item  title="Michael Berg is now friends with you!" titleStyle={styles.notiStyle} containerStyle={styles.notiCon} left={() => <Avatar.Image style={styles.avatar}
                source={{
                uri: 'https://media.istockphoto.com/photos/close-up-portrait-of-brunette-woman-picture-id1154642632?k=6&m=1154642632&s=612x612&w=0&h=YTiNxRGupHJpMqQRu7Xh-U976mur5fp-cM_WEczpx04='}}
                size={50} />} 
            />
            <List.Item  title="Rob Gobert is now friends with you!" titleStyle={styles.notiStyle} left={() => <Avatar.Image style={styles.avatar}
                source={{
                uri: 'https://media.istockphoto.com/photos/close-up-portrait-of-brunette-woman-picture-id1154642632?k=6&m=1154642632&s=612x612&w=0&h=YTiNxRGupHJpMqQRu7Xh-U976mur5fp-cM_WEczpx04='}}
                size={50} />}
            />
            <List.Item  title="Rob Gobert commented: Nice Photo!" titleStyle={styles.notiStyle} left={() => <Avatar.Image style={styles.avatar}
                source={{
                uri: 'https://media.istockphoto.com/photos/close-up-portrait-of-brunette-woman-picture-id1154642632?k=6&m=1154642632&s=612x612&w=0&h=YTiNxRGupHJpMqQRu7Xh-U976mur5fp-cM_WEczpx04='}}
                size={50} />}
            />
        </List.Section>
        <Divider style={{borderColor: '#ffffff', borderWidth: 1,}} />
        <List.Section>
            <List.Subheader style={styles.notiTitle}>Earlier</List.Subheader>
            <List.Item  title="Kerem89 is now friends with you!" titleStyle={styles.notiStyle} containerStyle={styles.notiCon} left={() => <Avatar.Image style={styles.avatar}
                source={{
                uri: 'https://media.istockphoto.com/photos/close-up-portrait-of-brunette-woman-picture-id1154642632?k=6&m=1154642632&s=612x612&w=0&h=YTiNxRGupHJpMqQRu7Xh-U976mur5fp-cM_WEczpx04='}}
                size={50} />} 
            />
            <List.Item  title="Moreno van Emst is now friends with you!" titleStyle={styles.notiStyle} left={() => <Avatar.Image style={styles.avatar}
                source={{
                uri: 'https://media.istockphoto.com/photos/close-up-portrait-of-brunette-woman-picture-id1154642632?k=6&m=1154642632&s=612x612&w=0&h=YTiNxRGupHJpMqQRu7Xh-U976mur5fp-cM_WEczpx04='}}
                size={50} />}
            />
            <List.Item  title="Remco409 commented: would love to go there!" titleStyle={styles.notiStyle} left={() => <Avatar.Image style={styles.avatar}
                source={{
                uri: 'https://media.istockphoto.com/photos/close-up-portrait-of-brunette-woman-picture-id1154642632?k=6&m=1154642632&s=612x612&w=0&h=YTiNxRGupHJpMqQRu7Xh-U976mur5fp-cM_WEczpx04='}}
                size={50} />}
            />
            <List.Item  title="Rob Gobert commented: Looks great" titleStyle={styles.notiStyle} left={() => <Avatar.Image style={styles.avatar}
                source={{
                uri: 'https://media.istockphoto.com/photos/close-up-portrait-of-brunette-woman-picture-id1154642632?k=6&m=1154642632&s=612x612&w=0&h=YTiNxRGupHJpMqQRu7Xh-U976mur5fp-cM_WEczpx04='}}
                size={50} />}
            />
        </List.Section>
        <Divider style={{borderColor: '#ffffff', borderWidth: 1,}} />
        </ScrollView>
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
  });

export default NotificationScreen