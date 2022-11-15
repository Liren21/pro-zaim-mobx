import { makeAutoObservable } from 'mobx'

interface IElectivesStore {
    link: string
    name: string
    stateOffcanvas: boolean
    stateLoader: boolean
    stateToastHome: boolean
    stateHeart: []
    messageToastHome: string
    minNumRange: number
    maxNumRange: number
    toastBtn: string
    technicalWorks:boolean
}

class ElectivesStore implements IElectivesStore {
    link = ''
    name = ''
    messageToastHome = ''
    toastBtn = ''
    minNumRange = 0
    maxNumRange = 0
    stateOffcanvas = false
    stateLoader = false
    stateToastHome = false
    technicalWorks = true
    stateHeart: [] = []

    constructor() {
        makeAutoObservable(this, {}, { deep: true })
    }

    setLink(val: string) {
        this.link = val
    }
    setName(val: string) {
        this.name = val
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
    setTechnicalWorks(val: boolean) {
        this.technicalWorks = val
    }
    setStateHeart(val: []) {
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
