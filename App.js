import React, {useState} from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';

export default function App() {

  let [count, setCount] = useState(0);

  function buttonPressed() {
    console.log('I just got pressed!');
    console.log(`Before pressing, the count was ${count}.`);
    setCount(count + 1);
  }

  function renderEncouragingText() {
    if (count >= 10) {
      return 'Keep going'
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}> {count} </Text>
      <TouchableOpacity title="Press Me!" onPress={buttonPressed} style={styles.button}><Text style={styles.buttonText}>Press muh</Text></TouchableOpacity>
      <Text style={styles.encouragingText}> {renderEncouragingText()} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 45,
    fontWeight: 'bold',
  },
  encouragingText: {
    marginTop: 50,
    color: 'grey',
    fontSize: 45,
  },
  button: {
    backgroundColor: '#6593F5',
    padding: 20,
    borderRadius: 10,
    marginTop: 50,
  },
  buttonText: {
    fontFamily: 'Times New Roman',
    fontSize: 30,
    color: 'yellow',
    fontStyle: 'italic',
  }
});