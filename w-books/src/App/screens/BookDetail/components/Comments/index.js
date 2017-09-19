import React from 'react';
import './styles.css';
import Comment from './components/Comment/index.js'

function Comments({comments}) {
  return (
    <div className="Comments">
      <h2>Comments</h2>
      <div className="Comments-container">
        {comments.map(comment =>
          <div className="Sugestions-cover">
            <Comment comment={comment}/>
          </div>
        )}
      </div>
    </div>
  );
}

export default Comments;
