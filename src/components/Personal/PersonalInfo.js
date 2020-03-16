import React from "react";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PersonalInfoTextField from './PersonalInfoTextField';
import { Typography } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';





const styles = (theme) => ({
    edit: {
        color: '#8396FF',
        fontFamily: 'Roboto',
        fontSize: '14px',
        fontWeight: '500',
        letterSpacing: '1.3px',
        textAlign: 'right',
    }
});


class PersonalInfo extends React.Component {
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


        let editButton;
        if (!this.state.editable) {
            editButton = <Button color="primary" className={classes.edit} onClick={this.handleClick}>EDIT</Button>
        }

        return (
            <div>

                <Box pl={2} pr={2}>
                    <ListItem>
                        <ListItemIcon>
                            <AccountCircleIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography variant="body1" style={{ fontWeight: '700' }}>
                                Personal Information
                        </Typography>
                        </ListItemText>
                        {editButton}
                    </ListItem>
                    <ListItem>
                        <Grid
                            container
                            direction="column"
                            justify="flex-start"
                            alignItems="stretch"
                        >
                            <PersonalInfoTextField editable={this.state.editable} onEditableChanged={this.onEditableChanged} />
                        </Grid>
                    </ListItem>
                </Box>
                <Divider />

            </div>
        );
    }
}
export default withStyles(styles, { withTheme: true })(PersonalInfo);
