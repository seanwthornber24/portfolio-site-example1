import "./pastWork.css";
import React from 'react';

export default class PastWorkSection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            wordleTriggered: false
        }

        this.wordleHover.bind(this);
    }

    wordleHover(arr) {
        let x = Math.floor(Math.random()*3) + 1
        console.log(x);
        setTimeout(() => {
            if (arr.length !== 0 && !this.state.wordleTriggered) {
                if (x === 1) {
                    arr[0].style.transition = "0.5s"
                    arr[0].style.backgroundColor = "#236e0c"
                    arr[0].style.border = "#1a5408 solid 4px"
                }
                else if (x === 2) {
                    arr[0].style.transition = "0.5s"
                    arr[0].style.backgroundColor = "#deb510"
                    arr[0].style.border = "#ba980d solid 4px"
                }
                else {
                    arr[0].style.transition = "0.5s"
                    arr[0].style.backgroundColor = "#262626"
                    arr[0].style.border = "#565656 solid 4px"
                }
                arr.shift();
                this.wordleHover(arr);
            }
            else {
                this.setState({
                    wordleTriggered: true
                });
            }
        }, 350);
        
    }

    render() {
        let wordleDiv = (
            <div id="wordle-div">
                <div className="wordle-space">C</div>
                <div className="wordle-space">L</div>
                <div className="wordle-space">O</div>
                <div className="wordle-space">N</div>
                <div className="wordle-space">E</div>
            </div>
        );
        let wordleSquares = document.querySelectorAll(".wordle-space");

        return(
            <section id="past-work-section">
                <div id="top-level-div">
                    <div id="title-div">
                        <svg xmlns="http://www.w3.org/2000/svg" width="7vh" height="7vh" fill="currentColor" class="bi bi-code-slash" viewBox="0 0 16 16">
                            <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
                        </svg>
                        <h1>Stuff I've made</h1>
                        <h2>examples of some apps I have created</h2>
                        <h2>.</h2>
    
                        <div id="work-containers">
                            <a href="https://github.com/seanwthornber24/reactJsWordleClone" target="_blank">
                                <PastWorkContainer workName="Wordle clone" item={wordleDiv} handleHover={() => this.wordleHover(Array.from(document.querySelectorAll(".wordle-space")))}/>
                            </a>
                            <PastWorkContainer workName="Connect 4"/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

function PastWorkContainer(props) {
    return(
        <div id="past-work-container" onMouseEnter={props.handleHover}>
            <h3>{props.workName}</h3>
            {props.item}
        </div>
    );
}