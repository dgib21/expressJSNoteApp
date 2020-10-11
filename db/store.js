//create a class
//get notes, update notes, delete notes

const util = require("util"); 
const fs = require("fs"); 
const uuidv1 = require("uuidv1"); 

 const { json } = require("express");

//creates asynchronous versions of fs.read file and fs.write file 
const readFileAsync = util.promisify(fs.readFile); 
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
    //read method 
    read() {
        //reading from the db json file using utf encoding 
         return readFileAsync('./db/db.json', "utf8"); 

    }
//writing the note to json db file 
    write(addNote) {
        return writeFileAsync('./db/db.json', JSON.stringify(addNote)); 
    }

    //get note method 
    getNotes() {
         return this.read()
        .then(response => {
            let parseNotes 
           try{
               parseNotes = [].concat(JSON.parse(response)); 
           }
           catch(error){
                parseNotes = []
           } 
           return parseNotes; 

       })

        
    }

//taking in the note to add it to the json file(used write)
    addNote(noteObject) {

        const {title, text} = noteObject; 
      
        const  newNote = {
          title: title,
          text: text,
          //calling the uuid method to generate a random ID 
          id: uuidv1() 
      }
        

      return this.getNotes()
      .then(response => {

        //returns spreading the array we get from get notes and adds new note 
           return [...response,newNote]

      })
      .then(updatedNotes => this.write(updatedNotes))
      //single line arrow function
      .then(()=> newNote ) 
    }

    removeNote(id) {

        return this.getNotes()
        .then(response => response.filter(item => item.id != id))
        .then(filteredNotes => this.write(filteredNotes))
    }
}

module.exports = new Store(); 