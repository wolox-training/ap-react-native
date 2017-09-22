import React from 'react';
import './styles.css';
import Comment from './components/Comment/index.js'
import NewComment from './components/NewComment/index.js'
import {COMMENTS} from './strings.js'

function Comments({comments}) {
  return (
    <div className="Comments">
      <h2>{COMMENTS}</h2>
      <div className="Comments-add">
        <NewComment />
      </div>
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
