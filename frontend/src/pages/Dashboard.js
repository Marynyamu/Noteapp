import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import { saveAs } from 'file-saver';
import htmlDocx from 'html-docx-js/dist/html-docx';
import './Dashboard.css'; // Ensure to include your CSS styles

const Dashboard = () => {
  const [noteTitle, setNoteTitle] = useState('');
  const [noteContent, setNoteContent] = useState('');

  const handleSaveAsDocx = () => {
    const htmlContent = `
      <h1>${noteTitle}</h1>
      ${noteContent}
    `;
    const converted = htmlDocx.asBlob(htmlContent);
    saveAs(converted, `${noteTitle || 'untitled'}.docx`);
  };

  const handleClear = () => {
    setNoteTitle('');
    setNoteContent('');
  };

  return (
    <div className="dashboard">
      <div className="note-taking-area">
        <input
          type="text"
          placeholder="Note Title"
          value={noteTitle}
          onChange={(e) => setNoteTitle(e.target.value)}
          className="note-title-input"
        />
        <ReactQuill
          value={noteContent}
          onChange={setNoteContent}
          placeholder="Write your note here..."
          className="note-editor"
        />
        <div className="note-actions">
          <button onClick={handleSaveAsDocx}>Save as .docx</button>
          <button onClick={handleClear}>Clear Note</button>
        </div>
      </div>
      <div className="notes-list">
        {/* Display list of notes if applicable */}
      </div>
    </div>
  );
};

export default Dashboard;




































