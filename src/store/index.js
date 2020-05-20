import {createStore} from 'redux';

const INITIAL_STATE = {
  data: [
    'React Native',
    'React JS'
  ]
}

function courses(state = INITIAL_STATE, action){
switch(action.type){
  case 'ADD_COURSE':
    return {...state, data: [...state.data, action.title, action.description]};
  default:
    return state;
}
}

const store = createStore(courses)

export default store



//ACTION -> what you wanna do, LIKE: INCREMENT


//REDUCER -> CHECK THE ACTION AND CHANGE THE BASED ON THE RESULT OF THE ACTION


//STORE -> ESTADO GLOBALIZADO
 //mostra no console da pagina

//DISPATCH -> EXECUTES


