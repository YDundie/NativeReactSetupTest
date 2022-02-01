import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainButton from '../components/Button';

export default function TestScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text>Test 1</Text>
      <MainButton
        title="Go to screen 2"
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
