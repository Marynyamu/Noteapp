import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import { saveAs } from 'file-saver';
import { Document, Packer, Paragraph, TextRun } from 'docx';
import './Dashboard.css'; // Ensure to include your CSS styles

const Dashboard = () => {
  const [noteTitle, setNoteTitle] = useState('');
  const [noteContent, setNoteContent] = useState('');

  const handleSaveAsDocx = () => {
    // Create a document with the title and content
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  text: noteTitle,
                  bold: true,
                  size: 32, // Adjust size as needed
                }),
              ],
              heading: 'Heading1', // You can use different headings if needed
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: noteContent,
                  size: 24, // Adjust size as needed
                }),
              ],
            }),
          ],
        },
      ],
    });

    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, `${noteTitle || 'untitled'}.docx`);
    });
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






























