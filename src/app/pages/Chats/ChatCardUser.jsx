import { Box, Typography } from '@mui/material'
import React from 'react'

export const ChatCardUser = ({msg}) => {
  return (
    <Box sx={{padding:"8px",background:"#3FA2F6",borderRadius:"10px",maxWidth:"300px",textAlign:"left",marginTop:"10px"}}>
                    <Typography style={{fontSize:"16px",color:"#fff"}}>{msg}</Typography>
                </Box>
  )
}
