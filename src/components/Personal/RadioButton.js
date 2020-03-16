import React from "react";
import Typography from '@material-ui/core/Typography';



export default class GenderRadioButton extends React.Component {

    state = { selectedGender: "female" };


    handleRadioChange = (event) => {
        this.setState({ selectedGender: event.target.value });
    };




    render() {

        let content = "";
        const { selectedGender } = this.state;
        if (this.props.editable)
            content =
                (<div>

                </div>);
        else
            content =
                (<Typography>
                    {selectedGender}
                </Typography>);
        return (
            <div>
                {content}
            </div>
        );
    }
}