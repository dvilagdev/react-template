import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class Comment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: this.props.comment
    };
  }

  handleComment = event => {
    console.log("handleComment hijo. Valor: " + event.target.value);

    let commentValue = event.target.value;

    this.setState(
      {
        comment: event.target.value
      },
      () => {
        this.props.handleComment(commentValue);
      }
    );
  };

  handleCleanButton = () => {
    this.setState(
      {
        comment: ""
      },
      () => {
        this.props.handleComment(this.state.comment);
      }
    );
  };

  render() {
    console.log("Repinto Hijo. Valor: " + this.state.comment);

    return (
      <div className="Comment">
        <TextField
          label="Comment"
          variant="outlined"
          value={this.state.comment}
          onChange={this.handleComment}
        />
        <br />
        <br />
        <Button
          variant="contained"
          color="primary"
          onClick={this.handleCleanButton}
        >
          Limpiar
        </Button>
        <br />
        <br />
        Valor hijo: {this.state.comment}
      </div>
    );
  }
}

export default Comment;
