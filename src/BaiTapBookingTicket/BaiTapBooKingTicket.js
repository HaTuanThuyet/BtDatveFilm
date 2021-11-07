import React, { Component, Fragment } from 'react'
import "../BookingTicket.css";
import ThongTinDatGhe from './ThongTinDatGhe';
import HangGhe from './HangGhe';
import danhSachGheData from '../Data/danhSachGhe.json'

export default class BaiTapBooKingTicket extends Component {
    renderHangGhe = ()=>{
        return danhSachGheData.map((hangGhe,index) => {
            return <div key={{index}}>
                <HangGhe hangGhe={hangGhe}  soHangGhe={index}/>

            </div>
            
        })

      

    }
    render() {
        return (
            <div className="bookingMovie" style={{position:"fixed",
            width:"100%",height:"100%",
            backgroundImage:"url('./img/bgmovie.jpg')",
            backgroundSize:"100%"}}>
                <div style={{position:'fixed', width:"100%",height:"100%",backgroundColor:'rgba(0,0,0,0.8)'}}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-8 text-center">
                                <div className=" display-4 text-warning">Đặt vé Xem Phim Cyber</div>
                                    <div className="mt-2" style={{fontSize:"25px"}}>Màn hình</div>
                                <div className="mt-2" style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
                                    <div className="screen"></div>
                                    {this.renderHangGhe()}
                                </div>
                              
                            </div>
                            <div className="col-4 text-left">
                            <div style={{fontSize:35}} className="  text-light mt-2">Danh Sách Ghế </div>
                            <ThongTinDatGhe/>
                         

                            </div>

                        </div>

                    </div>

                </div>
              
            </div>
        )
    }
}
