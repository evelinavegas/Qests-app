import React, { useState, useEffect} from 'react' 

import Qests from '../Qests/Qests'
import { Link, } from 'react-router-dom'
import ArrClass  from '../Array/Aray'
import filterClass from '../Filters/Filters'
function StartePage() {
    const [filterArray, setFilterArray] = useState(ArrClass.arrQests)

    

    useEffect(() => {
        ArrClass.loadArr()
        const array = ArrClass.filterArr
        setFilterArray(array)
    },[])


    function applyFilter(element, link) {
        filterClass.addClass(element)
        ArrClass.getFilter(link)
        setFilterArray(ArrClass.filterArr)
    }
    
    return(
        <div >
            <div className="main">
                <div className='main-heading'>
                    <p className='text-yelow'>Квести Львів</p>
                    <h2 className='title'>Оберіть тематику</h2>
                </div>
                <div className="main-filter">
                    <nav className='filters-container flex-row' >
                        {
                            filterClass.filters.map(link => (

                                <li className={link.class} onClick={() => applyFilter (link, link.url)} key={link.id}><img src={link.img} alt="#"/>
                                    <Link to={`/${link.url}`}>{link.title}</Link>
                                </li>
                            ))
                        }
                    </nav>
                </div>
                <Qests arr={filterArray}/>
                </div>
       </div>
    )
}
export default StartePage
