import React, { useEffect, useMemo, memo, useState } from 'react';
import { connect } from 'react-redux';
import TableApp from '../../../00_utilities/table/tableApp';
import { useColumnTable } from './table/usuarioTabla';
import {useFormUser} from './form/usuario_form';
import * as actions from '../../../01_actions';
import Workspace from '../../../workspace';
import ButtonCreate from '../../../00_utilities/button_create';
import CreateOrEdit from '../../../00_utilities/CreateOrEdit/index';

const Usuario = (props) => {
    const { fetchUsuarios, usuarios } = props;
    useEffect(() => { fetchUsuarios(); }, [fetchUsuarios]);
    const [columns] = useState(useColumnTable());
    const formuser = useFormUser();
    const data = useMemo(() => usuarios, [usuarios]);
    return (
        <Workspace>
            <ButtonCreate />
            <CreateOrEdit>
                {formuser}
            </CreateOrEdit>
            <TableApp columns={columns} data={data} />
        </Workspace>
    )
};

const mapPropsToState = (state) => { return { usuarios: state.usuarios } }

export default connect(mapPropsToState, actions)(Usuario);