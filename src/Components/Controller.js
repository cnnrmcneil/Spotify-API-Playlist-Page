import React from "react";
import { useDataLayerValue } from "./DataLayer";

const Controller = () => {
const [{ playing, devices }, dispatch] = useDataLayerValue()

    return(
        <div className="controller" ><h1>Controller</h1>
        <button onClick={() => {

            dispatch ({
                devices: devices.devices[0].is_active = true
            })

            dispatch({
                playing: true
            })
            console.log(devices.devices[0].is_active)
            console.log(devices)
        }}>Click to play</button></div>
    )
}

export default Controller