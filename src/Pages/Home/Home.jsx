import React from 'react';
import BannerParalox from './BannerParalox';
import Flavours from './Flavours';
import GoodFood from './GoodFood';

import CheifReco from './CheifReco';
const Home = () => {
    return (
        <div>
           <BannerParalox></BannerParalox>
           <Flavours></Flavours>
           <GoodFood></GoodFood>
           <CheifReco></CheifReco>
        </div>
    );
};

export default Home;