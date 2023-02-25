import React, {useEffect} from "react";

const Timer = (props) => {

    const {time, setTime, stop, pause, timerOn} = props

    const refreshTime = () => {
        let tmpTime = time

         tmpTime++
        setTime(tmpTime++)
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            if(!stop && !pause && timerOn)
            {
                refreshTime()
            }
        }, 1000);

        return () => clearTimeout(timer);
    });


    return (
        <div className="row">
           <div className="col-8 fs-3">Rapido Game  </div>
            <div className="col-4 fs-3 text-end">
            <i className="fa fa-clock-o" aria-hidden="true"/>
            {timerOn ? " " + time +" s": " - "}
            </div>
        </div>
    )

};


export default Timer;