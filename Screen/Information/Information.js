import {Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Information({courses}) {
  return (
    <View>
      {courses.map((course) => (
        <View key={course.id} style={styles.courseContainer}>
          <Text style={styles.courseName}>{course.name}</Text>
          <Text style={styles.courseDescription}>{course.description}</Text>
          <Image source={course.image} style={styles.images}/>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  courseContainer: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  courseName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  courseDescription: {
    fontSize: 16,
    color: '#666',
  },
  images : {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginTop: 10,
    borderRadius: 10
  }
})