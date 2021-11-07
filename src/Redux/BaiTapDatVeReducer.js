import { DAT_GHE, HUY_GHE } from "./types/BaiTapDatVeTypes";

const stateDefault = {
    danhSachGheDangDat:[
        // {soGhe:"A1",gia:1000}
    ]
}
const BaiTapDatVeReducer = (state=stateDefault,action)=>{
    switch (action.type) {
        case DAT_GHE:{
            let danhSachGheDangDatUpDate =[...state.danhSachGheDangDat];
            let index = danhSachGheDangDatUpDate.findIndex(gheDangDat => gheDangDat.soGhe === action.ghe.soGhe);
            if(index !== -1){
                // Khi Người dùng Click Ghế đang đặt dã có trong mãng => remove đi
                danhSachGheDangDatUpDate.splice(index,1);
            }else{
                //  Khi Người dùng Click Ghế đang đặt dã có trong mãng =>  Push vào
                danhSachGheDangDatUpDate.push(action.ghe);
            }
            // Cập Nhật Lại State => Giao diện render lại
            state.danhSachGheDangDat=danhSachGheDangDatUpDate;

        }
        case HUY_GHE:{
            let danhSachGheDangDatUpDate =[...state.danhSachGheDangDat];
            let index = danhSachGheDangDatUpDate.findIndex(gheDangDat => gheDangDat.soGhe === action.soGhe);
            if(index !== -1){
                // Khi Người dùng Click Ghế đang đặt dã có trong mãng => remove đi
                danhSachGheDangDatUpDate.splice(index,1);
            }
            state.danhSachGheDangDat=danhSachGheDangDatUpDate;
            return {...state};
        }
        default: return {...state}
    }
}
export default BaiTapDatVeReducer;