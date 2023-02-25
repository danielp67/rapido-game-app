import React, {useState} from 'react';

const SortedSlot = (props) => {

    const {slotIndex, setSelectedSlot, droppedCard} = props
    const [enter, setEnter] = useState(false)

    const dragEnter = () => {
        setSelectedSlot(slotIndex)
        setEnter(true)
    };

    const dragLeave = () => {
        setEnter(false)
    };

    if (enter) {
        return (
            <div className={`col-2 col-md-2 bg-secondary bg-opacity-50`}
                 onDragEnter={() => dragEnter()}
                 onDragLeave={() => dragLeave()}
            >
                <div className={`card sortedSlotCard border border-dark border-2 my-1 bg-${droppedCard[0].suit}`}>
                    <p className="my-auto fs-5 fw-bold">{droppedCard[0].value}</p>

                </div>
            </div>
        )

    } else {
        return (
            <div className={`col-2 col-md-2`}
                 onDragEnter={() => dragEnter()}
            >
                <div className={`card sortedSlotCard my-1 bg-${droppedCard[0].suit}`}>
                    <p className="t my-auto fs-5 fw-bold">{droppedCard[0].value}</p>

                </div>
            </div>
        )
    }

}


export default SortedSlot;