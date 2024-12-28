import { useContext } from "react";
import { GameContext } from "../../contexts/GameContext";
import { GenerateNum } from "../Commands/GenerateNum";
import { EndGame } from "../Commands/EndGame";

export function Display() {
    const { numbers, message } = useContext(GameContext);

    return (
        <>
            <section>
                <div className="container">
                    {numbers.length > 0 ? (
                        <>
                            <div className="d-flex flex-column">
                                <h3 className='fs-5 text-center'>Ultimo numero estratto</h3>
                                <div className="d-flex justify-content-center align-items-center pb-4 border-bottom border-light">
                                    <span style={{ width: '90px', height: '90px' }} className="display-5 bg-white p-4">
                                        {numbers[numbers.length - 1]}
                                    </span>
                                </div>
                                <GenerateNum />
                                <EndGame />
                                {message && <span className="text-center p-3 mt-3">{message}</span>}
                            </div>
                        </>
                    ) : (
                        <div className="d-flex flex-column ">
                            <h3 className='fs-5 text-center'>Inizia L'estrazione!</h3>
                            <GenerateNum />
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
