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

const NotificationsSetting = ({navigation}) => {

    const MyCustomLeftComponent = () => {
        return(
            <TouchableOpacity onPress={() => {navigation.navigate('SettingsScreen')}}>
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
        <Divider style={{borderColor: '#ffffff', borderWidth: 1,}} />
        <List.Section>
            <List.Subheader style={styles.notiTitle}>Preferences:</List.Subheader>
            <TouchableOpacity>
                <List.Item  title="Post Notifications" titleStyle={styles.notiStyle} right={() => <Icon 
                    name="arrow-forward-ios"
                    type="material"
                    color='#ffffff'
                    size= {30}
                    margin={5}  
                    />} 
                />
            </TouchableOpacity>
            <Divider style={{borderColor: '#ffffff', borderWidth: 1,}} />
            <TouchableOpacity>
                <List.Item  title="Rate Notifications" titleStyle={styles.notiStyle} right={() => <Icon 
                    name="arrow-forward-ios"
                    type="material"
                    color='#ffffff'
                    size= {30}
                    margin={5}   
                    />} 
                />
            </TouchableOpacity>
            <Divider style={{borderColor: '#ffffff', borderWidth: 1,}} />
            <TouchableOpacity>
                <List.Item  title="Follower and Following Notifications" titleStyle={styles.notiStyle} right={() => <Icon 
                    name="arrow-forward-ios"
                    type="material"
                    color='#ffffff'
                    size= {30}
                    margin={5}   
                    />} 
                />
            </TouchableOpacity>
            <Divider style={{borderColor: '#ffffff', borderWidth: 1,}} />
            <TouchableOpacity>
                <List.Item  title="Radar Notifications" titleStyle={styles.notiStyle} right={() => <Icon 
                    name="arrow-forward-ios"
                    type="material"
                    color='#ffffff'
                    size= {30}
                    margin={5}   
                    />} 
                />
            </TouchableOpacity>
            <Divider style={{borderColor: '#ffffff', borderWidth: 1,}} />
        </List.Section>
        <List.Section>
        <List.Subheader style={styles.notiTitle}>Other:</List.Subheader>
            <TouchableOpacity>
                <List.Item  title="From Therrappy" titleStyle={styles.notiStyle} right={() => <Icon 
                    name="arrow-forward-ios"
                    type="material"
                    color='#ffffff'
                    size= {30}
                    margin={5}  
                    />} 
                />
            </TouchableOpacity>
            <Divider style={{borderColor: '#ffffff', borderWidth: 1,}} />
            <TouchableOpacity>
                <List.Item  title="Email Notifications" titleStyle={styles.notiStyle} right={() => <Icon 
                    name="arrow-forward-ios"
                    type="material"
                    color='#ffffff'
                    size= {30}
                    margin={5}  
                    />} 
                />
            </TouchableOpacity>
            <Divider style={{borderColor: '#ffffff', borderWidth: 1,}} />
        </List.Section>
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

export default NotificationsSetting