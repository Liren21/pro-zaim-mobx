import axios from 'axios'
import { handlerError, handlerSuccess } from '../../../core/lib/api/common'
import urls from '../urls'
import appStore from '../../../core/lib/store/app'
import { Student } from '../models/student'
import electivesStore from '../store/pages/ElectivesStore-store'

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
}
