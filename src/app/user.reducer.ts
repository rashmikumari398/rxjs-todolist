import * as UserAction from './user.action';

const initialState ={
  // counter:0,
  result:[]
}

export function reducer(state=initialState,
  action:UserAction.ActionsCounter){

    switch (action.type){
      case UserAction.ADDITEM:
        return{
          // ...state,
          result:[...state.result,action.item]
        }
      case UserAction.DELETEITEM:
        return{result:[...state.result.slice(0,action.index),...state.result.slice(action.index+1)]}

      case UserAction.DELETELIST:
        return{result:[]}
      default:
        return state;
    }
}
