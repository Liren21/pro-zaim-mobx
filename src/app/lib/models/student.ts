import {Global, IGlobal} from '../../../core/lib/models/global'

export interface IStudent extends IGlobal {
    groupNumber: string
    sspId2: number
    splId: number
    name: string
    cdOrder: number
    comOrder: number
    semester: number
    control: string
    cdId: number
    comId: number
    numberCycle: string
    numberDiscipline: string
    course: number
    autumn: number
    spring: number
    choice: number
}

export class Student extends Global<IStudent, Student> implements IStudent {
    groupNumber: string
    sspId2: number
    splId: number
    name: string
    cdOrder: number
    comOrder: number
    semester: number
    control: string
    cdId: number
    comId: number
    numberCycle: string
    numberDiscipline: string
    course: number
    autumn: number
    spring: number
    choice: number

    constructor(obj: IStudent) {
        super(obj)
    }

}
