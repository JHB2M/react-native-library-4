import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { multiply, Button, TextInput } from 'react-native-library-4';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();
  const [name, setName] = React.useState('');

  React.useEffect(() => {
    multiply(3, 7).then(setResult);
  }, []);

  const submit = () => {
    console.log('object');
  };

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <TextInput
        placeholder="please enter your name..."
        value={name}
        setValue={setName}
        title="Name"
      />
      <Button text="Save as" onPress={submit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
