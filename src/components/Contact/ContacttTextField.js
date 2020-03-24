import React from "react";
import CustomTextField from '../StyledComponents/CustomTextField';
import CustomMuiPhoneNumber from '../StyledComponents/CustomMuiPhoneNumber';
import CustomSelect from '../StyledComponents/CustomSelect';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from "@material-ui/core/MenuItem";
import { CountryRegionData } from 'react-country-region-selector-material-ui-new';
import { withStyles } from '@material-ui/core/styles';
import MediaQuery from 'react-responsive';



const styles = (theme) => ({
    discardButton: {
        marginRight: theme.spacing(2),
        width: '15%'
    },
    saveButton: {
        width: '15%'
    },
    gridTop: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(-3)
    },
    gridTopMin: {
        marginTop: theme.spacing(2),
    },
    boxTop: {
        marginTop: theme.spacing(-3)
    },
    marginLeft: {
        marginLeft: theme.spacing(-2),
    },
    marginBottom: {
        marginBottom: theme.spacing(3)
    },
    marginTop: {
        marginTop: theme.spacing(-3)
    },
    block: {
        display: 'block',
        marginRight: theme.spacing(-2)
    },
    itemMargin: {
        marginBottom: theme.spacing(-2)
    },
    itemMarginTop: {
        marginTop: theme.spacing(0.5)
    },
});


class ContactTextField extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            oldPhoneValue: "",
            oldEmailValue: "",
            oldRegionValue: "",
            oldCountryValue: ['', '', ''],
            oldAddressValue: "",
            oldAccessAddressValue: "",
            oldAccessEmailValue: "",
            oldAccessPhoneValue: "",
            accessAddress: 10,
            accessEmail: 20,
            accessPhone: 30,
            oldCityValue: '',
            city: 'Yerevan',
            phone: '+18183439090',
            email: 'legendsneverdie@gmail.com',
            region: "Yerevan",
            country: ['Armenia', 'AM', 'Aragatsotn~AG|Ararat~AR|Armavir~AV|Gegharkunik~GR|Kotayk~KT|Lori~LO|Shirak~SH|Syunik~SU|Tavush~TV|Vayots Dzor~VD|Yerevan~ER'],
            address: "Tumanyan"
        };
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handleCountryChange = this.handleCountryChange.bind(this);
        this.handleRegionChange = this.handleRegionChange.bind(this);
        this.handleAccAddressChange = this.handleAccAddressChange.bind(this);
        this.handleAccEmailChange = this.handleAccEmailChange.bind(this);
        this.handleAccPhoneChange = this.handleAccPhoneChange.bind(this);
        this.handleCityChange = this.handleCityChange.bind(this);
        this.countryToFlag = this.countryToFlag.bind(this);
    }


    countryToFlag = (isoCode) => {
        return typeof String.fromCodePoint !== 'undefined'
            ? isoCode.toUpperCase().replace(/./g, char => String.fromCodePoint(char.charCodeAt(0) + 127397))
            : isoCode;
    }

    getRegions = country => {
        if (!country) {
            return [];
        }
        return country[2].split("|").map(regionPair => {
            let [regionName, regionShortCode = null] = regionPair.split("~");
            return regionName;
        });
    };

    handleAccAddressChange = (e) => {
        this.setState({
            ...this.state,
            accessAddress: e.target.value
        });
    }

    handleAccEmailChange = (e) => {
        this.setState({
            ...this.state,
            accessEmail: e.target.value
        });
    }

    handleAccPhoneChange = (e) => {
        this.setState({
            ...this.state,
            accessPhone: e.target.value
        });
    }

    handleAddressChange = (e) => {
        this.setState({
            ...this.state,
            address: e.target.value
        });
    }


    handleCountryChange = (e) => {
        this.setState({
            ...this.state,
            country: e.target.value
        });
        console.log(e.target.value)
    }

    handleRegionChange = (e) => {
        this.setState({
            ...this.state,
            region: e.target.value
        });
    }

    handlePhoneChange = (value) => {
        this.setState({
            ...this.state,
            phone: value
        });
    };

    handleCityChange = (e) => {
        this.setState({
            ...this.state,
            city: e.target.value
        });
    };

    handleEmailChange = (e) => {
        this.setState({
            ...this.state,
            email: e.target.value,
        });
    };

    saveChanges = () => {
        this.props.onEditableChanged(false);
    };

    discardChanges = () => {
        this.setState({
            ...this.state,
            phone: this.state.oldPhoneValue,
            email: this.state.oldEmailValue,
            address: this.state.oldAddressValue,
            region: this.state.oldRegionValue,
            country: this.state.oldCountryValue,
            city: this.state.oldCityValue,
            accessAddress: this.state.oldAccessAddressValue,
            accessEmail: this.state.oldAccessEmailValue,
            accessPhone: this.state.oldAccessPhoneValue
        });

        this.props.onEditableChanged(false);
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.editable !== prevProps.editable && this.props.editable === true) {
            this.setState({
                ...this.state,
                oldPhoneValue: this.state.phone,
                oldEmailValue: this.state.email,
                oldAddressValue: this.state.address,
                oldRegionValue: this.state.region,
                oldCountryValue: this.state.country,
                oldCityValue: this.state.city,
                oldAccessAddressValue: this.state.accessAddress,
                oldAccessPhoneValue: this.state.accessPhone,
                oldAccessEmailValue: this.state.accessEmail
            });
        }
    }



    render() {
        const { classes } = this.props;


        let content = "";

        if (this.props.editable)
            content =
                (
                    <div>
                        <div className={classes.marginBottom}>
                            <List>
                                <ListItem className={classes.marginLeft}>
                                    <ListItemIcon >
                                        <PhoneIphoneIcon className="ContactIconColor" />
                                    </ListItemIcon>
                                    <ListItemText className={classes.marginLeft} primaryTypographyProps={{ variant: "body2" }}>
                                        Phone number
                            </ListItemText>
                                </ListItem>
                            </List>
                            <div className={classes.marginTop}>
                                <MediaQuery minWidth={651}>
                                    <Grid
                                        container
                                        direction="row"
                                        justify="space-evenly"
                                        alignItems="baseline"
                                        spacing={2}
                                        className={classes.gridTop}
                                    >
                                        <Grid item xs={4}>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Typography variant="caption" display="block" gutterBottom>
                                                Who can see?
                                    </Typography>
                                        </Grid>

                                        <Grid item xs={4}>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        container
                                        direction="row"
                                        justify="space-evenly"
                                        alignItems="center"
                                        spacing={2}
                                    >
                                        <Grid item xs={4}>
                                            <CustomMuiPhoneNumber id="outlined-full-width"
                                                fullWidth
                                                margin="dense"
                                                variant="outlined"
                                                defaultCountry={'am'}
                                                value={this.state.phone}
                                                onChange={this.handlePhoneChange}
                                            />
                                        </Grid>


                                        <Grid item xs={4}>
                                            <CustomSelect
                                                fullWidth
                                                variant="outlined"
                                                margin="dense"
                                                className={classes.itemMarginTop}
                                                value={this.state.accessPhone}
                                                onChange={this.handleAccPhoneChange}
                                            >
                                                <MenuItem value={10}>Only you</MenuItem>
                                                <MenuItem value={20}>Only followers</MenuItem>
                                                <MenuItem value={30}>Everyone</MenuItem>
                                            </CustomSelect>
                                        </Grid>
                                        <Grid item xs={4}>
                                        </Grid>
                                    </Grid>
                                </MediaQuery>
                                <MediaQuery maxWidth={650}>
                                    <Grid
                                        container
                                        direction="row"
                                        justify="space-evenly"
                                        alignItems="center"
                                        spacing={2}
                                        className={classes.gridTopMin}
                                    >
                                        <Grid item xs={12}>
                                            <CustomMuiPhoneNumber id="outlined-full-width"
                                                fullWidth
                                                margin="dense"
                                                variant="outlined"
                                                defaultCountry={'am'}
                                                value={this.state.phone}
                                                onChange={this.handlePhoneChange}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        container
                                        direction="row"
                                        justify="space-evenly"
                                        alignItems="center"
                                        spacing={2}
                                    >
                                        <Grid item xs={12} className={classes.itemMargin}>
                                            <Typography variant="caption" display="block" gutterBottom>
                                                Who can see?
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        container
                                        direction="row"
                                        justify="space-evenly"
                                        alignItems="center"
                                        spacing={2}
                                    >
                                        <Grid item xs={12}>
                                            <CustomSelect
                                                fullWidth
                                                variant="outlined"
                                                margin="dense"
                                                className={classes.itemMarginTop}
                                                value={this.state.accessPhone}
                                                onChange={this.handleAccPhoneChange}
                                            >
                                                <MenuItem value={10}>Only you</MenuItem>
                                                <MenuItem value={20}>Only followers</MenuItem>
                                                <MenuItem value={30}>Everyone</MenuItem>
                                            </CustomSelect>
                                        </Grid>
                                    </Grid>
                                </MediaQuery>
                            </div>


                        </div>
                        <div className={classes.marginBottom}>
                            <List>
                                <ListItem className={classes.marginLeft}>
                                    <ListItemIcon>
                                        <EmailIcon className="ContactIconColor" />
                                    </ListItemIcon>
                                    <ListItemText className={classes.marginLeft} primaryTypographyProps={{ variant: "body2" }}>
                                        Email
                            </ListItemText>
                                </ListItem>
                            </List>
                            <div className={classes.marginTop}>
                                <MediaQuery minWidth={651}>
                                    <Grid
                                        container
                                        direction="row"
                                        justify="space-evenly"
                                        alignItems="baseline"
                                        spacing={2}
                                        className={classes.gridTop}
                                    >
                                        <Grid item xs={8}>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Typography variant="caption" display="block" gutterBottom>
                                                Who can see?
                                    </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        container
                                        direction="row"
                                        justify="space-evenly"
                                        alignItems="center"
                                        spacing={2}
                                    >
                                        <Grid item xs={8}>
                                            <CustomTextField
                                                placeholder="Email address"
                                                value={this.state.email}
                                                onChange={this.handleEmailChange}
                                                id="outlined-full-width"
                                                fullWidth
                                                margin="dense"
                                                variant="outlined"
                                            />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <CustomSelect
                                                fullWidth
                                                variant="outlined"
                                                margin="dense"
                                                className={classes.itemMarginTop}
                                                value={this.state.accessEmail}
                                                onChange={this.handleAccEmailChange}
                                            >
                                                <MenuItem value={10}>Only you</MenuItem>
                                                <MenuItem value={20}>Only followers</MenuItem>
                                                <MenuItem value={30}>Everyone</MenuItem>
                                            </CustomSelect>
                                        </Grid>
                                    </Grid>
                                </MediaQuery>
                                <MediaQuery maxWidth={650}>
                                    <Grid
                                        container
                                        direction="row"
                                        justify="space-evenly"
                                        alignItems="center"
                                        spacing={2}
                                        className={classes.gridTopMin}
                                    >
                                        <Grid item xs={12}>
                                            <CustomTextField
                                                placeholder="Email address"
                                                value={this.state.email}
                                                onChange={this.handleEmailChange}
                                                id="outlined-full-width"
                                                fullWidth
                                                margin="dense"
                                                variant="outlined"
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        container
                                        direction="row"
                                        justify="space-evenly"
                                        alignItems="center"
                                        spacing={2}
                                    >
                                        <Grid item xs={12} className={classes.itemMargin}>
                                            <Typography variant="caption" display="block" gutterBottom>
                                                Who can see?
                                    </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        container
                                        direction="row"
                                        justify="space-evenly"
                                        alignItems="center"
                                        spacing={2}
                                    >
                                        <Grid item xs={12}>
                                            <CustomSelect
                                                fullWidth
                                                variant="outlined"
                                                margin="dense"
                                                className={classes.itemMarginTop}
                                                value={this.state.accessEmail}
                                                onChange={this.handleAccEmailChange}
                                            >
                                                <MenuItem value={10}>Only you</MenuItem>
                                                <MenuItem value={20}>Only followers</MenuItem>
                                                <MenuItem value={30}>Everyone</MenuItem>
                                            </CustomSelect>
                                        </Grid>
                                    </Grid>
                                </MediaQuery>
                            </div>
                        </div>
                        <div className={classes.marginBottom}>
                            <List>
                                <ListItem className={classes.marginLeft}>
                                    <ListItemIcon>
                                        <LocationOnIcon className="ContactIconColor" />
                                    </ListItemIcon>
                                    <ListItemText className={classes.marginLeft} primaryTypographyProps={{ variant: "body2" }}>
                                        Address
                            </ListItemText>
                                </ListItem>
                            </List>
                            <div className={classes.marginTop}>
                                <MediaQuery minWidth={651}>
                                    <Grid
                                        container
                                        direction="row"
                                        justify="space-evenly"
                                        alignItems="baseline"
                                        spacing={2}
                                        className={classes.gridTop}
                                    >
                                        <Grid item xs>
                                            <Typography variant="caption" display="block" gutterBottom>
                                                Country
                            </Typography>
                                        </Grid>
                                        <Grid item xs>
                                            <Typography variant="caption" display="block" gutterBottom>
                                                Region
                            </Typography>
                                        </Grid>
                                        <Grid item xs>
                                            <Typography variant="caption" display="block" gutterBottom>
                                                City
                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        container
                                        direction="row"
                                        justify="space-evenly"
                                        alignItems="center"
                                        spacing={2}
                                    >
                                        <Grid item xs>
                                            <CustomSelect
                                                fullWidth
                                                variant="outlined"
                                                margin="dense"
                                                className={classes.itemMarginTop}
                                                id="country"
                                                value={this.state.country}
                                                onChange={this.handleCountryChange}
                                            >
                                                {CountryRegionData.map((option, index) => (
                                                    <MenuItem key={option[0]} value={option}>
                                                        {option[0]}
                                                    </MenuItem>
                                                ))}
                                            </CustomSelect>
                                        </Grid>
                                        <Grid item xs>
                                            <CustomSelect
                                                fullWidth
                                                variant="outlined"
                                                margin="dense"
                                                className={classes.itemMarginTop}
                                                id="region"
                                                value={this.state.region}
                                                onChange={this.handleRegionChange}
                                            >
                                                {this.getRegions(this.state.country).map(
                                                    (option, index) => (
                                                        <MenuItem key={option} value={option}>
                                                            {option}
                                                        </MenuItem>
                                                    )
                                                )}
                                            </CustomSelect>
                                        </Grid>
                                        <Grid item xs>
                                            <CustomTextField
                                                placeholder="City"
                                                value={this.state.city}
                                                onChange={this.handleCityChange}
                                                id="outlined-full-width"
                                                fullWidth
                                                variant="outlined"
                                                margin="dense"
                                            />
                                        </Grid>
                                    </Grid>

                                    <Grid
                                        container
                                        direction="row"
                                        justify="space-evenly"
                                        alignItems="baseline"
                                        spacing={2}
                                        className={classes.gridTop}
                                    >
                                        <Grid item xs={8}>
                                            <Typography variant="caption" display="block" gutterBottom>
                                                Street Address
                                        </Typography>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Typography variant="caption" display="block" gutterBottom>
                                                Who can see?
                                        </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        container
                                        direction="row"
                                        justify="space-evenly"
                                        alignItems="center"
                                        spacing={2}
                                    >
                                        <Grid item xs={8}>
                                            <CustomTextField
                                                placeholder="Street Address"
                                                value={this.state.address}
                                                onChange={this.handleAddressChange}
                                                id="outlined-full-width"
                                                fullWidth
                                                variant="outlined"
                                                margin="dense"
                                            />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <CustomSelect
                                                fullWidth
                                                variant="outlined"
                                                margin="dense"
                                                className={classes.itemMarginTop}
                                                value={this.state.accessAddress}
                                                onChange={this.handleAccAddressChange}
                                            >
                                                <MenuItem value={10}>Only you</MenuItem>
                                                <MenuItem value={20}>Only followers</MenuItem>
                                                <MenuItem value={30}>Everyone</MenuItem>
                                            </CustomSelect>
                                        </Grid>
                                    </Grid>
                                </MediaQuery>
                                <MediaQuery maxWidth={650}>
                                    <Grid
                                        container
                                        direction="row"
                                        justify="space-evenly"
                                        alignItems="center"
                                        spacing={2}
                                        className={classes.gridTopMin}
                                    >
                                        <Grid item xs={12} className={classes.itemMargin}>
                                            <Typography variant="caption" display="block" gutterBottom>
                                                Country
                                        </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        container
                                        direction="row"
                                        justify="space-evenly"
                                        alignItems="center"
                                        spacing={2}
                                    >
                                        <Grid item xs={12}>
                                            <CustomSelect
                                                fullWidth
                                                variant="outlined"
                                                margin="dense"
                                                className={classes.itemMarginTop}
                                                id="country"
                                                value={this.state.country}
                                                onChange={this.handleCountryChange}
                                            >
                                                {CountryRegionData.map((option, index) => (
                                                    <MenuItem key={option[0]} value={option}>
                                                        {option[0]}
                                                    </MenuItem>
                                                ))}
                                            </CustomSelect>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        container
                                        direction="row"
                                        justify="space-evenly"
                                        alignItems="center"
                                        spacing={2}
                                    >
                                        <Grid item xs={12} className={classes.itemMargin}>
                                            <Typography variant="caption" display="block" gutterBottom>
                                                Region
                                        </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        container
                                        direction="row"
                                        justify="space-evenly"
                                        alignItems="center"
                                        spacing={2}
                                    >
                                        <Grid item xs={12}>
                                            <CustomSelect
                                                fullWidth
                                                variant="outlined"
                                                margin="dense"
                                                className={classes.itemMarginTop}
                                                id="region"
                                                value={this.state.region}
                                                onChange={this.handleRegionChange}
                                            >
                                                {this.getRegions(this.state.country).map(
                                                    (option, index) => (
                                                        <MenuItem key={option} value={option}>
                                                            {option}
                                                        </MenuItem>
                                                    )
                                                )}
                                            </CustomSelect>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        container
                                        direction="row"
                                        justify="space-evenly"
                                        alignItems="center"
                                        spacing={2}
                                    >
                                        <Grid item xs={12} className={classes.itemMargin}>
                                            <Typography variant="caption" display="block" gutterBottom>
                                                City
                                        </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        container
                                        direction="row"
                                        justify="space-evenly"
                                        alignItems="center"
                                        spacing={2}
                                    >
                                        <Grid item xs={12}>
                                            <CustomTextField
                                                placeholder="City"
                                                value={this.state.city}
                                                onChange={this.handleCityChange}
                                                id="outlined-full-width"
                                                fullWidth
                                                variant="outlined"
                                                margin="dense"
                                                className={classes.itemMarginTop}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        container
                                        direction="row"
                                        justify="space-evenly"
                                        alignItems="center"
                                        spacing={2}
                                    >
                                        <Grid item xs={12} className={classes.itemMargin}>
                                            <Typography variant="caption" display="block" gutterBottom>
                                                Street Address
                                        </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        container
                                        direction="row"
                                        justify="space-evenly"
                                        alignItems="center"
                                        spacing={2}
                                    >
                                        <Grid item xs={12}>
                                            <CustomTextField
                                                placeholder="Street Address"
                                                value={this.state.address}
                                                onChange={this.handleAddressChange}
                                                className={classes.itemMarginTop}
                                                id="outlined-full-width"
                                                fullWidth
                                                variant="outlined"
                                                margin="dense"
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        container
                                        direction="row"
                                        justify="space-evenly"
                                        alignItems="center"
                                        spacing={2}
                                    >
                                        <Grid item xs={12} className={classes.itemMargin}>
                                            <Typography variant="caption" display="block" gutterBottom>
                                                Who can see?
                                    </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        container
                                        direction="row"
                                        justify="space-evenly"
                                        alignItems="center"
                                        spacing={2}
                                    >
                                        <Grid item xs={12}>
                                            <CustomSelect
                                                fullWidth
                                                variant="outlined"
                                                margin="dense"
                                                className={classes.itemMarginTop}
                                                value={this.state.accessAddress}
                                                onChange={this.handleAccAddressChange}
                                            >
                                                <MenuItem value={10}>Only you</MenuItem>
                                                <MenuItem value={20}>Only followers</MenuItem>
                                                <MenuItem value={30}>Everyone</MenuItem>
                                            </CustomSelect>
                                        </Grid>
                                    </Grid>
                                </MediaQuery>
                            </div>
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
                    </div >
                );
        else
            content =
                (
                    <div className={classes.marginLeft}>
                        <List>
                            <ListItem >
                                <ListItemIcon className={classes.block}>
                                    <PhoneIphoneIcon className="ContactIconColor" />
                                </ListItemIcon>
                                <Typography variant="body2" display="block" gutterBottom>{this.state.phone}</Typography>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon className={classes.block}>
                                    <EmailIcon className="ContactIconColor" />
                                </ListItemIcon>
                                <Typography variant="body2" display="block" gutterBottom>{this.state.email}</Typography>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon className={classes.block}>
                                    <LocationOnIcon className="ContactIconColor" />
                                </ListItemIcon>
                                <Typography variant="body2" display="block" gutterBottom>{this.state.address}, {this.state.city}, {this.state.region}, {this.state.country[0]}</Typography>
                            </ListItem>
                        </List>
                    </div>
                );
        return (
            <div>
                {content}
            </div >
        );
    }
}
export default withStyles(styles, { withTheme: true })(ContactTextField);

