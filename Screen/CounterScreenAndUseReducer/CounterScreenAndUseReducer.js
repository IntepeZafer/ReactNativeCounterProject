import { StyleSheet, Text, View , Button} from 'react-native'
import React, { useReducer } from 'react'

export default function CounterScreenAndUseReducer() {
    const reducer = (state , actions) => {
        switch(actions.type){
            case 'increment' :
                return {...state , count : state.count + actions.payload}
            case 'decrement' :
                if(state.count <= 0){
                    alert("Değer 0'dan küçük olamaz")
                    return state
                }
                return {...state , count : state.count - actions.payload}
            default:
                return state
        }
      }
  const [state, dispatch] = useReducer(reducer, {count : 0})
  return (
    <View>
      <Button title='Arttır' onPress={() => {dispatch({type : 'increment' , payload : 1})}}/>
      <Button title='Azalt' onPress={() => {dispatch({type : 'decrement' , payload : 1})}}/>
      <Text>Sayı : {state.count}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})