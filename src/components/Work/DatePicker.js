import React, { Fragment } from "react";
import InsertInvitationIcon from '@material-ui/icons/InsertInvitation';
import CustomDatePicker from '../StyledComponents/CustomDatePicker';


function DatePicker(props) {



  return (
    <Fragment>
      <CustomDatePicker
        fullWidth
        margin="dense"
        clearable
        value={props.selectedDate}
        placeholder="10/10/2018"
        onChange={props.handleDateChange}
        format="MM/dd/yyyy"
        inputVariant="outlined"
        keyboardIcon={<InsertInvitationIcon color="primary"/>}
      />
    </Fragment>
  );
}

export default (DatePicker);