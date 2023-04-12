import { useState } from "react";

const ReadMoreReadLess = ( {limit, children} ) => {

  const text = children;
  const [isReadMoreShown, setReadMoreShown] = useState(false)
  const toggleBtn = () => {
    setReadMoreShown(prevState  => !prevState)
  }




  return (
    <div className="read-more-read-less">
      {isReadMoreShown ? text : text.toString().substr(0, 0)}
      <button className="rmrl-btn" onClick={toggleBtn}> {isReadMoreShown ? 'Thu gọn' : '...Xem thêm'}</button>
    </div>
  );
}

export default ReadMoreReadLess;
