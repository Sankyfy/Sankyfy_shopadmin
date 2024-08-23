import { Avatar, Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import chatbg from "./chat-bg.jpg"
import { red } from '@mui/material/colors';

import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';

import { useParams } from 'react-router-dom';
import { ChatCardShopKeeper } from './ChatCardShopKeeper';
import { ChatCardUser } from './ChatCardUser';
import { Base_url } from '../../Config/BaseUrl';
export const ChatComp = ({id}) => {

    const userDetails =  JSON.parse(sessionStorage.getItem('User'));
    const [chatData, setChatData] = useState([]);
    const [update,setUpdate] = useState(0);
    const [msg,setMsg] = useState("");
    const handelMsgSend  = ()=>{
        console.log("Send Msg ==>")
        sendMsg()
    }

    const getChat = async () => {
        try {
          const response = await axios.get(`${Base_url}api/chat/chats/${id}/${userDetails._id}`);
      
          if (response.status === 200) {
            const fetchedCategories = response.data;
            console.log("Data of chat  ==>",fetchedCategories)
            setChatData(fetchedCategories)
           
          } else {
            console.error('Error fetching categories:', response.statusText);
          }
        } catch (error) {
          console.error('Error:', error.message);
        }
      };

      const sendMsg = async()=>{
     
            try {
                const Msg = {
                    shopkeeperId:userDetails._id,
                    userId:id,
                    message:msg,
                    from:"shopkeeper"
                }
              const response = await axios.post(`${Base_url}api/chat`, Msg);
              console.log("login Data==>",response.data);
              const Data = response.data.data
              setUpdate((prev)=>prev+1)
              setMsg("")
            } catch (error) {
              console.log("Error==>",error);
             
            }
          
      }

      const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
          handelMsgSend();
        }
      };

      useEffect(() => {
        getChat();
    
        const interval = setInterval(() => {
          getChat();
        }, 10000); // 10000 ms = 10 seconds
    
        return () => clearInterval(interval); // Clean up the interval on component unmount
      }, [id]);

      useEffect(()=>{
        getChat()
      },[update])

  return (
  <Box >
       <Box  sx={{
     
        width: '100%', // Adjust as needed
        height: '73vh', // Adjust as needed
        padding:"20px",
        position:"relative",
        borderRadius:"10px",
        border:"1px solid grey"
   
      }}>
          <Box sx={{width:"100%",padding:"10px",borderRadius:"10px"}}>
            {/* <Box sx={{display:"flex",justifyContent:"left",alignItems:"center"}}>
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            A
          </Avatar>

          <Box sx={{marginLeft:"10px",textAlign:"left"}}>
            <Typography sx={{color:"#fff",fontSize:"14px"}}>Akshay</Typography>
            <Typography sx={{color:"#fff",fontSize:"12px"}}>last seen : 2 hrs ago</Typography>
          </Box>
            </Box> */}



            <Box sx={{height:"550px",overflow:"auto",marginTop:"30px"}}>
                 
            {chatData.map((msg) => (
        <Box
          key={msg._id}
          sx={{
            display: 'flex',
            justifyContent: msg.from === 'user' ? 'flex-start' : 'flex-end',
            alignItems: 'center',
            marginBottom: '10px'
          }}
        >
          {msg.from === 'user' ? (
            <ChatCardShopKeeper msg={msg.message} />
          ) : (
            <ChatCardUser msg={msg.message} />
          )}
        </Box>
      ))}

                



                  
               
            </Box>



          </Box>
        
          <Box sx={{display: "flex", justifyContent: "center" }}>
    <Box style={{width: "80vw", background: "#fff", borderRadius: "50px",display:"flex",justifyContent:"left",alignItems:"center"}} >
        <input  onKeyPress={handleKeyPress} value={msg} onChange={(e)=>setMsg(e.target.value)} placeholder='type your message ...' style={{ width:"94%",padding:"20px",border:"none", borderRadius: "50px"}} />
        <Box sx={{display:"flex",justifyContent:"right",alignItems:"center"}}>
          <SendIcon onClick={handelMsgSend} style={{fontSize:"30px",color:"green",marginLeft:"20px"}} />
        </Box>
    </Box>
</Box>
        </Box>
      </Box>

  )
}
