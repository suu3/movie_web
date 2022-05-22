import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { CommentListType } from "types/common";
interface Props {
  commentList: CommentListType;
  setCommentList: React.Dispatch<React.SetStateAction<CommentListType>>;
}

const CommentContent = ({ commentList, setCommentList }: Props) => {
  const handleDelete = (key: string | number) => {
    const updateList: CommentListType = { ...commentList };
    delete updateList[key];
    setCommentList(updateList);
  };
  return (
    <ul className="comment-list">
      {Object.keys(commentList).map((key: string | number) => {
        return (
          <li key={key}>
            {commentList[key]}
            <AiFillDelete className="trash" onClick={() => handleDelete(key)} />
          </li>
        );
      })}
    </ul>
  );
};

export default CommentContent;
