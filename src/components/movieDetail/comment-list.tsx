import React, { useRef, useState } from "react";
import { AiOutlineUpload, AiFillDelete } from "react-icons/ai";

type commentList = {
  [key: string | number]: string;
};
const CommentList = () => {
  const [commentList, setCommentList] = useState<commentList>({});
  const textArea = useRef<HTMLTextAreaElement>(null);

  const handleClick = () => {
    const text = textArea.current?.value;
    if (text === "") return;
    const updateList: commentList = { ...commentList };
    updateList[Date.now()] = text as string;
    setCommentList(updateList);
    if (textArea.current) {
      textArea.current.value = "";
    }
  };

  const handleDelete = (key: string | number) => {
    const updateList: commentList = { ...commentList };
    delete updateList[key];
    setCommentList(updateList);
  };

  return (
    <>
      <div className="comment">
        <div className="comment-title">Comment</div>
        <div className="input-row">
          <textarea
            maxLength={100}
            placeholder="Enter Comment"
            ref={textArea}
          />
          <button onClick={handleClick}>
            <AiOutlineUpload />
          </button>
        </div>
        <div className="border"></div>
        <ul className="comment-list">
          {Object.keys(commentList).map((key: string | number) => {
            return (
              <li key={key}>
                {commentList[key]}
                <AiFillDelete
                  className="trash"
                  onClick={() => handleDelete(key)}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default CommentList;
