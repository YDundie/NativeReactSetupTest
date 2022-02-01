import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainButton from '../components/Button';

export default function TestScreen({ navigation, route }: any) {
  return (
    <View style={styles.container}>
      <Text>Param {route.params.name}</Text>
      <MainButton
        title="Go to screen 1"
        onPress={() => {
          navigation.navigate('test2', { name: 'Jane' });
        }}
      ></MainButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
