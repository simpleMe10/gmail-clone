import React, { useEffect, useState } from 'react'
import './EmailList.css'
import { Checkbox, IconButton } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import InboxIcon from '@mui/icons-material/Inbox';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import Section from './Section';
import EmailRow from './EmailRow';
import { db } from './firebase';


function EmailList() {
  const [ emails, setEmails] = useState([]);

  useEffect(() => {
    db.collection('emails').orderBy('timestamp','desc').onSnapshot(snapshot => setEmails(snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
    }))))
  }, [])

  return (
    <div className='emailList'>
        <div className='emailList-settings'>
            <div className='emailList-settingsLeft'>
              <Checkbox />
              <IconButton>
                  <ArrowDropDownIcon />
              </IconButton>
              <IconButton>
                  <RefreshIcon />
              </IconButton>
              <IconButton>
                  <MoreVertIcon />
              </IconButton>
            </div>

            <div className='emailList-settingsRight' >
                <IconButton>
                    <ChevronLeftIcon />
                </IconButton>
                <IconButton>
                  <ChevronRightIcon />
                </IconButton>
            </div> 
        </div>
        <div className='emailList-sections'>
            <Section Icon={InboxIcon}  title="Primary" color='black' selected/>
            <Section Icon={LocalOfferOutlinedIcon}  title="Promotions" color='#818181' selected={false} />
            <Section Icon={PeopleAltOutlinedIcon}  title="Social" color='#818181' />
        </div>

        <div className='emailList-list'>
            {emails.map(({id, data: { to, subject, message, timestamp }}) => (
                <EmailRow 
                    id={id}
                    key={id}
                    title={to}
                    subject={subject}
                    description={message}
                    time={new Date(timestamp?.seconds * 1000).toUTCString()}
                />
            ))}
        </div>
    </div>
  )
}

export default EmailList
