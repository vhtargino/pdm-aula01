import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import { useState } from "react";

const Exercicio2 = () => {
    
    const [contador, setContador] = useState(0)

    function incrementar() {
        setContador(contador + 1)
    }

    function decrementar() {
        setContador(contador - 1)
    }

    return (
        <View style={styles.container}>
            <Button title="Incrementar" onPress={incrementar}></Button>
            <Text>O Contador está em {contador}</Text>
            <Button title="Decrementar" onPress={decrementar}></Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 100
    }
})

export default Exercicio2;
