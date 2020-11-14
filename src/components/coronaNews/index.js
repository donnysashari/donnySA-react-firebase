import React, { Fragment, useEffect, useState } from 'react';
import app from '../../services/firebase';
import 'firebase/database';

const CoronaNews = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const db = app.database().ref('news');
    db.on('value', (snapshot) => {
      const firebaseNews = snapshot.val();
      setNews(firebaseNews.data);
    });
  }, []);

  console.log('news: ', news);

  return (
    <div>
      {news.map((item, idx) => (
        <Fragment item={item} key={item.id}>
          <p>{item.id}</p>
          <p>{item.date}</p>
          <p>{idx.activity}</p>
        </Fragment>
      ))}
    </div>
  );
};

export default CoronaNews;
