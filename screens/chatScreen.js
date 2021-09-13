import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native'
import {Header, Icon, Divider, BottomSheet, ListItem} from 'react-native-elements';
import { Bubble, GiftedChat, Send, Ticks, InputToolbar, Composer, AudioButton } from 'react-native-gifted-chat'


const MyCustomCenterComponent = () => {
    return(
        <Text style={styles.headText}>Chat</Text>
    )}


const ChatScreen = ({navigation}) => {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hallo Moreno',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 2,
        text: 'Hoii!',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

    const MyCustomLeftComponent = () => {
        return(
            <TouchableOpacity onPress={() => {navigation.navigate('MessagesScreen')}}>
            <Icon 
            name="arrow-back-ios"
            type="material"
            color='#ffffff'
            size= {30}  
            />
            </TouchableOpacity>
      )}

      const renderBubble = (props) => {
        return(
        <Bubble 
          {...props}
          wrapperStyle={{
            left: {
              backgroundColor: '#ffffff',
            },
            right: {
              backgroundColor: '#ffffff',
            }
          }}
          textStyle={{
            right: {
              color: '#474443',
              fontFamily: 'BariolRegular',
              fontSize: 20,
            },
            left: {
              color: '#474443',
              fontFamily: 'BariolRegular',
              fontSize: 20,
            },
          }}
          timeTextStyle={{
            left: {
              color: '#474443'
            },
            right: {
              color: '#474443'
            }
          }}
        />
        )
      }

      const scrollToBottomComponent = () => {
        return(
          <View>
              <Icon 
                name="arrow-downward"
                type="material"
                color=''
                size= {25}
                style={{marginBottom: 5,}}
              />
            </View>
        );
      }

      const renderSend = (props) => {
        return(
          <Send {...props}>
              <Icon 
                name="send"
                type="material"
                color='#ffffff'
                size= {32}
                style={{marginBottom: 5, marginLeft: 10, marginRight: 10,}}
              />
            </Send>
        );
      }

     const renderInputToolbar = (props) => {
       return( 
        <InputToolbar 
          {...props}
          alwaysShowSend
          renderSend={renderSend}
          minInputToolbarHeight={60}
          placeholder="Type a message...."
          placeholderTextColor="#fff"
          containerStyle={{
            backgroundColor: 'rgba(242,160,191,1)',
            borderColor: '#ffffff',
            borderTopColor: '#ffffff',
            borderWidth: 1,
            borderRadius: 15,
          }}
        />
       )
     }

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
        <GiftedChat
          messages={messages}
          onSend={messages => onSend(messages)}
          user={{_id: 1,}}
          style={styles.chatBox}
          renderBubble={renderBubble}
          scrollToBottom
          scrollToBottomComponent={scrollToBottomComponent}
          textInputStyle={styles.textBar}
          renderInputToolbar={renderInputToolbar}
          enabledContentGestureInteraction={false}
        />
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
    textBar: {
      backgroundColor: 'rgba(242,160,191,1)',
      color: '#fff',
      fontFamily: 'BariolRegular',
      fontSize: 17,
    },
    inputBar: {
      flex: 1,
      flexDirection: 'column',
    },
});

export default ChatScreen