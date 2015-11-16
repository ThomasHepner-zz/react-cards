var data = [
  {id: 1, question: "What's your name?", answer: "Thomas"},
  {id: 2, question: "What's your last name?", answer: "Hepner"}
];

var Card = React.createClass({
    getInitialState: function() {
      return ({flipped: false});
    },
    flipCard: function(e) {
      var nextState = !this.state.flipped
      this.setState({flipped: nextState});
    },
    render: function() {
      var cardClasses = classNames({'manual-flip': true, 'card-container': true, 'hover': this.state.flipped})
        return (
            <div className="card">
                <div className="col-sm-6">
                  <div className={cardClasses}>
                    <div className="card">
                      <div className="front">
                        <div className="cover">
                            <img src="images/rotating_card_thumb2.png"/>
                        </div>
                        <div className="content">
                          <div className="main">
                            <h3 className="name">Question #1</h3>
                            <p className="profession">History</p>
                            <h3 className="text-center question">{this.props.question}</h3>
                          </div>
                          <div className="footer">
                            <button className="btn btn-simple" onClick={this.flipCard}>
                              <i className="fa fa-mail-forward"></i> Check Answer
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="back">
                        <div className="content">
                          <div className="header">

                          </div>
                          <div className="main text-center">
                            <h3>Answer</h3>
                            <p className="answer">{this.props.answer}</p>
                          </div>
                        </div>
                        <div className="footer">
                          <button className="btn btn-simple" rel="tooltip" title="Flip Card" onClick={this.flipCard}>
                            <i className="fa fa-reply"></i> Back
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>

        );
    }
});

var Deck = React.createClass({
  render: function() {
    return (
      <div className="deck">
        <li className="list-group-item">
          <span className="badge">14</span>
          {this.props.name}
        </li>
      </div>
    );
  }
});

var DeckList = React.createClass({
  render: function() {
    return (
      <div className="deckList">
        <ul className="list-group">
          <Deck name="Cards" />
          <Deck name="History" />
        </ul>
      </div>
    );
  }
});

var DeckBox = React.createClass({
  render: function() {
    return (
      <div className="deckBox">
        <h1 className="text-center">Decks</h1>
        <DeckList />
      </div>
    );
  }
});

ReactDOM.render(
    <Card question="What day is it?" answer="Today" />,
    document.getElementById('cards-content')
);
ReactDOM.render(
    <DeckBox />,
    document.getElementById('decks-content')
);
