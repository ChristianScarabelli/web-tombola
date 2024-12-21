export function Coins() {
    return (
        <section className="position-relative">
            <div className="rounded-circle" style={{ width: '80px', height: '80px', backgroundColor: 'lightgrey' }}></div>
            <span className="display-6 bg-white rounded-circle d-flex justify-content-center align-items-center position-absolute top-0" style={{ width: '80px', height: '80px', transform: 'translate(5%, -5%)' }}> 1
            </span>
        </section>
    )
}