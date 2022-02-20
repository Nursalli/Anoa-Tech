import React, { Component } from "react";
import Icon from './assets/Mandiri.png';
import Thumbnail from './assets/office.jpg';
import User from './assets/user.png';
import Hero from './assets/header.svg';
import Logo from '../logo.svg';

import Layer1 from './component/layer1';
import Layer2 from './component/layer2';
import Layer3 from './component/layer3';
import Layer4 from './component/layer4';
import Layer5 from './component/layer5';
import Layer6 from './component/layer6';

class Home extends Component {
    constructor(){
        super();
        this.state = {
          kalimat : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore unde delectus officiis. Voluptate, expedita, temporibus debitis iure sed quas magnam at qui maiores ratione similique laudantium doloribus reprehenderit alias. Eligendi.",
        }
    }

    render(){
        return (
            <div>
                <div className="container">
                        {/* layer1 */}
                        <Layer1 KalimatAwal={this.state.kalimat} Hero={Hero} Icon={Icon} />
                        {/* layer2 */}
                        <Layer2 Logo={Logo} />
                        {/* layer3 */}
                        <Layer3 Thumbnail={Thumbnail} />
                        {/* layer4 */}
                        <Layer4 User={User} />
                        {/* layer5 */}
                        <Layer5 User={User} />
                         {/* layer6 */}
                         <Layer6 />
                </div>
                <div>
                    <p className="text-center text-white bg-primary py-2 m-0">&copy;2020 PT ANOA TECH</p>
                </div>
            </div>
        );
    }
};

export default Home;