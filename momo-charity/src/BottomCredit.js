function BottomCredit() {
    return (
        <>
            {/* Phần thông tin ở cuối trang */}
            <section id="block-8">
                <div className="container pt-5">
                    {/* row 1 */}
                    <div className="row">
                        <div className="col-md-8">
                            {/* row 2 */}
                            <div className="row">
                                <div className="col-6 col-md-3">
                                    <h6 id="bottom-menu">Trái Tim MoMo</h6>

                                    <h6 className="pt-1" id="bottom-menu">Blog Cuộc Sống</h6>
                                </div>

                                <div className="col-6 col-md-3">
                                    <h6 id="bottom-menu">Heo Đất MoMo</h6>

                                    <h6 className="pt-1" id="bottom-menu">Hoàn Cảnh Quyên Góp</h6>
                                </div>

                                <div className="col-6 col-md-3">
                                    <h6 id="bottom-menu">Đối Tác Đồng Hành</h6>
                                </div>

                                <div className="col-6 col-md-3">
                                    <h6 id="bottom-menu">Tin Tức Cộng Đồng</h6>
                                </div>
                            </div>
                            {/* row 3 */}
                            <div className="row">
                                <div className="col-6 pt-2 col-md-3">
                                    <div id="submenu-information">
                                        <a href="#" id="submenu-link">Sống Tốt</a><br />
                                        <a href="#" id="submenu-link">Sống Khoẻ</a><br />
                                        <a href="#" id="submenu-link">Sống Thông Minh</a><br />
                                        <a href="#" id="submenu-link">Sống Vui</a><br />
                                    </div>
                                </div>

                                <div className="col-6 pt-2 col-md-3">
                                    <div id="submenu-information">
                                        <a href="#" id="submenu-link">Vì Trẻ Em</a><br />
                                        <a href="#" id="submenu-link">Người Già, Người Khuyết Tật</a><br />
                                        <a href="#" id="submenu-link">Bệnh Hiểm Nghèo</a>
                                    </div>
                                </div>

                                <div className="col-6 pt-2 col-md-3">
                                    <div id="submenu-information">
                                        <a href="#" id="submenu-link">Hoàn Cảnh Khó Khăn</a><br />
                                        <a href="#" id="submenu-link">Hỗ Trợ Giáo Dục</a><br />
                                        <a href="#" id="submenu-link">Đầu Tư Vật Chất</a>
                                    </div>
                                </div>

                                <div className="col-6 pt-2 col-md-3">
                                    <div id="submenu-information">
                                        <a href="#" id="submenu-link">Cứu Trợ Động Vật</a><br />
                                        <a href="#" id="submenu-link">Bảo Vệ Môi Trường</a><br />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="container" id="submenu-information">
                                <h6 id="bottom-menu">CHĂM SÓC KHÁCH HÀNG</h6>
                                <p>
                                    Địa chỉ: Tầng M, Tòa nhà Victory Tower, Số 12 Tân Trào, Phường Tân Phú, Quận 7, Thành phố Hồ Chí Minh
                                </p>
                                <p>Hotline: <a id="contact">1900 5454 41</a> (1000 đ/phút)</p>
                                <p>Email: <a id="contact">hotro@momo.vn</a></p>
                                <p>Tổng đài gọi ra: <a id="contact">028.7306.5555</a> - <a id="contact">028.9999.5555</a></p>
                                <a href=""><img src="apps/appmomo.png" style={{ width: 200, height: 50 }}></img></a>
                                <br />
                                <br />
                                <a href="" className="pe-3"><img src="apps/appstore.png" style={{ width: 100, height: 30 }}></img></a>
                                <a href=""><img src="apps/appstore.png" style={{ width: 100, height: 30 }}></img></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-5">
                    <hr id="for-credit"></hr>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="row">
                                    <div className="col-md-auto">
                                        <img src="momo.png" width="55" height="55"></img>
                                    </div>
                                    <div className="col-md-10">
                                        <h6 id="bottom-menu">Công Ty Cổ Phần Dịch Vụ Di Động Trực Tuyến (viết tắt M_Service)</h6>
                                        <p id="submenu-information">Lầu 6, Toà nhà Phú Mỹ Hưng, số 8 Hoàng Văn Thái, khu phố 1, Phường Tân Phú, Quận 7, Thành phố Hồ Chí Minh</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <a href="#" className="pe-2"><img src="social/Facebook.png" id="social"></img></a>
                                <a href="#" className="pe-2"><img src="social/LinkedIn.png" id="social"></img></a>
                                <a href="#" className="pe-2"><img src="social/youtube.png" id="social"></img></a>
                                <p id="submenu-information" className="pt-2">©Copyright M_Service 2023</p>
                            </div>
                            <div className="col-sm-3">
                                <p id="submenu-information" className="pt-2">Chứng nhận bởi</p>
                                <a href="#" className="pt-2"><img src="socongthuong.png" id="certification"></img></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BottomCredit;