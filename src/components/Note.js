import React from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function Note(props) {

    // delete iteam button
    const deleteNote = () => {
        props.onDelete(props.id)
    };

    return (
        <>
            <div className="note">
                <h1> {props.title} </h1>
                <br/>
                <p> {props.content} </p>
                <button className='btn' onClick={deleteNote} data-cy="cypress-delete">
                <DeleteOutlineIcon className='deleteIcon'/>
                </button>
            </div>
        </>
    )
}
