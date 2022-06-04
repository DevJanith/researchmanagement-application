import {
    Button, Card, Checkbox, Stack, Table, TableBody,
    TableCell, TableContainer,
    TablePagination, TableRow, Typography
} from '@mui/material';
import { filter } from 'lodash';
import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Iconify from './Components/Iconify';
import SearchNotFound from './Components/SearchNotFound';
import { UserListHead, UserListToolbar, UserMoreMenu } from './sections/@dashboard/user';
// mock
// import USERLIST from './_mock/user';

const TABLE_HEAD = [
    { id: 'groupName', label: 'Group Name', alignRight: false },
    { id: 'memberCount', label: 'Member Count', alignRight: false },
    { id: 'states', label: 'Status', alignRight: false },
    { id: 'createsAt', label: 'Created At', alignRight: false },
    { id: 'updatedAt', label: 'Updated At', alignRight: false },
    // { id: '' },
];

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    if (query) {
        return filter(array, (data) => data.groupName.toLowerCase().indexOf(query.toLowerCase()) !== -1);
    }
    return stabilizedThis.map((el) => el[0]);
}

export default function CompositeTable(props) {

    const {
        value,
        setValue,
        groups,
        groupData,
        setGroupData,
        handleSubmit,
        clear,
        currentId,
        setCurrentId
    } = props

    const [data, setData] = useState([])

    useEffect(() => {
        if (groups) {
            try {
                setData(groups)
            } catch (error) {
                console.log(error)
            }
        }
    }, [groups])


    const [page, setPage] = useState(0);

    const [order, setOrder] = useState('asc');

    const [selected, setSelected] = useState([]);

    const [orderBy, setOrderBy] = useState('name');

    const [filterName, setFilterName] = useState('');

    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = data.map((n) => n.name);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];
        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
        }
        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleFilterByName = (event) => {
        setFilterName(event.target.value);
    };

    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

    const filteredUsers = applySortFilter(data, getComparator(order, orderBy), filterName);

    const isUserNotFound = filteredUsers.length === 0;

    return (
        <>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                <Typography variant="h5" gutterBottom>
                    Group Management
                </Typography>
                <Button variant="contained" component={RouterLink} to="#" startIcon={<Iconify icon="eva:plus-fill" />} onClick={() => { setValue(1) }}>
                    Create Group
                </Button>
            </Stack>

            <Card>
                <UserListToolbar numSelected={selected.length} filterName={filterName} onFilterName={handleFilterByName} />

                {/* <Scrollbar> */}
                <TableContainer sx={{ minWidth: 800 }}>
                    <Table>
                        <UserListHead
                            order={order}
                            orderBy={orderBy}
                            headLabel={TABLE_HEAD}
                            rowCount={data.length}
                            numSelected={selected.length}
                            onRequestSort={handleRequestSort}
                            onSelectAllClick={handleSelectAllClick}
                        />
                        <TableBody>
                            {filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                const { _id, groupName, memberCount, states, createdAt, updatedAt } = row;
                                const isItemSelected = selected.indexOf(_id) !== -1;

                                return (
                                    <TableRow
                                        hover
                                        key={_id}
                                        tabIndex={-1}
                                        role="checkbox"
                                        selected={isItemSelected}
                                        aria-checked={isItemSelected}
                                    >
                                        <TableCell padding="checkbox">
                                            <Checkbox checked={isItemSelected} onChange={(event) => handleClick(event, _id)} />
                                        </TableCell>
                                        <TableCell align="left">{groupName}</TableCell>
                                        <TableCell align="left">{memberCount}</TableCell>
                                        <TableCell align="left">{states == 1 ? 'active' : 'de-active'}</TableCell>
                                        <TableCell align="left">{createdAt}</TableCell>
                                        <TableCell align="left">{updatedAt}</TableCell>

                                        <TableCell align="right">
                                            <UserMoreMenu
                                                row={row}
                                                groupData={groupData}
                                                setGroupData={setGroupData}
                                                handleSubmit={handleSubmit}
                                                clear={clear}
                                                currentId={currentId}
                                                setCurrentId={setCurrentId}
                                                value={value}
                                                setValue={setValue}
                                            />
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                            {emptyRows > 0 && (
                                <TableRow style={{ height: 53 * emptyRows }}>
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>

                        {isUserNotFound && (
                            <TableBody>
                                <TableRow>
                                    <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                                        <SearchNotFound searchQuery={filterName} />
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        )}
                    </Table>
                </TableContainer>
                {/* </Scrollbar> */}

                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={data.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Card>
        </>
    );
}
