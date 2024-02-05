/** lots of things for me to learn from, most of https://legacy.reactjs.org/docs/forms.html for example was very helpful */
import React, { useState } from 'react';

//barren form field
const Form = () => {
  const [formData, setFormData] = useState({
    email: '',
    genre: '',
    authorName: '',
    document: null,
  });

  //for taking filled in form bits
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //for dealing with the actual submission
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      document: file,
    });
  };

  //eventually this stuff will go somewhere, but not yet lol
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  //the form setup itself
  return (
    <div>
    <h2>Prologue Submissions</h2>
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Submission Genre:
        <input
          type="text"
          name="genre"
          value={formData.genre}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Author Name:
        <input
          type="text"
          name="authorName"
          value={formData.authorName}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Upload Submisson:
        <input
          type="file"
          name="document"
          onChange={handleFileChange}
          accept=".pdf, .doc, .docx"
          required
        />
      </label>

      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default Form;
