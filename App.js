import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

import TabNavigator from './components/navigations/bottomTabNavigator'
import { DrawerContent } from './screens/drawerContent';
import SettingsScreen  from './screens/settingsScreen';
import LoginScreen from './screens/loginScreen';
import SignupScreen from './screens/signupScreen';
import ForgotPasswordScreen from './screens/forgotPasswordScreen';
import ResetPasswordScreen from './screens/resetPasswordScreen';
import CodeScreen from './screens/codeScreen';
import NotificationScreen from './screens/notificationScreen';
import ProfileScreen from './screens/profileScreen';
import NotificationsSetting from './components/settings/notificationsSetting';
import DiscoverPeopleScreen from './screens/discoverPeopleScreen';
import MessagesScreen from './screens/messagesScreen';
import ChatScreen from './screens/chatScreen';
import EditProfileScreen from './screens/editProfileScreen';
import FollowersScreen from './screens/followersScreen';
import FollowingScreen from './screens/followingScreen';
import CommentsScreen from './screens/commentsScreen';
import SecuritySetting from './components/settings/securitySetting';
import PrivacySetting from './components/settings/privacySetting';
import AccountSetting from './components/settings/accountSetting';
import HelpSetting from './components/settings/helpSetting';
import AboutSetting from './components/settings/aboutSetting';

import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const Drawer = createDrawerNavigator()

const httpLink = createHttpLink({
  uri: 'https://graphql.fauna.com/graphql'
})

const authLink = setContext((_, { headers }) => {
  const token = process.env.REACT_APP_LOCAL___ADMIN

  return {
    headers: {
      ...headers,
      authorization: `Basic fnAEEb-lpQACBz_LX_WkWhQ3sEq5G4pl-u0lc4zw` ? `Bearer fnAEEb-lpQACBz_LX_WkWhQ3sEq5G4pl-u0lc4zw` : "",
    }
  }
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
})

const MessageStack = ({navigation}) => {
  <Stack.Navigator>
    <Stack.Screen name="Messages" component={MessagesScreen} />
    <Stack.Screen name="Chat" component={ChatScreen}/>
  </Stack.Navigator>
}

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="HomeDrawer" component={TabNavigator}/>
      <Drawer.Screen name="SearchDrawer" component={TabNavigator}/>
      <Drawer.Screen name="NewPost" component={TabNavigator}/>
      <Drawer.Screen name="Radar" component={TabNavigator}/>
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen}/>
      <Drawer.Screen name="LoginScreen" component={LoginScreen}/>
      <Drawer.Screen name="SignupScreen" component={SignupScreen}/>
      <Drawer.Screen name="CodeScreen" component={CodeScreen}/>
      <Drawer.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen}/>
      <Drawer.Screen name="ResetPasswordScreen" component={ResetPasswordScreen}/>
      <Drawer.Screen name="NotificationScreen" component={NotificationScreen}/>
      <Drawer.Screen name="ProfileScreen" component={ProfileScreen}/>
      <Drawer.Screen name="NotificationsSetting" component={NotificationsSetting}/>
      <Drawer.Screen name="DiscoverPeopleScreen" component={DiscoverPeopleScreen}/>
      <Drawer.Screen name="MessagesScreen" component={MessagesScreen}/>
      <Drawer.Screen name="ChatScreen" component={ChatScreen}/>
      <Drawer.Screen name="Messages" component={MessageStack}/>
      <Drawer.Screen name="EditProfileScreen" component={EditProfileScreen}/>
      <Drawer.Screen name="FollowersScreen" component={FollowersScreen}/>
      <Drawer.Screen name="FollowingScreen" component={FollowingScreen}/>
      <Drawer.Screen name="CommentsScreen" component={CommentsScreen}/>
      <Drawer.Screen name="SecuritySetting" component={SecuritySetting}/>
      <Drawer.Screen name="PrivacySetting" component={PrivacySetting}/>
      <Drawer.Screen name="AccountSetting" component={AccountSetting}/>
      <Drawer.Screen name="HelpSetting" component={HelpSetting}/>
      <Drawer.Screen name="AboutSetting" component={AboutSetting}/>
    </Drawer.Navigator>
  )
}

const getFonts = () => Font.loadAsync({
  'BariolRegular': require('./assets/fonts/BariolRegular.ttf'),
  'BariolBold': require('./assets/fonts/BariolBold.ttf')
});

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

    if(fontsLoaded){
    return (
      <ApolloProvider client={client}>
        <NavigationContainer>
          <DrawerNavigator />
        </NavigationContainer>
      </ApolloProvider>
    )
  }else {
    return(
      <AppLoading
        startAsync={getFonts}
        onFinish={()=> setFontsLoaded(true)}
        onError={console.warn}
      />
    )
  }
};



export default App;
