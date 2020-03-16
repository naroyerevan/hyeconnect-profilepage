import React from "react";
import Typography from '@material-ui/core/Typography';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import SearchIcon from '@material-ui/icons/Search';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import logo from './logo.png';
import { IconButton } from "@material-ui/core";
import InputAdornment from '@material-ui/core/InputAdornment';
import CustomTextField from '../styling/CustomTextField';
import MediaQuery from 'react-responsive';




const styles = (theme) => ({
  icon: {
    maxWidth: '30px',
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  header: {
    backgroundColor: '#E5EAF5',
  },
  marginRight: {
    marginRight: theme.spacing(1),
  },
  notifIcon: {
    marginRight: theme.spacing(1),
    backgroundColor: '#6B87FB',
  },
  hyeConnect: {
    height: '19px',
    width: '101px',
    color: '#000000',
    fontFamily: 'Montserrat',
    fontSize: '16px',
    fontWeight: '600',
    lineHeight: '19px',
  },
  
});

class Navbar extends React.Component {
  constructor(props) {

    super(props);

    this.state = {
      editable: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.onEditableChanged = this.onEditableChanged.bind(this);
  }


  handleClick = () => {
    this.setState({
      editable: !this.state.editable
    });
  };

  onEditableChanged = (editable) => {
    this.setState({
      editable
    })
  };





  render() {

    const { classes } = this.props;

    return (
      <div>

        <Box>

          <AppBar position="static" className={classes.header}>
            <Container maxWidth="lg">

              <Toolbar>
                <MediaQuery minWidth={801}>
                  <img src={logo} alt="logo" className={classes.icon} />
                  <Typography className={classes.title} variant="h6" color="textPrimary" noWrap>
                    <div className={classes.hyeConnect}>
                      HyeConnect
    
                  </div>
                  </Typography>
                  <CustomTextField
                    variant="outlined"
                    margin="dense"
                    placeholder="Search"
                    className={classes.marginRight}
                    style={{ backgroundColor: 'white', width: '30%' }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon color="primary" />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <IconButton color="primary" variant="contained" className={classes.marginRight} >
                    <NotificationsIcon color="primary" />
                  </IconButton>
                  <Avatar alt="Narek Karimyan" src="" />
                </MediaQuery>
                <MediaQuery maxWidth={800}>
                  <img src={logo} alt="logo" className={classes.icon} />
                  <CustomTextField
                    fullWidth
                    variant="outlined"
                    margin="dense"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon color="primary" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </MediaQuery>
              </Toolbar>
            </Container>

          </AppBar>

        </Box>


      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Navbar)