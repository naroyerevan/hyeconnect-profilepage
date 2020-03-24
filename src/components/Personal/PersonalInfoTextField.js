import React from "react";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';
import CustomTextField  from '../StyledComponents/CustomTextField';


const styles = (theme) => ({
    discardButton: {
        marginRight: theme.spacing(2),
        width: '15%'
    },
    saveButton: {
        width: '15%'
    },
    marginBottom: {
        marginBottom: theme.spacing(0.5),
    },
    marginBottomEdit: {
        marginBottom: theme.spacing(-0.5)
    }
});



class PersonalInfoTextField extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            oldValue: "",
            value: 'Tupac Shakur',
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

    state = { selectedGender: "" };


    handleRadioChange = (event) => {
        this.setState({ selectedGender: event.target.value });
    };



    render() {
        const { classes } = this.props;
        let content = "";
        let { selectedGender } = this.state;
        if (!selectedGender) selectedGender = "Male"

        if (this.props.editable)
            content =
                (<div>
                    <Typography className={classes.marginBottomEdit} variant="caption" display="block" gutterBottom>
                        Full Name
                        </Typography>
                    <div className={classes.marginBottom}>
                        <CustomTextField
                            placeholder="Full Name"
                            value={this.state.value}
                            onChange={this.handleChange}
                            id="outlined-full-width"
                            fullWidth
                            margin="dense"
                            variant="outlined"
                        />
                    </div>
                    <Typography className={classes.marginBottomEdit} variant="caption" display="block" gutterBottom>
                        Gender
                        </Typography>
                    <FormControl component="fieldset" >
                        <RadioGroup aria-label="gender" name="gender1" value={selectedGender} onChange={this.handleRadioChange}>
                            <FormControlLabel value="Female" control={<Radio color="primary" />} label="Female" />
                            <FormControlLabel value="Male" control={<Radio color="primary" />} label="Male" />
                        </RadioGroup>
                    </FormControl>
                    <Grid
                        container
                        direction="row"
                        justify="flex-end"
                        alignItems="flex-end"
                    >
                        <Button color="primary" className={classes.discardButton} onClick={this.discardChanges} disableElevation>Discard</Button>
                        <Button variant="contained" className={classes.saveButton} color="primary" onClick={this.saveChanges} disableElevation>Save</Button>
                    </Grid>
                </div>);
        else
            content =
                (<div>
                    <Typography className={classes.marginBottom} color="textSecondary" variant="caption" display="block" gutterBottom>
                        Full Name
                        </Typography>
                    <Typography variant="body2" display="block" gutterBottom className={classes.marginBottom}>
                        {this.state.value}
                    </Typography>
                    <Typography className={classes.marginBottom} color="textSecondary" variant="caption" display="block" gutterBottom>
                        Gender
                        </Typography>
                    <Typography variant="body2" display="block" gutterBottom>
                        {selectedGender}
                    </Typography>
                </div>);
        return (
            <div>
                {content}
            </div>
        );
    }
}
export default withStyles(styles, { withTheme: true })(PersonalInfoTextField);
