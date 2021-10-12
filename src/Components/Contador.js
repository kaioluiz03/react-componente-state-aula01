import React, { useState } from 'react';


export const Contador = () => {

    const [number, setNumber] = useState(0);

    return(
        <div>

            <div className="resultado">
                <h1>{number}</h1>
            </div>
            <div className="botoesContent">

                <button className="botoes" id="somar" onClick={() => {
                    setNumber(number + 5);
                }}>Somar</button>
                <button className="botoes" id="subtrair" onClick={() => {
                    setNumber(number - 3);
                }}>Subtrair</button>

            </div>

        </div>
    )
};