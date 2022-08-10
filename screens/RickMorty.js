import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { Text, View, ScrollView,StyleSheet, TouchableOpacity, FlatList,Button ,Image,Pressable,Platform,ActionSheetIOS} from 'react-native';
import {connect} from 'react-redux';
import { addCharacter, deleteCharacter,selectCharacter } from '../redux/rickAndMortySlice';
import Toast from 'react-native-toast-message';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const RickMorty = ( {characters_list,addCharacter,deleteCharacter,selectCharacter,navigation,...props} ) => 
{
  const [charactersToView,setCharactersToView] = useState([]);
  const [page,setPage] = useState(2);
  const handleAddCharacter=(character)=>{
    if(Platform.OS==='ios')
    {

      ActionSheetIOS.showActionSheetWithOptions({
        options: ['Add','Cancel'],
        cancelButtonIndex: 0,
        destructiveButtonIndex: 1,
      },
      (buttonIndex)=>{
        if(buttonIndex===0)
        {
          showMessage();
          addCharacter(character);
      }})
 
    }else
    {
      showMessage();
      addCharacter(character);
    }

  }

  const handleSelectCharacter=(character)=>{
    selectCharacter(character);
  }

  const openDetail=(character)=>{
    console.log("image")
    handleSelectCharacter(character)
    navigation.navigate('Detail');

  }
  const showMessage=()=>{
    Toast.show(
      {
      type: 'success',
      text1: 'Added',
      text2: 'Character added to favourites'})
  }

  const getCharactersByPage=()=>{
    axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then(res=>{
      setCharactersToView(charactersToView.concat(res.data.results));
      setPage(page+1);
    }).catch(err=>{
      console.log(err);
    } )

  
  }


  useEffect ( () => 
  {
      axios.get("https://rickandmortyapi.com/api/character").then(x=>
      {
        setCharactersToView(x.data.results)
      })

  },[])
  return(
    <ScrollView  >
      <View  style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
    {charactersToView.map(c=>{
      return(
        <View style={{ width: '50%' }}>
        <Text>{c.name}</Text>
        <Pressable onPress={()=>openDetail(c)}>
        <Image  style={{width:"100%",height:300}} source={{uri:c.image}} />
        </Pressable>
        <Button onPress={()=>handleAddCharacter(c)} title={`Add ${c.name}`}></Button>
        </View>)
    })}

  </View>
    <Text> </Text>
    <Button title="Load more" onPress={()=>getCharactersByPage()}></Button>

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
  selectCharacter
}

export default connect(mapStateToProps, mapDispatchToProps)(RickMorty);

