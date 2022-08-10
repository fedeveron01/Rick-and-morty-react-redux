import { createSlice } from '@reduxjs/toolkit';

let id = 0;

export const rickAndMortySlice = createSlice({
  name: 'rickAndMorty',
  initialState: {
    characters_list: [],
    selectedCharacter : null,
  },
  reducers: {
    addCharacter: (state, action) => {
      if(state.characters_list.filter(x=>x.character.id===action.payload.id).length === 0)
      {
      state.characters_list = [
        ...state.characters_list,
        { id: ++id, character: action.payload },
      ];
      }

    },
    deleteCharacter: (state, action) => {
      console.log("llega")
      state.characters_list = [
        ...state.characters_list.filter((x) => x.character.id !== action.payload.id),
      ];
    },
    selectCharacter:(state,action)=>{
      console.log("select")
      state.selectedCharacter = action.payload;
    },
  },
});

export const { addCharacter, deleteCharacter ,selectCharacter} = rickAndMortySlice.actions;

export const selectTodos = (state) => state.todos_list;

export default rickAndMortySlice.reducer;
