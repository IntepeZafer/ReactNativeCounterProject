import CounterScreenAndUseReducer from './Screen/CounterScreenAndUseReducer/CounterScreenAndUseReducer';
import UseReducerAndRandomColor from './Screen/UseReducerAndRandomColor/UseReducerAndRandomColor';
import CoursesInformation from './Screen/CourseInformation/CoursesInformation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CounterScreen from './Screen/CounterScreen/CounterScreen';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import CourseScreen from './Screen/CourseScreen/CourseScreen';
import RandomColor from './Screen/RandomColor/RandomColor';
import HomeScreen from './Screen/HomeScreen/HomeScreen';



export default function App() {
  
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CourseScreen" component={CourseScreen} />
        <Stack.Screen name="CoursesInformation" component={CoursesInformation} />
        <Stack.Screen name="CounterScreen" component={CounterScreen} />
        <Stack.Screen name="RandomColor" component={RandomColor} />
        <Stack.Screen name='CounterScreenAndUseReducer' component={CounterScreenAndUseReducer}/>
        <Stack.Screen name='UseReducerAndRandomColor' component={UseReducerAndRandomColor}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
