import React, { useState }from 'react'
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandeler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const goalHandeler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  }

  return (
    <Modal visible={props.visible} animationType="slide">
    <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
        onChangeText={goalInputHandeler}
        value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
         <View style={styles.button}>
            <Button
              title="CANCEL" color="red"
              onPress={props.onCancel} />
         <View style={styles.button}>
            <Button
              title="ADD"
                onPress={goalHandeler} />
              </View>
          </View>
          </View>
      </View>
      </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    // flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  input:{
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%'
  },
  button: {
    width: '40%'
  }
})
export default GoalInput
