import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';


export default function CreateNote(props) {

    const [expand, setExpand] = useState(false)


    // create state
    const [note, setNote] = useState({
        title:"",
        content:""
    });

    // setlocal storage function
    function setLocalStorageItem(note){
        if(localStorage.getItem("userDataArr")){
            let userDataArr = JSON.parse( localStorage.getItem("userDataArr") )
            userDataArr.push(note);
            localStorage.setItem("userDataArr" , JSON.stringify(userDataArr));
        }else{
            let userDataArr = [];
            userDataArr.push(note);
            localStorage.setItem("userDataArr" , JSON.stringify(userDataArr));
        }
    }


    //onchange function
    const InputEvent = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setNote(
            (previousData) => {
                return {...previousData, [name] : value}
            }
        )
    };

    //add iteam function
    const addEvent= (event) => {
        event.preventDefault();
        props.addNote(note);
        setLocalStorageItem(note);

        setNote({
            title:"",
            content:""
        })
        
    };

    // expand function
    const expandIt = () => {
        setExpand(true)
    }

    // unexpand function
    const unExpandIt = () => {
        setExpand(false)
    }




    return (
        <>
        <div className='main_note' onDoubleClick={unExpandIt}>
            <form>
            {expand? <input type="text" name="title" value={note.title} onChange={InputEvent} placeholder="Title" autoComplete='off' /> : null}
                    <textarea rows="" name="content" column="" value={note.content} onChange={InputEvent} onClick={expandIt} placeholder="Enter a note"/>
            {expand? <Button onClick={addEvent}> <AddIcon className='plus_sign'/> </Button> : null }
            </form>
        </div>

        </>
    )
}
