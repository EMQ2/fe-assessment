import React, { useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const Form = () => {
  // Fetch the form schema from the server
  const { data: schema, loading, error } = useFetch('http://localhost:5001/form-schema');

  // Get the navigate function from react-router-dom
  const navigate = useNavigate();

  // Render the appropriate input field based on the field type
  const renderField = useCallback((field) => {
    switch (field.type) {
      case 'text':
        return <input className="form-control" type="text" name={field.name} required={field.required} />;
      case 'number':
        return <input className="form-control" type="number" name={field.name} required={field.required} />;
      case 'checkbox':
        return <input className="form-check-input" type="checkbox" name={field.name} />;
      default:
        return null;
    }
  }, []);

  // Handle form submission
  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    console.log('Form submitted'); // Debugging log
    navigate('/confirmation');
  }, [navigate]);

  // Generate the form fields based on the schema
  const formFields = useMemo(() => {
    return schema ? schema.fields.map((field) => (
      <div className="mb-3" key={field.name}>
        <label className="form-label">{field.label}</label>
        {renderField(field)}
      </div>
    )) : null;
  }, [schema, renderField]);

  // Show loading message while fetching the schema
  if (loading) return <p>Loading...</p>;

  // Show error message if there was an error fetching the schema
  if (error) return <p>Error loading form schema</p>;

  // Render the form
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Dynamic Form</h2>
      <form onSubmit={handleSubmit}>
        {formFields}
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Form;
