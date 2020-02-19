import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import "./styles.css";

// Importar componentes
import Comment from "./Comment";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: ""
    };
  }

  handleComment = commentValue => {
    console.log("handleComment padre. Valor: " + commentValue);

    this.setState({
      comment: commentValue
    });
  };

  render() {
    console.log("Repinto Padre. Valor: " + this.state.comment);
    return (
      <div className="App">
        <Paper elevation={3} className="OutherPaper">
          <Comment
            comment={this.state.comment}
            handleComment={this.handleComment}
          />
          <br />
          Valor padre: {this.state.comment}
        </Paper>
      </div>
    );
  }
}

export default App;
