import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'
import { red } from '@mui/material/colors';
export const UserCard = ({ data, selectUser, selectedUser }) => {
    const isSelected = selectedUser === data._id;
  return (
    <Box onClick={() => selectUser(data._id)} sx={{border: isSelected ? '2px solid green' : '1px solid transparent',padding:"10px",borderRadius:"10px",marginTop:"15px"}}>
             <Box sx={{display:"flex",justifyContent:"left",alignItems:"center"}}>
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
           
            {data && data.name.charAt(0)}
          </Avatar>

          <Box sx={{marginLeft:"10px",textAlign:"left"}}>
            <Typography sx={{color:"black",fontSize:"14px"}}>{data.name}</Typography>
            <Typography sx={{color:"grey",fontSize:"12px"}}>last seen : 2 hrs ago</Typography>
          </Box>
            </Box>
    </Box>
  )
}
