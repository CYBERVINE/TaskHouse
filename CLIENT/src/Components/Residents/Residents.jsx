import './Residents.scss'

function Residents({residents}){

    return (
        <section className="residents">
            { 
                residents.map(residents=> {
                    const {name, score} = residents
                    return (
                        <div key={name} className='residents__card'>
                        <img src="https://placekitten.com/30/30" alt="avatar" />
                        <h3 >{name}</h3>
                        <p>browniepoints! {score}</p>
                        </div>
                    )
                })
            }
        </section>
    )
}

export default Residents