import React, {useState, useEffect} from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TextInput,
} from 'react-native'
import { List, Avatar, Button, Card, Title, Paragraph, Badge } from 'react-native-paper';
import {Header, Icon, Divider,Overlay, BottomSheet, ListItem} from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';

  const MyCustomCenterComponent = () => {
    return(
      <Text style={styles.headText}>New Post</Text>
  )}


const NewPostScreen = ({navigation}) => {

  const [visible, setVisible] = useState(false)

    const toggleOverlay = () => {
      setVisible(!visible);
    };

  const MyCustomLeftComponent = () => {
    return(
        <TouchableOpacity onPress={() => {navigation.navigate('Home')}}>
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
       <Overlay overlayStyle={styles.overlayRating} isVisible={visible} onBackdropPress={toggleOverlay}>
          <TextInput 
            style={styles.inputBox}
            placeholder="Description:"
            placeholderTextColor="#ffffff"
          />
          <TouchableOpacity onPress={toggleOverlay}>
            <Icon 
              name="arrow-forward-ios"
              type="material"
              color='#ffffff'
              size= {30}  
            />
          </TouchableOpacity>
      </Overlay>
      <View>
        <TouchableOpacity style={styles.imageButton} onPress={pickImage}>
          <Icon 
            name="add-photo-alternate"
            type="material"
            color='rgba(145,145,145,1)'
            size= {70}  
          />
        </TouchableOpacity>
        <Divider style={{ backgroundColor: '#ffffff', borderColor: '#ffffff', borderWidth: 1,}} />
        <TouchableOpacity style={styles.option} onPress={toggleOverlay}>
            <List.Item title="Description" titleStyle={styles.requestStyle} right={() => <Icon 
            name="arrow-forward-ios" 
            type="material" 
            color='#ffffff' 
            size= {35}/>} 
            />
        </TouchableOpacity>
        <Divider style={{ backgroundColor: '#ffffff', borderColor: '#ffffff', borderWidth: 1,}} />
        <TouchableOpacity style={styles.option}>
            <List.Item title="Tag People" titleStyle={styles.requestStyle} right={() => <Icon 
            name="arrow-forward-ios" 
            type="material" 
            color='#ffffff' 
            size= {35}/>} 
            />
        </TouchableOpacity>
        <Divider style={{ backgroundColor: '#ffffff', borderColor: '#ffffff', borderWidth: 1,}} />
        <TouchableOpacity style={styles.option} onPress={() => {navigation.navigate('')}}>
            <List.Item title="Add Location" titleStyle={styles.requestStyle} right={() => <Icon 
            name="arrow-forward-ios" 
            type="material" 
            color='#ffffff' 
            size= {35}/>} 
            />
        </TouchableOpacity>
        <Divider style={{ backgroundColor: '#ffffff', borderColor: '#ffffff', borderWidth: 1,}} />
      </View>
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
  imageButton: {
    backgroundColor: '#ffffff',
    height: '55%',
    justifyContent: 'center'
  },
  inputBox:{
    width: 300,
    height: 40,
    borderBottomColor: '#ffffff',
    borderBottomWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 19,
    color: '#ffffff',
    fontFamily: 'BariolRegular'
  },
  requestStyle: {
    color: '#fff', 
    fontFamily: 'BariolBold',
    fontSize: 22,
  },
  option: {
    margin: 5,
    marginTop: 10,
  },
  overlayRating: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'rgba(242,160,191,1)',
    width: '90%',
    height: '10%',
    borderRadius: 20,
  },
});

export default NewPostScreen