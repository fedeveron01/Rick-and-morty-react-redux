import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { Text, View, ScrollView,StyleSheet, TouchableOpacity, FlatList,Button ,Image,ImageBackground} from 'react-native';
import {connect} from 'react-redux';
import { addCharacter, deleteCharacter } from '../redux/rickAndMortySlice';


const Detail = ( {selectedCharacter,...props}) => 
{


  useEffect ( () => 
  {


  },[])
  return(
                        <ImageBackground source={{uri:selectedCharacter.image}}  resizeMode="cover" style={styles.image}>

    <ScrollView>

        <Text style={styles.text}>Character detail of {selectedCharacter.name}</Text>

        <Text style={styles.text}>Gender : {selectedCharacter.gender}</Text>
              {selectedCharacter.status === "Alive"?
              (  <Text style={styles.text}> <Text style={{color:"lightgreen"}}>Status : {selectedCharacter.status}</Text> </Text>):(<Text style={styles.text}> <Text style={{color:"red"}}>Status : {selectedCharacter.status}</Text> </Text>)}
              <Text style={styles.text}>Species : {selectedCharacter.species}</Text>
              <Text style={styles.text}>Type : {selectedCharacter.type}</Text>
              <Text style={styles.text}>Created : {selectedCharacter.created.toString("dd-MM-yyyy")}</Text>
               <Text style={styles.text}>Origin : {selectedCharacter.origin.name}</Text>
                <Text style={styles.text}>Location : {selectedCharacter.location.name}</Text>

    </ScrollView>
                    </ImageBackground>


  )
}

const mapStateToProps = (state, myOwnProps) => {
  console.log(state.rickAndMorty.selectedCharacter)
  return {
    selectedCharacter: state.rickAndMorty.selectedCharacter,
  }
}

const mapDispatchToProps = {
  // ... normally is an object full of action creators

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 15,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#00000090"
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);




