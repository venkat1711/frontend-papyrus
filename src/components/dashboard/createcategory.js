import React from 'react';

const CategoryForm = ({ handleSubmit, name, setName }) => (
    <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label>name</label>
            <input
                type="text"
                className="form-control w-25"
                onChange={e => setName(e.target.value)}
                value={name}
                autoFocus
                required
            />

            <button className="btn btn-outline-primary mt-2">Save</button>
        </div>
    </form>
);

export default CategoryForm;