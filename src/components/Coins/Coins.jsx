import { useContext } from "react";
import { GameContext } from "../../contexts/GameContext";

export function Coins({ number }) {
    const { isNumberExtracted } = useContext(GameContext);

    return isNumberExtracted(number) ? (
        <section className="position-relative">
            <div className="rounded-circle" style={{ width: '70px', height: '70px', backgroundColor: 'red' }}></div>
            <span className="display-6 rounded-circle d-flex justify-content-center align-items-center position-absolute top-0" style={{ width: '70px', height: '70px', transform: 'translate(5%, -5%)', backgroundColor: 'pink' }}>
                {number}
            </span>
        </section>
    ) : (
        <section className="position-relative">
            <div className="rounded-circle" style={{ width: '70px', height: '70px', backgroundColor: 'lightgrey' }}></div>
            <span className="display-6 bg-white rounded-circle d-flex justify-content-center align-items-center position-absolute top-0" style={{ width: '70px', height: '70px', transform: 'translate(5%, -5%)' }}>
                {number}
            </span>
        </section>
    );
}
