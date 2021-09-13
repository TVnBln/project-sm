import React from 'react';
import { Container, Header, Tab, Tabs, TabHeading,} from 'native-base';
import {Icon} from 'react-native-elements'
import {
    View,
    Text,
    StyleSheet,
  } from 'react-native'
import TabPosts from '../tabs/tabPosts';
import TabPhotos from '../tabs/tabPhotos';
import TabRated from '../tabs/tabRated';

const ProfileTabScreen = () => {
    return (
      <Container style={styles.container}>
        <Tabs tabBarUnderlineStyle={{ backgroundColor: "#ffffff" }}>
          <Tab heading={ <TabHeading style={styles.tabs}><Icon name="portrait" label="Portrait" type="material" color="#ffffff" size={27}/></TabHeading>}>
            <TabPosts />
          </Tab>
          <Tab heading={ <TabHeading style={styles.tabs}><Icon name="collections" type="material" color="#ffffff" size={27}/></TabHeading>}>
            <TabPhotos />
          </Tab>
          <Tab heading={ <TabHeading style={styles.tabs}><Icon name="star-border" type="material" color="#ffffff" size={27}/></TabHeading>}>
            <TabRated />
          </Tab>
        </Tabs>
      </Container>
    );
  }

const styles = StyleSheet.create({ 
    container: {
        flexGrow: 1,
    },
    tabs: {
        backgroundColor: 'rgba(242,160,191,1)',
    },
    tabTitle: {
      color: '#ffffff',
      fontSize: 15,
    },
});

  export default ProfileTabScreen