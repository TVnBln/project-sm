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
      <Text style={styles.headText}>Discover People</Text>
  )}

const DiscoverPeopleScreen = ({navigation}) => {

    const MyCustomLeftComponent = () => {
        return(
            <TouchableOpacity onPress={() => {navigation.navigate('ProfileScreen')}}>
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
        placement='left'
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
            <List.Subheader style={styles.notiTitle}>People with same rating as you:</List.Subheader>
                <TouchableOpacity>
                    <List.Item  title="Barry0911" titleStyle={styles.notiStyle} left={() => <Avatar.Image style={styles.avatar}
                        source={{
                        uri: 'https://media.istockphoto.com/photos/close-up-portrait-of-brunette-woman-picture-id1154642632?k=6&m=1154642632&s=612x612&w=0&h=YTiNxRGupHJpMqQRu7Xh-U976mur5fp-cM_WEczpx04='}}
                        size={50} />}
                        right={() => <Icon name="star-border" type="material" color='#ffffff' size= {40} style={styles.icons}/>}
                    />
                    <Text style={styles.rateInfo}>4.1</Text>
                </TouchableOpacity>
                <Divider style={{borderColor: '#ffffff', borderWidth: 1,}} />
                <TouchableOpacity>
                    <List.Item  title="TimoB" titleStyle={styles.notiStyle} left={() => <Avatar.Image style={styles.avatar}
                        source={{
                        uri: 'https://media.istockphoto.com/photos/close-up-portrait-of-brunette-woman-picture-id1154642632?k=6&m=1154642632&s=612x612&w=0&h=YTiNxRGupHJpMqQRu7Xh-U976mur5fp-cM_WEczpx04='}}
                        size={50} />}
                        right={() => <Icon name="star-border" type="material" color='#ffffff' size= {40} style={styles.icons}/>}
                    />
                    <Text style={styles.rateInfo}>4.5</Text>
                </TouchableOpacity>
                <Divider style={{borderColor: '#ffffff', borderWidth: 1,}} />
                <TouchableOpacity>
                    <List.Item  title="Remco.Stage" titleStyle={styles.notiStyle} left={() => <Avatar.Image style={styles.avatar}
                        source={{
                        uri: 'https://media.istockphoto.com/photos/close-up-portrait-of-brunette-woman-picture-id1154642632?k=6&m=1154642632&s=612x612&w=0&h=YTiNxRGupHJpMqQRu7Xh-U976mur5fp-cM_WEczpx04='}}
                        size={50} />}
                        right={() => <Icon name="star-border" type="material" color='#ffffff' size= {40} style={styles.icons}/>}
                    />
                    <Text style={styles.rateInfo}>4.3</Text>
                </TouchableOpacity>
                <Divider style={{borderColor: '#ffffff', borderWidth: 1,}} />
                <TouchableOpacity>
                    <List.Item  title="Kerem1" titleStyle={styles.notiStyle} left={() => <Avatar.Image style={styles.avatar}
                        source={{
                        uri: 'https://media.istockphoto.com/photos/close-up-portrait-of-brunette-woman-picture-id1154642632?k=6&m=1154642632&s=612x612&w=0&h=YTiNxRGupHJpMqQRu7Xh-U976mur5fp-cM_WEczpx04='}}
                        size={50} />}
                        right={() => <Icon name="star-border" type="material" color='#ffffff' size= {40} style={styles.icons}/>}
                    />
                    <Text style={styles.rateInfo}>4.7</Text>
                </TouchableOpacity>
                <Divider style={{borderColor: '#ffffff', borderWidth: 1,}} />
        </List.Section>
        <List.Section>
            <List.Subheader style={styles.notiTitle}>People you might know:</List.Subheader>
                <TouchableOpacity>
                    <List.Item  title="Michelle02" titleStyle={styles.notiStyle} left={() => <Avatar.Image style={styles.avatar}
                        source={{
                        uri: 'https://media.istockphoto.com/photos/close-up-portrait-of-brunette-woman-picture-id1154642632?k=6&m=1154642632&s=612x612&w=0&h=YTiNxRGupHJpMqQRu7Xh-U976mur5fp-cM_WEczpx04='}}
                        size={50} />}
                        right={() => <Icon name="star-border" type="material" color='#ffffff' size= {40} style={styles.icons}/>}
                    />
                    <Text style={styles.rateInfo}>5.5</Text>
                </TouchableOpacity>
                <Divider style={{borderColor: '#ffffff', borderWidth: 1,}} />
                <TouchableOpacity>
                    <List.Item  title="Michael_Warner" titleStyle={styles.notiStyle} left={() => <Avatar.Image style={styles.avatar}
                        source={{
                        uri: 'https://media.istockphoto.com/photos/close-up-portrait-of-brunette-woman-picture-id1154642632?k=6&m=1154642632&s=612x612&w=0&h=YTiNxRGupHJpMqQRu7Xh-U976mur5fp-cM_WEczpx04='}}
                        size={50} />}
                        right={() => <Icon name="star-border" type="material" color='#ffffff' size= {40} style={styles.icons}/>}
                    />
                    <Text style={styles.rateInfo}>2.1</Text>
                </TouchableOpacity>
                <Divider style={{borderColor: '#ffffff', borderWidth: 1,}} />
                <TouchableOpacity>
                    <List.Item  title="Berend.Bottje" titleStyle={styles.notiStyle} left={() => <Avatar.Image style={styles.avatar}
                        source={{
                        uri: 'https://media.istockphoto.com/photos/close-up-portrait-of-brunette-woman-picture-id1154642632?k=6&m=1154642632&s=612x612&w=0&h=YTiNxRGupHJpMqQRu7Xh-U976mur5fp-cM_WEczpx04='}}
                        size={50} />}
                        right={() => <Icon name="star-border" type="material" color='#ffffff' size= {40} style={styles.icons}/>}
                    />
                    <Text style={styles.rateInfo}>1.3</Text>
                </TouchableOpacity>
                <Divider style={{borderColor: '#ffffff', borderWidth: 1,}} />
                <TouchableOpacity>
                    <List.Item  title="Naomi.dvn" titleStyle={styles.notiStyle} left={() => <Avatar.Image style={styles.avatar}
                        source={{
                        uri: 'https://media.istockphoto.com/photos/close-up-portrait-of-brunette-woman-picture-id1154642632?k=6&m=1154642632&s=612x612&w=0&h=YTiNxRGupHJpMqQRu7Xh-U976mur5fp-cM_WEczpx04='}}
                        size={50} />}
                        right={() => <Icon name="star-border" type="material" color='#ffffff' size= {40} style={styles.icons}/>}
                    />
                    <Text style={styles.rateInfo}>3.0</Text>
                </TouchableOpacity>
                <Divider style={{borderColor: '#ffffff', borderWidth: 1,}} />
        </List.Section>
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
    rateInfo: {
        color: '#fff', 
        fontFamily: 'BariolBold',
        fontSize: 22,
        marginLeft: 370,
        marginTop: -15,
    },
  });

export default DiscoverPeopleScreen