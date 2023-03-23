function CardItem() {
    return (
        <div id="card-items" className="">
            <div className="card" id="card-context">
                <img
                    src="https://static.mservice.io/blogscontents/momo-upload-api-230323151231-638151811516624864.jpg"
                    alt=""
                    className="border rounded-top"
                />

                <div className="card-body">
                    <div id="card-title">
                        <h5>
                            Cùng chung tay xoa dịu nỗi đau mất đi người thân của
                            chú Lượm
                        </h5>
                    </div>
                    <div id="donor-info">
                        <div id="donor-avatar" className="avatar">
                            <img
                                src="https://quytrangkhuyet.com/wp-content/uploads/2021/08/logo.png"
                                alt=""
                                className=""
                            />
                        </div>
                        <div id="donor-name" className="">
                            Quỹ Từ Thiện & BTXH Trăng Khuyết
                        </div>
                        <span className="badge badge-pill badge-warning">
                            Còn 60 Ngày
                        </span>
                    </div>
                    <div class="money-progress mt-2">
                        <strong>10.000đ </strong>
                        <span>/ 30.000.000đ</span>
                    </div>
                    <div class="progress mt-2">
                        <div
                            class="progress-bar w-25 bg-danger"
                            role="progressbar"
                            aria-valuenow="10"
                            aria-valuemin="0"
                            aria-valuemax="100"
                        ></div>
                    </div>
                    <div id="donation-info" className="mt-2">
                        <div id="donation-count">
                            <div id="dc-label">Lượt quyên góp</div>
                            <div id="dc-count">1</div>
                        </div>
                        <div id="percentage">
                            <div id="p-label">Đạt được</div>
                            <div id="p-count">0.03%</div>
                        </div>
                        <a
                            href=""
                            id="donate-btn"
                            className="stretched-link text-decoration-none"
                        >
                            Quyên góp
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardItem;
