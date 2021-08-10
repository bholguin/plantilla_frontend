import React from "react"
import ButtonCreate from "../../../00_utilities/button_create"
import TableApp from "../../../00_utilities/table/tableApp"
import Workspace from "../../../workspace"
import {useEmpresas} from "./hook"



const Empresas = () => {
    const {
        columns,
        empresas,
        createEmpresa
    } = useEmpresas()
 
    return(
        <Workspace>
            <TableApp columns={columns} data={empresas} />
            <ButtonCreate handleForm={createEmpresa} />
        </Workspace>
    )
}


export default Empresas