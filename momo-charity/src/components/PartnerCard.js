function PartnerCard(props) {
    return (
        <>
            <div className="card" id="card-doitac">
                {/* make card as a button using stretched-link */}
                <a href="#" className="card-block stretched-link text-decoration-none">
                    <div className="row card-body">
                        <img className="col-sm-3" src={props.partnerImg} style={{ width: 80, height: 60 }} />
                        <div className="col-sm-9">
                            <h6 className="card-title" id="doitac">
                                {props.partnerName}
                                <br />
                                <p className="card-text" id="card-description">{props.partnerDescription}</p>
                            </h6>
                            <p id="xemchitiet">
                                Xem chi tiết <i className="fa-solid fa-chevron-right"></i>
                                <i className="fa-solid fa-chevron-right"></i>
                            </p>
                        </div>
                    </div>
                </a>
            </div>
        </>
    )
}

export default PartnerCard;