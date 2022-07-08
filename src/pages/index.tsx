import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './index.scss';
import { Link } from 'react-router-dom';
import CasinoProtocolLogo from 'assets/img/Casino-logo.png';
import Casinoswap from 'assets/img/paraswap.png';
import Dicegame from 'assets/img/dicegame.png';
import PresaleImg from 'assets/img/presale.png';
import FarmImg from 'assets/img/Farm.png';
import BridgeImg from 'assets/img/bridge.png';

import { routeNames } from 'routes';

const CasinoProtocolHome = () => {
    return (
        <div className="text-center" style={{ marginBottom: "30px" }}>
            <img className="responsive logo-animation" src={CasinoProtocolLogo}/>
            <div className="button-group-bar">
                <div className="button-group-container">
                    <Row>
                        <div className="main-page-align">
                            <Link to={routeNames.casinoswap}>
                                <div className="BTX-home-but">
                                    <img src={Casinoswap} />
                                    <p>Casinoswap</p>
                                </div>
                            </Link>
                        </div>
                        <div className="main-page-align">
                            <Link to={routeNames.dicegame}>
                                <div className="BTX-home-but">
                                    <img src={Dicegame} />
                                    <p>Dice game</p>
                                </div>
                            </Link>
                        </div>
                        <div className="main-page-align">
                            <Link to={routeNames.farms}>
                                <div className="BTX-home-but">
                                    <img src={FarmImg} />
                                    <p>LP FARMS</p>
                                </div>
                            </Link>
                        </div>

                        <div className="main-page-align">
                            <Link to={routeNames.presale}>
                                <div className="BTX-home-but">
                                    <img src={PresaleImg} />
                                    <p>Private Sale</p>
                                </div>
                            </Link>
                        </div>
                        <div className="main-page-align">
                            <Link to={routeNames.bridge}>
                                <div className="BTX-home-but">
                                    <img src={BridgeImg} />
                                    <p>Bridge</p>
                                </div>
                            </Link>
                        </div>
                    </Row>
                </div>
            </div>
        </div >
    );
};

export default CasinoProtocolHome;