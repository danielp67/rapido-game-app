import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainBoard from "./Components/MainBoard";

export default function App() {
  return (
    <View style={styles.container}>
      <div className={`container-fluid min-vh-100 bg-secondary`}>
          <MainBoard/>
      </div>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    backgroundColor: '#c1d8fa',
  },
});
