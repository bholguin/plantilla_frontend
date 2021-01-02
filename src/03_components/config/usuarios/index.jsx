import React, { useEffect, useMemo, memo } from 'react';
import { connect } from 'react-redux';
import TableApp from '../../../00_utilities/table/tableApp';
import { useColumnTable } from './table/usuarioTabla';
import * as actions from '../../../01_actions';
import Workspace from '../../../workspace';
import ButtonCreate from '../../../00_utilities/button_create';

const Usuario = memo((props) => {
    const { fetchUsuarios, usuarios } = props;
    useEffect(() => { fetchUsuarios(); }, [fetchUsuarios]);
    const columns = useColumnTable();
    const data = useMemo(() => usuarios, [usuarios]);
    return (
        <Workspace>
            <ButtonCreate />
            <TableApp columns={columns} data={data} />
        </Workspace>
    )
});

const mapPropsToState = (state) => { return { usuarios: state.usuarios } }

export default connect(mapPropsToState, actions)(Usuario);