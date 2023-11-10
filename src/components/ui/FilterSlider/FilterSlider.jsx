import {useEffect, useMemo} from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import styles from './FilterSlider.module.scss';

function FilterSlider({prefix, value, setValue, min, max}) {
    const checkMinValue = (value) => value >= min && value <= max ? value : min
    const checkMaxValue = (value) => value <= max ? value : max

    const {handleMinValueChange, handleMaxValueChange, handleSliderChange} = useMemo(
        () =>
            (
                {
                    handleSliderChange: (value) => setValue(
                            {
                                min: value[0],
                                max: value[1]
                            }
                        ),
                    handleMinValueChange: (e) => setValue(({...value, min: checkMinValue(+e.target.value)})),
                    handleMaxValueChange: (e) => setValue(({...value, max: checkMaxValue(+e.target.value)}))
                    }
            ), [setValue]);

    useEffect(() => {
        if (!value) setValue({
            min: checkMinValue(value?.min || min),
            max: checkMaxValue(value?.max || max)
        })
    }, [value]);

    if (!value) return <></>
    return (
        <div className={styles['filter-slider']}>
            <div className={styles[`filter-slider__inputbox`]}>
                <div>
                    <label className={styles[`filter-slider__prefix`]}>{prefix || `$`} </label>
                    <input
                        className={styles[`filter-slider__input`]}
                        type="text"
                        value={checkMinValue(value.min)}
                        onChange={handleMinValueChange}
                    />
                </div>
                –
                <div>
                    <label className={styles[`filter-slider__prefix`]}>{prefix}</label>
                    <input
                        className={styles[`filter-slider__input`]}
                        type="text"
                        value={checkMaxValue(value.max)}
                        onChange={handleMaxValueChange}
                    />
                </div>
            </div>
            <div className={styles[`filter-slider__sliderbar`]}>
                <Slider
                    range
                    min={min}
                    max={max}
                    value={[checkMinValue(value.min), checkMaxValue(value.max)]}
                    onChange={handleSliderChange}
                />
            </div>
            <div className={styles[`filter-slider__values`]}>
                <span className={styles[`filter-slider__min-value`]}>{prefix}{min}</span>
                <span className={styles[`filter-slider__max-value`]}>{prefix}{max}</span>
            </div>
        </div>
    );
}

export default FilterSlider;