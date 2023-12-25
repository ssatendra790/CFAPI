import React, {useEffect, useState} from 'react'
import axios from 'axios';
import Header from './Header';

const Users = () => {

    const [data, setData] = useState(null);

    useEffect(()=>{

        const fetchData = async()=>{
            try{
                const response = await axios.get('https://codeforces.com/api/user.info?handles=stndrogue');
                setData(response.data.result[0]);
            } catch(error){
                console.log(error);
            }
        };
        fetchData();
    },[]);

  return (
    <div className='text-gray-900'>
        <Header/>
        {data && (
            <div className='flex flex-col justify-center items-center mt-10'>
                <div className='border-2 border-red-800 p-4 text-red-700 text-lg font-serif'>
                    <img src={data.titlePhoto} alt="" />
                    <div>Username: {data.handle}</div>
                    <div>Name: {data.firstName} {data.lastName} </div>
                    <div>Rating: {data.rating} ({data.rank}) [max: {data.maxRating} ({data.maxRank})]</div>
                    <div> Friends: {data.friendOfCount} </div>
                    <div>Organization: {data.organization}</div>
                    <div>Contact: {data.email}</div>
                    <div>City: {data.city}</div>
                    <div>Last Online: {data.lastOnlineTimeSeconds} seconds ago</div>
                    <div>Registered: {data.registrationTimeSeconds} seconds ago</div>
                </div>
            </div>
        )}
    </div>
  )
}

export default Users
