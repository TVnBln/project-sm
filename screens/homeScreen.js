import React, {useState} from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import {Header, Icon, Rating, Overlay, AirbnbRating, BottomSheet, ListItem} from 'react-native-elements'
import { Avatar, Button,Divider, Card, Title, Paragraph, Badge } from 'react-native-paper';

const MyCustomLeftComponent = () => {
  return(
    <Text style={styles.headText}>Moreno0184</Text>
)}

const LeftContent = props => <Avatar.Image style={styles.avatar}
source={{
uri: 'https://media.istockphoto.com/photos/close-up-portrait-of-brunette-woman-picture-id1154642632?k=6&m=1154642632&s=612x612&w=0&h=YTiNxRGupHJpMqQRu7Xh-U976mur5fp-cM_WEczpx04='}}
size={50} />

const HomeScreen = ({navigation}) => {

    const [visible, setVisible] = useState(false)

    const toggleOverlay = () => {
      setVisible(!visible);
    };

  const MyCustomCenterComponent = () => {
    return(
      <TouchableOpacity onPress={() => {navigation.navigate('NotificationScreen')}}>
      <Icon 
      name="star-border"
      type="material"
      color='#ffffff'
      size= {35}
      />
      </TouchableOpacity>
  )}

  const MyCustomRightComponent = () => {
    return(
      <TouchableOpacity onPress={() => {navigation.navigate('MessagesScreen')}}>
      <Icon 
      name="message"
      type="material"
      color='#ffffff'
      size= {35}
      />
      </TouchableOpacity>
  )}

  return (
    <View style={styles.container}>
      <Header
        placement='right'
        leftComponent={<MyCustomLeftComponent />}
        centerComponent={<MyCustomCenterComponent />}
        rightComponent={<MyCustomRightComponent />}
        containerStyle={{
          backgroundColor: 'rgba(242,160,191,1)',
          justifyContent: 'space-around',
          borderBottomColor: 'rgba(242,160,191,1)',
        }}
      />
      <Overlay overlayStyle={styles.overlayRating} isVisible={visible} onBackdropPress={toggleOverlay}>
        <Rating style={styles.rating}
          type='star'
          ratingCount={5}
          fractions={1}
          imageSize={45}
          startingValue={1}
          minValue={0.5}
          showRating
          ratingTextColor={'#ffffff'}
          tintColor={'rgba(242,160,191,1)'}
        />
      </Overlay>
    <ScrollView>
      <View style={styles.viewContainer}>
    <Card style={styles.post}>
      <Card.Title title="Moreno0184" left={LeftContent} titleStyle={{color: '#ffffff',  fontFamily: 'BariolRegular', fontSize: 25,}} />
      <Card.Cover style={styles.postImage} source={{ uri: 'https://picsum.photos/700' }} />
      <Card.Content>
        <Title style={styles.description}>Beautiful day at the beach!</Title>
      </Card.Content>
      <Card.Actions>
        <TouchableOpacity onPress={toggleOverlay}>
         <Icon 
         name="star-border"
         type="material"
         color='#ffffff'
         size= {35}
         style={styles.icons}
         />
         <Text style={styles.rateInfo}>4.5</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigation.navigate('CommentsScreen')}}>
         <Icon 
         name="chat"
         type="material"
         color='#ffffff'
         size= {35}
         style={styles.icons}
         />
         <Text style={styles.commentInfo}>23</Text>
        </TouchableOpacity>
      </Card.Actions>
    </Card>
    <Divider style={{ backgroundColor: '#ffffff' }} />
    <Card style={styles.post}>
      <Card.Title title="Moreno0184" left={LeftContent} titleStyle={{color: '#ffffff',  fontFamily: 'BariolRegular', fontSize: 25,}} />
      <Card.Cover style={styles.postImage} source={{ uri: 'https://picsum.photos/700' }} />
      <Card.Content>
        <Title style={styles.description}>Viewss</Title>
      </Card.Content>
      <Card.Actions>
        <TouchableOpacity onPress={toggleOverlay}>
         <Icon 
         name="star-border"
         type="material"
         color='#ffffff'
         size= {35}
         style={styles.icons}
         />
         <Text style={styles.rateInfo}>4.5</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigation.navigate('CommentsScreen')}}>
         <Icon 
         name="chat"
         type="material"
         color='#ffffff'
         size= {35}
         style={styles.icons}
         />
         <Text style={styles.commentInfo}>23</Text>
        </TouchableOpacity>
      </Card.Actions>
    </Card>
    <Divider style={{ backgroundColor: '#ffffff' }} />
    <Card style={styles.post}>
      <Card.Title title="Moreno0184" left={LeftContent} titleStyle={{color: '#ffffff',  fontFamily: 'BariolRegular', fontSize: 25,}} />
      <Card.Cover style={styles.postImage} source={{ uri: 'https://picsum.photos/700' }} />
      <Card.Content>
        <Title style={styles.description}>Dinner with bae</Title>
      </Card.Content>
      <Card.Actions>
        <TouchableOpacity onPress={toggleOverlay}>
         <Icon 
         name="star-border"
         type="material"
         color='#ffffff'
         size= {35}
         style={styles.icons}
         />
         <Text style={styles.rateInfo}>4.5</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigation.navigate('CommentsScreen')}}>
         <Icon 
         name="chat"
         type="material"
         color='#ffffff'
         size= {35}
         style={styles.icons}
         />
         <Text style={styles.commentInfo}>23</Text>
        </TouchableOpacity>
      </Card.Actions>
    </Card>
    <Divider style={{ backgroundColor: '#ffffff' }} />
    <Card style={styles.post}>
      <Card.Title title="Moreno0184" left={LeftContent} titleStyle={{color: '#ffffff',  fontFamily: 'BariolRegular', fontSize: 25,}} />
      <Card.Cover style={styles.postImage} source={{ uri: 'https://picsum.photos/700' }} />
      <Card.Content>
        <Title style={styles.description}>This is a post</Title>
      </Card.Content>
      <Card.Actions>
        <TouchableOpacity onPress={toggleOverlay}>
         <Icon 
         name="star-border"
         type="material"
         color='#ffffff'
         size= {35}
         style={styles.icons}
         />
         <Text style={styles.rateInfo}>4.5</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigation.navigate('CommentsScreen')}}>
         <Icon 
         name="chat"
         type="material"
         color='#ffffff'
         size= {35}
         style={styles.icons}
         />
         <Text style={styles.commentInfo}>23</Text>
        </TouchableOpacity>
      </Card.Actions>
    </Card>
    </View>
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(242,160,191,1)',
    justifyContent: 'center'
  },
  viewContainer: {
    backgroundColor: 'rgba(242,160,191,1)',
    height: '100%',
  },
  headText: {
    color: '#fff', 
    fontFamily: 'BariolBold',
    fontSize: 25,
  },
  description: {
    flexDirection: 'row',
  },
  post: {
    backgroundColor: 'rgba(242,160,191,1)',
  },
  rateInfo: {
    color: '#ffffff',
    fontFamily: 'BariolRegular',
    fontSize: 22,
    marginLeft: 5,
  },
  commentInfo: {
    color: '#ffffff',
    fontFamily: 'BariolRegular',
    fontSize: 22,
    marginLeft: 8,
  },
  description: {
    color: '#ffffff',
    fontFamily: 'BariolRegular',
    fontSize: 25,
  },
  rating: {
    width: '60%',
  },
  overlayRating: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(242,160,191,1)',
    width: '70%',
    height: '20%',
    borderRadius: 20,
  },
  icons: {
    marginLeft: 3,
  }
});

export default HomeScreen