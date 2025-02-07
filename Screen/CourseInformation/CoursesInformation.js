import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Information from '../Information/Information'
import React from 'react'
import Angular from '../../assets/İmg/angular.jpg'
import Boostrap5 from '../../assets/İmg/bootstrap5.png'
import C from '../../assets/İmg/c.png'


export default function CoursesInformation() {
    const courses = [
        { 
            id: 1, 
            name: 'Angular', 
            description: 'Angular is a platform and framework for building single-page client applications using HTML and TypeScript.', 
            image: Angular
        },
        { 
            id: 2, 
            name: 'Bootstrap', 
            description: 'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.', 
            image: Boostrap5
        },
        { 
            id: 3, 
            name: 'C Programlama', 
            description: 'C is a general-purpose computer programming language.', 
            image: C
        },
    ];
  return (
    <View>
      <ScrollView>
        <Information courses={courses}/>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({})