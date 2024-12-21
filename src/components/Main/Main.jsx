import { Coins } from "../Coins/Coins";
import { Display } from "../Display/Display";

export function Main() {
    return (
        <>
            <main className='py-3'>
                <div className='container'>
                    <div className="row">
                        <div className='d-flex g-3 flex-wrap col-9'>
                            <Coins />
                            <Coins />
                            <Coins />
                            <Coins />
                            <Coins />
                            <Coins />
                            <Coins />
                            <Coins />
                            <Coins />
                            <Coins />
                            <Coins />
                            <Coins />
                            <Coins />
                            <Coins />
                            <Coins />
                            <Coins />
                            <Coins />
                            <Coins />
                            <Coins />
                            <Coins />

                        </div>
                        <div className="col-3">
                            <Display />
                        </div>
                    </div>
                </div>
            </main>

        </>
    )
}