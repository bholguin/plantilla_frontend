import React, { useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import TableApp from '../../../00_utilities/table/tableApp';
import { useColumnTable } from './table/usuarioTabla';
import * as actions from '../../../01_actions';
import Workspace from '../../../workspace';
import ButtonCreate from '../../../00_utilities/button_create';


const Usuario = (props) => {

    useEffect(() => {
        props.fetchUsuarios();
    }, []);
    const columns = useColumnTable();
    const data = useMemo(() => props.usuarios);
    return (
        <Workspace>
            <ButtonCreate/>
            <TableApp columns={columns} data={data} />
        </Workspace>
    )
}

function mapPropsToState(state) {
    return {
        usuarios: state.usuarios
    }
}

export default connect(mapPropsToState, actions)(Usuario);