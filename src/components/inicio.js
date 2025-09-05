import React from 'react';

import { View, Text, StyleSheet, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function InicioScreen() {
  return (
    <ScrollView style = {styles.container}>
    <View >
      <Text style = {styles.tittle}>Bienvenido al ISUJ Japon</Text>
      <Text style={styles.texto2} > Explora nuestros programas académicos y descubrirás tu camino al éxito. Instituto Superior Universitario Japón </Text>
     <Image
        source={require("../../assets/inicio/LOGO-HERALDICO.png")}
        style={styles.imagenlogoinicio}
      />
      <Text style={styles.destacar}> Destacados</Text>
      <Text style={styles.transparente} >Próximos Eventos</Text>
      
    </View>

    </ScrollView>
  );
}

const styles= StyleSheet.create({

    container:{
        flex: 1,
        padding: 16,
        backgroundcolor: '#000a61ff'
    },
    tittle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center'
    
  },
    texto2: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 10,
    color: '#444'
  },
  destacar:{
        fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10
  },
  transparente: {
    fontSize: 14,
    color: 'gray'
  },
  imagenlogoinicio:{
    width: "center", 
    height: 500
  },
})