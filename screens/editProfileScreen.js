import React, {useState, useEffect} from 'react'
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import { List, Avatar, Button, Card, Title, Paragraph, Badge } from 'react-native-paper';
import {Header, Icon, Divider, BottomSheet, ListItem} from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';

import EditProfileForm from '../components/editProfileForm';

const MyCustomCenterComponent = () => {
    return(
      <Text style={styles.headText}>Edit Profile</Text>
  )}

const EditProfileScreen = ({navigation}) => {

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

      const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
        <ImageBackground source={require('../images/background2.png')} style={styles.image}>
        <Header
            placement='center'
            leftComponent={<MyCustomLeftComponent />}
            centerComponent={<MyCustomCenterComponent />}
            containerStyle={{
                backgroundColor: 'rgba(242,160,191,0.1)',
                justifyContent: 'space-around',
                borderBottomColor: '#ffffff',
            }}
        />
        <View style={styles.avatarContainer}>
            <TouchableOpacity onPress={pickImage}>
                <Avatar.Image style={styles.avatar}
                    source={{
                    uri: 'https://media.istockphoto.com/photos/close-up-portrait-of-brunette-woman-picture-id1154642632?k=6&m=1154642632&s=612x612&w=0&h=YTiNxRGupHJpMqQRu7Xh-U976mur5fp-cM_WEczpx04='}}
                    size={130}
                />
                <Text style={styles.changeAvatarText}>Change Profile Picture</Text>
            </TouchableOpacity>
        </View>
        <Divider style={{ backgroundColor: '#ffffff', borderColor: '#ffffff', borderWidth: 0.5, }} />
        <EditProfileForm type="EditProfile"/>
        </ImageBackground>
      </View>
  )
}

const styles = StyleSheet.create({
    container:{
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
    },
    signupButton: {
        color: '#ffffff',
        fontFamily: 'BariolBold',
        fontSize: 18,
        marginRight: 20,
        paddingLeft: 5,
    },
    image: {
      flex: 1,
      resizeMode: "stretch",
      justifyContent: "center",
      width: '100%',
    },
    headText: {
        color: '#fff', 
        fontFamily: 'BariolBold',
        fontSize: 25,
      },
      avatar: {
        marginTop: 10,
        marginBottom: 5,
        marginLeft: 10,
      },
      avatarContainer: {
          justifyContent: 'center',
          alignItems: 'center',
      }, 
      changeAvatarText: {
        color: '#ffffff',
        fontSize: 18,
        fontFamily: 'BariolRegular',
        marginBottom: 10,
      },
  });

export default EditProfileScreen