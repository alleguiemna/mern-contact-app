import axios from 'axios';
import { DELETE, GET, GETONE, ADD, EDIT } from './types';

export const getUser = () => async (dispatch ) =>{
    try {
        const res = await axios.get('/users/get')
        dispatch({
            type:GET,
            payload:res.data,
        })
    } catch (error) {
        alert('get error')
    }
}

export const getSingleUser = (id) => async (dispatch) =>{
    try {
        const res = await axios.get(`/users/get/${id}`);
        dispatch({
            type:GETONE,
            payload:res.data,
        })
    } catch (error) {
        error('get error')
    }
}

export const addUser = (fullName, email, phone, age) => async (dispatch) =>{
    try {
    const newUser = {
        fullName, 
        email, 
        age,
        phone,
    }
        const res = await axios.post('/users/add', newUser);
     dispatch({
         type:ADD,
         payload:res.data
     })
    } catch (error) {
        alert('add error')
    }
}

export const editUser = (id, fullName, email, phone, age) => async (dispatch) =>{
    try {
        const editedUser = {
            fullName, 
            email,
            phone,
            age
        }
        const res = await axios.put(`/users/update/${id}`, editedUser);
        dispatch({
            type:EDIT,
            payload:res.data,
        })
    } catch (error) {
        
    }
}
export const deleteUser = (id) => async (dispatch) =>{
    try {
        const res = await axios.delete(`/users/delete/${id}`);
        dispatch({
            type:DELETE,
            payload:res.data,
        })

    } catch (error) {
        alert('delete error')
    }
}
