import React from 'react'
import './Mail.css'
import { Avatar, IconButton } from '@mui/material'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArchiveIcon from '@mui/icons-material/Archive';
import ReportIcon from '@mui/icons-material/Report';
import DeleteIcon from '@mui/icons-material/Delete';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import AddTaskIcon from '@mui/icons-material/AddTask';
import DriveFileMoveIcon from '@mui/icons-material/DriveFileMove';
import LabelIcon from '@mui/icons-material/Label';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import PrintIcon from '@mui/icons-material/Print';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
import ReplyIcon from '@mui/icons-material/Reply';
import { useSelector } from 'react-redux';
import { selectOpenMail } from './features/mailSlice';
import { selectUser } from './features/userSlice';

function Mail() {
  const user = useSelector(selectUser);
  const history = useHistory(); 
  const selectMail = useSelector(selectOpenMail);

  return (
    <div className='mail'>
        <div className='mail-tools'>
            <div className='mail-toolsLeft'>
              {/* if we click the back arrow button, it will go back to the emailList */}
                <IconButton onClick={() => history.push("/")}>
                    <ArrowBackOutlinedIcon />
                </IconButton>
                <IconButton>
                    <ArchiveIcon/>
                </IconButton>
                <IconButton>
                    <ReportIcon/>
                </IconButton>
                <IconButton>
                    <DeleteIcon/>
                </IconButton>
                <IconButton>
                    <MarkEmailUnreadIcon/>
                </IconButton>
                <IconButton>
                    <AccessTimeFilledIcon/>
                </IconButton>
                <IconButton>
                    <AddTaskIcon/>
                </IconButton>
                <IconButton>
                    <DriveFileMoveIcon/>
                </IconButton>
                <IconButton>
                    <LabelIcon/>
                </IconButton>
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
                
            </div>
            <div className='mail-toolsRight'>
                <IconButton>
                    <ChevronLeftIcon />
                </IconButton>
                <IconButton>
                    <KeyboardArrowRightIcon />
                </IconButton>
            </div>
        </div>
        <div className='mail-body'>
            <div className='mail-bodyHeader'>
                <h2>{selectMail?.subject}</h2>
                <div className='main-bodyHeaderRight'>
                  <IconButton>
                    <PrintIcon className='mail-icon'/>
                  </IconButton>
                  <IconButton>
                    <OpenInNewIcon className='mail-icon'/>
                  </IconButton>
                </div>
            </div>
            <div className='mail-bodyMainHeader'>
                <div className='mail-account'>
                  <Avatar src={user?.photoUrl}/>
                  <h3>{user?.displayName}</h3>
                  <p>&lt;{selectMail?.title}&gt;</p>
                </div>
                {/* <p>to me
                  <span>
                    <ArrowDropDown />
                  </span>
                </p> */}
                <div className='mail-bodyIcons'>
                  <p>{selectMail?.time}</p>
                  <IconButton>
                      <StarBorderPurple500Icon className='mail-icon'/>
                  </IconButton>
                  <IconButton>
                      <ReplyIcon className='mail-icon' />
                  </IconButton>
                  <IconButton>
                    <MoreVertIcon className='mail-icon'/>
                  </IconButton>
                </div>
            </div>
            <div className='mail-message'>
                <p>{selectMail?.description}</p>
            </div>
        </div>
    </div>
  )
}

export default Mail
