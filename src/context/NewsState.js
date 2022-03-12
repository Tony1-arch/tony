
import React ,{createContext,useEffect,useState} from 'react'
import axios from 'axios';
export const ContextNews = createContext();

export function NewsState(props) {

    const [data,setData]  = useState();

    const apiKey = '135f2957acdc4515ad7abb2ba823504d';

    var url = ` https://newsapi.org/v2/everything?q=Apple&from=2022-02-26&sortBy=popularity&apiKey=${apiKey}`;
    

     useEffect(()=>{
         axios.get(url).then((response) =>{
           setData(response.data)
         }).catch((error) =>{
           console.log(error)
         })
     },[]);


  return (
    <ContextNews.Provider value={{data}}>
     {props.children}
    </ContextNews.Provider>
  )
}

export default NewsState;