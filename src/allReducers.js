
import { combineReducers } from 'redux'
import welcome from  './components/Welcome/reducers/reducer'
import voucher from  './components/Voucher/reducers/reducer'
import main from  './components/Voucher/reducers/reducer'

const allReducers = combineReducers({
    welcome,
    voucher
  
})

export default allReducers


