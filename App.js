import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainBoard from "./Components/MainBoard";

export default function App() {
  return (
    <View style={styles.container}>
          <MainBoard/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    backgroundColor: '#c1d8fa',
  },
});
