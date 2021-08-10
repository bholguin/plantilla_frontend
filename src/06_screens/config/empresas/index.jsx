import React from "react"
import AlertDelete from "../../../00_utilities/alert_delete"
import ButtonCreate from "../../../00_utilities/button_create"
import TableApp from "../../../00_utilities/table/tableApp"
import Workspace from "../../../workspace"
import { useEmpresas, useColumnTable } from "./hook"



const Empresas = () => {
    const {
        open,
        empresas,
        onDelete,
        handleOpen,
        handleDelete,
        editEmpresa,
        createEmpresa
    } = useEmpresas()

    const {columns} = useColumnTable({handleDelete, editEmpresa})
    

    return (
        <Workspace>
            <AlertDelete open={open} onClose={handleOpen} onDelete={onDelete} />
            <TableApp columns={columns} data={empresas} />
            <ButtonCreate handleForm={createEmpresa} />
        </Workspace>
    )
}


export default Empresas