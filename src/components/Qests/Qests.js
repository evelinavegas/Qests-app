import { useParams } from 'react-router-dom'
import Person from '../img/person.svg'
import Puzzle from '../img/puzzle.svg'
import { Link } from 'react-router-dom'

function Qests ({arr}) {
    
    if(arr){
        return (
            <div className="main-container flex-row">
                {
                    arr.map(qest => (
                        <Link to={`qests/${qest.id}`} className='main-wrap' key={qest.id}>
                            <div className='main-block' style={{ background: `url(${qest.previewImg})`, backgroundSize: 'cover', }}>
                                <p className='main-block-title'>{qest.title}</p>
                                <div className='main-block-info flex-row'>
                                    <div className='flex-row'>
                                        <img src={Person} alt='Person' className='main-block-icon'/>
                                        <p className='flex-row'>{qest.peopleCount[0]}-{qest.peopleCount[1]} осіб</p>
                                    </div>
                                    <div className='flex-row'>
                                        <img src={Puzzle} alt='Puzzle' className='main-block-icon'/>
                                        <p>{qest.level}</p>
                                    </div>
                                </div>

                            </div>
                        </Link>
                    ))
                }

            </div>    
        )
    }
}
export default Qests