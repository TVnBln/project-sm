import React from 'react';
import {View, StyleSheet, TouchableOpacity }from 'react-native';
import {Icon} from 'react-native-elements';
import{
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

export function DrawerContent(props) {

    return(
        <View style={styles.drawerContainer}>
          <DrawerContentScrollView {...props}>
            <View style={styles.drawerContent}>
                <View style={styles.userInfo}>
                    <View style={{flexDirection: 'row', marginTop: 15}}>
                        <Avatar.Image style={{marginTop: 5, marginLeft: 5}}
                            source={{
                                uri: 'https://media.istockphoto.com/photos/close-up-portrait-of-brunette-woman-picture-id1154642632?k=6&m=1154642632&s=612x612&w=0&h=YTiNxRGupHJpMqQRu7Xh-U976mur5fp-cM_WEczpx04='
                            }}
                            size={70}
                        />
                        <View style={{marginLeft: 15, flexDirection: 'column', padding: 8}}>
                            <Title style={styles.title}>Moreno van Emst</Title>
                            <Caption style={styles.caption}>@Morenove64</Caption>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity onPress={() => {props.navigation.navigate('FollowersScreen')}}>
                            <View style={styles.section}>
                                <Paragraph style={styles.paragrapgh, styles.caption}>249</Paragraph>
                                <Caption style={styles.caption}>Followers</Caption>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {props.navigation.navigate('FollowingScreen')}}>
                            <View style={styles.section}>
                                <Paragraph style={styles.paragrapgh, styles.caption}>167</Paragraph>
                                <Caption style={styles.caption}>Following</Caption>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <Drawer.Section style={styles.drawerSection}>
                    <DrawerItem labelStyle={{fontFamily: 'BariolRegular', fontSize:20, color: '#ffffff'}}
                        icon={() => (
                            <Icon 
                            name="home"
                            type="material"
                            color='#ffffff'
                            size= {30}  
                            />
                        )}
                        label='Home'
                        onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem labelStyle={{fontFamily: 'BariolRegular', fontSize:20, color: '#ffffff'}}
                        icon={() => (
                            <Icon 
                            name="search"
                            type="material"
                            color='#ffffff'
                            size= {30}  
                            />
                        )}
                        label="Search"
                        onPress={() => {props.navigation.navigate('Search')}}
                        />
                        <DrawerItem labelStyle={{fontFamily: 'BariolRegular', fontSize:20, color: '#ffffff'}}
                        icon={() => (
                            <Icon 
                            name="settings"
                            type="material"
                            color='#ffffff'
                            size= {30} 
                            />
                        )}
                        label="Settings"
                        onPress={() => {props.navigation.navigate('SettingsScreen')}}
                        />
                        <DrawerItem labelStyle={{fontFamily: 'BariolRegular', fontSize:20, color: '#ffffff'}}
                        icon={() => (
                            <Icon 
                            name="login"
                            type="material"
                            color='#ffffff'
                            size= {30}  
                            />
                        )}
                        label="Login"
                        onPress={() => {props.navigation.navigate('LoginScreen')}}
                        />
                        <DrawerItem labelStyle={{fontFamily: 'BariolRegular', fontSize:20, color: '#ffffff'}}
                        icon={() => (
                            <Icon 
                            name="login"
                            type="material"
                            color='#ffffff'
                            size= {30}
                            />
                        )}
                        label="Signup"
                        onPress={() => {props.navigation.navigate('SignupScreen')}}
                        />
                        <DrawerItem labelStyle={{fontFamily: 'BariolRegular', fontSize:20, color: '#ffffff'}}
                        icon={() => (
                            <Icon 
                            name="login"
                            type="material"
                            color='#ffffff'
                            size= {30}
                            />
                        )}
                        label="CodeScreen"
                        onPress={() => {props.navigation.navigate('CodeScreen')}}
                        />
                        <DrawerItem labelStyle={{fontFamily: 'BariolRegular', fontSize:20, color: '#ffffff'}}
                        icon={() => (
                            <Icon 
                            name="login"
                            type="material"
                            color='#ffffff'
                            size= {30}
                            />
                        )}
                        label="ForgotPassword"
                        onPress={() => {props.navigation.navigate('ForgotPasswordScreen')}}
                        />
                        <DrawerItem labelStyle={{fontFamily: 'BariolRegular', fontSize:20, color: '#ffffff'}}
                        icon={() => (
                            <Icon 
                            name="login"
                            type="material"
                            color='#ffffff'
                            size= {30}
                            />
                        )}
                        label="ResetPassword"
                        onPress={() => {props.navigation.navigate('ResetPasswordScreen')}}
                        />                                                                                      
                </Drawer.Section> 
            </View>
          </DrawerContentScrollView>
          <Drawer.Section style={styles.bottomDrawerSection}>
            <DrawerItem labelStyle={{fontFamily: 'BariolRegular', fontSize:20, color: '#ffffff'}}
            icon={() => (
                <Icon 
                name="logout"
                color='#ffffff'
                size='30'  
                />
            )}
            label="Sign Out"
            onPress={() => {}}
            />      
          </Drawer.Section>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerContainer: {
        flex: 1,
        backgroundColor: 'rgba(242,160,191,1)',
    },
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 20,
        marginTop: 3,
        fontWeight: 'bold',
        fontFamily: 'BariolRegular',
        color: '#ffffff'
    },
    caption: {
        fontSize: 18,
        lineHeight: 17,
        fontFamily: 'BariolRegular',
        color: '#ffffff'
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 5,
        marginLeft: 10,
    },
    paragrapgh: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderColor: '#f4f4f4',
        borderTopWidth: 1,
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});