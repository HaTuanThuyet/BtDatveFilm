import React, { Component } from 'react'
import {connect} from 'react-redux'
import { datGheAction } from '../Redux/actions/BaiTapDatVeActions';

 class HangGhe extends Component {
    renderGhe = () => {
        return this.props.hangGhe.danhSachGhe.map((ghe, index) => {

            let cssGheDaDat = "";
            let disabled = false;
            // Trạng Thái Ghế đã được dặt
           
            if (ghe.daDat) {
                cssGheDaDat = "gheDuocChon";
                disabled = true;

            }
            // Ghế đang đặt
            let cssGheDangDat = ''
            let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(gheDangDat =>gheDangDat.soGhe === ghe.soGhe);
            if(indexGheDangDat !== -1){
                cssGheDangDat="gheDangChon";

            }
            return <button onClick={() => {
                this.props.datGhe(ghe);
            }} disabled={disabled} className={` ${cssGheDaDat}  ${cssGheDangDat} ghe`} key={index}>
                {ghe.soGhe}
            </button>
        });
    }
    renderSoHang=()=>{
        return <span className="rowNumber">{this.props.hangGhe.danhSachGhe.map((hang,index) => {
            return <button className="rowNumber">
                {hang.soGhe}
            </button>
        })}</span>
    }
    renderHangGhe = () => {
        if (this.props.soHangGhe === 0) {
          return<div>
               {this.props.hangGhe.hang} {this.renderSoHang()}
          </div>

        } else {
            return <div>
                {this.props.hangGhe.hang} {this.renderGhe()}
            </div>
        }
    }
    render() {
        return (
            <div className="text-light text-left mt-2 ml-3" style={{ fontSize: 30 }}>
                {this.renderHangGhe()}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        danhSachGheDangDat:state.BaiTapDatVeReducer.danhSachGheDangDat
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        datGhe:(ghe)=>{
            dispatch(datGheAction(ghe));
        }
    }
}
export default connect (mapStateToProps,mapDispatchToProps)(HangGhe);
