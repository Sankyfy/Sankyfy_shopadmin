import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TextField, Button, Card, CardContent, Typography, Alert, Box } from '@mui/material';
import axios from 'axios';
import { Base_url } from '../../Config/BaseUrl';
import {Link} from 'react-router-dom'

export const ForgotPass = () => {
  const navigate = useNavigate();
   
  const [prevPassword, setPrevPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [email,setEmail] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async () => {
    if (newPassword !== confirmPassword) {
      setError('New password and confirm password do not match.');
      return;
    }
    
    updatePassword(email,prevPassword,newPassword)
  };

  const updatePassword = async (email, previousPassword, newPassword) => {
    try {
        const response = await axios.put(`${Base_url}api/shopkeepers/update-password`, {
            email,
            previousPassword,
            newPassword
        });

        if (response.status === 200) {
            alert('Password updated successfully');
            setPrevPassword('')
            setNewPassword('')
            setConfirmPassword('')
            setEmail('')
            setError('')
            window.location.href="/"
        }
    } catch (error) {
        if (error.response && error.response.data) {
            alert(error.response.data.message);
        } else {
            alert('Failed to update password');
        }
    }
}

  const handleContactUs = () => {
    navigate('/contact-us');
  };

  return (
  <Box>
      <Box
        sx={{
        
          backgroundSize: "cover", // This ensures the image covers the entire Box
          backgroundPosition: "center", // This centers the image within the Box
          width: "100%", // Adjust as needed
          height: "100vh", // Adjust as needed
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          opacity:1,
        
        }}
      >



          <Card sx={{ maxWidth: 400,borderRadius:"20px" }}>
      <CardContent>
      
        <Typography variant="h5" component="div" gutterBottom>
          Forgot Password
        </Typography>

        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
        {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}

        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          label="Previous Password"
          variant="outlined"
          fullWidth
          margin="normal"
          type="password"
          value={prevPassword}
          onChange={(e) => setPrevPassword(e.target.value)}
        />

        <TextField
          label="New Password"
          variant="outlined"
          fullWidth
          margin="normal"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />

        <TextField
          label="Confirm New Password"
          variant="outlined"
          fullWidth
          margin="normal"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          onClick={handleSubmit}
        >
          Update Password
        </Button>

      

        <Link to='/auth/contact-us'>
          <button
            type='button'
            id='kt_login_password_reset_form_cancel_button'
            className='btn btn-light'
            
          >
            Forgot Previous Password Contact Us !
          </button>
        </Link>
      </CardContent>
    </Card>
    
    </Box>
  </Box>
  
  
  );
};
