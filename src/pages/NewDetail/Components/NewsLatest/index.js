import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNewsLatest } from "../../../../redux/News/action";
import "./style.css";
import { Link } from "react-router-dom";

const NewLatest = () => {
  const { dataNewsLatest } = useSelector((state) => state.newRuducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewsLatest());
  }, []);
  return (
    <div>
      <div className="wrapper-news-latest-top">
        <div className="content-news-latest-top">THÔNG BÁO</div>
        <div className="content-news-latest-top">|</div>
        <div className="content-news-latest-top">TIN MỚI NHẤT</div>
      </div>
      <div className="wapper-item-news-latest-top">
        {dataNewsLatest && dataNewsLatest.length > 0
          ? dataNewsLatest.map((item, index) => (
              <div key={index} className="item-news-latest-top">
                <div className="content-item-news-latest-top">
                  <Link to={`/tin-tuc/${item.slug}`}>
                    icon {item.title.rendered}
                  </Link>
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default NewLatest;
