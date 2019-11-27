
//~~~~~~~~Made this into a function below~~~~~~~~~
// const desc = 'I just learned how to create a heckin React node and render it to the DOM.';

// const myTitleID = 'main-title'

// const name = 'Mike';

// const header = (
//     <header>
//     {/* This is a comment, my dude. */}
//        <h1 id={myTitleID}>{ name }'s first React element</h1> 
//        <p className="herpderp">{ desc }</p>
//     </header>
// );

//-----Header function as an arrow function-------
// const Header = () => (
//         <header>
//             <h1>Scoreboard</h1>
//             <span className="stats">Players: 1</span>
//         </header>
//     );

const Header = (props) => {
    return (
        <header>
            <h1>{ props.title }</h1>
            <span className="stats">Players: { props.totalPlayers }</span>
        </header>
    );
}

const Counter = () => {
    return (
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <span className="counter-score">35</span>
            <button className="counter-action increment"> + </button>
        </div>
    );
}


const Player = () => {
    return (
        <div className="player">
            <span className="player-name">
                Mike
            </span>
            <Counter />
        </div>
    );
}

const App = () => {
    return (
        <div className="scoreboard">
            <Header title="Scoreboard" totalPlayers={45} />

            {/* Players list */}
            <Player />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

console.log(header)