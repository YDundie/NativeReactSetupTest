import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './Button.styles';

interface MainButtonProps {
  title: String;
  onPress: (a?: any) => void;
}

function MainButton({ title, onPress }: MainButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

export default MainButton;
