import react from 'react';
class Square extends React.Component {
    render() {
        return (<button className="square"> </button>);
    }
}
class Board extends React.Component {
    renderSquare(i) {
        return <Square />;
    }
}