import React,{useState} from 'react'

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions'
import { Link,useNavigate } from 'react-router-dom'
import Typography  from '@material-ui/core/Typography';
import {useAuth} from '../../contexts/AuthContext'

export default function Dashboard(){

    const [error, setError] = useState("");
    const { currentUser, logout} = useAuth();
    const navigate  = useNavigate ()


async function handleLogOut(){
        setError('')

        try {
            await logout();
            navigate('/login')

        } catch (error) {
            
            setError("Fail to logout")
        }
    }

    const cardStyle = {
        width:250,
        height:200,
        backgroundColor:'#34627d',
        color:"#fff",
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
        textAlign:"center"
    }


    return (
        <Box sx={{ 
            display:"flex",
            flexDirection:"row",
            justifyContent:"center",
            marginTop:180
        }}>
            <Card style={cardStyle}>
                <CardContent>
                    <Typography>
                        PROFILE
                        <p><strong>{currentUser.email}</strong></p>
                    </Typography>
                </CardContent>
                <Box sx={{ 
                    display:"flex",
                    flexDirection:"row",
                    justifyContent:"space-around",
                    padding:3,
                    gap:4,
                    backgroundColor:'#174661',
                    }}>
                    <Button 
                        variant="contained" 
                        size="small" 
                        fullWidth
                        color="primary"
                        ><Link to="/update-profile">UPDATE</Link></Button>
                    <Button  
                    variant="contained" 
                    color="secondary" 
                    size="small" 
                    fullWidth
                    href="#contained-buttons"
                    onClick={handleLogOut}
                    >LOGOUT
                    </Button>
                </Box>
            </Card>
        </Box>

    );
}