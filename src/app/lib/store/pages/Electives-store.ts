import { makeAutoObservable } from 'mobx'

interface IElectivesStore {
    link: string
    name: string
    search: string
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
    search = ''
    messageToastHome = ''
    toastBtn = ''
    minNumRange = 0
    maxNumRange = 0
    stateOffcanvas = false
    stateLoader = false
    stateToastHome = false
    technicalWorks = false
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
    setSearch(val: string) {
        this.search = val
    }
    setMessageToastHome(val: string) {
        this.messageToastHome = val
    }
    setToastBtn(val: string) {
        this.toastBtn = val
    }
    setMinNumRange(val: number) {
        this.minNumRange = val
        console.log(val)
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
