import "./pastWork.css";

export default function PastWorkSection(props) {

    let wordleDiv = (
        <div id="wordle-div">
            <div className="wordle-space">W</div>
            <div className="wordle-space">O</div>
            <div className="wordle-space">R</div>
            <div className="wordle-space">D</div>
            <div className="wordle-space">S</div>
        </div>
    );

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
                        <PastWorkContainer workName="Wordle clone" item={wordleDiv}/>
                    </div>
                </div>
            </div>
        </section>
    );
}

function PastWorkContainer(props) {
    return(
        <div id="past-work-container">
            <h3>{props.workName}</h3>
            {props.item}
        </div>
    );
}