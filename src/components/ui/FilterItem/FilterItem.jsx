import styles from './FilterItem.module.scss';


function FilterItem({ variant, displayConfiguration, isSelected, onVariantSelect }) {
    const shouldDisplayIcon = displayConfiguration === 'icon' && variant.display_icon;

    return (
        <li className={styles['filter-item']}>
            <label className={styles[`filter-item__label`]}>
                <input
                    type="checkbox"
                    className={styles[`filter-item__input`]}
                    onChange={onVariantSelect}
                    checked={isSelected}
                />
                {shouldDisplayIcon ? (
                    <span className={styles[`filter-item__icon`]}>{variant.display_icon}</span>
                ) : (
                    variant.display_name
                )}
            </label>
        </li>
    );
}

export default FilterItem;