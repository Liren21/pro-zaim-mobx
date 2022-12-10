import {makeAutoObservable} from 'mobx'

interface IElectivesStore {
    link: string
    name: string
    search: string
    stateOffcanvas: boolean
    stateLoader: boolean
    stateToastHome: boolean
    stateHeart: any
    messageToastHome: string
    minNumRange: number
    maxNumRange: number
    toastBtn: string
    technicalWorks: boolean
    stateToast: boolean
    heart: number
    bob: []
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
    stateToast = false
    heart = 0
    stateHeart: any = []
    bob: [] = []

    constructor() {
        makeAutoObservable(this, {}, {deep: true})
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
    }

    setMaxNumRange(val: number) {
        this.maxNumRange = val
    }

    setStateToastHome(val: boolean) {
        this.stateToastHome = val
    }

    setStateToast(val: boolean) {
        this.stateToast = val
    }
    setHeart(val: number) {
        this.heart = val
    }

    setStateLoader(val: boolean) {
        this.stateLoader = val
    }

    setTechnicalWorks(val: boolean) {
        this.technicalWorks = val
    }

    setStateHeart(val: any):void {
        this.stateHeart = val
    }

    setBob(val: []):void {
        this.bob = val
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
