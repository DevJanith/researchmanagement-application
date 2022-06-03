import {
    Avatar,
    Button, Card, Checkbox, Container, Stack, Table, TableBody,
    TableCell, TableContainer,
    TablePagination, TableRow, Typography
} from '@mui/material';
import { color } from '@mui/system';

import { sentenceCase } from 'change-case';
import { filter } from 'lodash';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PageLayout from '../../../../components/Layout/PageLayout';
import Iconify from './Components/Iconify';
import Label from './Components/Label';
import Scrollbar from './Components/Scrollbar';
import SearchNotFound from './Components/SearchNotFound';
import { UserListHead, UserListToolbar, UserMoreMenu } from './sections/@dashboard/user';
// mock
import USERLIST from './_mock/user';

const TABLE_HEAD = [
    // { id: 'name', label: 'Name', alignRight: false },
    // { id: 'company', label: 'Company', alignRight: false },
    // { id: 'role', label: 'Role', alignRight: false },
    // { id: 'isVerified', label: 'Verified', alignRight: false },
    // { id: 'status', label: 'Status', alignRight: false },
    // { id: '' },

    { id: 'status', label: 'Status', align: 'center' },
    { id: 'groupid', label: 'Group NO', alignRight: false },
    // { id: 'leaderid', label: 'Leader IT_NO', alignRight: false },
    // { id: 'leader_email', label: 'Leader Email', alignRight: false },
    // { id: 'member1', label: 'Member #1 IT_NO', alignRight: false },
    // { id: 'member2', label: 'Member #2 IT_NO', alignRight: false },
    // { id: 'member3', label: 'Member #3 IT_NO', alignRight: false },
    // { id: 'membercount', label: 'Member Count', alignRight: false },
    { id: 'research_topic', label: 'Research Topic', alignRight: false },
    // { id: 'research_field', label: 'Research Field', alignRight: false },
    { id: 'description', label: 'Description', alignRight: false },
    { id: 'supervisorName', label: 'Supervisor Name', alignRight: false },
    { id: 'co_supervisorName', label: 'Co-Supervisor Name', alignRight: false },
    // { id: 'Created_Date', label: 'CreatedAt', alignRight: false },
    // { id: 'Updated_Date', label: 'UpdatedAt', alignRight: false },
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
        return filter(array, (topics) => topics.groupid.toLowerCase().indexOf(query.toLowerCase()) !== -1);
    }
    return stabilizedThis.map((el) => el[0]);
}

export default function CompositeTable(props) {
    const {
        topics,
        topicData,
        setTopicData,
        handleSubmit,
        clear,
        currentId,
        setCurrentId,
        value,
        setValue
    } = props;


    console.log(topics)
    console.log(USERLIST)


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
            const newSelecteds = topics.map((n) => n.name);
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

    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - topics.length) : 0;

    const filteredUsers = applySortFilter(topics, getComparator(order, orderBy), filterName);

    const isUserNotFound = filteredUsers.length === 0;

    return (
        <Container>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                <Typography variant="h4" gutterBottom>
                    Reserch Topic List
                </Typography>
                {/* <Button variant="contained" component={RouterLink} to="#" startIcon={<Iconify icon="eva:plus-fill" />}>
                        New User
                    </Button> */}
            </Stack>

            <Card>
                <UserListToolbar numSelected={selected.length} filterName={filterName} onFilterName={handleFilterByName} />

                <Scrollbar>
                    <TableContainer sx={{ Width: 500 }}>
                        <Table>
                            <UserListHead
                                order={order}
                                orderBy={orderBy}
                                headLabel={TABLE_HEAD}
                                rowCount={topics.length}
                                numSelected={selected.length}
                                onRequestSort={handleRequestSort}
                                onSelectAllClick={handleSelectAllClick}
                            />
                            <TableBody>
                                {filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                    // const { _id, status, groupid, leaderid, leader_email, member1, member2, member3, membercount, research_topic, research_field, description, supervisorName, co_supervisorName, Created_Date, Updated_Date } = row;
                                    const { _id, status, groupid, research_topic, description, supervisorName, co_supervisorName} = row;
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

                                            <TableCell align="center">
                                                {(status == "pending" ?
                                                    <>
                                                        <Button variant="contained" color="error" style={{ borderRadius: '25px', fontSize: '11px' }}>
                                                            pending
                                                        </Button>
                                                    </>
                                                    :
                                                    <>
                                                        <Button variant="contained" color="success" style={{ borderRadius: '25px', fontSize: '11px' }}>
                                                            accepted
                                                        </Button>
                                                    </>
                                                )}
                                            </TableCell>

                                            <TableCell component="left" > {groupid} </TableCell>
                                            {/* <TableCell component="left" > {leaderid} </TableCell>
                                            <TableCell component="left" > {leader_email} </TableCell>
                                            <TableCell component="left" > {member1} </TableCell>
                                            <TableCell component="left" > {member2} </TableCell>
                                            <TableCell component="left" > {member3} </TableCell>
                                            <TableCell component="left" > {membercount} </TableCell> */}
                                            <TableCell component="left" > {research_topic} </TableCell>
                                            {/* <TableCell component="left" > {research_field} </TableCell> */}
                                            <TableCell component="left" > {description} </TableCell>
                                            <TableCell component="left" > {supervisorName} </TableCell>
                                            <TableCell component="left" > {co_supervisorName} </TableCell>
                                            {/* <TableCell component="left" > {Created_Date} </TableCell>
                                            <TableCell component="left" > {Updated_Date} </TableCell> */}

                                            {/* <TableCell align="left">{company}</TableCell>
                                            <TableCell align="left">{role}</TableCell>
                                            <TableCell align="left">{isVerified ? 'Yes' : 'No'}</TableCell>
                                            <TableCell align="left">
                                                <Label variant="ghost" color={(status === 'banned' && 'error') || 'success'}>
                                                    {sentenceCase(status)}
                                                </Label>
                                            </TableCell> */}

                                            <TableCell align="right">
                                                <UserMoreMenu
                                                    row={row}
                                                    topics={topics}
                                                    topicData={topicData}
                                                    setTopicData={setTopicData}
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
                </Scrollbar>

                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={topics.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Card>
        </Container>

    );
}
