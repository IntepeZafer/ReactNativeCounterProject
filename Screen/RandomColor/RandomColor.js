import { StyleSheet, Text, View , Button , FlatList} from 'react-native'
import React, { useState } from 'react'

export default function RandomColor() {
  const [color, setColor] = useState([]);
  const addColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`
  }
  return (
    <View>
      <Button title='Rastgele Renk Ekle' onPress={() => {setColor([...color, addColor()])}}/>
      <FlatList
        data={color}
        renderItem={({ item }) => {
            return (<View style={{width: '100%', marginTop: 10, height: 100, backgroundColor: item}}></View>)
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({})