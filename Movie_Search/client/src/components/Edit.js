import { useState } from "react";

const Edit = () => {

    const [movie_id, setMovie_id] = useState('');
    const [title, setTitle] = useState('');
    const [director, setDirector] = useState('');
    const [description, setDescription] = useState('');
    const [genre, setGenre] = useState('');
    const [year, setYear] = useState('');

    const [showEditForm, setShowEditForm] = useState(false);
    const [status, setStatus] = useState('');

    const url = 'http://localhost:3001';

    const handleEditButton = async (event) => {
        event.preventDefault(); // This prevents the form from submitting and reloading the page    

        const body = {
            movie_id: movie_id,
            title: title,
            director: director,
            description: description,
            genre: genre,
            year: year
        };

        try {   
            const response = await fetch(`${url}/editMovie`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });

            if (response.ok) {
                alert('Movie updated successfully');
                // Optionally, you can redirect the user to a different page or perform additional actions
            } else {
                alert('Failed to update movie');
            }
        }
        catch (error) {
            console.error('Error:', error);
            alert('An error occurred while updating the movie');
        }
        window.location.reload();
    };

    const handleShowEditForm = () => {
        setShowEditForm(true);
    };

    // Function to go back to the initial state (show only the Enable button)
    const handleBack = () => {
        setShowEditForm(false); // Hide the delete form and go back
        setStatus(''); // Clear status message   
    };
    return (
        <div className="container mt-5">
             {/* Button to enable the delete form */}
             {!showEditForm && (
                <div className="text-center">
                    <button className="btn btn-info" onClick={handleShowEditForm}>
                    {showEditForm ? 'Back to Options' : 'Show Edit Movie Form'}
                    </button>
                </div>
            )}
            {showEditForm && (
            <>
            <h1 className="text-center font-monospace">Edit Movie</h1>
            <p className="lead font-lato text-center">Enter Movie ID to edit</p>
    
            {/* Form content */}
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <form className="row g-3">
                        
                        {/* Movie ID */}
                        <div className="col-md-6">
                            <label htmlFor="movie_id" className="form-label">Movie ID</label>
                            <input
                                className="form-control"
                                type="text"
                                value={movie_id}
                                onChange={(e) => setMovie_id(e.target.value)}
                                placeholder="Movie ID"
                            />
                        </div>
    
                        {/* Title */}
                        <div className="col-md-6">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input
                                className="form-control"
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Title"
                            />
                        </div>
    
                        {/* Director */}
                        <div className="col-md-6">
                            <label htmlFor="director" className="form-label">Director</label>
                            <input
                                className="form-control"
                                type="text"
                                value={director}
                                onChange={(e) => setDirector(e.target.value)}
                                placeholder="Director"
                            />
                        </div>
    
                        {/* Description */}
                        <div className="col-md-6">
                            <label htmlFor="description" className="form-label">Description</label>
                            <input
                                className="form-control"
                                type="text"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Description"
                            />
                        </div>
    
                        {/* Genre */}
                        <div className="col-md-6">
                            <label htmlFor="genre" className="form-label">Genre</label>
                            <input
                                className="form-control"
                                type="text"
                                value={genre}
                                onChange={(e) => setGenre(e.target.value)}
                                placeholder="Genre"
                            />
                        </div>
    
                        {/* Year */}
                        <div className="col-md-6">
                            <label htmlFor="year" className="form-label">Year</label>
                            <input
                                className="form-control"
                                type="text"
                                value={year}
                                onChange={(e) => setYear(e.target.value)}
                                placeholder="Year"
                            />
                        </div>
    
                        {/* Button */}
                        <div className="col-12 text-center mt-4">
                            <button className="btn btn-primary mb-2" onClick={handleEditButton} style={{ width: '100px'}}>Edit</button>
                        </div>
                        <p className={`text-center mt-1 ${status.includes('successfully') ? 'text-success' : 'text-danger'}`}>
                        Status: {status}
                    </p>
                    </form>
                </div>
                <div className="text-center mt-3">
                        <button className="btn btn-secondary" onClick={handleBack}>
                            Back
                        </button>
                </div>
            </div>
            </>
            )}
        </div>
    );
}

export default Edit;