import React, { useState } from 'react'
import BMICalculator from './BMICalculator'

const BMI = () => {
    const [bmiValue, setBmiValue] = useState(0);

    // const getBmiClass = bmi => {
    //     if (bmi >= 1 && bmi <= 18.5) return 'Underweight';
    //     if (bmi >= 18.5 && bmi <= 24.9) return 'Normal Weight';
    //     if (bmi >= 24.9 && bmi <= 29.9) return 'Overweight';
    //     if (bmi >= 30) return 'Obese';
    // }

    //const bmiCategory = getBmiClass(bmiValue);
    //console.log(bmiCategory)
    return (
        <>
            <div className="calculator">
                <h3>Body Mass Index Calculator</h3>
                <div className='bmi-result'>
                    <div className='bmi-result-number'>
                        Body Mass index (BMI) = {bmiValue}
                    </div>
                    <div className={`bmi-category`}>
                        healthy
                    </div>

                </div>
                <BMICalculator getBmiValue={setBmiValue} />
            </div>
        </>
    )
}

export default BMI;
