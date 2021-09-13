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
      <Text style={styles.headText}>About</Text>
  )}

const AboutSetting = ({navigation}) => {

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
        <List.Section>
        <Divider style={{borderColor: '#ffffff', borderWidth: 1,}} />
            <TouchableOpacity>
                <List.Item  title="Terms of Use" titleStyle={styles.notiStyle} right={() => <Icon 
                    name="arrow-forward-ios"
                    type="material"
                    color='#ffffff'
                    size= {30}
                    margin={5}  
                    />} 
                    left={() => <Icon 
                        name="info"
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
                    left={() => <Icon 
                        name="bar-chart"
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
        <List.Subheader style={styles.notiTitle}>Welcome to Therrappy:</List.Subheader>
        <TouchableOpacity>
           <Text style={styles.infoApp}>With Therrappy
                you can share everything you are doing with anyone. 
                People can rate your posts, you can get ratings up to 5 stars. 
                By other peoples ratings your own rating goes higher and higher and you will be the most famous of all. 
                Your rating is based on the average of all your ratings together.
            </Text>
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
    infoApp: {
        color: '#fff', 
        fontFamily: 'BariolRegular',
        fontSize: 22,
        padding: 10,
    }
  });

export default AboutSetting