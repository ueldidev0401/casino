import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './index.scss';
import { Link } from 'react-router-dom';
import BitlockImg from 'assets/img/bitlock.png';
import BTXFinanceHomeLogo from 'assets/img/main-logo.png';
import NFTStakingImg from 'assets/img/NFT staking.png';
import NFTImg from 'assets/img/NFT.png';
import PresaleImg from 'assets/img/presale.png';
import StakingImg from 'assets/img/staking.png';
import FarmImg from 'assets/img/LP Farm.png';

import { routeNames } from 'routes';

const BTXFinanceHome = () => {
    return (
        <div className="text-center" style={{ marginBottom: "30px" }}>
            <img className="responsive logo-animation" src={BTXFinanceHomeLogo} style={{width:"500px"}}/>
            <div className="button-group-bar">
                <div className="button-group-container">
                    <Row>
                        {/* <Col xs="6" sm="3">
                            <Link to={routeNames.staking}>
                                <div className="BTX-home-but">
                                    <img src={StakingImg} />
                                    <p>STAKING</p>
                                </div>
                            </Link>
                        </Col> */}
                        
                        <Col xs="6" sm="3">
                            <Link to={routeNames.nftmint}>
                                <div className="BTX-home-but">
                                    <img src={NFTImg} />
                                    <p>Paraswap</p>
                                </div>
                            </Link>
                        </Col>
                        <Col xs="6" sm="3">
                            <Link to={routeNames.nftstaking}>
                                <div className="BTX-home-but">
                                    <img src={NFTStakingImg} />
                                    <p>Dice game</p>
                                </div>
                            </Link>
                        </Col>
                        {/* <Col xs="6" sm="3">
                            <Link to={routeNames.bitlock}>
                                <div className="BTX-home-but">
                                    <img src={BitlockImg} />
                                    <p>BITLOCK</p>
                                </div>
                            </Link>
                        </Col> */}
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