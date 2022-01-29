import { makeStyles,Container, Typography } from "@material-ui/core";
import Home from '@material-ui/icons/Home';
import Person from '@material-ui/icons/Person';
import List from '@material-ui/icons/List';
import PlayCircleOutline from '@material-ui/icons/PlayCircleOutline';
import TabletMac from '@material-ui/icons/TabletMac';
import Bookmark from '@material-ui/icons/Bookmark';
import Storefront from '@material-ui/icons/Storefront';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Settings from '@material-ui/icons/Settings';
import ExitToApp from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles((theme) => ({
    container:{
        height:"100vh",
        color:"white",
        paddingTop:theme.spacing(10),
        backgroundColor:theme.palette.primary.main,
        [theme.breakpoints.up("sm")]:{
            backgroundColor:"white",
            color:"#555",
            boder: "1px solid #ece7e7"
        }
    },
    item:{
        display:'flex',
        alignItems:"center",
        marginBottom:theme.spacing(4),
        [theme.breakpoints.up("sm")]:{
            marginBottom:theme.spacing(3),
            cursor:"pointer"
        }
    },

    text:{
        fontWeight:500,
        [theme.breakpoints.down("sm")]:{
            display:"none"
        }
    },

    icon:{
        marginRight:theme.spacing(1),
        [theme.breakpoints.down("sm")]:{
            fontSize:"18px"
        }
    }
}));


export default function LeftBar(){

    const classes = useStyles();

        return (
        <Container className={classes.container}>
            <div className={classes.item}>
                <Home className={classes.icons}/>
                <Typography className={classes.text}>
                    Homepage 
                </Typography>
            </div>
            <div className={classes.item}>
                <Person className={classes.icons}/>
                <Typography className={classes.text}>
                    Friends 
                </Typography>
            </div>
            <div className={classes.item}>
                <List className={classes.icons}/>
                <Typography className={classes.text}>
                    Homepage 
                </Typography>
            </div>
            <div className={classes.item}>
                <PhotoCamera className={classes.icons}/>
                <Typography className={classes.text}>
                    Homepage 
                </Typography>
            </div>
            <div className={classes.item}>
                <PlayCircleOutline className={classes.icons}/>
                <Typography className={classes.text}>
                    Homepage 
                </Typography>
            </div>
            <div className={classes.item}>
                <TabletMac className={classes.icons}/>
                <Typography className={classes.text}>
                    Homepage 
                </Typography>
            </div>
            <div className={classes.item}>
                <Bookmark className={classes.icons}/>
                <Typography className={classes.text}>
                    Homepage 
                </Typography>
            </div>
            <div className={classes.item}>
                <Storefront className={classes.icons}/>
                <Typography className={classes.text}>
                    Homepage 
                </Typography>
            </div>
            <div className={classes.item}>
                <Settings className={classes.icons}/>
                <Typography className={classes.text}>
                    Homepage 
                </Typography>
            </div>
            <div className={classes.item}>
                <ExitToApp className={classes.icons}/>
                <Typography className={classes.text}>
                    Homepage 
                </Typography>
            </div>
        </Container>
    )
}