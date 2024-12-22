export function Display({ numbers }) {
    return (
        <>
            <section className="pb-4 border-bottom border-light">
                <div className="container">
                    <h3 className='fs-5 text-center'>Ultimo numero estratto</h3>
                    <div className="d-flex justify-content-center align-items-center">
                        {/* mostro i numeri dell'array uno per volta -1 */}
                        <span style={{ width: '90px', height: '90px' }} className="display-5 bg-white p-4">{numbers[numbers.length - 1]}</span>
                    </div>
                </div>
            </section>
            <section>

            </section>
        </>
    )
}