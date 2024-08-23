import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';


export const CategoriesCard = ({Data,fun,funEdit}) => {
  const navigate = useNavigate()
  const handelView =(id) =>{
    navigate(`view-categorie/${id}`)
 }



  return (
    <Box sx={{border:"0.5px dashed grey",borderRadius:"10px",padding:"15px",minHeight:"150px",maxHeight:"200px",position:"relative"}}>
        
        <Box>
            <Box>
                <Typography sx={{fontSize:"20px"}}>{Data && Data.name.toUpperCase()}</Typography>
            </Box>

            <Box>
                <Typography sx={{fontSize:"16px",height:"50px"}}>{Data && Data.description}</Typography>
            </Box>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "right", alignItems: "center", marginTop: "45px", bottom: 5, position: "absolute", height: "50px", width: "100%",right:5 }}>
  {/* <Button
    variant="contained"
    size="small"
    startIcon={<img src="https://img.icons8.com/ios/50/visible--v1.png" alt="visible" style={{ width: 17, height: 16, filter: "invert(100%)" }} />}
    sx={{ backgroundColor: "primary", color: "#fff", marginRight: "20px", marginLeft: "7px" }}
    onClick={() => handelView(Data._id)}
  >
    View
  </Button> */}
  <Button
    variant="contained"
    size="small"
    
    sx={{ backgroundColor: "primary", color: "#fff", marginRight: "20px" }}
    onClick={() => funEdit()}
  >
    Edit
  </Button>
  <Button
    variant="contained"
    size="small"
    
    sx={{ backgroundColor: "crimson", color: "#fff", marginRight: "18px" }}
    onClick={() => fun(Data._id)}
  >
    Delete
  </Button>
</Box>


</Box>
  )
}
