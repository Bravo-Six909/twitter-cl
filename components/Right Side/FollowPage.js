import React, { useState, useEffect } from 'react';
import Follow from "./Follow.js";
import { FiSearch } from 'react-icons/fi';

const FollowPage = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.unsplash.com/photos/?client_id=u-1-a7c5GJ8IqumMMvROC8_zgqtHazH-VIQGXtheMbA")
      .then((datas) => datas.json())
      .then((res) => setData(res))
  }, []);

  return (
    <div style={{ 'position': 'sticky', 'top': '4px' }}>
      <div style={{ 'display': 'flex', 'justifyContent': 'flex-start', 'alignItems': 'center', 'borderRadius': '24px', 'backgroundColor': '#eaeded', 'padding': '10px 20px', 'marginBottom': '12px' }}>
        <FiSearch style={{ 'marginRight': '12px' }} />
        <input style={{ 'border': 'none', 'padding': '4px', 'outline': 'none', 'backgroundColor': 'transparent', 'fontSize': '15px' }} placeholder='Search Twitter' />
      </div>
      <h3>Who to follow</h3>
      {data.slice(0, 4).map((item, i) => {
        return (
          <Follow key={i} name={item?.user.name} profile={item?.user.profile_image.medium} user={item?.user.twitter_username} />
        );
      })}
    </div>
  );
};

export default FollowPage;
