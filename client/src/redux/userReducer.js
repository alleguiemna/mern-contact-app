import { GET, DELETE, GETONE, EDIT } from './types'

const initialState ={
    users:[],
    loading:true,
}

const userReducer = (state=initialState,{type,payload}) =>{
    
    switch (type) {
        case GET:
            return{
                ...state,
                loading:false,
                users:payload,
        }
        case GETONE:
            return{
                ...state,
                loading:false,
                users:payload,
            }
        case EDIT:
            return{
                ...state,
                loading:false,
                users:state.users.map(elt => elt._id === payload.id ? payload : elt)
            }    
        case DELETE:
            return{
                ...state,
                loading:false,
                users:state.users.filter(elt => elt._id !== payload._id)
            }
        default:
            return state;
    }
}

export default userReducer;