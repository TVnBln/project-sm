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
      <Text style={styles.headText}>Account Details</Text>
  )}

const AccountSetting = ({navigation}) => {

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
            <TouchableOpacity>
                <List.Item  title="Personal Information" titleStyle={styles.notiStyle} right={() => <Icon 
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
                <List.Item  title="Followers" titleStyle={styles.notiStyle} right={() => <Icon 
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
                <List.Item  title="Following" titleStyle={styles.notiStyle} right={() => <Icon 
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
                <List.Item  title="Contacts" titleStyle={styles.notiStyle} right={() => <Icon 
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
                <List.Item  title="Sharing To Other Apps" titleStyle={styles.notiStyle} right={() => <Icon 
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
                <List.Item  title="Data Usage" titleStyle={styles.notiStyle} right={() => <Icon 
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
                <List.Item  title="Original Photo's" titleStyle={styles.notiStyle} right={() => <Icon 
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
                <List.Item  title="Posts You've Rated" titleStyle={styles.notiStyle} right={() => <Icon 
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
                <List.Item  title="Recently Deleted" titleStyle={styles.notiStyle} right={() => <Icon 
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

export default AccountSetting