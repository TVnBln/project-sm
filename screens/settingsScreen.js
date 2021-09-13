import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native'
import { List, Searchbar, Avatar, Button, Card, Title, Paragraph, Badge } from 'react-native-paper';
import {Header, Icon, Divider, BottomSheet, ListItem} from 'react-native-elements';

const MyCustomCenterComponent = () => {
  return(
    <Text style={styles.headText}>Settings</Text>
)}


const SettingsScreen = ({navigation}) => {

  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

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
      <View>
        <Searchbar style={styles.search}
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <Divider style={{borderColor: '#ffffff', borderWidth: 1,}} />
        <TouchableOpacity style={styles.setting} onPress={() => {navigation.navigate('NotificationsSetting')}}>
            <List.Item title="Notifications" titleStyle={styles.requestStyle} left={() => <Icon 
            name="star-border" 
            type="material" 
            color='#ffffff' 
            size= {40}/>} 
            />
        </TouchableOpacity>
        <Divider style={{borderColor: '#ffffff', borderWidth: 1,}} />
        <TouchableOpacity style={styles.setting} onPress={() => {navigation.navigate('SecuritySetting')}}>
            <List.Item title="Security" titleStyle={styles.requestStyle} left={() => <Icon
            type="material" 
            name="security" 
            color='#ffffff' 
            size= {40}/>} 
            />
        </TouchableOpacity>
        <Divider style={{borderColor: '#ffffff', borderWidth: 1,}} />
        <TouchableOpacity style={styles.setting} onPress={() => {navigation.navigate('PrivacySetting')}}>
            <List.Item title="Privacy" titleStyle={styles.requestStyle} left={() => <Icon 
            name="lock-open" 
            type="material" 
            color='#ffffff' 
            size= {40}/>} 
            />
        </TouchableOpacity>
        <Divider style={{borderColor: '#ffffff', borderWidth: 1,}} />
        <TouchableOpacity style={styles.setting} onPress={() => {navigation.navigate('AccountSetting')}}>
            <List.Item title="Account-Details" titleStyle={styles.requestStyle} left={() => <Icon 
            name="person-outline" 
            type="material" 
            color='#ffffff' 
            size= {40}/>} 
            />
        </TouchableOpacity>
        <Divider style={{borderColor: '#ffffff', borderWidth: 1,}} />
        <TouchableOpacity style={styles.setting} onPress={() => {navigation.navigate('HelpSetting')}}> 
            <List.Item title="Help" titleStyle={styles.requestStyle} left={() => <Icon 
            name="help-outline" 
            type="material" 
            color='#ffffff' 
            size= {40}/>} 
            />
        </TouchableOpacity>
        <Divider style={{borderColor: '#ffffff', borderWidth: 1,}} />
        <TouchableOpacity style={styles.setting} onPress={() => {navigation.navigate('AboutSetting')}}>
            <List.Item title="About" titleStyle={styles.requestStyle} left={() => <Icon 
            name="info-outline" 
            type="material" 
            color='#ffffff' 
            size= {40}/>} 
            />
        </TouchableOpacity>
        <Divider style={{borderColor: '#ffffff', borderWidth: 1,}} />
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
    search: {
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 45,
      width: '80%'
    },
    setting: {
      margin: 5,
    }
});

export default SettingsScreen