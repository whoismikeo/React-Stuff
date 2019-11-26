
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

function Header() {
    return (
        <header>
            <h1>Scoreboard</h1>
            <span className="stats">Players: 1</span>
        </header>
    );
}





ReactDOM.render(
    <Header />,
    document.getElementById('root')
);

console.log(header)