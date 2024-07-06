import React from 'react';
import './Sidebar.css'
import { IconButton } from '@mui/material';
import { Button } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import SidebarOption from './SidebarOption';
import InboxIcon from '@mui/icons-material/Inbox';
import StarBorderPurple500RoundedIcon from '@mui/icons-material/StarBorderPurple500Rounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import SendIcon from '@mui/icons-material/Send';
import NoteIcon from '@mui/icons-material/Note';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux';
import { openMessage } from './features/mailSlice';

function Sidebar() {
  const dispatch = useDispatch();
  
  return (
    <div className='sidebar'>
      <Button onClick={() => dispatch(openMessage())} className='sidebar-compose' startIcon={<CreateIcon fontSize='large'/>}>Compose</Button>

      <SidebarOption  Icon={InboxIcon} title="Inbox" number={54}
      />
      <SidebarOption Icon={StarBorderPurple500RoundedIcon} title="Starred" number={54}
      />
      <SidebarOption Icon={AccessTimeRoundedIcon} title="Snoozed" number={54}
      />
      <SidebarOption Icon={SendIcon} title="Sent" number={54} selected={true}
      />
      <SidebarOption Icon={NoteIcon} title="Drafts" number={54}
      />
      <SidebarOption Icon={LabelImportantIcon} title="Important" number={54}/>
      <SidebarOption Icon={ExpandMoreIcon} title="More" number={54}
      />

      <div className='sidebar-footer'>
          <h3>Labels</h3>
          <IconButton>
              <AddIcon />
          </IconButton>
      </div>
    </div>
  )
}

export default Sidebar
