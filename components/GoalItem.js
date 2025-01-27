import React from 'react'
import { StyleSheet, Text, View, Touchable, TouchableOpacity } from 'react-native';

const GoalItem = props => {
  return (
   <TouchableOpacity onPress={props.onDelete.bind(this, props.id)} onPress={props.onCancel}>
    <View style={styles.listItems}>
      <Text >
        {props.title}
      </Text>   
      </View>
     </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  listItems: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
})

export default GoalItem
