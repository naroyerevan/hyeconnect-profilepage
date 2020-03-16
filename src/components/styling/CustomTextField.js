import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

export default styled(TextField)`
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