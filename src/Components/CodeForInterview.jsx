import youtube from '../Assets/Images/D9.jpg';
import instatele from '../Assets/Images/D10.jpg';
import { Box, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    image: {
        width: '50%',
        height: '50%'
    },
    component: {
        margin: 50
    }
});

const CodeForInterview = () => {
    const classes = useStyles();
    return (
        <Box className={classes.component}>
            <Typography variant="h4" style={{marginBottom: 50}}>Code for Interview</Typography>
            <Box style={{display: 'flex'}}>
                <img className={classes.image} src={youtube} />
                <img className={classes.image} src={instatele} />
            </Box>
        </Box>
        
    );
}

export default CodeForInterview;