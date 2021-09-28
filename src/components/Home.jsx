import { Box, Typography, makeStyles } from '@material-ui/core';
import pic1 from '../images/pic1.png';
import pic2 from '../images/pic2.png';

const useStyles = makeStyles({
    component: {
        margin: 50,
        '& > *': {
            marginTop: 50
        }
    },
    image: {
        width: '50%',
        height: '50%'
    }
})


const Home = () => {
    const classes = useStyles();
    return (
        <Box className={classes.component}>
            <Typography variant="h4">CRUD Operation</Typography>
            <Box style={{display: 'flex'}}>
                <img src={pic1} className={classes.image} />
                <img src={pic2} className={classes.image} />
            </Box>
        </Box>
    )
}

export default Home

