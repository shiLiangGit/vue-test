import { RECORD_ADDRESS } from './mutations-type';

export default {
    // 记录当前经度纬度
    [RECORD_ADDRESS] (state, {
        latitude,
        longitude
    }) {
        console.log(state)
        state.latitude = latitude;
        state.longitude = longitude;
    }
}
