import React, { useState } from "react";
import { CommentListType } from "types/common";
import CommentContent from "./comment-content";
import CommentInput from "./comment-input";

const CommentList = () => {
  const [commentList, setCommentList] = useState<CommentListType>({});

  return (
    <>
      <div className="comment">
        <CommentInput
          commentList={commentList}
          setCommentList={setCommentList}
        />
        <div className="border"></div>
        <CommentContent
          commentList={commentList}
          setCommentList={setCommentList}
        />
      </div>
    </>
  );
};

export default CommentList;
