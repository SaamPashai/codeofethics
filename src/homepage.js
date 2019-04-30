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
                            <h2 id="one" className="titleSpace">Section One</h2>
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
                            <h2 id="one" className="titleSpace">Section Two</h2>
                        </div>
                    </header>
                    <div>
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
                        <p className="state">In the process flow of your design, could someone who is not familiar with your design, navigate, and achieve the desired goal?</p> 
                        <p className="state">Is your design intended to help the user, or generate revenue? </p>
                        <p className="state">Does your design allow your users to make their decisions freely?</p>
                        <p className="state">Have you conducted any A/B testing or any other sort of research to verify that the design will help the user?</p>
                        <p className="state">While designing are you constantly improving on your designs features? </p>
                        <p className="state">Does this design improve the utility of your users or of you as a designer?</p>
                    </div>
                </div>
            </div>
        );
    }
}


export default Homepage;