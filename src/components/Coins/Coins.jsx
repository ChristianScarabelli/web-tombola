export function Coins({ numbers }) {
    return (
        <section className="position-relative">
            <div className="rounded-circle" style={{ width: '70px', height: '70px', backgroundColor: 'lightgrey' }}></div>
            <span className="display-6 bg-white rounded-circle d-flex justify-content-center align-items-center position-absolute top-0" style={{ width: '70px', height: '70px', transform: 'translate(5%, -5%)' }}>
                {numbers}
            </span>
        </section>
    )
}