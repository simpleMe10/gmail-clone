import React from 'react';
import './SendMail.css';
import CloseIcon from '@mui/icons-material/Close';
import MinimizeIcon from '@mui/icons-material/Minimize';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeMessage } from './features/mailSlice';
import { db } from './firebase';
import firebase from 'firebase';

function SendMail() {
  
  const { control, handleSubmit, formState: { errors } } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log(data);
    db.collection('emails').add({
      to: data.to,
      subject: data.subject,
      message: data.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    dispatch(closeMessage())
  };

  return (
    <div className='sendMail'>
      <div className='sendMail-header'>
        <h3>New Message</h3>
        <div className='icons'>
          <MinimizeIcon className='icon' />
          <OpenInFullIcon className='icon' />
          <CloseIcon onClick={() => dispatch(closeMessage())} className='icon sendMail-close' />
        </div>
      </div>

      {/* useForm for forms */}
      {/* npm install firebase */}
      {/* npm install -g firebase-tools */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name='to'
          control={control}
          render={({ field }) => (
            <>
            <input
              {...field}
              placeholder='Recipient'
              type='email'
            />
            {errors.to && <p className="error-message">Recipient is required!</p>}
          </>
        )}
        rules={{ required: 'Recipient is required' }}
      />

        <Controller
          name='subject'
          control={control}
          render={({ field }) => (
            <>
              <input
                {...field}
                placeholder='Subject'
                type='text'
              />
              {errors.subject && <p className="error-message">Subject is required!</p>}
            </>
          )}
          rules={{ required: 'Subject is required' }}
        />

        <Controller
          name='message'
          control={control}
          render={({ field }) => (
            <>
              <input
                {...field}
                type='tex
                t'
                className='sendMail-message'
              />
              {errors.message && <p className="error-message">Message is required!</p>}
            </>
          )}
          rules={{ required: 'Message is required' }}
        />

        <div className='sendMail-options'>
          <Button
            className='sendMail-send'
            variant='contained'
            color='primary'
            type='submit'
          >
            Send
          </Button>
          <DeleteIcon />
        </div>
      </form>
    </div>
  );
}

export default SendMail;
