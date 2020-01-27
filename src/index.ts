import {createStore} from 'redux';

//ACTION -> what you wanna do, LIKE: INCREMENT
const increment = () => {
    return{
        type: 'INCREMENT'
    }
}
const decrement = () => {
    return{
        type: 'DECREMENT'
    }
}

//REDUCER -> CHECK THE ACTION AND CHANGE THE BASED ON THE RESULT OF THE ACTION
const counter = (state = 0, action) =>{
    switch(action.type){
        case "INCREMENT":
            return state + 1;
    }
}

//STORE -> ESTADO GLOBALIZADO
let store = createStore(counter);
store.subscribe(() => console.log(store.getState())); //mostra no console da pagina

//DISPATCH -> EXECUTES
store.dispatch(increment());

