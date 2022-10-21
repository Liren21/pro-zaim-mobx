import {makeAutoObservable} from 'mobx'



interface IElectivesStore {

    showMessage: boolean

}

class ElectivesStore implements IElectivesStore {
    showMessage = false

    constructor() {
        makeAutoObservable(this, {}, {deep: true})
    }

    setShowMessage(val:boolean){
        this.showMessage = val
    }

}

export default new ElectivesStore()
