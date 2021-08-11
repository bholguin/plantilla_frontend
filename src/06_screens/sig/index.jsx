import React from "react"
import Workspace from "../../workspace"
import {useSig} from "./hook"

const Sig = () => {
    useSig()
    return (
        <Workspace>
            <div>contenido del SIG</div>
        </Workspace>
    )
}

export default Sig