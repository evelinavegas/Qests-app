import React, { useState, useEffect } from 'react'
import axios from 'axios'
import IconAdventures from '../img/icon-filters/adventures.svg'
import IconAll from '../img/icon-filters/all.svg'
import IconDetectives from '../img/icon-filters/detectives.svg'
import IconHorror from '../img/icon-filters/horror.svg'
import IconMysticism from '../img/icon-filters/mysticism.svg'
import IconSciFi from '../img/icon-filters/sci-fi.svg'
import Qests from '../Qests/Qests'
import { Link, useParams } from 'react-router-dom'

function StartePage () {
    const filters = [
        {id: 1, title: 'Всі квести', img: IconAll, url: ''},
        {id: 2, title: 'Пригоди', img: IconAdventures, url: 'adventures'},
        {id: 3, title: 'Жахи', img: IconHorror, url: 'horror'},
        {id: 4, title: 'Містика', img: IconMysticism, url: 'mystic'},
        {id: 5, title: 'Детективи', img: IconDetectives, url: 'detective'},
        {id: 6, title: 'Sci-fi', img: IconSciFi, url: 'sci-fi'},
    ]
    const [qests, setQests] = useState([]);
    const [filterArr, setFilterArr] = useState([])

    useEffect(() => {
        axios
            .get('http://localhost:3001/quests')
            .then(data => {
                setQests(data.data)
                setFilterArr(data.data)

            })
    }, [])
    function getFilter(e) {
        if(qests){
            if(e === ''){
                const arr = qests
                setFilterArr(arr)
            } else {
                getFilterArr(e)
            }
        }
    }
    function getFilterArr (filter) {
        if(qests){
            const clonArr = [...qests].filter(qest => {
                if(qest.type == filter){
                    return qest
                }
            })
            setFilterArr(clonArr)
        }
    }
    return(
        <div >
            <div className="main">
                <div className='main-heading'>
                    <p className='text-yelow'>Квести Львів</p>
                    <h2 className='title'>Оберіть тематику</h2>
                </div>
                <div className="main-filter">
                    <nav className='filters-container flex-row'>
                        {
                            filters.map(link => (
                                <li className='filter-link' key={link.id}><img src={link.img} alt="#"/><Link to={`/${link.url}`} onClick={(e) => getFilter(link.url)}>{link.title}</Link></li>
                            ))
                        }
                    </nav>
                </div>
                <Qests arr={filterArr}/>
                </div>
       </div>
    )
}
export default StartePage