import FilterList from '../../ui/FilterList/FilterList.jsx';
import FilterSlider from '../../ui/FilterSlider/FilterSlider.jsx';
import styles from './FilterWidget.module.scss';
import { useState } from 'react';
import FilterAccordion from "../../ui/FilterAccordion/FilterAccordion.jsx";
import { useSelector } from "react-redux";
import { resetFilters } from "../../../redux/slices/filterSlice.js";

function FilterWidget() {
    const filters = useSelector((state) => state.filters);

    const [selectedFilters, setSelectedFilters] = useState({})

    console.log(selectedFilters)

    return (
        <div className={styles['filter-widget']}>
            <div className={styles[`filter-widget__header`]}>
                <span className={styles[`filter-widget__title`]}>Фильтры товаров</span>
            </div>
            <div className={styles[`filter-widget__content`]}>
                {filters.map((item) => (
                    <FilterAccordion
                        key={item.unique_id}
                        title={item.display_name}
                        selectedCount = {selectedFilters[item.unique_id] ? selectedFilters[item.unique_id].length : 0}
                        onResetFilters={resetFilters}
                        uniqueId={item.unique_id}
                    >
                        {item.type === 'list' ? (
                            <FilterList
                                filterData={item}
                                value={selectedFilters[item.unique_id]}
                                setValue={(value)=> setSelectedFilters((prev) => ({...prev, [item.unique_id]: value}))}
                            />
                        ) : item.type === 'slider' ? (
                            <FilterSlider
                              min={item.slider_min_value}
                              max={item.slider_max_value}
                              value={selectedFilters[item.unique_id]}
                              prefix={item.slider_value_prefix}
                              setValue={(value)=> setSelectedFilters((prev) => ({...prev, [item.unique_id]: value}))}
                            />
                        ) : <></>}
                    </FilterAccordion>
                ))}
            </div>
            <div className={styles['reset-block']}>
            <button
                onClick={() => setSelectedFilters({})}
                className={styles['reset-button']}
            >
                Сбросить все фильтры
            </button>
            </div>
        </div>
    );
}

export default FilterWidget;
