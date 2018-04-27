import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import 'config/ReactotronConfig';

import Post from 'components/Post';

export default class App extends Component {
  state = {
    posts: [
      { id: 0
        , title: 'Aprendendo React Native'
        , author: 'Diego Schell Fernandes'
        , msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      { id: 1
        , title: 'Aprendendo React Native'
        , author: 'Diego Schell Fernandes'
        , msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      { id: 2
        , title: 'Aprendendo React Native'
        , author: 'Diego Schell Fernandes'
        , msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      { id: 3
        , title: 'Aprendendo React Native'
        , author: 'Diego Schell Fernandes'
        , msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      { id: 4
        , title: 'Aprendendo React Native'
        , author: 'Diego Schell Fernandes'
        , msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>
          GoNative App
        </Text>
        <ScrollView style={styles.scrollview}>
          { this.state.posts.map(post => (
            <Post key={post.id} title={post.title} author={post.author} msg={post.msg} />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
  scrollview: {
    backgroundColor: '#EE7777',
    padding: 20,
  },
  headerText: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333333',
    fontSize: 18,
    height: 40,
  },
});
