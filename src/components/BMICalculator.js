import React, { useState, useEffect } from 'react'
import FormInput from './FormInput'

const BMICalculator = () => {
    const [heightUnit, setHeightUnit] = useState('cm');
    const [weightUnit, setWeightUnit] = useState('kg');
    const [unit, setUnit] = useState('Metric');
    const [count, setCount] = useState({
        heightCount: '0',
        inchesCount: '0',
        weightCount: '0',
    });
    // destructured Keys from count object
    const { heightCount, inchesCount, weightCount} = count

    useEffect(() => {
        

    }, [])

    const onChangeInput = e => {
        const {name, value} = e.target;
        console.log(e.target)
        setCount(prevState => ({...prevState, [name]: value}))
    }

    const onSelectTag = e => {
        setUnit(e.target.value);
        if (e.target.value === "Metric") {
            setHeightUnit("cm");
            setWeightUnit("kg");
        } else {
            setHeightUnit("ft");
            setWeightUnit("lbs")
        }
    }

    const resetFields = e => {
        e.preventDefault();
        setUnit('Metric');
        setCount({
            heightCount: '0',
            inchesCount: '0',
            weightCount: '0',
        })
        setHeightUnit("cm");
        setWeightUnit("kg");
    }

    return (
        <>
        <div className='bmi-inputs'>
            <div className='input-fields'>
                <div>
                    <span className='label-unit'>Unit</span>
                    <div className='unit'>
                        <select
                            name='unit'
                            value={unit}
                            onChange={onSelectTag}
                            className='form-control form-control-sm'
                        >
                            <option value='Metric'>Metric</option>
                            <option value='Imperial'>Imperial</option>
                        </select>
                    </div>
                </div>
                <FormInput
                    type="text"
                    name="heightCount"
                    title={`Height (${heightUnit})`}
                    value={heightCount}
                    onChange={onChangeInput}
                 />
                {
                    unit === 'Imperial' ? 
                    <FormInput
                       type="text"
                       name="inchesCount"
                       title={` (in)`}
                       value={inchesCount}
                       onChange={onChangeInput}
                    />
                    : ''
                }

                 <FormInput
                    type="text"
                    name="weightCount"
                    title={`Weight (${weightUnit})`}
                    value={weightCount}
                    onChange={onChangeInput}
                 />
                 
            </div>
            <button className='button' type='submit' onClick={resetFields}>
                Reset
            </button>
        </div>
        </>
    )
}

export default BMICalculator
