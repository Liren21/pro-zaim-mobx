import {makeAutoObservable} from 'mobx'
import service from "../../service/service"
import {handlerError} from "../../../../core/lib/api/common"


interface IElectivesStore {

    groupBtn: string []
    dataGroup: string []
    courses: string []
    autumn: string []
    disciplines: string []
    electives: string []
    users: any []
    titleFormCheck: {}
    dataFormCheck: {}
    choiceValue: number
    mark: boolean


}

class ElectivesStore implements IElectivesStore {

    groupBtn = []
    dataGroup = []
    courses = []
    autumn = []
    disciplines = []
    electives = []
    users = []
    choiceValue = 0
    titleFormCheck: {} = {}
    dataFormCheck: {} = {}
    mark = false


    constructor() {
        makeAutoObservable(this, {}, {deep: true})
    }

    loadPerson() {
        service
            .getStudentsById()
            .then((list) => {
                this.users = [...this.users, ...[list]]

            })
            .catch(handlerError)
    }


    loadChoice() {
        service
            .postChoice(this.dataFormCheck, this.titleFormCheck)
            .then(() => {

            })
            .catch(handlerError)
    }

    setTitleFormCheck(val: {}) {
        this.titleFormCheck = val
    }

    setDataFormCheck(val: {}) {
        this.dataFormCheck = val
    }
    setChoiceVal(val: number) {
        this.choiceValue = val
    }
    setMark(val: boolean) {
        this.mark = val
    }


}

export default new ElectivesStore()
