import { IconButton, ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteGroup } from "../../../../../../../../actions/group.action";
import Iconify from '../../../Components/Iconify';

export default function UserMoreMenu(props) {
  const {
    row,
    groupData,
    setGroupData,
    handleSubmit,
    clear,
    currentId,
    setCurrentId,
    value,
    setValue,
  } = props

  const dispatch = useDispatch();
  
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <IconButton ref={ref} onClick={() => setIsOpen(true)}>
        <Iconify icon="eva:more-vertical-fill" width={20} height={20} />
      </IconButton>

      <Menu
        open={isOpen}
        anchorEl={ref.current}
        onClose={() => setIsOpen(false)}
        PaperProps={{
          sx: { width: 200, maxWidth: '100%' },
        }}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem sx={{ color: 'text.secondary' }} onClick={(e) => { dispatch(deleteGroup(row._id)) }}>
          <ListItemIcon>
            <Iconify icon="eva:trash-2-outline" width={24} height={24} />
          </ListItemIcon>
          <ListItemText primary="Delete" primaryTypographyProps={{ variant: 'body2' }} />
        </MenuItem>

        <MenuItem to="#" sx={{ color: 'text.secondary' }}
          onClick={() => {
            setCurrentId(row._id)
            // setValue(2)
          }
          }>
          <ListItemIcon>
            <Iconify icon="eva:edit-fill" width={24} height={24} />
          </ListItemIcon>
          <ListItemText primary="Edit" primaryTypographyProps={{ variant: 'body2' }} />
        </MenuItem>
      </Menu>
    </>
  );
}
