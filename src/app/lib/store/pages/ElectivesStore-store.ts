import {makeAutoObservable} from 'mobx'



interface IElectivesStore {

    link: string

}

class ElectivesStore implements IElectivesStore {
    link = ''

    constructor() {
        makeAutoObservable(this, {}, {deep: true})
    }

    setLink(val: string) {
        this.link = val
    }
    // redirectLink() {
    //
    //     service.getStudentsById()
    //         .then(() => {
    //         })
    //         .catch(handlerError)
    // }


}

export default new ElectivesStore()
