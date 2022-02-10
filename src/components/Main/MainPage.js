import { Grid, makeStyles } from "@material-ui/core";
import LeftBar from "../NavBars/LeftBar";
import NavBar from "../NavBars/NavBar";
import Feed from '../NavBars/Feed';
import RightBar from '../NavBars/RightBar';
import AddContent from "../Add/Add";

const useStyles = makeStyles((theme) => ({

    right:{
        [theme.breakpoints.down("sm")]:{
            display:"none"
        }
    }
}));

export default function MainPage(){

    const classes = useStyles();

    return(
        <div>
        <NavBar />
        <Grid container className={classes.container}>
          <Grid item sm={1} xs={2} className={classes.left}>
            <LeftBar />
          </Grid>
          <Grid item sm={7} xs={10}>
            <Feed />
          </Grid>
          <Grid item sm={3} className={classes.right}>
            <RightBar />
          </Grid>
        </Grid>
        <AddContent/>
      </div>
    )
}