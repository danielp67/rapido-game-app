import React from 'react';
import SortedSlot from "./SortedSlot";

const DropZone = (props) => {

    const {setSelectedSlot, droppedCard} = props

    return (
        <div className="row bg-secondary bg-opacity-25 text-center">

                {
                    droppedCard.map((mapping, index) => {
                      return(
                        <SortedSlot
                            key={index}
                            slotIndex={index}
                            setSelectedSlot={setSelectedSlot}
                            droppedCard={droppedCard[index]}
                        />
                      )
                    })
                }

        </div>
    )

}


export default DropZone;