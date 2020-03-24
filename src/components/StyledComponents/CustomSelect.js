import styled from "styled-components";
import Select from '@material-ui/core/Select';


export default styled(Select)`
    && {
        background-color: #EBF1FD;
    },
    fieldset {
        border-radius: 6px;
        border: 0;
    },
    textarea, input {
        font-family: 'Roboto' !important;
        font-size: 14px !important;
    }
`;