import React, { useState, useEffect } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(storedNotes);
  }, []);

  const saveNotesToLocalStorage = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes));
  };

  const handleAddNote = () => {
    if (title && content) {
      const newNote = { id: Date.now(), title, content };
      const updatedNotes = [...notes, newNote];
      setNotes(updatedNotes);
      setTitle('');
      setContent('');
      saveNotesToLocalStorage(updatedNotes);
    }
  };

  const handleDeleteNote = (id) => {
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes);
    saveNotesToLocalStorage(updatedNotes);
  };

  const handleDownloadNote = (note) => {
    const element = document.createElement('a');
    const file = new Blob([note.content], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${note.title}.txt`;
    document.body.appendChild(element);
    element.click();
  };

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <p>Welcome to the dashboard!</p>
      <p>Hello Mary</p>
      <div className="note-taking">
        <h3>Notes</h3>
        <div className="note-form">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <button onClick={handleAddNote}>Add Note</button>
        </div>
        <div className="notes-list">
          {notes.map(note => (
            <div key={note.id} className="note-card">
              <div className="note-header">
                <h4>{note.title}</h4>
                <button onClick={() => handleDeleteNote(note.id)}>Delete</button>
                <button onClick={() => handleDownloadNote(note)}>Download</button>
              </div>
              <p>{note.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;




