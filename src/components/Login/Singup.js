import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import Paper  from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button';
import Typography  from '@material-ui/core/Typography';
import LockOutlined from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Alert from '@material-ui/lab/Alert';

import { Link , useNavigate} from 'react-router-dom';

import  {useAuth}  from '../../contexts/AuthContext';

export function SignUp(){

    const { signup, currentUser } = useAuth();
    const [error,setError ] = React.useState('');
    const [loading,setLoading ] = React.useState(false);
    const navigate  = useNavigate ()


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
    var passwordConfirm=React.useRef();
    

    async function handleSubmite(e){

        if(passwordRef.current.value != passwordConfirm.current.value){
            return setError('Password do not match')
        }
        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value,passwordRef.current.value)
            navigate('/')
        } catch (error) {
            setError(error.message)
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
                        <h2>Sign up</h2>
            </Grid>
                {error && <Alert severity="error">{error}</Alert>}
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
                <TextField
                label='Password'
                placeholder='Enter password'
                fullWidth
                required
                type="password"
                id="password"
                inputRef={passwordRef}
                />

            <TextField
            label='Confirm Password'
            placeholder='Confirm Password'
            fullWidth
            required
            type="password"
            id="password-confirm"
            inputRef={passwordConfirm}
            style={{ marginBottom:'12px',marginTop:'10px' }}
            />

            <Button
            type="submit"
            variant="contained"
            fullWidth
            color="primary"
            >
            Salvar
            </Button>
            </form>
            <Typography style={{ 
                marginTop:'10px',
                textAlign:'center' 
                }}>
                Already have an account?
                <Link to="/login">
                    Login
                </Link>
            </Typography>
        </Paper>
    </Grid>
    )
}