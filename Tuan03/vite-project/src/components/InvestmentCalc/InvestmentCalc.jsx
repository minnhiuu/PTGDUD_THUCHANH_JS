import React, { useState } from 'react';
import './InvestmentCalc.css';

export default function InvestmentCalc() {
    const [investment, setInvestment] = useState('');
    const [rate, setRate] = useState('');
    const [goal, setGoal] = useState('');
    const [years, setYears] = useState(null);
    const [growthList, setGrowthList] = useState([]);

    const calculateYears = (e) => {
        e.preventDefault();

        const invest = parseFloat(investment);
        const interestRate = parseFloat(rate) / 100;
        const target = parseFloat(goal);

        const numYears = Math.log(target / invest) / Math.log(1 + interestRate);
        setYears(Math.ceil(numYears));

        let tempList = [];
        let currentAmount = invest;
        for (let i = 1; i <= Math.ceil(numYears); i++) {
            currentAmount *= (1 + interestRate);
            tempList.push({ year: i, amount: currentAmount.toFixed(2) });
        }
        setGrowthList(tempList);
    };

    return (
        <form onSubmit={calculateYears}>
            <div className="box-img">
                <img src="./lovepik-financial-investment-png-image_401202536_wh1200.png" alt="" />
            </div>
            <div className="box-investment">

                <label htmlFor="invest">Invest: </label>
                <input
                    type="number"
                    id="invest"
                    value={investment}
                    onChange={(e) => setInvestment(e.target.value)}

                />

                <label htmlFor="rate">Rate(%): </label>
                <input
                    type="number"
                    id="rate"
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}

                />

                <label htmlFor="goal">Goal: </label>
                <input
                    type="number"
                    id="goal"
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}

                />

                <button id="submit">Submit</button>
            </div>

            {years !== null && (
                <div className="result">
                    <h2>Thời gian để đạt mục tiêu: {years} năm</h2>
                    <h3>Danh sách phát triển theo từng năm:</h3>

                    <table border="1" className='table'>
                        <thead>
                            <tr>
                                <th>Year</th>
                                <th>Invest</th>
                                <th>Rate</th>
                                <th>Goal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {growthList.map((item) => (
                                <tr key={item.year}>
                                    <td>{item.year}</td>
                                    <td>{investment}</td>
                                    <td>{rate}</td>

                                    <td>{item.amount} VND</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </form>
    );
}
