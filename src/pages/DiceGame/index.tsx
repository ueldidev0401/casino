import React, { useState, useEffect } from 'react';
import Checkbox from '@mui/material/Checkbox';
import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import { Row, Col } from 'react-bootstrap';
import { AiFillLock, AiOutlineInfoCircle } from "react-icons/ai";
import Modal from 'react-modal';
import BTXLogo from 'assets/img/token logos/BTX.png';
import EGLDLogo from 'assets/img/token logos/EGLD.png';
import LPFarmLogo from 'assets/img/LP Farm.png';
import DiceGameLogo from 'assets/img/dicegame.png';
import './index.scss';

const DiceGame = () => {

    return (
        <div className="home-container mb-5" style={{ fontFamily: 'Segoe UI', color: 'white', marginTop: '28px' }}>
            <div className='d-flex justify-content-center'>
                <div style={{ width: '180px' }}>
                    <img src={DiceGameLogo} width={'100%'} />
                </div>
            </div>
            <div className='text-center d-flex flex-column mt-3'>
                <span style={{ fontFamily: 'Segoe UI', fontWeight: '600', fontSize: '30px' }}>Dice Game</span>
                <div className='d-flex justify-content-center mt-3'>
                    <span style={{ color: '#707070', width: '1000px' }}>{"High performance 3D dice roller module made with BabylonJS, AmmoJS and implemented with web workers and offscreenCanvas."}
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

export default DiceGame;