import styled from "styled-components";
import MuiPhoneNumber from 'material-ui-phone-number';

export default styled(MuiPhoneNumber)`
    && {
        background-color: #EBF1FD;
    },
    fieldset {
        border-radius: 6px;
    },
    textarea, input {
        font-family: 'Roboto' !important;
        font-size: 14px !important;
    }
`;