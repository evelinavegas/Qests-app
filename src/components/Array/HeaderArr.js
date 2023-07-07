import { makeAutoObservable } from "mobx"

class HeaderClass{
    navigations = [
        {id: 1, title: 'Квести', link:'qests', class: 'navigation-link'},
        {id: 2, title: 'Новачкам', link:'beginners', class: 'navigation-link'},
        {id: 3, title: 'Відгуки', link:'reviews', class: 'navigation-link'},
        {id: 4, title: 'Акції', link:'shares', class: 'navigation-link'},
        {id: 5, title: 'Контакти', link:'contacts', class: 'navigation-link'},
    ]
    constructor() {
        makeAutoObservable(this)
    }
    addClass(element){
        this.navigations.map((nav) => {
            if(nav.id === element){
                nav.class = 'navigation-link active'
                console.log(nav.class)
            } else if(nav.class === 'navigation-link active'){
                nav.class = 'navigation-link'
            }
            
        })
        
    }
}

export default new HeaderClass