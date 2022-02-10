import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Fab, makeStyles, Tooltip, Typography } from "@material-ui/core";

import Add from '@material-ui/icons/Add';


const useStyles = makeStyles((theme) => ({

}));


export default function AddContent(){
    const classes = useStyles();

    return (
       <Tooltip>
           <Fab color="secondary" className={classes.absolute}>
               <Add/>
           </Fab>
        </Tooltip>
    )
}