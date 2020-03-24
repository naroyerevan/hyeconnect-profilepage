import React from "react";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Link from '@material-ui/core/Link';
import FacebookIcon from '../../static/facebook.svg';
import InstagramIcon from '../../static/instagram.svg';
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles';
import CustomTextField from '../StyledComponents/CustomTextField';


const styles = (theme) => ({
    height: {
        height: '100%',
        display: 'grid'
    },
    discardButton: {
        marginRight: theme.spacing(2),
        width: '15%'
    },
    saveButton: {
        width: '15%'
    },
    marginRight: {
        marginRight: theme.spacing(-3),
    },
    marginBottom: {
        marginBottom: theme.spacing(-3),
    },
    buttonLeft: {
        marginLeft: theme.spacing(-2),
        marginTop: theme.spacing(1)
    },
});



class SocialTextField extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            oldIGValue: '',
            oldFBValue: '',
            instagram: 'http://www.instagram.com/2pac/',
            facebook: 'http://www.facebook.com/tupacshakur/',
        };

        this.handleFBChange = this.handleFBChange.bind(this);
        this.handleIGChange = this.handleIGChange.bind(this);
    }

    handleFBChange = (event) => {
        this.setState({
            ...this.state,
            facebook: event.target.value,
        });
    };

    handleIGChange = (event) => {
        this.setState({
            ...this.state,
            instagram: event.target.value,
        });
    };

    saveChanges = () => {
        this.props.onEditableChanged(false);
    };

    discardChanges = () => {
        this.setState({
            ...this.state,
            facebook: this.state.oldFBValue,
            instagram: this.state.oldIGValue
        });

        this.props.onEditableChanged(false);
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.editable !== prevProps.editable && this.props.editable === true) {
            this.setState({
                ...this.state,
                oldFBValue: this.state.facebook,
                oldIGValue: this.state.instagram
            });
        }
    }



    render() {
        let content = "";
        const { classes } = this.props;


        if (this.props.editable)
            content =
                (<div>
                    <div className={classes.marginLeft}>
                        <List>
                            <ListItem className={classes.marginBottom}>
                                <ListItemIcon>
                                    <Icon className={classes.height}>
                                        <img alt="facebook" src={FacebookIcon} />
                                    </Icon>
                                </ListItemIcon>
                                <CustomTextField
                                    placeholder="Link"
                                    value={this.state.facebook}
                                    onChange={this.handleFBChange}
                                    id="outlined-full-width"
                                    fullWidth
                                    margin="dense"
                                    variant="outlined"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Icon className={classes.height}>
                                        <img alt="instagram" src={InstagramIcon} />
                                    </Icon>
                                </ListItemIcon>
                                <CustomTextField
                                    placeholder="Link"
                                    value={this.state.instagram}
                                    onChange={this.handleIGChange}
                                    id="outlined-full-width"
                                    fullWidth
                                    margin="dense"
                                    variant="outlined"
                                />
                            </ListItem>
                        </List>
                    </div>

                    <Grid
                        container
                        direction="row"
                        justify="flex-end"
                        alignItems="flex-end"
                        className={classes.buttonLeft}
                    >

                        <Button color="primary" className={classes.discardButton} onClick={this.discardChanges} disableElevation>Discard</Button>
                        <Button variant="contained" className={classes.saveButton} color="primary" onClick={this.saveChanges} disableElevation>Save</Button>
                    </Grid>
                </div>);
        else
            content =
                (<div >
                    <Link href={this.state.facebook} target="_blank" className={classes.marginRight}>
                        <ListItemIcon>
                            <Icon className={classes.height}>
                                <img alt="facebook" src={FacebookIcon} />
                            </Icon>
                        </ListItemIcon>
                    </Link>
                    <Link href={this.state.instagram} target="_blank">
                        <ListItemIcon >
                            <Icon className={classes.height}>
                                <img alt="instagram" src={InstagramIcon} />
                            </Icon>
                        </ListItemIcon>
                    </Link>
                </div>
                );
        return (
            <div>
                {content}
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(SocialTextField);
