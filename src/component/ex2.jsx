import { useState } from "react";
import './ex2.css'

const Ex2 = () => {
    const [a, setA] = useState("");
    const [b, setB] = useState("");
    const [c, setC] = useState("");
    const [rs, setRs] = useState([]);

    const handleCalculate = () => {
        if (!a || !b || !c) {
            alert("Vui lòng nhập số hợp lệ!");
            return;
        }

        let numA = Number(a);
        let numB = Number(b) / 100;
        let numC = Number(c);
        let year = 0;
        let currentMoney = numA;
        let results = [];

        if (numA <= 0 || numB <= 0 || numC <= numA) {
            alert("Vui lòng nhập số hợp lệ! ");
            return;
        }

        while (currentMoney < numC) {
            let endYearMoney = currentMoney * (1 + numB);

            results.push({
                year: year + 1,
                money: currentMoney.toFixed(0),
                endYear: endYearMoney.toFixed(0),
            });

            currentMoney = endYearMoney;
            year++;
        }

        setRs(results);
    };

    return (
        <>
            <h1>Ex2: Tính số năm</h1>
            <div>
                <input
                    style={{ margin: "10px", width: "60vw", fontSize: "20px", borderRadius: "10px", padding: "10px" }}
                    type="number"
                    value={a}
                    onChange={(e) => setA(e.target.value)}
                    placeholder="Số tien gui"
                />
                <input
                    type="number"
                    value={b}
                    onChange={(e) => setB(e.target.value)}
                    placeholder="Lai suat"
                    style={{ margin: "10px", width: "60vw", fontSize: "20px", borderRadius: "10px", padding: "10px" }}
                />
                <input
                    type="number"
                    value={c}
                    onChange={(e) => setC(e.target.value)}
                    placeholder="Số tien nhan"
                    style={{ margin: "10px", width: "60vw", fontSize: "20px", borderRadius: "10px", padding: "10px" }}
                />
                <hr />
                <button onClick={handleCalculate} style={{ margin: "10px", padding: "10px", border: "1px solid #ccc" }}>
                    Tính toán
                </button>
            </div>
            <hr />

            <table style={{ width: "100%" }}>
                <tr>
                    <th>So nam</th>
                    <th>So tien gui</th>
                    <th>So tien nhan</th>
                </tr>
                <tbody>
                    {rs.map((item, index) => (
                        <tr key={index}>
                            <td>{item.year}</td>
                            <td>{item.money}</td>
                            <td>{item.endYear}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Ex2;