import React, { useState } from 'react';

const Add = () => {
  const [showAddForm, setShowAddForm] = useState(false);  // State to toggle the form visibility
  const [titleInputValue, setTitleInputValue] = useState('');
  const [directorInputValue, setDirectorInputValue] = useState('');
  const [budgetInputValue, setBudgetInputValue] = useState('');
  const [descriptionInputValue, setDescriptionInputValue] = useState('');
  const [genreInputValue, setGenreInputValue] = useState('');
  const [yearInputValue, setYearInputValue] = useState('');
  const [dateInputValue, setDateInputValue] = useState('');
  const [runtimeInputValue, setRuntimeInputValue] = useState('');
  const [summaryInputValue, setSummaryInputValue] = useState('');
  const [addApiResponse, setAddApiResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);  // Loading state
  const [errorMessage, setErrorMessage] = useState('');  // Error state for validation

  const url = 'http://localhost:3001';

  const handleAddButton = async (event) => {
    event.preventDefault();

    // Basic input validation before making the API call
    if (!titleInputValue || !directorInputValue || !budgetInputValue || !yearInputValue) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    const body = {
      title: titleInputValue,
      director: directorInputValue,
      budget: budgetInputValue,
      description: descriptionInputValue,
      genre: genreInputValue,
      year: yearInputValue,
      date: dateInputValue,
      runtime: runtimeInputValue,
      summary: summaryInputValue,
    };

    try {
      setIsLoading(true);  // Start loading state
      const response = await fetch(`${url}/addMovie`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        const data = await response.json();
        setAddApiResponse('Movie added successfully!');

        // Clear form inputs after successful submission
        setTitleInputValue('');
        setDirectorInputValue('');
        setBudgetInputValue('');
        setDescriptionInputValue('');
        setGenreInputValue('');
        setYearInputValue('');
        setDateInputValue('');
        setRuntimeInputValue('');
        setSummaryInputValue('');
        setErrorMessage('');  // Clear any error message
      } else {
        throw new Error('Failed to add movie');
      }
    } catch (error) {
      console.error('Error:', error);
      setAddApiResponse('Error: Failed to add movie.');
    } finally {
      setIsLoading(false);  // Stop loading state
    }
  };

  const handleShowForm = () => {
    setShowAddForm(!showAddForm);  // Toggle form visibility
    setAddApiResponse('');  // Clear the API response message when toggling
  };

  return (
    <div className="container text-center">
      <button onClick={handleShowForm} className="btn btn-info mb-4">
        {showAddForm ? 'Back to Options' : 'Show Add Movie Form'}
      </button>

      {showAddForm && (
        <form onSubmit={handleAddButton}>
          <h1 className="text-center font-monospace">Add Movie</h1>
          <p className="lead font-lato text-center">Fill out the form to add a new movie</p>

          {/* Error message display */}
          {errorMessage && (
            <p className="text-danger text-center">{errorMessage}</p>
          )}

          {/* Success or error response from API */}
          {addApiResponse && (
            <p className={`text-center mt-3 ${addApiResponse.includes('successfully') ? 'text-success' : 'text-danger'}`}>
              {addApiResponse}
            </p>
          )}

          <div className="row g-3">
            <div className="col-md-6">
              <label htmlFor="title" className="form-label">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                value={titleInputValue}
                onChange={(e) => setTitleInputValue(e.target.value)}
                placeholder="Enter movie title"
                required
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="director" className="form-label">Director</label>
              <input
                type="text"
                className="form-control"
                id="director"
                value={directorInputValue}
                onChange={(e) => setDirectorInputValue(e.target.value)}
                placeholder="Enter director's name"
                required
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="budget" className="form-label">Budget</label>
              <input
                type="number"
                className="form-control"
                id="budget"
                value={budgetInputValue}
                onChange={(e) => setBudgetInputValue(e.target.value)}
                placeholder="Enter budget"
                required
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="description" className="form-label">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                value={descriptionInputValue}
                onChange={(e) => setDescriptionInputValue(e.target.value)}
                placeholder="Enter description"
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="genre" className="form-label">Genre</label>
              <input
                type="text"
                className="form-control"
                id="genre"
                value={genreInputValue}
                onChange={(e) => setGenreInputValue(e.target.value)}
                placeholder="Enter genre"
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="year" className="form-label">Year</label>
              <input
                type="number"
                className="form-control"
                id="year"
                value={yearInputValue}
                onChange={(e) => setYearInputValue(e.target.value)}
                placeholder="Enter release year"
                required
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="date" className="form-label">Date</label>
              <input
                type="date"
                className="form-control"
                id="date"
                value={dateInputValue}
                onChange={(e) => setDateInputValue(e.target.value)}
                placeholder="Enter release date"
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="runtime" className="form-label">Runtime</label>
              <input
                type="number"
                className="form-control"
                id="runtime"
                value={runtimeInputValue}
                onChange={(e) => setRuntimeInputValue(e.target.value)}
                placeholder="Enter runtime (in minutes)"
              />
            </div>

            <div className="col-md-12">
              <label htmlFor="summary" className="form-label">Summary</label>
              <input
                type="text"
                className="form-control"
                id="summary"
                value={summaryInputValue}
                onChange={(e) => setSummaryInputValue(e.target.value)}
                placeholder="Enter brief summary"
              />
            </div>

            {/* Submit Button */}
            <div className="col-12 text-center mt-4">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isLoading}  // Disable button while loading
              >
                {isLoading ? 'Adding Movie...' : 'Add Movie'}
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default Add;
