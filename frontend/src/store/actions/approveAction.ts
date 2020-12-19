import axios from 'axios'
import config from '../../csrftoken'

//user sign in action (with token)
export const approveService = (_id: any, value: any) => {
    var data = {
        _id: _id,
        approve: value,
    }
    console.log(data)
    axios.put("/api/approvuserservice", data, config).then(res => {
        console.log(res.data)
    })
        .catch(err => {
            console.log(err)

        })
}