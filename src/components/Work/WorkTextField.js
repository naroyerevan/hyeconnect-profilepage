import React from "react";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import DatePicker from './DatePicker';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { withStyles } from '@material-ui/core/styles';
import MediaQuery from 'react-responsive';
import CustomTextField  from '../StyledComponents/CustomTextField';




const styles = (theme) => ({
    gridTop: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(-1)
    },
    height: {
        height: '100%'
    },
    discardButton: {
        marginRight: theme.spacing(2),
        width: '15%'
    },
    saveButton: {
        width: '15%'
    },
    marginBottom: {
        marginBottom: theme.spacing(2)
    },
    marginRight: {
        marginRight: theme.spacing(1)
    }
});


class WorkTextField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            oldCompany: '',
            oldPosition: '',
            oldDesc: '',
            position: 'Rapper',
            desc: 'Rapping is a musical form of vocal delivery that incorporates "rhyme, rhythmic speech, and street vernacular", which is performed or chanted in a variety of ways, usually over a backing beat or musical accompaniment. The components of rap include "content", "flow", and "delivery".',
            company: 'Death Row Records',
            selectedFromDate: new Date(1995, 0, 1),
            selectedToDate: new Date(1996, 1, 2)
        };
        this.handleCompanyChange = this.handleCompanyChange.bind(this);
        this.handlePositionChange = this.handlePositionChange.bind(this);
        this.handleDescChange = this.handleDescChange.bind(this);
    }


    handleCompanyChange = (e) => {
        this.setState({
            ...this.state,
            company: e.target.value,
        });
    };

    handlePositionChange = (e) => {
        this.setState({
            ...this.state,
            position: e.target.value,
        });
    };

    handleDescChange = (e) => {
        this.setState({
            ...this.state,
            desc: e.target.value,
        });
    };

    saveChanges = () => {
        this.props.onEditableChanged(false);
    };

    discardChanges = () => {
        this.setState({
            ...this.state,
            position: this.state.oldPosition,
            company: this.state.oldCompany,
            desc: this.state.oldDesc
        });

        this.props.onEditableChanged(false);
    };
    handleFromDateChange = (event) => {
        this.setState({
            selectedFromDate: event
        })
    };
    handleToDateChange = (event) => {
        this.setState({
            selectedToDate: event
        })
    };


    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.editable !== prevProps.editable && this.props.editable === true) {
            this.setState({
                ...this.state,
                oldPosition: this.state.position,
                oldCompany: this.state.company,
                oldDesc: this.state.desc
            });
        }
    }


    render() {
        let content = "";
        const { classes } = this.props;

        if (this.props.editable) {
            content =
                (
                    <div>
                        <Typography variant="body1" display="block"  justify="left" gutterBottom>
                                Add Work Experience
                            </Typography>
                        <MediaQuery minWidth={1275}>
                            <Grid
                                container
                                direction="row"
                                justify="space-evenly"
                                alignItems="baseline"
                                className={classes.gridTop}
                            >
                                <Grid item xs className={classes.marginRight}>
                                    <Typography variant="caption" display="block" gutterBottom>
                                        Company Name
                            </Typography>
                                </Grid>
                                <Grid item xs className={classes.marginRight}>
                                    <Typography variant="caption" display="block" gutterBottom>
                                        From
                            </Typography>
                                </Grid>
                                <Grid item xs>
                                    <Typography variant="caption" display="block" gutterBottom>
                                        To
                            </Typography>
                                </Grid>
                            </Grid>

                            <Grid
                                container
                                direction="row"
                                justify="space-evenly"
                                alignItems="baseline"
                            >
                                <Grid item xs className={classes.marginRight}> 
                                    <CustomTextField
                                        fullWidth
                                        placeholder="Company Name"
                                        margin="dense"
                                        value={this.state.company}
                                        onChange={this.handleCompanyChange}
                                        id="outlined-full-width"
                                        variant="outlined"
                                    />
                                    </Grid>
                                <Grid item xs className={classes.marginRight}>
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <DatePicker selectedDate={this.state.selectedFromDate} handleDateChange={this.handleFromDateChange} />
                                    </MuiPickersUtilsProvider>
                                </Grid>
                                <Grid item xs>
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <DatePicker selectedDate={this.state.selectedToDate} handleDateChange={this.handleToDateChange} />
                                    </MuiPickersUtilsProvider>
                                </Grid>
                            </Grid>
                        </MediaQuery>
                        <MediaQuery maxWidth={1274}>
                            <Grid
                                container
                                direction="row"
                                justify="space-evenly"
                                alignItems="baseline"
                                className={classes.gridTop}
                            >
                                <Grid item xs>
                                    <Typography variant="caption" display="block" gutterBottom>
                                        Company Name
                            </Typography>
                                </Grid>

                            </Grid>

                            <Grid
                                container
                                direction="row"
                                justify="space-evenly"
                                alignItems="baseline"
                            >
                                <Grid item xs>
                                    <CustomTextField
                                        fullWidth
                                        placeholder="Company Name"
                                        margin="dense"
                                        value={this.state.company}
                                        onChange={this.handleCompanyChange}
                                        id="outlined-full-width"
                                        variant="outlined"
                                    />
                                </Grid>
                            </Grid>
                            <Grid
                                container
                                direction="row"
                                justify="space-evenly"
                                alignItems="baseline"
                                className={classes.gridTop}
                            >
                                <Grid item xs>
                                    <Typography variant="caption" display="block" gutterBottom>
                                        From
                            </Typography>
                                </Grid>
                                <Grid item xs>
                                    <Typography variant="caption" display="block" gutterBottom>
                                        To
                            </Typography>
                                </Grid>
                            </Grid>
                            <Grid
                                container
                                direction="row"
                                justify="space-evenly"
                                alignItems="baseline"
                            >
                                <Grid item xs className={classes.marginRight}>
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <DatePicker selectedDate={this.state.selectedFromDate} handleDateChange={this.handleFromDateChange} />
                                    </MuiPickersUtilsProvider>
                                </Grid>
                                <Grid item xs>
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <DatePicker selectedDate={this.state.selectedToDate} handleDateChange={this.handleToDateChange} />
                                    </MuiPickersUtilsProvider>
                                </Grid>
                            </Grid>
                        </MediaQuery>
                        <Grid
                            container
                            direction="row"
                            justify="space-evenly"
                            alignItems="baseline"
                            className={classes.gridTop}
                        >
                            <Grid item xs>
                                <Typography variant="caption" display="block" gutterBottom>
                                    Position
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            direction="row"
                            justify="space-evenly"
                            alignItems="baseline"
                        >
                            <Grid item xs>
                                <CustomTextField
                                    margin="dense"
                                    placeholder="Position"
                                    value={this.state.position}
                                    onChange={this.handlePositionChange}
                                    fullWidth
                                    id="outlined-full-width"
                                    variant="outlined"
                                />
                            </Grid>
                        </Grid>

                        <Grid
                            container
                            direction="row"
                            justify="space-evenly"
                            alignItems="baseline"
                            className={classes.gridTop}
                        >
                            <Grid item xs>
                                <Typography variant="caption" display="block" gutterBottom>
                                    Description
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            direction="row"
                            justify="space-evenly"
                            alignItems="baseline"
                        >
                            <Grid item xs>
                                <CustomTextField
                                    placeholder="Description"
                                    margin="dense"
                                    value={this.state.desc}
                                    onChange={this.handleDescChange}
                                    fullWidth
                                    multiline
                                    rows={3}
                                    id="outlined-full-width"
                                    variant="outlined"
                                />
                            </Grid>
                        </Grid>

                        <Grid
                            container
                            direction="row"
                            justify="flex-end"
                            alignItems="flex-end"
                            className={classes.gridTop}
                        >
                            <Button color="primary" className={classes.discardButton} onClick={this.discardChanges} disableElevation>Discard</Button>
                            <Button variant="contained" className={classes.saveButton} color="primary" onClick={this.saveChanges} disableElevation>Save</Button>
                        </Grid>
                    </div>
                );
        }
        else {
            content =
                (
                    <div>
                        <Typography className={classes.marginBottom} variant="body1" display="block" gutterBottom>
                            <b>{this.state.company}</b> • {this.state.selectedFromDate.getFullYear()} - {this.state.selectedToDate.getFullYear()}<br />
                        </Typography>
                        <Typography className={classes.marginBottom} variant="body2" display="block" gutterBottom>
                            {this.state.position}<br />
                        </Typography>
                        <Typography variant="body2" display="block" align="justify" gutterBottom>
                            {this.state.desc}<br />
                        </Typography>
                    </div>
                );
        }
        return (
            <div>
                {content}
            </div>
        );
    }
}
export default withStyles(styles, { withTheme: true })(WorkTextField);
