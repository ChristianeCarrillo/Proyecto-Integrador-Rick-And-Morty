export const ADD_FAV = 'ADD_FAV'
export const REMOVE_FAV = 'REMOVE_FAV'

export function addFav(char){
    return{
        type: 'ADD_FAV',
        payload: char
    }
}

export function removeFav(id){
    return{
        type: 'REMOVE_FAV',
        payload: id
    }
}