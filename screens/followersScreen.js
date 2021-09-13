import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native'
import { List, Avatar, Searchbar, Button, Card, Title, Paragraph, Badge } from 'react-native-paper';
import {Header, Icon, Divider, BottomSheet, ListItem} from 'react-native-elements';

const MyCustomCenterComponent = () => {
    return(
      <Text style={styles.headText}>Followers</Text>
  )}

const FollowersScreen = ({navigation}) => {

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

      const [searchQuery, setSearchQuery] = React.useState('');

        const onChangeSearch = query => setSearchQuery(query);

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
      <View>
        <Searchbar style={styles.search}
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <ScrollView>
            <List.Subheader style={styles.notiTitle}>All Followers</List.Subheader>
        <TouchableOpacity>
            <List.Item  title="Moreno76" titleStyle={styles.notiStyle} left={() => <Avatar.Image style={styles.avatar}
                source={{
                uri: 'https://media.istockphoto.com/photos/close-up-portrait-of-brunette-woman-picture-id1154642632?k=6&m=1154642632&s=612x612&w=0&h=YTiNxRGupHJpMqQRu7Xh-U976mur5fp-cM_WEczpx04='}}
                size={50} />} 
                right={() => <Icon 
                    name="star-border"
                    type="material"
                    color='#ffffff'
                    size= {35}
                    style= {styles.rateIcon}
                />}
            />
            <Text style={styles.rateInfo}>4.1</Text>
        </TouchableOpacity>
        <Divider style={{borderColor: '#ffffff', borderWidth: 1,}} />
        <TouchableOpacity>
            <List.Item  title="Remco.0181" titleStyle={styles.notiStyle} left={() => <Avatar.Image style={styles.avatar}
                source={{
                uri: 'https://media.istockphoto.com/photos/close-up-portrait-of-brunette-woman-picture-id1154642632?k=6&m=1154642632&s=612x612&w=0&h=YTiNxRGupHJpMqQRu7Xh-U976mur5fp-cM_WEczpx04='}}
                size={50} />} 
                right={() => <Icon 
                    name="star-border"
                    type="material"
                    color='#ffffff'
                    size= {35}
                    style= {styles.rateIcon}
                />}
            />
            <Text style={styles.rateInfo}>3.6</Text>
        </TouchableOpacity>
        <Divider style={{borderColor: '#ffffff', borderWidth: 1,}} />
        <TouchableOpacity>
            <List.Item  title="Kerem1" titleStyle={styles.notiStyle} left={() => <Avatar.Image style={styles.avatar}
                source={{
                uri: 'https://media.istockphoto.com/photos/close-up-portrait-of-brunette-woman-picture-id1154642632?k=6&m=1154642632&s=612x612&w=0&h=YTiNxRGupHJpMqQRu7Xh-U976mur5fp-cM_WEczpx04='}}
                size={50} />} 
                right={() => <Icon 
                    name="star-border"
                    type="material"
                    color='#ffffff'
                    size= {35}
                    style= {styles.rateIcon}
                />}
            />
            <Text style={styles.rateInfo}>3.8</Text>
        </TouchableOpacity>
        <Divider style={{borderColor: '#ffffff', borderWidth: 1,}} />
        <TouchableOpacity>
            <List.Item  title="TimoB" titleStyle={styles.notiStyle} left={() => <Avatar.Image style={styles.avatar}
                source={{
                uri: 'https://media.istockphoto.com/photos/close-up-portrait-of-brunette-woman-picture-id1154642632?k=6&m=1154642632&s=612x612&w=0&h=YTiNxRGupHJpMqQRu7Xh-U976mur5fp-cM_WEczpx04='}}
                size={50} />} 
                right={() => <Icon 
                    name="star-border"
                    type="material"
                    color='#ffffff'
                    size= {35}
                    style= {styles.rateIcon}
                />}
            />
            <Text style={styles.rateInfo}>3.2</Text>
        </TouchableOpacity>
        <Divider style={{borderColor: '#ffffff', borderWidth: 1,}} />
        <TouchableOpacity>
            <List.Item  title="Thomas.bv" titleStyle={styles.notiStyle} left={() => <Avatar.Image style={styles.avatar}
                source={{
                uri: 'https://media.istockphoto.com/photos/close-up-portrait-of-brunette-woman-picture-id1154642632?k=6&m=1154642632&s=612x612&w=0&h=YTiNxRGupHJpMqQRu7Xh-U976mur5fp-cM_WEczpx04='}}
                size={50} />} 
                right={() => <Icon 
                    name="star-border"
                    type="material"
                    color='#ffffff'
                    size= {35}
                    style= {styles.rateIcon}
                />}
            />
            <Text style={styles.rateInfo}>4.2</Text>
        </TouchableOpacity>
        <Divider style={{borderColor: '#ffffff', borderWidth: 1,}} />
        <TouchableOpacity>
            <List.Item  title="Matthijs407" titleStyle={styles.notiStyle} left={() => <Avatar.Image style={styles.avatar}
                source={{
                uri: 'https://media.istockphoto.com/photos/close-up-portrait-of-brunette-woman-picture-id1154642632?k=6&m=1154642632&s=612x612&w=0&h=YTiNxRGupHJpMqQRu7Xh-U976mur5fp-cM_WEczpx04='}}
                size={50} />} 
                right={() => <Icon 
                    name="star-border"
                    type="material"
                    color='#ffffff'
                    size= {35}
                    style= {styles.rateIcon}
                />}
            />
            <Text style={styles.rateInfo}>3.8</Text>
        </TouchableOpacity>
        <Divider style={{borderColor: '#ffffff', borderWidth: 1,}} />
        <TouchableOpacity>
            <List.Item  title="Sjoerd-01s" titleStyle={styles.notiStyle} left={() => <Avatar.Image style={styles.avatar}
                source={{
                uri: 'https://media.istockphoto.com/photos/close-up-portrait-of-brunette-woman-picture-id1154642632?k=6&m=1154642632&s=612x612&w=0&h=YTiNxRGupHJpMqQRu7Xh-U976mur5fp-cM_WEczpx04='}}
                size={50} />} 
                right={() => <Icon 
                    name="star-border"
                    type="material"
                    color='#ffffff'
                    size= {35}
                    style= {styles.rateIcon}
                />}
            />
            <Text style={styles.rateInfo}>2.9</Text>
        </TouchableOpacity>
        <Divider style={{borderColor: '#ffffff', borderWidth: 1,}} />
        <TouchableOpacity>
            <List.Item  title="Berend.Bot" titleStyle={styles.notiStyle} left={() => <Avatar.Image style={styles.avatar}
                source={{
                uri: 'https://media.istockphoto.com/photos/close-up-portrait-of-brunette-woman-picture-id1154642632?k=6&m=1154642632&s=612x612&w=0&h=YTiNxRGupHJpMqQRu7Xh-U976mur5fp-cM_WEczpx04='}}
                size={50} />} 
                right={() => <Icon 
                    name="star-border"
                    type="material"
                    color='#ffffff'
                    size= {35}
                    style= {styles.rateIcon}
                />}
            />
            <Text style={styles.rateInfo}>3.2</Text>
        </TouchableOpacity>
        <Divider style={{borderColor: '#ffffff', borderWidth: 1,}} />
        <TouchableOpacity>
            <List.Item  title="Marco_kl" titleStyle={styles.notiStyle} left={() => <Avatar.Image style={styles.avatar}
                source={{
                uri: 'https://media.istockphoto.com/photos/close-up-portrait-of-brunette-woman-picture-id1154642632?k=6&m=1154642632&s=612x612&w=0&h=YTiNxRGupHJpMqQRu7Xh-U976mur5fp-cM_WEczpx04='}}
                size={50} />} 
                right={() => <Icon 
                    name="star-border"
                    type="material"
                    color='#ffffff'
                    size= {35}
                    style= {styles.rateIcon}
                />}
            />
            <Text style={styles.rateInfo}>1.6</Text>
        </TouchableOpacity>
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
      rateIcon: {
          margin: 5,
      },
      rateInfo: {
        color: '#fff', 
        fontFamily: 'BariolBold',
        fontSize: 22,
        marginLeft: 371,
        marginTop: -20,
    },
    search: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 45,
        width: '80%'
      },
  });

export default FollowersScreen