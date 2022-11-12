import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { Text, View, ScrollView,StyleSheet, TouchableOpacity, FlatList,Button ,Image} from 'react-native';
import {connect} from 'react-redux';
import { addCharacter, deleteCharacter } from '../redux/rickAndMortySlice';


const Favourites = ( {characters_list,addCharacter,deleteCharacter,...props} ) => 
{
  const [charactersToView,setCharactersToView] = useState([]);

  const handleRemoveCharacter=(character)=>{
    console.log(character.id)
    deleteCharacter(character)
  }
  useEffect ( () => 
  {


  },[])
  return(
    <ScrollView>
    { ( characters_list.length === 0 ) && <Text>You haven't added any character to favorites yet, to add press click on a character's add button, then it will appear here
 </Text>}
    {characters_list.map(c=>{
      return(
        <View>
        <Text>{c.character.name}</Text>
        
        <Image style={{width:"100%",height:350}} source={{uri:c.character.image}} />
        <Button color="red" onPress={()=>handleRemoveCharacter(c.character)} title={`Remove ${c.character.name}`}></Button>
        </View>)
    })}
    </ScrollView>

  )
}




const mapStateToProps = (state, myOwnProps) => {
  console.log(state.rickAndMorty.characters_list)
  return {
    characters_list: state.rickAndMorty.characters_list,
  }
}

const mapDispatchToProps = {
  // ... normally is an object full of action creators
  addCharacter,
  deleteCharacter,
}

export default connect(mapStateToProps, mapDispatchToProps)(Favourites);

