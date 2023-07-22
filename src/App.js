import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateNote from "./components/CreateNote";
import Note from "./components/Note";

function App() {
  // state
  const [addIteam, setAddIteam] = useState([]);

  const addNote = (note) => {
    setAddIteam(
      (previousData) => {
        return [...previousData, note];
      }
    )

  };

  const onDelete = (id) => {
    setAddIteam(
      (previousData) => {
        return addIteam.filter((currdata, indx) => { return indx !== id })
      }
    )
  }

  return (
    <>
      <Header />
      <CreateNote addNote={addNote} />

        
        {addIteam && addIteam.map((element, index) => {
          return <Note
            key={index}
            id={index}
            title={element.title}
            content={element.content}
            onDelete={onDelete}
          />
        })
        }
  

      <Footer />
    </>
  );
}

export default App;



