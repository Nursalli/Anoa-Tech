import React, { Component } from "react";

import Hero from './assets/header.svg';
import Icon from './assets/mandiri.png';
import Thumbnail from './assets/office.jpg';
import User from './assets/user.png';
import Join from './assets/join.svg';

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
          kalimat : "With our IT experts, we bring innovation from drop to level up your business with a world class technology standard. Ready for our Tech Invention ?",
          icon: [
              {id: 1, icon: Icon},
              {id: 2, icon: Icon},
              {id: 3, icon: Icon},
              {id: 4, icon: Icon},
              {id: 5, icon: Icon},
              {id: 6, icon: Icon}
          ],
          cardcan: [
            {id: 1, title: "Development Service", desc: "Our support team will get assistance from Al-Powered"},
            {id: 2, title: "Maintenance Service", desc: "Our support team will get assistance from Al-Powered"},
            {id: 3, title: "IT Security", desc: "Our support team will get assistance from Al-Powered"},
            {id: 4, title: "Software Testing", desc: "Our support team will get assistance from Al-Powered"},
            {id: 5, title: "Consulting Service", desc: "Our support team will get assistance from Al-Powered"},
          ],
          chooseus: [
            {icon: "fa-solid fa-file-lines text-dark fa-2x", title: "Secrum Value as Working Principle", desc: "Commitment, focus, openness, and courage are the basis of our working principle to any project that we do."},
            {icon: "fa-solid fa-users text-dark fa-2x", title: "Professional Team", desc: "Commitment, focus, openness, and courage are the basis of our working principle to any project that we do."},
            {icon: "fa-solid fa-chart-column text-dark fa-2x", title: "Sustainability Orientation", desc: "Commitment, focus, openness, and courage are the basis of our working principle to any project that we do."},
            {icon: "fa-solid fa-laptop text-dark fa-2x", title: "Tech Geek", desc: "Commitment, focus, openness, and courage are the basis of our working principle to any project that we do."},
          ],
          whattheysaid: [
            {id: 1, name:"Mila", job:"CEO Techno Park", message:"Good job Anoa Tech! keep working and growing, we are very satisfied with the service provided. i hope we can continue to work well together in the future."},
            {id: 2, name:"Akmal", job:"CEO Samudra Tech", message:"Good job Anoa Tech! keep working and growing, we are very satisfied with the service provided. i hope we can continue to work well together in the future."},
            {id: 3, name:"Gerrald", job:"PM Yongsan Media", message:"Good job Anoa Tech! keep working and growing, we are very satisfied with the service provided. i hope we can continue to work well together in the future."},
          ],
          address: "Jl. Bunga Kolosua No 27 Lrg. Blok M Kendari Barat, Kota Kendari, Sulawesi Tenggara 93121",
          product: [
              {id: 1, name: "Stone Bath"},
              {id: 2, name: "Nullbasic"},
              {id: 3, name: "Struggleway"}
          ],
          company: [
              {id: 1, name: "About Us"},
              {id: 2, name: "Jobs"},
              {id: 3, name: "Blog"},
              {id: 4, name: "FAQ"}
          ],
          supportandsales: [
              {id: 1, name: "(+62)891-1234-5678"},
              {id: 2, name: "CS@anoatech.co.id"}
          ]
        }
    }

    render(){
        return (
            <div>
                <div className="container">
                        {/* layer1 */}
                        <Layer1 KalimatAwal={this.state.kalimat} Hero={Hero} Icon={this.state.icon} />
                        {/* layer2 */}
                        <Layer2 Card={this.state.cardcan} />
                        {/* layer3 */}
                        <Layer3 Thumbnail={Thumbnail} ChooseUs={this.state.chooseus} />
                        {/* layer4 */}
                        <Layer4 User={User} WhatTheySaid={this.state.whattheysaid} />
                        {/* layer5 */}
                        <Layer5 Join={Join} KalimatAwal={this.state.kalimat} />
                         {/* layer6 */}
                        <Layer6 Address={this.state.address} Product={this.state.product} Company={this.state.company} SupportandSales={this.state.supportandsales} />
                </div>
                <div>
                    <p className="text-center text-white bg-primary py-2 m-0">&copy;2020 PT ANOA TECH</p>
                </div>
            </div>
        );
    }
};

export default Home;