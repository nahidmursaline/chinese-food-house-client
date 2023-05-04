import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllData from '../AllData/AllData';
import './Home.css'

const Home = () => {
    const allData = useLoaderData()
    return (
        <div>
            <h2>This is home {allData.length}</h2>
          <div className='card'>
          {
            allData.map(data => <AllData 
                key={data.id}
                data = {data}
                ></AllData>)
            }
          </div>
        </div>
    );
};

export default Home;