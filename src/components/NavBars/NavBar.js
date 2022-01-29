import React,{useState} from 'react'

import { alpha, AppBar, Badge, InputBase, makeStyles, Toolbar, Typography, Avatar } from "@material-ui/core";
import  Search from "@material-ui/icons/Search";
import Mail from '@material-ui/icons/Mail';
import Notifications from '@material-ui/icons/Notifications';
import Cancel from '@material-ui/icons/Cancel'

const useStyles = makeStyles((theme) => ({
    
    toolbar:{
        display:"flex",
        justifyContent:"space-between"
    },
    logoLg:{
        display:"none",
        [theme.breakpoints.up('sm')]:{
            display:"block"
        },
    },
    logoSm:{
        display:"block",
        [theme.breakpoints.up('sm')]:{
            display:"none"
        },
    },
    search:{
        display:'flex',
        alignItems:"center",
        backgroundColor:alpha(theme.palette.common.white, 0.15),
        '&:hover':{
            backgroundColor:alpha(theme.palette.common.white, 0.25),
        },
        borderRadius:theme.shape.borderRadius,
        width:"50%",
        [theme.breakpoints.down('sm')]:{
            display:(props)=>(props.open ? "flex" : "none"),
            width:"70%",
        },
    },
    input:{
        color:"white",
        marginLeft:theme.spacing(1)
    },
    

    icons:{
        alignItems:"center",
        display:(props)=>(props.open ? "none" : "flex")
    },

    badge:{
        marginRight:theme.spacing(2)
    },

    searchButton:{
        marginRight:theme.spacing(2),
        [theme.breakpoints.down('sm')]:{
            display:"none"
        },
    },
    cancel:{
        [theme.breakpoints.up("sm")]:{
            display:'none'
        }
    }

}));

export default function NavBar(){

    const [open,setOpen] = useState(false);

    const classes = useStyles({open});

    return(
        <AppBar position="fixed">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h6" className={classes.logoLg}>
                    LAMA PROJECT
                </Typography>

                <Typography variant="h6" className={classes.logoSm}>
                    LAMA
                </Typography>

                <div className={classes.search}>
                    <Search/>
                    <InputBase placeholder="Buscar..." className={classes.input}/>
                    <Cancel className={classes.cancel} onClick={()=> setOpen(false)}/>
                </div>
                <div className={classes.icons}>
                
                    <Search className={classes.seachButton} onClick={()=>setOpen(true)}/>
                    <Badge badgeContent={4} color="secondary" className={classes.badge}>
                        <Mail/>
                    </Badge>
                    <Badge badgeContent={2} color="secondary" className={classes.badge}>
                        <Notifications/>
                    </Badge>
                    <Avatar alt="Image" src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTU0MTU0MTc3NzkzMTA3MzU1/beyonce-attends-tidal-x-1015-on-october-15-2016-in-new-york-city-photo-by-theo-wargogetty-images-for-tidal-sqaure.jpg"/>
                </div>
            </Toolbar>
        </AppBar>
    )

}