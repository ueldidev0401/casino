import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './index.scss';
import { Link } from 'react-router-dom';
import BTXFinanceHomeLogo from 'assets/img/main-logo.png';
import Paraswap from 'assets/img/paraswap.png';
import Dicegame from 'assets/img/dicegame.png';
import PresaleImg from 'assets/img/presale.png';
import FarmImg from 'assets/img/Farm.png';

import { routeNames } from 'routes';

const BTXFinanceHome = () => {
    return (
        <div className="text-center" style={{ marginBottom: "30px" }}>
            <img className="responsive logo-animation" src={BTXFinanceHomeLogo}/>
            <div className="button-group-bar">
                <div className="button-group-container">
                    <Row>
                        <Col xs="6" sm="3">
                            <Link to={routeNames.paraswap}>
                                <div className="BTX-home-but">
                                    <img src={Paraswap} />
                                    <p>Paraswap</p>
                                </div>
                            </Link>
                        </Col>
                        <Col xs="6" sm="3">
                            <Link to={routeNames.dicegame}>
                                <div className="BTX-home-but">
                                    <img src={Dicegame} />
                                    <p>Dice game</p>
                                </div>
                            </Link>
                        </Col>
                        <Col xs="6" sm="3">
                            <Link to={routeNames.farms}>
                                <div className="BTX-home-but">
                                    <img src={FarmImg} />
                                    <p>LP FARMS</p>
                                </div>
                            </Link>
                        </Col>

                        <Col xs="6" sm="3">
                            <Link to={routeNames.presale}>
                                <div className="BTX-home-but">
                                    <img src={PresaleImg} />
                                    <p>Private Sale</p>
                                </div>
                            </Link>
                        </Col>
                    </Row>
                </div>
            </div>
        </div >
    );
};

export default BTXFinanceHome;