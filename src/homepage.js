import React, { Component } from 'react';
import './App.css';
class Homepage extends Component {
    render() {
        return (
            <div>
                <Title />
                <SectionOne />
                <SectionTwo />
                <SectionThree />
            </div>
        );
    }
}

class Title extends Component {
    render() {
        return (
            <div>
                <div id="top">
                    <header>
                        <div>
                            <h1>Code of Ethics</h1>
                        </div>
                    </header>
                </div>
            </div>
        );
    }
}


class SectionOne extends Component {
    render() {
        return (
            <div>
                <div id="sectionOne">
                    <header>
                        <div className="center">
                            <h2 id="one" className="titleSpace">Design Statement</h2>
                        </div>
                    </header>
                    <div>
                        <p className="state">Main Statement: “I swear to fulfill, to the best of my ability and judgment, this covenant:</p> 
                        <p className="state">I will strive to design so that the target audience can achieve their goal seamlessly, keeping in mind of all users.</p>
                        <p className="state">I will not design for maximizing monetary profits and greed, but will keep in mind monetary gain is necessary to reinvest in the design, and create a better product for the user.</p>
                        <p className="state">I will design to give the users as much freedom as possible, without infringing upon the happiness of other users.</p>
                        <p className="state">I will constantly come up with new iterations of my design to improve as many features as possible, while keeping the interest of the users in mind, to create an excellent design.</p>
                    </div>
                </div>
            </div>
        );
    }
}


class SectionTwo extends Component {
    render() {
        return (
            <div>
                <div id="sectionTwo">
                    <header>
                        <div className="center">
                            <h2 id="one" className="titleSpace">Design Principles</h2>
                        </div>
                    </header>
                    <div>
                        <p className="state">Designers should:</p>
                        <ul>
                            <li className="state">Hold themselves accountable for the work they are releasing to the world.</li>
                            <li className="state">Value the impact of their design over the compensation.</li>
                            <li className="state">Aim to convenience the lives of their audience over exploiting them for extra money. </li>
                            <li className="state">Always look to improve on a design, knowing that there is always something that can improve.</li>
                            <li className="state">Understands who their users are and will try to appeal to their targeted individuals as much as possible to maximize the individuals’ utility.</li>
                            <li className="state">Users are to be free to making their own decision, and there must not be any coercion to manipulate the user into making any decisions.</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

class SectionThree extends Component {
    render() {
        return (
            <div>
                <div id="sectionThree">
                    <header>
                        <div className="center">
                            <h2 id="one" className="titleSpace">Activity</h2>
                        </div>
                    </header>
                    <div>
                        <p className="state">Please answer the following questions:</p>
                        <br></br>
                        <p className="state">What is the user giving in this exchange? What is the solution giving to the user in this exchange?</p>
                        <p className="state">Does the user know exactly what they are giving up?</p>
                        <p className="state">Is this a fair exchange? Why?</p>
                        <p className="state">In the process flow of your design, could someone who is not familiar with your design, navigate, and achieve the desired goal?</p>
                        <p className="state">Complete basic flow diagrams for executing the core functions of your solution</p>
                        <p className="state">In what ways is this design generating revenue?</p>
                        <p className="state">Is this the best way to ensure a profit? List some alternative methods you have thought of.</p>
                        <p className="state">What utility does this solution offer the user?</p>
                        <p className="state">List this design’s potential stakeholders and how they benefit or how they are inhibited because of this design.</p>
                        <p className="state">How is this solution different from other, pre existing solutions?</p>
                        <p className="state">What are some features you plan on improving and how do you plan on improving them?</p>
                    </div>
                </div>
            </div>
        );
    }
}


export default Homepage;