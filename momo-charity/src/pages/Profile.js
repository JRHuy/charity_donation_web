export default function Profile() {
    return (
        <>
            <div className="container">
                <div className="form4enter">
                    <div className="row justify-content-center">
                        <h3 id='title_page' className="text-center text-secondary mt-5 mb-3">Thông tin cá nhân</h3>
                        <form>
                            <div className="form-group">
                                <label style={{ display: "flex" }} htmlFor="money">Chương trình quyên góp</label>
                                <input type="url" name="money" id="money" className="form-control" value={donateInfo?.programName} disabled />
                            </div>
                            <div className="form-group">
                                <label style={{ display: "flex" }} htmlFor="money">Nhập số tiền bạn muốn quyên góp</label>
                                {/* <input type="number" name="money" id="money" className="form-control" placeholder="0 VND" value={money} onChange={(e) => onInputChange(e)} /> */}
                                <NumericFormat name="money" id="money" value={money} suffix="đ" displayType="input" type="tel" thousandSeparator="." decimalSeparator="," placeholder="0đ" className={style.money} onValueChange={(values, e) => {
                                    const {formattedValue, value, floatValue} = values;
                                    console.log(values.value);
                                    onInputChange(value);
                                }} />
                            </div>
                            {error && money.length <= 0 ?
                                <div className="alert alert-danger" role="alert">
                                    This field is required!
                                </div>
                                : ""}
                            <div className="form-group">
                                <button type="submit" value="register" id="loginbtn">Nạp tiền</button>
                            </div>
                        </form>
                        <div className="redirection">
                            <Link onClick={goBack} id="redirection">Hủy</Link>
                        </div>
                        {success && <div className="alert alert-success" role="alert">
                            Quyên góp thành công!
                        </div>}
                    </div>
                </div>
            </div>
        </>
    )
}