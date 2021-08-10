import React from 'react'
import PropTypes from "prop-types"
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import MaUTable from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useTable, useGlobalFilter, useAsyncDebounce } from 'react-table'
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles({
    root: {
        '& div': {
            width: '50%'
        }
    }
});



function GlobalFilterM({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
}) {
    const count = preGlobalFilteredRows.length
    const [value, setValue] = React.useState(globalFilter)
    const classes = useStyles();
    const onChange = useAsyncDebounce(value => {
        setGlobalFilter(value || undefined)
    }, 200)

    return (
        <span>
            <TextField
                id="search_table"
                label={`Search ${count} records...`}
                value={value || ""}
                style={{ width: '100%', marginBottom: '15px' }}
                type="search"
                variant="outlined"
                className={classes.root}
                onChange={e => {
                    setValue(e.target.value);
                    onChange(e.target.value);
                }}
            />
        </span>
    )
}

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: '#4d4343',
        color: theme.palette.common.white,
        fontSize: 14,
        padding: 5,
        fontWeight: 'bold'
    },
    body: {
        padding: 5,
        fontSize: 13
    },
}))(TableCell);


const StyledTableRow = withStyles((theme) => (
    {
        root: {
            padding: 0,
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,

            },
        },
    }
))(TableRow);

const TableApp = (props) => {

    const { columns, data } = props

    const {
        getTableProps,
        headerGroups,
        rows,
        prepareRow,
        setGlobalFilter,
        preGlobalFilteredRows,
        state
    } = useTable({
        columns,
        data,
    }, useGlobalFilter)

    return (
        <div>
            <GlobalFilterM
                preGlobalFilteredRows={preGlobalFilteredRows}
                globalFilter={state.globalFilter}
                setGlobalFilter={setGlobalFilter}
            />
            <TableContainer component={Paper}>
                <MaUTable padding='none' {...getTableProps()}>
                    <TableHead>
                        {headerGroups.map(headerGroup => (
                            <StyledTableRow {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                    <StyledTableCell {...column.getHeaderProps()}>
                                        {column.Header}
                                    </StyledTableCell>
                                ))}
                            </StyledTableRow>
                        ))}
                    </TableHead>
                    <TableBody>
                        {rows.map((row, i) => {
                            prepareRow(row)
                            return (
                                <StyledTableRow {...row.getRowProps()}>
                                    {row.cells.map(cell => {
                                        return (
                                          
                                                <StyledTableCell {...cell.getCellProps()}>
                                                    {cell.render('Cell')}
                                                </StyledTableCell>
                                                
                                        )
                                    })}
                                    <StyledTableCell>

                                    </StyledTableCell>
                                </StyledTableRow>
                            )
                        })}
                    </TableBody>
                </MaUTable>
            </TableContainer>
        </div>
    )
}

TableApp.propTypes = {
    columns: PropTypes.array,
    data: PropTypes.array
}

TableApp.defaultProps = {
    column: [],
    data: []
}

export default TableApp;