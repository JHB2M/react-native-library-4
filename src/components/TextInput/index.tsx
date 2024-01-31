import React from 'react';
import { Text, TextInput as TI } from 'react-native';
import styles from './style';
import type ITextInput from './interface';
const TextInput = ({
  placeholder,
  value,
  setValue,
  editable = true,
  title = '',
}: ITextInput) => {
  return (
    <>
      {title.length > 0 && <Text style={styles.title}>{title}</Text>}
      <TI
        style={styles.input}
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        editable={editable}
      />
    </>
  );
};

export default TextInput;
