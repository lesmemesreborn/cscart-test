import { useState } from 'react';
import styles from './SearchBar.module.scss';
function SearchBar({ onSearchChange }) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (query) => {
        setSearchQuery(query);
        onSearchChange(query);
    };

    return (
        <div className={styles['search-bar']}>
                <input
                    type="search"
                    className={styles[`search-bar__input`]}
                    placeholder="Найти"
                    value={searchQuery}
                    onChange={(e) => handleSearchChange(e.target.value)}
                />
            </div>

    );
}

export default SearchBar;