import styles from './FilterAccordion.module.scss';
import {useState} from "react";
function FilterAccordion({ title, children, selectedCount }) {
    const [isOpen, setIsOpen] = useState(true)
    const handleToggleAccordion = () => {
        setIsOpen(!isOpen)
    };

    return (
        <div className={styles['filter-accordion']}>
            <div className={styles[`filter-accordion__header`]} onClick={handleToggleAccordion}>
               <span>
                    {title} { selectedCount > 0 && `(${selectedCount})` }
               </span>
                <span>
                    {isOpen ? '⮪' : '⮫'}
                </span>
            </div>
            {isOpen && (
                <div className={styles[`filter-accordion__content`]}>
                    {children}
                </div>
            )}
        </div>
    );
}

export default FilterAccordion;