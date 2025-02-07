import { StyleSheet, Text, View , Button } from 'react-native'
import React, { useState } from 'react'

export default function CounterScreen() {
    const [value, setValue] = useState(0)
    const arttır = () => {
        setValue(value + 1)
    }
    const azalt = () => {
        setValue(value - 1)
        if (value < 0) {
            setValue(0)
            alert('0 den küçük olamaz')
        }
    }
  return (
    <View>
      <Button title='Arttır' onPress={() => {arttır()}}></Button>
      <Button title='Azalt' onPress={() => {azalt()}}></Button>
      <Text>Sayı : {value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})