function PartnerCard(props) {
  return (
    <>
      <div className="card" id="card-doitac">
        {/* make card as a button using stretched-link */}
        <a
          href={props.link}
          className="card-block stretched-link text-decoration-none"
        >
          <div className="row card-body">
            <img
              className="col-sm-3"
              src={props.partnerImg}
              style={{ width: 80, height: 60 }}
            />
            <div className="col-sm-9">
              <h6 className="card-title" id="doitac">
                {props.partnerName}
                <br />
                <p className="card-text text-truncate" id="card-description">
                  {props.partnerDescription}
                </p>
              </h6>
              <div className="" id="xemchitiet">
                Xem chi tiết <i className="fa-solid fa-chevron-right"></i>
                <i className="fa-solid fa-chevron-right"></i>
              </div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}

export default PartnerCard;
