import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import Paper  from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button';
import Typography  from '@material-ui/core/Typography';
import LockOutlined from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import Alert from '@material-ui/lab/Alert';
import { Link  } from 'react-router-dom'

import  {useAuth }  from '../../contexts/AuthContext';

export default function ForgotPassword(){

    const { resetPassword } = useAuth();
    const [error,setError ] = React.useState('');
    const [loading,setLoading ] = React.useState(false);
    const [message,setMessage] = React.useState('')

    const paperStyle={
        padding:20,
        height:'60vh',
        width:350,
        margin:"40px auto"
    }


    const avatarStyle ={
        backgroundColor:'#1bbd7e'
    }

    const buttonStyle ={
        margin:'8px 0'
    }

    // Armazena os valores da dos campos input
    var  emailRef = React.useRef();
    var passwordRef = React.useRef();

    async function handleSubmite(e){
        
        e.preventDefault()

        try {
            setMessage('')
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('Check your inbox for further instructions')
        } catch (error) {
            setError('Failed to reset passsword');
        }
        setLoading(false)
    }

    return (
        <Grid>
        <Paper elevation={10} style={paperStyle}>
            <Grid 
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            >
                <Avatar style={avatarStyle}>
                    <LockOutlined/>
                </Avatar>
                        <h2>Password Reset</h2>
            </Grid>
                {error && <Alert severity="error">{error}</Alert>}
                {message && <Alert severity="success">{message}</Alert>}
                <form onSubmit={handleSubmite}>
                <TextField
                label='Username'
                placeholder='Enter your name'
                fullWidth
                required
                style={{ marginBottom:'12px',marginTop:'10px' }}
                id="email"
                inputRef={emailRef}
                />

                <div className="">
                    <Link to="/login">Login</Link>
                </div>

            <Button
            type="submit"
            variant="contained"
            fullWidth
            color="primary"
            >
            Reset Password
            </Button>
            </form>
            <Typography style={{ 
                marginTop:'10px',
                textAlign:'center' 
                }}>
                Need an account?
                <Link to="/signup">
                    Log Up
                </Link>
            </Typography>
        </Paper>
    </Grid>
    )
}