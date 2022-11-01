import { makeAutoObservable } from 'mobx'

interface IElectivesStore {
    link: string
    stateOffcanvas: boolean
    stateLoader: boolean
    stateToastHome: boolean
    messageToastHome: string
    minNumRange: number
    maxNumRange: number
}

class ElectivesStore implements IElectivesStore {
    link = ''
    messageToastHome = ''
    minNumRange = 0
    maxNumRange = 0
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
    setMinNumRange(val: number) {
        this.minNumRange = val
    }
    setMaxNumRange(val: number) {
        this.maxNumRange = val
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
