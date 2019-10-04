import {RECEIVE_MAGAZINES,
  RECEIVE_CURRENT_MAGAZINE,
  RECEIVE_MAGAZINE_ERRORS,
  RECEIVE_MAGAZINE_PUBLICATIONS,
  RECEIVE_MAGAZINE_PAGES
} from "../../constants"

const initialState ={
  magazineList: [],
  activeMagazine: {},
  magazineErrors:[],
  magazinePublications:[],
  magazinePages:[]


}

export default (state = initialState, action )=>{

  switch(action.type){
      case RECEIVE_MAGAZINES:
    
      return {...state, magazineList:action.magazineList}

      case RECEIVE_CURRENT_MAGAZINE:
      
      return {...state, activeMagazine:action.magazine}
      case RECEIVE_MAGAZINE_ERRORS:
      
      return {...state, magazineErrors:action.magazineErrors}

      case RECEIVE_MAGAZINE_PUBLICATIONS:
      
      return {...state, magazinePublications:action.magazinePublications}

      case RECEIVE_MAGAZINE_PAGES:

          return {...state, magazinePages:action.magazinePages}
      
          default:
        return state
  }
}
