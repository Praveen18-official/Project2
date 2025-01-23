import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactQuill from 'react-quill'; // Import the ReactQuill component
import 'react-quill/dist/quill.snow.css'; // Import the default theme for ReactQuill

function App() {
  const [editorContent, setEditorContent] = useState(''); // State for editor content

  const handleChange = (value) => {
    setEditorContent(value); // Update editor content when changed
  };

  const handleSave = () => {
    // Simulate saving the document (you can replace this with actual saving logic)
    alert('Document Saved');
    console.log('Document Content:', editorContent); // For demonstration, log content to console
  };

  return (
    <div className="container mt-5" style={{ backgroundColor: '#e9ecef', minHeight: '100vh' }}>
      {/* Header with blue background and white text */}
      <h1 className="text-center mb-4" style={{
        color: '#ffffff',
        backgroundColor: '#007bff', 
        padding: '20px', 
        borderRadius: '8px'
      }}>
        Online Document Editor
      </h1>

      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          {/* Card with a light blue border and shadow */}
          <div className="card" style={{
            backgroundColor: '#ffffff', 
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
            borderRadius: '8px', 
            borderLeft: '5px solid #007bff' // Adding blue accent border
          }}>
            <div className="card-body" style={{
              backgroundColor: '#f8f9fa', 
              padding: '20px',
            }}>
              {/* The rich text editor */}
              <ReactQuill
                value={editorContent}
                onChange={handleChange}
                placeholder="Start typing your document..."
                modules={{
                  toolbar: [
                    [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
                    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                    [{ 'align': [] }],
                    ['bold', 'italic', 'underline'],
                    ['link', 'image'],
                    [{ 'color': [] }, { 'background': [] }],
                    ['blockquote', 'code-block'],
                    ['undo', 'redo']
                  ],
                }}
                style={{
                  height: '400px', // Make the editor taller
                  border: '1px solid #ced4da', // Add a border for better UI
                  borderRadius: '8px', // Rounded corners
                  padding: '10px', // Padding for text inside the editor
                  backgroundColor: '#ffffff', // White background for the editor itself
                }}
                className="editor" // Custom class for the editor
              />

              {/* Save Button with blue background */}
              <div className="text-center mt-4">
                <button className="btn btn-lg" onClick={handleSave} style={{
                  backgroundColor: '#007bff', 
                  borderColor: '#007bff', 
                  borderRadius: '8px', 
                  color: '#ffffff'
                }}>
                  Save Document
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
