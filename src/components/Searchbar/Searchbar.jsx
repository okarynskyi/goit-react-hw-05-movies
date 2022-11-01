import { useState } from 'react';
import css from './Searchbar.module.css'
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
        <form onSubmit={handleSubmit} className={css.form}>
            <input
                name="request"
                value={request}
                type="text"
                autoComplete="off"
                autoFocus
                onChange={handleChange}
                className={css.input}
                placeholder="Search movie"
            />
            <button type="submit" className={css.button}>
                <span>Search</span>
            </button>
        </form>
    );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.string,
};