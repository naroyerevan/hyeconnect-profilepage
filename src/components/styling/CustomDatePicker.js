import styled from "styled-components";
import { KeyboardDatePicker } from "@material-ui/pickers";


export default styled(KeyboardDatePicker)`
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