
import { combineReducers } from 'redux'
import welcome from  './components/Welcome/reducers/reducer'
import voucher from  './components/Voucher/reducers/reducer'
import user from  './components/shared/User/reducers/reducer'

const allReducers = combineReducers({
    welcome,
    voucher,
    user
  
})

export default allReducers


