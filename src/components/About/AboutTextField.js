import React from "react";
import CustomTextField from "../styling/CustomTextField";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';


const styles = (theme) => ({
    discardButton: {
        marginRight: theme.spacing(2),
        width: '15%'
    },
    saveButton: {
        width: '15%'
    },
    marginBottom: {
        marginBottom: theme.spacing(1),
    }
});



class AboutTextField extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            oldValue: "",
            value: 'Tupac Amaru Shakur, popularly known by his stage name 2Pac, was an American rapper and actor. He is considered by many as one of the most significant rappers of all time. In later 1995, after being convicted of molestation and becoming a victim of a robbery and shooting, Shakur became heavily involved in the growing East Coast–West Coast hip hop rivalry. His double-disc album All Eyez on Me became certified Diamond by the Recording Industry Association of America. On September 7, 1996, Shakur was shot four times by an unknown assailant in a drive-by shooting in Las Vegas; he died six days later and the gunman was never captured. The Notorious B.I.G., Shakur\'s friend turned rival, was at first considered a suspect, but was also murdered in another drive-by shooting several months later. Five more albums have been released since his death, all of which have been certified Platinum.'
        };
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            value: event.target.value,
        });
    };

    saveChanges = () => {
        this.props.onEditableChanged(false);
    };

    discardChanges = () => {
        this.setState({
            ...this.state,
            value: this.state.oldValue,
        });

        this.props.onEditableChanged(false);
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.editable !== prevProps.editable && this.props.editable === true) {
            this.setState({
                ...this.state,
                oldValue: this.state.value
            });
        }
    }


    render() {
        let content = "";
        const { classes } = this.props;

        if (this.props.editable)
            content =
                (
                    <div>
                        <div className={classes.marginBottom}>
                            <Typography variant="body1" display="block"  justify="left" gutterBottom>
                                Write About You
                            </Typography>
                        <CustomTextField
                            id="outlined-multiline-static"
                            multiline
                            rows="8"
                            placeholder="Write about you"
                            fullWidth
                            variant="outlined"
                            margin="dense"
                            value={this.state.value}
                            onChange={this.handleChange}
                        />
                        </div>
                        <Grid
                            container
                            direction="row"
                            justify="flex-end"
                            alignItems="flex-end"
                        >
                            <Button color="primary" className={classes.discardButton} onClick={this.discardChanges} disableElevation>Discard</Button>
                            <Button variant="contained" className={classes.saveButton} color="primary" onClick={this.saveChanges} disableElevation>Save</Button>
                        </Grid>
                    </div>
                );
        else
            content =
                (
                    <div>
                        <Typography variant="body1" display="block" align="justify" gutterBottom>
                            {this.state.value}
                        </Typography>
                    </div>
                );
        return (
            <div>
                {content}
            </div>
        );
    }
}
export default withStyles(styles, { withTheme: true })(AboutTextField);
