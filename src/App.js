import React, { useState , useEffect} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateNote from "./components/CreateNote";
import Note from "./components/Note";

function App() {
  // state
  const [addIteam, setAddIteam] = useState([]);

  useEffect(()=>{
    setAddIteam(JSON.parse(localStorage.getItem("userDataArr")))
  } , [addIteam])

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
    let userDataArr = JSON.parse(localStorage.getItem("userDataArr"))
    userDataArr.splice(id ,1)
    localStorage.setItem("userDataArr" , JSON.stringify(userDataArr));
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



