import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';
import 'typeface-roboto';
import './styles.css';
import Navbar from './components/Main/Navbar';
import ProfilePage from './components/Main/ProfilePage';
import { StylesProvider } from "@material-ui/styles";


const theme = createMuiTheme({
  typography: {
    caption: {
      fontSize: '10px',
    }
  },
  palette: {
    primary: {
      main: '#6B87FB'
    }
  }
},

)


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));




export default function App() {


  const classes = useStyles();
  return (
    <React.Fragment >
      <StylesProvider injectFirst>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <div className={classes.root}>
            <Navbar />
            <ProfilePage />
          </div>
        </MuiThemeProvider>
      </StylesProvider>
    </React.Fragment>
  );
}
