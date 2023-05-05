import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllData from '../AllData/AllData';
import './Home.css';
import image from '../../../assets/image.jpg';
import LazyLoad from 'react-lazy-load';

const Home = () => {
  const allData = useLoaderData();
  return (
    <div>
      <div className="sec m-5">
        <div>
          {' '}
          <LazyLoad height={762} threshold={0.95}>
            <img className="cimg" src={image} />
          </LazyLoad>
         
        </div>
        <div>
          <h3>some great chinese Chef !</h3>
          <ul class="description-color">
            <li>Martin Yan</li>
            <li>Cecilia Chiang</li>
            <li>Shirley Chung</li>
            <li>Stephen Yan</li>
            <li>Maria Cordero</li>
          </ul>
        </div>
      </div>
      <h2 className="m-4 text-center">Here Is The All Chef's</h2>
      <div className="cardd">
        {allData.map((data) => (
          <AllData key={data.id} data={data}></AllData>
        ))}
      </div>
    </div>
  );
};

export default Home;
