import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import 'typeface-roboto';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import About from '../About/About'
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import { Button } from '@material-ui/core';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import IconButton from '@material-ui/core/IconButton';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import CustomTab from '../styling/CustomTab';
import MediaQuery from 'react-responsive';



import WorkExperience from '../Work/WorkExperience';
import PersonalInfo from '../Personal/PersonalInfo';
import ContactInfo from '../Contact/ContactInfo';
import SocialInfo from '../Social/SocialInfo';

import logo from '../../static/2pac.jpg';
import back from '../../static/back.jpg';


const styles = (theme) => ({
    root: {
        flexGrow: 1,
    },
    section: {
        height: '100%',
    },
    center: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    height: {
        height: '100%',
        backgroundColor: '#DFE5F3',
        border: '1px solid #CCD6F6',
        borderRadius: '8px',
        boxSizing: 'border-box',
    },
    media: {
        height: 0,
        paddingTop: '400px',
        maxHeight: '400px'
    },
    cardCover: {
        position: 'relative',
    },
    overlay: {
        position: 'absolute',
        top: '300px',
        right: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 10,
    },
    coverButton: {
        position: 'absolute',
        top: '-50px',
        right: '25px',
        backgroundColor: 'rgba(0,0,0,0.52)',
    },
    coverButtonSM: {
        position: 'absolute',
        top: '-220px',
        right: '25px',
        backgroundColor: 'rgba(0,0,0,0.52)',
    },
    coverIcon: {
        marginRight: theme.spacing(1)
    },
    tabSelected: {
        borderLeft: '3px solid #6B87FB',
        backgroundColor: '#EBF1FD',
        alignItems: 'flex-start'
    },
    tabLabel: {
        textTransform: 'none',
        textAlign: 'left',
        color: 'black',
        alignItems: 'flex-start'
    },
    tabSelectedMobile: {
        borderBottom: '3px solid #6B87FB',
        backgroundColor: '#EBF1FD',
    },
    avatarContainer: {
        width: '200px',
        height: '200px',
        display: 'block',
        margin: '0 auto',
    },
    avatarOuter: {
        width: '100%',
        height: '100%',
        maxWidth: '200px',
        maxHeight: '200px',
        margin: 'auto',
        position: 'relative',
        marginTop: '-50%',
    },
    avatarInner: {
        width: '50px',
        height: '50px',
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    background: {
        backgroundColor: '#DADEE8',
    },
});



class ProfilePage extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            image: back,
            avatar: logo
        };
    }


    onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            this.setState({
                image: URL.createObjectURL(event.target.files[0])
            });
        }
    }

    onAvatarChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            this.setState({
                avatar: URL.createObjectURL(event.target.files[0])
            });
        }
    }

    render() {
        const { classes } = this.props;

        return (


            <main className={classes.background}>
                <Card className={classes.cardCover}>
                    <CardMedia image={this.state.image} className={classes.media} />
                </Card>
                <MediaQuery minWidth={801}>
                    <Container maxWidth="lg" className={classes.overlay}>
                        <Button variant="outlined" component="label" className={classes.coverButton} color="primary">
                            <CameraAltIcon className={classes.coverIcon} />
                            EDIT COVER PHOTO
                            <input type="file" onChange={this.onImageChange} className="filetype" id="group_image" style={{ display: 'none' }} />
                        </Button>

                        <div className={classes.section} >

                            <Grid
                                container
                                direction="row"
                                justify="center"
                                alignItems="stretch"
                                spacing={4}>

                                <Grid item xs={4}>
                                    <Paper className={classes.height}>
                                        <Box className={classes.avatarContainer}>
                                            <div className={classes.avatarOuter}>
                                                <Avatar src={this.state.avatar} className={classes.avatarOuter} style={{ border: '5px solid white' }} />

                                                <div className={classes.avatarInner}>
                                                    <IconButton color="primary" variant="contained" aria-label="upload picture" component="label" style={{ backgroundColor: "white" }}>
                                                        <CameraAltIcon />
                                                        <input type="file" onChange={this.onAvatarChange} className="filetype" id="group_image" style={{ display: 'none' }} />
                                                    </IconButton>
                                                </div>
                                            </div>
                                        </Box>
                                        <Typography variant="h6" className={classes.center}>Tupac Shakur</Typography>
                                        <Tabs
                                            variant="fullWidth"
                                            orientation="vertical"
                                            aria-label="Vertical tabs"
                                            className={classes.tabs}
                                        >
                                            <CustomTab label={<Typography variant="body1" className={classes.tabLabel}>Timeline</Typography>} />
                                            <CustomTab value={4} label={<Typography variant="body1" className={classes.tabLabel}>About</Typography>} className={classes.tabSelected} />
                                            <CustomTab label={<Typography variant="body1" className={classes.tabLabel}>Projects</Typography>} />
                                            <CustomTab label={<Typography variant="body1" className={classes.tabLabel}>Events</Typography>} />
                                            <CustomTab label={<Typography variant="body1" className={classes.tabLabel}>Topics</Typography>} />
                                            <CustomTab label={<Typography variant="body1" className={classes.tabLabel}>Comments</Typography>} />
                                        </Tabs>
                                    </Paper>
                                </Grid>

                                <Grid item xs={8}>
                                    <Paper className={classes.height}>
                                        <List component="nav" className={classes.root}>
                                            <PersonalInfo />
                                            <About />
                                            <ContactInfo />
                                            <SocialInfo />
                                            <WorkExperience />
                                        </List>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </MediaQuery>
                <MediaQuery maxWidth={800} minWidth={320}>
                    <Box className={classes.overlay}>
                        <Button variant="outlined" component="label" className={classes.coverButtonSM} color="primary">
                            <CameraAltIcon className={classes.coverIcon} />
                            EDIT COVER PHOTO
                        <input type="file" onChange={this.onImageChange} className="filetype" id="group_image" style={{ display: 'none' }} />
                        </Button>

                        <div className={classes.section} >

                            <Grid
                                container
                                direction="row"
                                justify="center"
                                alignItems="stretch"
                                spacing={4}>

                                <Grid item xs={12}>
                                    <Paper className={classes.height}>
                                        <Box className={classes.avatarContainer}>
                                            <div className={classes.avatarOuter}>
                                                <Avatar src={this.state.avatar} className={classes.avatarOuter} style={{ border: '5px solid white' }} />

                                                <div className={classes.avatarInner}>
                                                    <IconButton color="primary" variant="contained" aria-label="upload picture" component="label" style={{ backgroundColor: "white" }}>
                                                        <CameraAltIcon />
                                                        <input type="file" onChange={this.onAvatarChange} className="filetype" id="group_image" style={{ display: 'none' }} />
                                                    </IconButton>
                                                </div>
                                            </div>
                                        </Box>
                                        <Typography variant="h6" className={classes.center}>Tupac Shakur</Typography>
                                        <Tabs
                                            aria-label="Vertical tabs"
                                            variant="scrollable"
                                            scrollButtons="off"
                                        >
                                            <Tab value={4} label={<Typography variant="body1" className={classes.tabLabel}>About</Typography>} className={classes.tabSelectedMobile} />
                                            <Tab label={<Typography variant="body1" className={classes.tabLabel}>Timeline</Typography>} />
                                            <Tab label={<Typography variant="body1" className={classes.tabLabel}>Projects</Typography>} />
                                            <Tab label={<Typography variant="body1" className={classes.tabLabel}>Events</Typography>} />
                                            <Tab label={<Typography variant="body1" className={classes.tabLabel}>Topics</Typography>} />
                                            <Tab label={<Typography variant="body1" className={classes.tabLabel}>Comments</Typography>} />
                                        </Tabs>
                                        <List component="nav" className={classes.root}>
                                            <PersonalInfo />
                                            <About />
                                            <ContactInfo />
                                            <SocialInfo />
                                            <WorkExperience />
                                        </List>
                                    </Paper>
                                </Grid>

                            </Grid>
                        </div>
                    </Box>
                </MediaQuery>
            </main>

        );
    }

}
export default withStyles(styles, { withTheme: true })(ProfilePage);


