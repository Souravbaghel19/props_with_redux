import {ADD_TO_CART , REMOVE_TO_CART} from '../Constansts'
const initialState={
    carData:[]
}
export default function cardItems(state=initialState , action)
{
      switch(action.type){
        case ADD_TO_CART:
            //console.log("reducer", action.data)
            return {
                ...StaticRange,
                cardData:action.data
            }

            case REMOVE_TO_CART:
               // console.log("reducer", action.data)
               state.POP();
                return {
                    ...StaticRange,
                    cardData:action.data
                }
                
            default :
            return state
      }
}