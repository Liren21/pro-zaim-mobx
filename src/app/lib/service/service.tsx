import axios from "axios";
import {handlerError, handlerSuccess} from "../../../core/lib/api/common";
import urls from "../urls";
import appStore from '../../../core/lib/store/app'
import {Student} from '../models/student'
import electivesStore from "../store/pages/ElectivesStore-store";

export default {

    async getStudentsById(): Promise<Student> {
        appStore.setLoading(true)
        let result: Student
        await axios
            .get(urls.PERSON)
            .then((res) =>
                handlerSuccess(res, (data) => {
                    result = new Student(data)
                }),
            )
            .catch(handlerError)
            .then(() => appStore.setLoading(false))

        return result
    },

    async postChoice(valOne, valTwo) {
        appStore.setLoading(true)

        const postData = {
            sspId2: valTwo.sspId2,
            splId: valTwo.splId,
            cdId: valOne.cdId,
            comId: valOne.comId,
            numberCycle: valOne.numberCycle,
            choice: valTwo.choice
        }
        console.log(postData)
        await axios
            .post(urls.CHOICE, postData)
            .then((res) =>
                handlerSuccess(res, () => {
                    console.log(res)
                   electivesStore.setMark(true)
                }),
            )
            .catch(handlerError)

            .then(() => appStore.setLoading(false))

    },


}