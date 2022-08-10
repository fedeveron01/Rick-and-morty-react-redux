import todos from './todoSlice';
import rickAndMorty from './rickAndMortySlice'
import {combineReducers} from 'redux';

export default combineReducers({ todos, rickAndMorty})