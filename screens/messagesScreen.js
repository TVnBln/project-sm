import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native'
import {Header, Icon, Divider, BottomSheet, ListItem} from 'react-native-elements';
import {
    Container,
    Card,
    UserInfo,
    UserImgWrapper,
    UserImg,
    UserInfoText,
    UserName,
    PostTime,
    MessageText,
    TextSection,
} from '../styles/messageStyle';

const MyCustomCenterComponent = () => {
    return(
      <Text style={styles.headText}>Messages</Text>
  )}

  const Messages = [
    {
      id: '1',
      userName: 'Jenny Doe',
      userImg: require('../assets/users/user-3.jpg'),
      messageTime: '4 mins ago',
      messageText:
        'Hoi hoe gaat het, dit is mijn test bericht voor Therrappy.',
    },
    {
      id: '2',
      userName: 'John Doe',
      userImg: require('../assets/users/user-1.jpg'),
      messageTime: '2 hours ago',
      messageText:
        'Hoi hoe gaat het, dit is mijn test bericht voor Therrappy.',
    },
    {
      id: '3',
      userName: 'Ken William',
      userImg: require('../assets/users/user-4.jpg'),
      messageTime: '1 hours ago',
      messageText:
        'Hoi hoe gaat het, dit is mijn test bericht voor Therrappy.',
    },
    {
      id: '4',
      userName: 'Selina Paul',
      userImg: require('../assets/users/user-2.jpg'),
      messageTime: '1 day ago',
      messageText:
        'Hoi hoe gaat het, dit is mijn test bericht voor Therrappy.',
    },
    {
      id: '5',
      userName: 'Christy Alex',
      userImg: require('../assets/users/user-5.jpg'),
      messageTime: '2 days ago',
      messageText:
        'Hoi hoe gaat het, dit is mijn test bericht voor Therrappy.',
    },
  ];
  

const MessagesScreen = ({navigation}) => {

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


  return (
    <Container>
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
      <FlatList 
        data={Messages}
        keyExtractor={item =>item.id}
        renderItem={({item}) => (
            <Card onPress={() => navigation.navigate('ChatScreen', {userName: item.userName})}>
                <UserInfo>
                    <UserImgWrapper>
                        <UserImg source={item.userImg} />
                    </UserImgWrapper>
                    <TextSection>
                        <UserInfoText>
                            <UserName>{item.userName}</UserName>
                            <PostTime>{item.messageTime}</PostTime>
                        </UserInfoText>
                        <MessageText>{item.messageText}</MessageText>
                    </TextSection>
                </UserInfo>
            </Card>
        )}
      />
    </Container>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(242,160,191,1)',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      },
    headText: {
      color: '#fff', 
      fontFamily: 'BariolBold',
      fontSize: 25,
    },
});

export default MessagesScreen