import { action, makeObservable, observable } from "mobx"
import IconAdventures from '../img/icon-filters/adventures.svg'
import IconAll from '../img/icon-filters/all.svg'
import IconDetectives from '../img/icon-filters/detectives.svg'
import IconHorror from '../img/icon-filters/horror.svg'
import IconMysticism from '../img/icon-filters/mysticism.svg'
import IconSciFi from '../img/icon-filters/sci-fi.svg'

class filterClass {
    filters = [
        {id: 1, title: 'Всі квести', img: IconAll, url: '', class: 'filter-link'},
        {id: 2, title: 'Пригоди', img: IconAdventures, url: 'adventures', class: 'filter-link'},
        {id: 3, title: 'Жахи', img: IconHorror, url: 'horror', class: 'filter-link'},
        {id: 4, title: 'Містика', img: IconMysticism, url: 'mystic', class: 'filter-link'},
        {id: 5, title: 'Детективи', img: IconDetectives, url: 'detective', class: 'filter-link'},
        {id: 6, title: 'Sci-fi', img: IconSciFi, url: 'sci-fi', class: 'filter-link'},
    ]
    constructor() {
        makeObservable(this, {
            filters: observable,
            addClass: action,
        })
    }
    addClass(element){
        this.filters.map((filter) => {
            if(filter.id === element.id){
                filter.class = 'filter-link filter-active'
                console.log('filter')
            } else if(filter.class === 'filter-link filter-active'){
                filter.class = 'filter-link'
            }
        })
        
    }
}
export default new filterClass