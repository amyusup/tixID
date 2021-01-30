import { GET_NEWS } from '../type/news'
import axios from 'axios'
import {URI} from '../../utils'

export const getNews = () => async (dispatch) => {
    try{
        const res = await axios.get(`${URI}/news`);
        dispatch({type: GET_NEWS, payload: res.data.data});
    }catch(e){
        console.log(e)
    }
  };