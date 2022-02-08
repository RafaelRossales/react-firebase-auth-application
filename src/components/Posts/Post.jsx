import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, makeStyles, Typography } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({

    card:{
        marginBottom:theme.spacing(5)
    },
    media:{
        height:250,
        [theme.breakpoints.down("sm")]:{
            height:150,
        }
    }
}));


export default function Post(){
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia className={classes.media}
                    image="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTU0MTU0MTc3NzkzMTA3MzU1/beyonce-attends-tidal-x-1015-on-october-15-2016-in-new-york-city-photo-by-theo-wargogetty-images-for-tidal-sqaure.jpg"
                    title="My Post"               
                    />
                    <CardContent>
                        <Typography gutterBottom ="h5"> My First Post</Typography>
                        <Typography variant ="body"> 
                            Iis a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy
                        </Typography>
                    </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small"color="primary">Share</Button>
                <Button size="small"color="primary">Learn More</Button>
            </CardActions>
        </Card>
    )
}