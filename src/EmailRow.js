import React from 'react'
import './EmailRow.css'
import { Checkbox, IconButton } from '@mui/material'
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { selectMail } from './features/mailSlice';
import { useDispatch } from 'react-redux';

function EmailRow({id, title, subject, description, time}) {
    // for web history so that if we click the back, it will go back to the previous page
  const history = useHistory();
  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(selectMail({
        id,
        title,
        subject,
        description,
        time,
    }))

    history.push('/mail')
  }

  return (
    // when you click the email on the screen, it will be directed to the path named /mail which is located on the app.js
    <div onClick={openMail} className='emailRow'>
        <div className='emailRow-option'>
            <Checkbox />
            <IconButton>
                <StarOutlineOutlinedIcon />
            </IconButton>
        </div>
        <h3 className='emailRow-title'>{title}</h3>
        <div className='emailRow-message'>
            <h4>{subject}{" "}
                <span className='emailRow-description'>
                    {`- ${description}`}
                </span>
            </h4>
        </div>
        <p className='emailRow-time'>
            {time}
        </p>
    </div>
  )
}

export default EmailRow
