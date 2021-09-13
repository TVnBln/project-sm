import * as React from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import {Header, Icon, BottomSheet, ListItem} from 'react-native-elements'
import {Avatar,} from 'react-native-paper'
import ProfileTabScreen from '../components/navigations/profileTabScreen'

const MyCustomLeftComponent = () => {
  return(
    <Text style={styles.headText}>Moreno0184</Text>
)}

const ProfileScreen = ({navigation}) => {

  const MyCustomCenterComponent = () => {
    return(
      <TouchableOpacity onPress={() => {navigation.navigate('EditProfileScreen')}}>
        <Icon 
          name="edit"
          type="material"
          color='#ffffff'
          size= {30}  
        />
      </TouchableOpacity>
  )}

  const MyCustomRightComponent = () => {
    return(
      <TouchableOpacity onPress={() => setIsVisible(true)}>
        <Icon 
          name="notes"
          type="material"
          color='#ffffff'
          size= {30}
        />
      </TouchableOpacity>
  )}

  const [isVisible, setIsVisible] = useState(false);
const list = [
  { 
    icon: 'settings',
    title: 'Settings',
    containerStyle: { backgroundColor: 'rgba(242,160,191,1)', borderWidth: '0.5px', borderColor:'rgba(242,160,191,1)', borderBottomColor: '#ffffff',borderTopRightRadius: 65, borderTopLeftRadius: 65,},
    titleStyle: { color: '#ffffff', fontSize: 22, fontFamily: 'BariolRegular', padding: 5,},
    onPress: () => {navigation.navigate('SettingsScreen'); setIsVisible(false);},
  },
  {
    icon: 'groups',
    title: 'Discover People',
    containerStyle: { backgroundColor: 'rgba(242,160,191,1)', borderWidth: '0.5px', borderColor:'rgba(242,160,191,1)', borderBottomColor: '#ffffff',},
    titleStyle: { color: '#ffffff', fontSize: 22, fontFamily: 'BariolRegular', padding: 5,},
    onPress: () => {navigation.navigate('DiscoverPeopleScreen'); setIsVisible(false);},
  },
  {
    icon: 'cancel',
    title: 'Close',
    containerStyle: { backgroundColor: 'rgba(242,160,191,1)', borderBottomRightRadius: 65, borderBottomLeftRadius:65, },
    titleStyle: { color: '#ffffff', fontSize: 22, fontFamily: 'BariolBold', padding: 5, },
    onPress: () => setIsVisible(false),
  },
];

  return (
    <View style={styles.container}>
      <BottomSheet
        isVisible={isVisible}
        containerStyle={{backgroundColor: 'transparent',shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.8, shadowRadius: 4, elevation: 1,}}>
      {list.map((item, i) => (
        <ListItem key={i} containerStyle={item.containerStyle} onPress={item.onPress}>
          <Icon name={item.icon} type='material' color='#ffffff' size={30} />
          <ListItem.Content>
          <ListItem.Title style={item.titleStyle}>{item.title}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      ))}
      </BottomSheet>
      <Header
        placement='right'
        leftComponent={<MyCustomLeftComponent />}
        centerComponent={<MyCustomCenterComponent />}
        rightComponent={<MyCustomRightComponent />}
        containerStyle={{
          backgroundColor: 'rgba(242,160,191,1)',
          justifyContent: 'space-around',
          borderBottomColor: 'rgba(242,160,191,1)',
        }}
      />
      <TouchableOpacity onPress={() => {navigation.navigate('EditProfileScreen')}}>
        <Avatar.Image style={styles.avatar}
          source={{
          uri: 'https://media.istockphoto.com/photos/close-up-portrait-of-brunette-woman-picture-id1154642632?k=6&m=1154642632&s=612x612&w=0&h=YTiNxRGupHJpMqQRu7Xh-U976mur5fp-cM_WEczpx04='}}
          size={100}
        />
      </TouchableOpacity>
        <Text style={styles.textName}>Moreno van Emst</Text>
        <View style={styles.userInfo}>
          <Icon 
            name="star-border"
            type="material"
            color='#ffffff'
            size= {30}
          />
          <Text style={styles.rating}>4.5</Text>
          
          <View style={styles.userInfoWrapper}>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoTitle}>6</Text>
            <Text style={styles.userInfoSubTitle}>Posts</Text>
          </View>
          <TouchableOpacity onPress={() => {navigation.navigate('FollowersScreen')}}>
            <View style={styles.userInfoItem2}>
              <Text style={styles.userInfoTitle}>10,000</Text>
              <Text style={styles.userInfoSubTitle}>Followers</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {navigation.navigate('FollowingScreen')}}>
            <View style={styles.userInfoItem2}>
              <Text style={styles.userInfoTitle}>100</Text>
              <Text style={styles.userInfoSubTitle}>Following</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
        <ProfileTabScreen />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'rgba(242,160,191,1)',
    height: '100%',
    justifyContent: 'center'
  },
  list: {
    borderRadius: 60,
  },
  headText: {
    color: '#fff', 
    fontFamily: 'BariolBold',
    fontSize: 25,
  },
  textName: {
    marginTop: 5,
    marginLeft: 12,
    fontSize: 25,
    color: '#ffffff',
    fontFamily: 'BariolRegular',
  },
  userInfo: {
    flexDirection: 'row',
    marginLeft: 7,
  },
  avatar: {
    marginLeft: 10,
  },
  rating: {
    fontSize: 25,
    color: '#ffffff',
    fontFamily: 'BariolRegular',
  },
  userInfoWrapper: {
    flexGrow: 1,
    flexDirection: 'row',
    width: '100%',
    height: '80%',
    marginTop: -100,
    marginLeft: 60,
  },
  userInfoItem: {
    justifyContent: 'center',
  },
  userInfoItem2: {
    justifyContent: 'center',
    marginTop: -10,
  },
  userInfoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 5,
    textAlign: 'center',
    marginLeft: 25,
  },
  userInfoSubTitle: {
    fontSize: 17,
    color: '#ffffff',
    textAlign: 'center',
    marginLeft: 25,
  },
  header: {
    backgroundColor: 'rgba(242,160,191,1)',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default ProfileScreen