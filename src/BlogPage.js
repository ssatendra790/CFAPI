import React, {useEffect, useState} from 'react'
import axios from 'axios';
import Header from './Header';


const BlogPage = () => {

    const [data, setData] = useState(null);

    useEffect(()=>{
        
        const fetchData = async()=>{
            try{
                const response = await axios.get('https://codeforces.com/api/blogEntry.view?blogEntryId=900');
                setData(response.data.result);
            } catch(error){
                console.log(error);
            }
        };
        fetchData();
    }, []);

  return (
    <div className='text-gray-900 h-screen'>
        <Header/>
      {data && ( 
        <div className='p-8'> 
            <div className='flex flex-col mt-10'>
                <div>
                    <h1 className='text-xl'>{data.title}</h1>
                    <p>Author: {data.authorHandle} </p>
                    <p>Rating: {data.rating}</p>
                </div>
            </div>
        </div> )}
    </div>
  )
}

export default BlogPage
