import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CourseScreen')}>
        <Text style={styles.buttonText}>Go to CourseScreen</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CoursesInformation')}>
        <Text style={styles.buttonText}>Go To CoursesInformation</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CounterScreen')}>
        <Text style={styles.buttonText}>Go To CounterScreen</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RandomColor')}>
        <Text style={styles.buttonText}>Go To RandomColor</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  button: {
    margin: 10,
    padding: 20,
    backgroundColor: 'red',
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  }
})
