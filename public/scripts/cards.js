var Card = React.createClass({
    // TODO: check this method and Jed Watson's classnames to make it work.
    flipCard: function(btn) {
        var $card = $(btn).closest('.card-container');
        console.log($card);
        if ($card.hasClass('hover')) {
            $card.removeClass('hover');
        } else {
            $card.addClass('hover');
        }
    },
    render: function() {
        return (
            <div className="card">
                <div className="col-sm-4">
                  <div className="card-container manual-flip">
                    <div className="card">
                      <div className="front">
                        <div className="cover">
                            <img src="images/rotating_card_thumb2.png"/>
                        </div>
                        <div className="content">
                          <div className="main">
                            <h3 className="name">Question #1</h3>
                            <p className="profession">History</p>
                            <h3 className="text-center question">When was George Washington born?</h3>
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
                            <p className="answer">George Washington was born in Boston, Massachussets, on 1848.</p>
                          </div>
                        </div>
                        <div className="footer">
                          <button className="btn btn-simple" rel="tooltip" title="Flip Card" onclick="rotateCard(this)">
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

ReactDOM.render(
    <Card />,
    document.getElementById('content')
);
