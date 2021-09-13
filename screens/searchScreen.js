import * as React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import {Header, ButtonGroup, Tile, Icon, BottomSheet, ListItem} from 'react-native-elements'
import { Avatar, Button, Divider, Surface, Card, Title, Paragraph, Badge, Searchbar } from 'react-native-paper';

const MyCustomCenterComponent = () => {
  return(
    <Text style={styles.headText}>Explore</Text>
)}


const SearchScreen = () => {

  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);


  return (
    <View style={styles.container}>
      <Header
        placement='center'
        centerComponent={<MyCustomCenterComponent />}
        containerStyle={{
          backgroundColor: 'rgba(242,160,191,1)',
          justifyContent: 'space-around',
        }}
      />
      <View>
        <Searchbar style={styles.search}
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <Divider style={{ backgroundColor: '#ffffff' }} />
      <View style={styles.tiles}>
        <TouchableOpacity>
          <Surface style={styles.surface1}>
            <Text style={styles.tileText}>Explore</Text>
          </Surface>
        </TouchableOpacity>
        <TouchableOpacity>
          <Surface style={styles.surface2}>
            <Text style={styles.tileText}>Explore</Text>
          </Surface>
        </TouchableOpacity>
        <TouchableOpacity>
          <Surface style={styles.surface3}>
            <Text style={styles.tileText}>Explore</Text>
          </Surface>
        </TouchableOpacity>
      </View>
      <View style={styles.tiles2}>
        <TouchableOpacity>
          <Surface style={styles.surface4}>
            <Text style={styles.tileText}>Explore</Text>
          </Surface>
        </TouchableOpacity>
        <TouchableOpacity>
          <Surface style={styles.surface5}>
            <Text style={styles.tileText}>Explore</Text>
          </Surface>
        </TouchableOpacity>
      </View>
      <View style={styles.tiles2}>
        <TouchableOpacity>
          <Surface style={styles.surface6}>
            <Text style={styles.tileText}>Explore</Text>
          </Surface>
        </TouchableOpacity>
        <TouchableOpacity>
          <Surface style={styles.surface7}>
            <Text style={styles.tileText}>Explore</Text>
          </Surface>
        </TouchableOpacity>
      </View>
      <View style={styles.tiles3}>
        <TouchableOpacity>
          <Surface style={styles.surface8}>
            <Text style={styles.tileText}>Explore</Text>
          </Surface>
        </TouchableOpacity>
        <TouchableOpacity>
          <Surface style={styles.surface9}>
            <Text style={styles.tileText}>Explore</Text>
          </Surface>
        </TouchableOpacity>
        <TouchableOpacity>
          <Surface style={styles.surface10}>
            <Text style={styles.tileText}>Explore</Text>
          </Surface>
        </TouchableOpacity>
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
    search: {
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 45,
      width: '80%'
    },
    surface1: {
      padding: 8,
      height: 240,
      width: 150,
      alignItems: 'center',
      justifyContent: 'space-around',
      elevation: 4,
      margin: 5,
      backgroundColor: 'rgba(242,160,191,1)',
    },
    surface2: {
      padding: 8,
      height: 115,
      width: 115,
      alignItems: 'center',
      justifyContent: 'space-around',
      elevation: 4,
      margin: 5,
      backgroundColor: 'rgba(242,160,191,1)',
    },
    surface3: {
      padding: 8,
      height: 115,
      width: 115,
      alignItems: 'center',
      justifyContent: 'space-around',
      elevation: 4,
      margin: 5,
      backgroundColor: 'rgba(242,160,191,1)',
    },
    surface4: {
      padding: 8,
      height: 115,
      width: 115,
      alignItems: 'center',
      justifyContent: 'space-around',
      elevation: 4,
      marginLeft: 165,
      marginTop: -120,
      backgroundColor: 'rgba(242,160,191,1)',
    },
    surface5: {
      padding: 8,
      height: 115,
      width: 115,
      alignItems: 'center',
      justifyContent: 'space-around',
      elevation: 4,
      marginLeft: 290,
      marginTop: -120,
      backgroundColor: 'rgba(242,160,191,1)',
    },
    surface6: {
      padding: 8,
      height: 250,
      width: 275,
      alignItems: 'center',
      justifyContent: 'space-around',
      elevation: 4,
      margin: 5,
      backgroundColor: 'rgba(242,160,191,1)',
    },
    surface7: {
      padding: 8,
      height: 250,
      width: 115,
      alignItems: 'center',
      justifyContent: 'space-around',
      elevation: 4,
      marginLeft: 290,
      marginTop: -255,
      backgroundColor: 'rgba(242,160,191,1)',
    },
    surface8: {
      padding: 8,
      height: 115,
      width: 150,
      alignItems: 'center',
      justifyContent: 'space-around',
      elevation: 4,
      margin: 5,
      backgroundColor: 'rgba(242,160,191,1)',
    },
    surface9: {
      padding: 8,
      height: 115,
      width: 115,
      alignItems: 'center',
      justifyContent: 'space-around',
      elevation: 4,
      margin: 5,
      backgroundColor: 'rgba(242,160,191,1)',
    },
    surface10: {
      padding: 8,
      height: 115,
      width: 115,
      alignItems: 'center',
      justifyContent: 'space-around',
      elevation: 4,
      margin: 5,
      backgroundColor: 'rgba(242,160,191,1)',
    },
    tileText: {
      color: '#fff', 
      fontFamily: 'BariolBold',
      fontSize: 25,
    },
    tiles: {
      flexDirection: 'row',
    },
    tiles2: {
      flexDirection: 'column',
    },
    tiles3: {
      flexDirection: 'row',
    }
  });

export default SearchScreen