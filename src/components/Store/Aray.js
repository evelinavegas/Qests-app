import { action, makeObservable, observable } from "mobx"
import { Arr } from "./ArrayServer"

class ArrClass {
  arrQests=[];
  filterArr=[];
  async loadArr() {
    const arr = await Arr
    this.arrQests = arr

  }
  constructor() {
    makeObservable(this,{
      arrQests: observable,
      filterArr: observable,
      loadArr: action,
      getFilter: action
    })
  }
  getFilter(e) {
    if (this.arrQests) {
      if (e === '') {
        const arr = this.arrQests
        this.filterArr = arr
      } else {
        this.getFilterArr(e)
      }
    }
  }
  getFilterArr(e) {
    if (this.arrQests) {
      const clonArr = this.arrQests.filter(qest => {
        if (qest.type == e) {
          return qest
        }
      })
      this.filterArr = clonArr    
    }
  }
}

export default new ArrClass