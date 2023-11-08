import axios from 'axios';

const BASE_URL="https://api.themoviedb.org/3"

const TMDB_TOKEN= 
// import.meta.env.VITE_APP_TMDB_TOKEN;
// antoher mehtod if first one is not working.
"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOWI0ZDMwNDZiOGUzNjBkYmI5Nzg0ZmJkMzJhNzYxOCIsInN1YiI6IjY1NDEyYmIwZWVjNWI1MDExZWVhMjU3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ci_hcktLJ-5Cnk14UeQov0YSGXwPvjvHq-DqqEeUC4Y"


const headers={
    Authorization: "bearer " + TMDB_TOKEN
}

export const fetchDataFromApi= async(url,params)=>{
    try {
        const {data}=await axios.get(
          BASE_URL +  url,
            {params,headers}
        )
        return data;
    
    } catch (err) {
        console.log(err)
        return err;
    }

}