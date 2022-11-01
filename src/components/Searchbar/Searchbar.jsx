import { useState } from 'react';
import PropTypes from 'prop-types';

export const Searchbar = ({ onSubmit, value }) => {
  const [request, setRequest] = useState(value);

  const handleChange = e => {
    setRequest(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (request.trim() === '') {
      return alert('Enter your request in the field');
    }

    onSubmit(request);
    setRequest(request);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="request"
          value={request}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          onChange={handleChange}
        />
        <button type="submit">
          <span>Search</span>
        </button>
      </form>
    </div>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.string,
};