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
import logo from '../../static/logo.png';
import { Button } from "@material-ui/core";
import InputAdornment from '@material-ui/core/InputAdornment';
import CustomTextField from '../StyledComponents/CustomTextField';
import MediaQuery from 'react-responsive';
import InputBase from '@material-ui/core/InputBase';
import AddIcon from '@material-ui/icons/Add';





const styles = (theme) => ({
  icon: {
    maxHeight: '37px',
    marginRight: theme.spacing(1),
    [theme.breakpoints.up('xs')]: {
      marginLeft: theme.spacing(-2)
    },
  },
  title: {
    flexGrow: '1',
    display: 'none',
    [theme.breakpoints.up('xs')]: {
      display: 'inline-flex',
    },
  },
  header: {
    backgroundColor: '#E5EAF5',
  },
  marginRight: {
    marginRight: theme.spacing(1),
  },
  titleText: {
    height: '19px',
    width: '101px',
    color: '#000000',
    fontFamily: 'Montserrat',
    fontSize: '16px',
    fontWeight: '600',
    lineHeight: '19px',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    borderRadius: '20px',
    border: '1px solid #DBE1EE',
    backgroundColor: '#EBF1FD',
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: theme.spacing(2),
    transition: theme.transitions.create('width'),
    width: '100%',
    height: '22px',
    color: 'black',
    [theme.breakpoints.up('xs')]: {
      width: '14px',
      '&:focus': {
        width: '10ch',
        paddingLeft: theme.spacing(4),
      },
    },
  },
  iconContainer: {
    position: 'relative',
    marginLeft: 0,
    marginRight: theme.spacing(1),
    width: '40px',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  iconInner: {
    zIndex: 1000,
    padding: theme.spacing(0, 1),
    height: '100%',
    width: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navbarButton: {
    borderRadius: '20px',
    border: '1px solid #DBE1EE',
    backgroundColor: '#EBF1FD',
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: theme.spacing(2),
    transition: theme.transitions.create('width'),
    color: 'black',
    height: '40px',
    minWidth: '40px',
  },
  notifButton: {
    borderRadius: '20px',
    border: '1px solid #DBE1EE',
    backgroundColor: '#EBF1FD',
    opacity: '0.2',
    backgroundColor: '#6B87FB',
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: theme.spacing(2),
    transition: theme.transitions.create('width'),
    color: 'black',
    minHeight: '42px',
    minWidth: '42px',
  },
  avatarMargin: {
    marginRight: theme.spacing(-1),
  }
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
                    <div className={classes.titleText}>
                      HyeConnect
                  </div>
                  </Typography>
                  <CustomTextField
                    variant="outlined"
                    margin="dense"
                    placeholder="Search"
                    className={classes.marginRight}
                    style={{ backgroundColor: 'white', width: '30%', height: '40px' }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon color="primary" />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <div className={classes.iconContainer}>
                    <div className={classes.iconInner}>
                      <NotificationsIcon color="primary" />
                    </div>
                    <Button className={classes.notifButton} />
                  </div>
                  <Avatar alt="Narek Karimyan" src="" />
                </MediaQuery>
                <MediaQuery maxWidth={800}>
                  <div className={classes.title}>
                    <img src={logo} alt="logo" className={classes.icon} />
                    <div className={classes.iconContainer}>
                      <div className={classes.iconInner}>
                        <SearchIcon color="primary" />
                      </div>
                      <InputBase
                        classes={{
                          root: classes.inputRoot,
                          input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                      />
                    </div>
                  </div>
                  <div className={classes.iconContainer}>
                    <div className={classes.iconInner}>
                      <AddIcon color="primary" />
                    </div>
                    <Button className={classes.navbarButton} />
                  </div>
                  <Avatar alt="Narek Karimyan" src="" className={classes.avatarMargin} />
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









