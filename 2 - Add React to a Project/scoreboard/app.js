// const title = 'My first React element!';

const desc = 'I just learned how to create a heckin React node and render it to the DOM.';

const myTitleID = 'main-title'

const name = 'Mike';

const header = (
    <header>
    {/* This is a comment, my dude. */}
       <h1 id={myTitleID}>{ name }'s first React element</h1> 
       <p className="herpderp">{ desc }</p>
    </header>
);


ReactDOM.render(
    header,
    document.getElementById('root')
);

console.log(header)