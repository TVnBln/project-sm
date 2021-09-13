import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native'
import { List, Avatar, Button, Card, Title, Paragraph, Badge } from 'react-native-paper';
import {Header, Icon, Divider, Switch, BottomSheet, ListItem} from 'react-native-elements';

const MyCustomCenterComponent = () => {
    return(
      <Text style={styles.headText}>Privacy</Text>
  )}

const PrivacySetting = ({navigation}) => {

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
                <List.Item  title="Posts" titleStyle={styles.notiStyle} right={() => <Icon 
                    name="arrow-forward-ios"
                    type="material"
                    color='#ffffff'
                    size= {30}
                    margin={5}  
                    />} 
                    left={() => <Icon 
                        name="control-point"
                        type="material"
                        color='#ffffff'
                        size= {30}
                        margin={5}
                        />} 
                />
            </TouchableOpacity>
            <Divider style={{borderColor: '#ffffff', borderWidth: 1,}} />
            <TouchableOpacity>
                <List.Item  title="Comments" titleStyle={styles.notiStyle} right={() => <Icon 
                    name="arrow-forward-ios"
                    type="material"
                    color='#ffffff'
                    size= {30}
                    margin={5}   
                    />} 
                    left={() => <Icon 
                        name="comment"
                        type="material"
                        color='#ffffff'
                        size= {30}
                        margin={5}
                        />} 
                />
            </TouchableOpacity>
            <Divider style={{borderColor: '#ffffff', borderWidth: 1,}} />
            <TouchableOpacity>
                <List.Item  title="Mentions" titleStyle={styles.notiStyle} right={() => <Icon 
                    name="arrow-forward-ios"
                    type="material"
                    color='#ffffff'
                    size= {30}
                    margin={5}   
                    />} 
                    left={() => <Icon 
                        name="alternate-email"
                        type="material"
                        color='#ffffff'
                        size= {30}
                        margin={5}
                        />} 
                />
            </TouchableOpacity>
            <Divider style={{borderColor: '#ffffff', borderWidth: 1,}} />
            <TouchableOpacity>
                <List.Item  title="Messages" titleStyle={styles.notiStyle} right={() => <Icon 
                    name="arrow-forward-ios"
                    type="material"
                    color='#ffffff'
                    size= {30}
                    margin={5}   
                    />} 
                    left={() => <Icon 
                        name="send"
                        type="material"
                        color='#ffffff'
                        size= {30}
                        margin={5}
                        />} 
                />
            </TouchableOpacity>
            <Divider style={{borderColor: '#ffffff', borderWidth: 1,}} />
            <TouchableOpacity>
                <List.Item  title="Activity Status" titleStyle={styles.notiStyle} right={() => <Icon 
                    name="arrow-forward-ios"
                    type="material"
                    color='#ffffff'
                    size= {30}
                    margin={5}   
                    />} 
                    left={() => <Icon 
                        name="person-pin-circle"
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
        <List.Subheader style={styles.notiTitle}>Data and History:</List.Subheader>
            <TouchableOpacity>
                <List.Item  title="Blocked Accounts" titleStyle={styles.notiStyle} right={() => <Icon 
                    name="arrow-forward-ios"
                    type="material"
                    color='#ffffff'
                    size= {30}
                    margin={5}  
                    />} 
                    left={() => <Icon 
                        name="person-add-disabled"
                        type="material"
                        color='#ffffff'
                        size= {30}
                        margin={5}
                        />} 
                />
            </TouchableOpacity>
            <Divider style={{borderColor: '#ffffff', borderWidth: 1,}} />
            <TouchableOpacity>
                <List.Item  title="Muted Accounts" titleStyle={styles.notiStyle} right={() => <Icon 
                    name="arrow-forward-ios"
                    type="material"
                    color='#ffffff'
                    size= {30}
                    margin={5}  
                    />} 
                    left={() => <Icon 
                        name="voice-over-off"
                        type="material"
                        color='#ffffff'
                        size= {30}
                        margin={5}
                        />} 
                />
            </TouchableOpacity>
            <Divider style={{borderColor: '#ffffff', borderWidth: 1,}} />
            <TouchableOpacity onPress={() => {navigation.navigate('FollowingScreen')}}>
                <List.Item  title="Account You Follow" titleStyle={styles.notiStyle} right={() => <Icon 
                    name="arrow-forward-ios"
                    type="material"
                    color='#ffffff'
                    size= {30}
                    margin={5}  
                    />} 
                    left={() => <Icon 
                        name="people"
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

export default PrivacySetting