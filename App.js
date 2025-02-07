import CoursesInformation from './Screen/CourseInformation/CoursesInformation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import CourseScreen from './Screen/CourseScreen/CourseScreen';
import HomeScreen from './Screen/HomeScreen/HomeScreen';
import CounterScreen from './Screen/CounterScreen/CounterScreen';

export default function App() {
  
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CourseScreen" component={CourseScreen} />
        <Stack.Screen name="CoursesInformation" component={CoursesInformation} />
        <Stack.Screen name="CounterScreen" component={CounterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
