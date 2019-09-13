import storage from '../mvc/storage';

class Notepad {
    constructor(notes = []) {
      this._notes = notes;
    }
   
    get notes() {
      return this._notes;
    }
    // get notes() {
    //   return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve(this._notes);
    //     }, 0);
    //   })
    // }
  
    // findNoteById(id) {
    //   return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve(this._notes.find(el => el.id === id));
    //     }, 50);
    //   })
    // }
  //  return Promise.resolve(this._notes.find(el => el.id === id));
    findNoteById(id) {
      return (this._notes.find(el => el.id === id));
    }

    saveNote(note) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          this._notes.push(note);
          storage.save("key-note", this._notes);
          resolve(note);
        }, 200)
      })
    }
  
    deleteNote(id) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          this._notes = this._notes.filter(el => el.id !== id);
          storage.save("key-note", this._notes);
          resolve(this._notes);
        }, 300)
      })
    }
  
    updateNoteContent(id, updatedContent) {
          Object.assign(this.findNoteById(id), updatedContent);
          return(this);
    }
//     updateNoteContent(id, updatedContent) {
//       return new Promise((resolve,reject) => {
//         setTimeout(() => {
//           (Object.assign(this.findNoteById(id), updatedContent));
//           resolve(this);
//         }, 100);
//       })
// }

    updateNotePriority(id, updatePriority) {
          this.findNoteById(id).priority = updatePriority;
          return(this);
    }
//     updateNotePriority(id, updatePriority) {
//       return new Promise((resolve, reject) => {
//         this.findNoteById(id).priority = updatePriority;
//         resolve(this);
//       })
// }

    filterNotesByQuery(query) {
      return this._notes.filter(el => el.title.toLowerCase().includes(query) ||
      el.body.toLowerCase().includes(query));
    }
    // filterNotesByQuery(query) {
    //   return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve(this._notes.filter(el => el.title.toLowerCase().includes(query) ||
    //       el.body.toLowerCase().includes(query)));
    //     }, 50);
    //   })
    // }

    filterNotesByPriority(priority) {
      return this._notes.filter(el => el.priority === priority);
    }
    // filterNotesByPriority(priority) {
    //   return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve(this._notes.filter(el => el.priority === priority));
    //     }, 50);
    //   })
    // }
  }

  export default Notepad;