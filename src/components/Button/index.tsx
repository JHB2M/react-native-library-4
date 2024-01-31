import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native';
import type IButton from './interface';
import styles from './style';

const Button = ({ text, onPress, containerStyle }: IButton) => {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
