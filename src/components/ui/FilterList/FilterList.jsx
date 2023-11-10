import {useEffect, useState} from 'react';
import styles from './FilterList.module.scss';
import SearchBar from '../SearchBar/SearchBar.jsx';
import FilterItem from '../FilterItem/FilterItem.jsx';

function FilterList({ filterData, value, setValue }) {
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        if (!value) setValue([])
    }, [value]);
    const handleSearchChange = (text) => {
        setSearchText(text);
    };

    const filteredVariants = filterData.list_variants.filter((variant) =>
        variant.display_name.toLowerCase().includes(searchText.toLowerCase())
    );

    const showIcon = searchText.length > 0;

    if (!value) return <></>
    return (
        <div className={styles['filter-list']}>
            <div className={styles[`filter-list__content`]}>
            <SearchBar onSearchChange={handleSearchChange} />
            <ul className={styles[`filter-list__options`]}>
                {filteredVariants.length > 0 ? (
                    filteredVariants.map((variant) => {
                        const isSelected = value ? !!value.find((item) => item.unique_id === variant.unique_id) : false
                            return (
                        <FilterItem
                            key={variant.unique_id}
                            variant={variant}
                            displayConfiguration={showIcon ? 'icon' : 'name'}
                            isSelected={isSelected}
                            onVariantSelect={() => setValue(isSelected ? value.filter((item) => item.unique_id !== variant.unique_id) : [...value, variant])}
                            filterData={filterData}
                        />
                    )})
                ) : (
                    <p>По этим критериям поиска ничего не найдено</p>
                )}
            </ul>
            </div>
        </div>
    );
}

export default FilterList;