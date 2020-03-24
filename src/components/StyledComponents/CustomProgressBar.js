import styled from "styled-components";
import LinearProgress from '@material-ui/core/LinearProgress';

export default styled(LinearProgress)`
    &&{
        box-sizing: border-box;
        height: 16px;
        border: 1px solid #FFFFFF;
        border-radius: 17px;
        background-color: #D9DEE9;
    },
    .MuiLinearProgress-bar {
        border-radius: 17px;
    }

`;