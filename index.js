import React, { useState } from 'react';
import { StyleSheet, Text, View,} from 'react-native';

const Saludo =()=>{

  const [texto,setTexto]=useState('edwin cifuentes')
  const actualizaTexto=()=>{
    setTexto('viva el tolima l')
  }

return (<Text style={styles.text}onPress={actualizaTexto}>{texto}</Text>)


}



export default function App() {
  return (
    <View style={styles.container}>
      
 <Saludo/>
 
    </View>
  );
}



const styles = StyleSheet.create({

  text :{
    color :'blue',
    fontSize : 40,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

 
});
