import { makeAutoObservable } from 'mobx'

interface IElectivesStore {
    link: string
    stateOffcanvas: boolean
    stateLoader: boolean
    stateToastHome: boolean
    stateHeart: boolean
    messageToastHome: string
    minNumRange: number
    maxNumRange: number
    toastBtn: string
}

class ElectivesStore implements IElectivesStore {
    link = ''
    messageToastHome = ''
    toastBtn = ''
    minNumRange = 0
    maxNumRange = 0
    stateOffcanvas = false
    stateLoader = false
    stateToastHome = false
    stateHeart = false

    constructor() {
        makeAutoObservable(this, {}, { deep: true })
    }

    setLink(val: string) {
        this.link = val
    }
    setMessageToastHome(val: string) {
        this.messageToastHome = val
    }
    setToastBtn(val: string) {
        this.toastBtn = val
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
    setStateHeart(val: boolean) {
        this.stateHeart = val
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
