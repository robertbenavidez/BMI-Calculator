import React, { useState } from 'react'
import BMICalculator from './BMICalculator'

const BMI = () => {
    const [bmiValue, setBmiValue] = useState(0)
    return (
        <>
            <div className="calculator">
                <h3>Body Mass Index Calculator</h3>
                <div className='bmi-result'>
                    <div className='bmi-result-number'>
                        Body Mass index (BMI) = {bmiValue}
                    </div>
                    <div className={`bmi-category`}>
                        Healthy
                    </div>

                </div>
                <BMICalculator fetchBmiValue={setBmiValue}/>
            </div>
        </>
    )
}

export default BMI;
