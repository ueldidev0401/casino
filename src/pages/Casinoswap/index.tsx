import React, { useState, useEffect } from 'react';
import casinoswapLogo from 'assets/img/paraswap.png';
import './index.scss';


const Casinoswap = () => {

    return (
        <div className="home-container mb-5" style={{ fontFamily: 'Segoe UI', color: 'white', marginTop: '28px' }}>
            <div className='d-flex justify-content-center'>
                <div style={{ width: '180px' }}>
                    <img src={casinoswapLogo} width={'100%'} />
                </div>
            </div>
            <div className='text-center d-flex flex-column mt-3'>
                <span style={{ fontFamily: 'Segoe UI', fontWeight: '600', fontSize: '30px' }}>Casinoswap</span>
                <div className='d-flex justify-content-center mt-3'>
                    <span style={{ color: '#707070', width: '1000px' }}>{"We are the leading DeFi aggregator that unites the liquidity of decentralized exchanges and lending protocols into one comprehensive and secure interface and APIs."}
                    <br></br>
                    <span style={{ fontFamily: 'Segoe UI', fontWeight: '600', fontSize: '26px' }}>
                        {"Coming soon!!"}
                    </span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Casinoswap;