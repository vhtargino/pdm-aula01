import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { useState } from 'react'

const Exercicio3 = () => {

    const [texto, setTexto] = useState('')

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={setTexto}
                placeholder='Digite...'/>
            <Text>Texto digitado: {texto}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 100
    },
    input: {
        height: 40,
        width: 200,
        borderWidth: 1,
        marginBottom: 10
    }
})

export default Exercicio3