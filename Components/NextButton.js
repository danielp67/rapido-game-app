import React from 'react';
import {Button} from "react-native";

const NextButton = (props)=> {

    const {nextCard} = props

        return (

            <Button type="button" className="btn btn-info btn-lg my-2"
                    onPress={nextCard}
                    color={"#0d6efd"}
                    title={"NEXT"}
            />
        )

}

export default NextButton;