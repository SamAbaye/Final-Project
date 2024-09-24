import { useState } from "react";

const Delete = () => {
    const [id, setId] = useState(''); // Movie ID input
    const [status, setStatus] = useState(''); // Status message
    const [showDeleteForm, setShowDeleteForm] = useState(false); // Toggle delete form visibility
    const [isLoading, setIsLoading] = useState(false); // Loading state

    const url = 'http://localhost:3001';

    const handleDelete = async (event) => {
        event.preventDefault(); // Prevent form submission

        if (!id) {
            setStatus('Please enter a valid movie ID.');
            return;
        }

        const confirmed = window.confirm(`Are you sure you want to delete the movie with ID ${id}?`);
        if (!confirmed) return;

        setIsLoading(true);

        try {
            const body = { movie_id: id };

            const response = await fetch(`${url}/deleteMovie`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });

            const data = await response.json();

            if (response.status === 404) {
                setStatus('Movie doesn\'t exist');
            } else if (!response.ok) {
                setStatus(data.status || 'An error occurred');
            } else {
                setStatus('Movie deleted successfully!');
                setId(''); // Reset movie ID input after successful deletion
            }
        } catch (error) {
            console.error('Error details:', error);
            setStatus('Failed to delete movie. Please try again.');
        }

        setIsLoading(false);
    };

    // Function to show the delete form
    const handleShowDeleteForm = () => {
        setShowDeleteForm(true);
    };

    // Function to go back to the initial state (show only the Enable button)
    const handleBack = () => {
        setShowDeleteForm(false); // Hide the delete form and go back
        setStatus(''); // Clear status message
        setId(''); // Clear movie ID input
    };

    return (
        <div className="container mt-5">
            {/* Button to enable the delete form */}
            {!showDeleteForm && (
                <div className="text-center">
                    <button className="btn btn-info mb-4" onClick={handleShowDeleteForm}>
                    {showDeleteForm ? 'Back to Options' : 'Show Delete Movie Form'}
                    </button>
                </div>
            )}

            {/* Conditionally show the delete form after clicking the button */}
            {showDeleteForm && (
                <form onSubmit={handleDelete}>
                    <h1 className="text-center font-monospace">Delete Movie</h1>
                    <p className="lead font-lato text-center">Enter Movie ID to delete</p>

                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <label htmlFor="movieId" className="form-label">Movie ID</label>
                            <input
                                type="text"
                                className="form-control"
                                id="movieId"
                                value={id}
                                onChange={(e) => setId(e.target.value)}
                                placeholder="Enter Movie ID"
                            />
                        </div>

                        <div className="col-md-12 text-center mt-4">
                            <button
                                type="submit"
                                className="btn btn-danger"
                                disabled={!id || isLoading} // Disable button while loading or if no ID
                            >
                                {isLoading ? 'Deleting...' : 'Delete'}
                            </button>
                        </div>
                    </div>

                    {/* Status message */}
                    <p className={`text-center mt-3 ${status.includes('successfully') ? 'text-success' : 'text-danger'}`}>
                        Status: {status}
                    </p>

                    {/* Back button */}
                    <div className="text-center mt-3">
                        <button className="btn btn-secondary" onClick={handleBack}>
                            Back
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default Delete;
