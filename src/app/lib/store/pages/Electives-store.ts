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
    kok: number
    maxNumRange: number
    toastBtn: string
    userLang: string
    details: string
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
    kok = 0
    maxNumRange = 0
    stateOffcanvas = false
    stateLoader = false
    stateToastHome = false
    technicalWorks = true
    stateToast = false
    heart = null
    details = null
    userLang = null
    stateHeart: any = []
    bob: [] = []

    constructor() {
        makeAutoObservable(this, {}, {deep: true})
    }

    setLink(val: string) {
        this.link = val
    }
    setToastBtn(val: string) {
        this.toastBtn = val
    }

    setDetails(val: string) {
        this.details = val
    }
    setUserLang(val: string) {
        this.userLang = val
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
    setHeart(val: number) {
        this.heart = val
    }

    setStateLoader(val: boolean) {
        this.stateLoader = val
    }

    setStateHeart(val: any):void {
        this.stateHeart = val
    }

    setBob(val: []):void {
        this.bob = val
    }
}

export default new ElectivesStore()
