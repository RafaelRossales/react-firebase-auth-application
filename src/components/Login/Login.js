import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import Paper  from '@material-ui/core/Paper'
// import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Typography  from '@material-ui/core/Typography';
import LockOutlined from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Alert from '@material-ui/lab/Alert';
import { Link,useNavigate  } from 'react-router-dom'
import { Container, makeStyles } from '@material-ui/core'
import  {useAuth }  from '../../contexts/AuthContext';
import GoogleIcon from '@material-ui/icons/Google';

const useStyles = makeStyles((theme) => ({
    container:{
        backgroundColor:"#59b390",
        margin:"0px",
        paddin:"0px",
        height:"100vh",
        overflow:"hidden",
        position:"fixed",
        display: "flex",
        alignItems: "center", 
        justifyContent: "center"
    },
    form:{
        height:"300px",
        width:"300px",
        padding:4
    },

    buton:{
        marginTop:"10px",
    },

    ForgotPassword:{
        textAlign:'center',
        color: "white",
        marginBottom:"10px"
    },
    NewAccount:{
        marginTop:"10px",
        textAlign:'center',
        color: "#152b3c",
    },

    link:{
        color:"#152b3c",
        marginLeft:"2px"
    },
    avatar:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
    },
    sizeAvatar: {
        height: theme.spacing(10),
        width: theme.spacing(10),
    },
    Medias:{
        display:"flex",
        justifyContent:"space-around"
    },
    siginWithGoogle:{
        fontWeight:300,
        backgroundColor: "#21b6ae",
        '&:hover':{
            backgroundColor: "#21b6ad",
        }
    }
}));

export default function Login(){

    const { login, handleGoogleLogin } = useAuth();
    const [error,setError ] = React.useState('');
    const [loading,setLoading ] = React.useState(false);
    const navigate  = useNavigate ()
    const classes = useStyles();


    // Armazena os valores da dos campos input
    var  emailRef = React.useRef();
    var passwordRef = React.useRef();

    async function handleSubmite(e){
        
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value,passwordRef.current.value)
            navigate('/')

        } catch (error) {
            setError(error.message);
        }
        setLoading(false)
    }


    async function siginWithGoogle(e){

        try{
            const result = await  handleGoogleLogin();

            console.log(result)

            if(result)
            {
                navigate('/')
            }


        }catch(error){
            console.error(error)
        }

    }

    return (
        <Container disableGutters maxWidth={false} className={classes.container}>
            <div className={classes.form}>
                <div className={classes.avatar}>
                    <Avatar className={classes.sizeAvatar}/>
                </div>
                <form onSubmit={handleSubmite}>
                <div>
                    <TextField
                        label='Username'
                        placeholder='Enter your name'
                        fullWidth
                        required
                        style={{ marginBottom:'12px',marginTop:'10px' }}
                        id="email"
                        inputRef={emailRef}
                    />
                </div>
                <div>
                    <TextField
                    label='Password'
                    placeholder='Enter password'
                    fullWidth
                    required
                    type="password"
                    id="password"
                    inputRef={passwordRef}
                    style={{ marginBottom:'10px',marginTop:'10px' }}
                    />
                </div>
                <div className={classes.ForgotPassword}>
                    <Link to="/forgot-password" className={classes.link}> Esqueci minha senha</Link>
                </div>

                <div>
                <Button
                type="submit"
                variant="contained"
                fullWidth
                color="primary"
                className={classes.button}
                >
                Entrar
                </Button>
                </div>

                </form>

                <div className={classes.NewAccount}>
                <Typography>
                    Precisa de uma conta ?
                    <Link to="/signup" className={classes.link}>Criar</Link>
                </Typography>
                </div>
                <div className={classes.Medias}>
                    <div>
                        <Button 
                        variant="text"
                        type="submit"
                        variant="contained"
                        fullWidth
                        color="primary"
                        className={classes.siginWithGoogle}
                        onClick={() => siginWithGoogle()}
                        startIcon={<GoogleIcon />}
                        >Google
                        </Button>
                    </div>
                    <div>
                    <Button 
                        variant="text"
                        type="submit"
                        variant="contained"
                        fullWidth
                        >
                            Facebook
                    </Button>
                    </div>
                </div>
            </div>
        </Container>
    )
}