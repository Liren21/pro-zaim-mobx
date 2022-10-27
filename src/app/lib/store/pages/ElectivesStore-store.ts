import { makeAutoObservable } from 'mobx'

interface IElectivesStore {
    link: string
    stateOffcanvas: boolean
    stateLoader: boolean
    stateToastHome: boolean
    messageToastHome: string
}

class ElectivesStore implements IElectivesStore {
    link = ''
    messageToastHome = ''
    stateOffcanvas = false
    stateLoader = false
    stateToastHome = false

    constructor() {
        makeAutoObservable(this, {}, { deep: true })
    }

    setLink(val: string) {
        this.link = val
    }
    setMessageToastHome(val: string) {
        this.messageToastHome = val
    }
    setStateToastHome(val: boolean) {
        this.stateToastHome = val
    }
    setStateLoader(val: boolean) {
        this.stateLoader = val
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
