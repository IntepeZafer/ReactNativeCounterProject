import { StyleSheet, View, Button, FlatList } from 'react-native';
import React, { useReducer } from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case 'addColor':
            return [
                ...state,
                `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
            ];
        default:
            return state;
    }
};

export default function UseReducerAndRandomColor() {
    const [state, dispatch] = useReducer(reducer, []);

    return (
        <View>
            <Button title="Rastgele Renk Ekle" onPress={() => dispatch({ type: 'addColor' })} />
            <FlatList
                data={state}
                keyExtractor={(item, index) => index.toString()} // Hata olmaması için key ekledik
                renderItem={({ item }) => (
                    <View style={{ width: '100%', marginTop: 10, height: 100, backgroundColor: item }} />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({});
