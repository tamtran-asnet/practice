import React, {PropTypes, Component} from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

class Comment extends Component {
  constructor(props) {
    super(props);
  }

  onClickComment(direction) {
    this.props.onClickComment(direction);
  }

  render() {
    return (
      <li className="card-comment-item" key={this.props.commentId} >
        <a href="javascript:void(0)" className="link-item" 
          onClick={this.onClickComment.bind(this, this.props.commentId)}
          commentId = {this.props.commentId}
        >
            <div className="card-comment-title">
              {this.props.text} { this.props.commentId }
          </div>
        </a>
      </li>
    )
  }
}

Comment.propTypes = {
  onClickComment: PropTypes.func,
  text: PropTypes.string.isRequired,
  commentId: PropTypes.number.isRequired
}

export default Comment