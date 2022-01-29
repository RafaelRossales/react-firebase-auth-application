import { Container, makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    container:{
        paddingTop:theme.spacing(10)
    }
}));

export default function RightBar(){
    const classes = useStyles();

    return (
        <Container className={classes.container}>
                    <h1>Right Bar</h1>
        </Container>
    )
}