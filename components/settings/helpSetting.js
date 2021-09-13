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
      <Text style={styles.headText}>Help</Text>
  )}

const HelpSetting = ({navigation}) => {

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
                <List.Item  title="Report a Problem" titleStyle={styles.notiStyle} right={() => <Icon 
                    name="arrow-forward-ios"
                    type="material"
                    color='#ffffff'
                    size= {30}
                    margin={5}  
                    />} 
                    left={() => <Icon 
                        name="error"
                        type="material"
                        color='#ffffff'
                        size= {30}
                        margin={5}
                        />} 
                />
            </TouchableOpacity>
            <Divider style={{borderColor: '#ffffff', borderWidth: 1,}} />
            <TouchableOpacity>
                <List.Item  title="Help Requests" titleStyle={styles.notiStyle} right={() => <Icon 
                    name="arrow-forward-ios"
                    type="material"
                    color='#ffffff'
                    size= {30}
                    margin={5}   
                    />} 
                    left={() => <Icon 
                        name="verified-user"
                        type="material"
                        color='#ffffff'
                        size= {30}
                        margin={5}
                        />} 
                />
            </TouchableOpacity>
            <Divider style={{borderColor: '#ffffff', borderWidth: 1,}} />
            <TouchableOpacity>
                <List.Item  title="Privacy and Security Help" titleStyle={styles.notiStyle} right={() => <Icon 
                    name="arrow-forward-ios"
                    type="material"
                    color='#ffffff'
                    size= {30}
                    margin={5}   
                    />} 
                    left={() => <Icon 
                        name="mail"
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
        <List.Subheader style={styles.notiTitle}>Contact:</List.Subheader>
            <TouchableOpacity>
                <List.Item  title="Email: info@Therrappy.com" titleStyle={styles.notiStyle} 
                    left={() => <Icon 
                        name="mail"
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

export default HelpSetting