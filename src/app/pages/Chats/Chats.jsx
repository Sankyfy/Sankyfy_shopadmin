import { Box, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Base_url } from '../../Config/BaseUrl';
import axios from 'axios';
import { UserCard } from './UserCard';
import { ChatComp } from './ChatComp';

export const Chats = () => {
    const [chatData, setChatData] = useState([]);
    const [uniqueUsers, setUniqueUsers] = useState([]);
    const [selectedUser,setSelectedUser]= useState("");
    const userDetails =  JSON.parse(sessionStorage.getItem('User'));
    const getChat = async () => {
        try {
          const response = await axios.get(`${Base_url}api/chat/shopkeeper/${userDetails._id}`);
      
          if (response.status === 200) {
            const fetchedCategories = response.data;
            console.log("Data of chat  ==>",fetchedCategories)
            setChatData(fetchedCategories);
            const users = fetchedCategories.map(chat => chat.userId);
        const uniqueUsers = Array.from(new Set(users.map(user => user._id)))
                                 .map(id => users.find(user => user._id === id));

                                 console.log("Users chat ==>",uniqueUsers)
        setUniqueUsers(uniqueUsers);
        setSelectedUser(uniqueUsers[0]._id);
           
          } else {
            console.error('Error fetching categories:', response.statusText);
          }
        } catch (error) {
          console.error('Error:', error.message);
        }
      };

      const handleSelectUser = (id)=>{
        setSelectedUser(id)
      }

      useEffect(()=>{
        getChat();
      },[])

  return (
   <Box sx={{height:"80vh",padding:"10px"}}>
         <Grid container spacing={2}>
         <Grid item xs={3} > 
         <Box>
            <Typography sx={{fontSize:"20px"}}>SELECT USER</Typography>
         </Box>
         <Box sx={{height:"78vh",overflow:"auto"}}>
            {
                uniqueUsers && uniqueUsers.map((el,index)=>{
                    return <Box> 
                        <UserCard key={index} data={el} selectUser={handleSelectUser} selectedUser={selectedUser}/>
                    </Box>
                })
            }
        
       
         </Box>
         </Grid>

         <Grid item xs={9} > 
         <Box sx={{height:"78vh",overflow:"auto"}}>
            <ChatComp id={selectedUser} />
         </Box>
         </Grid>
         </Grid>
   </Box>
  )
}
