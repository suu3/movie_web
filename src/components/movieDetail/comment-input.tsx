import React, { useRef } from "react";
import { AiOutlineUpload } from "react-icons/ai";
import { CommentListType } from "types/common";

interface Props {
  commentList: CommentListType;
  setCommentList: React.Dispatch<React.SetStateAction<CommentListType>>;
}
const CommentInput = ({ commentList, setCommentList }: Props) => {
  const textArea = useRef<HTMLTextAreaElement>(null);

  const handleClick = () => {
    const text = textArea.current?.value;
    if (text === "") return;
    const updateList: CommentListType = { ...commentList };
    updateList[Date.now()] = text as string;
    setCommentList(updateList);
    if (textArea.current) {
      textArea.current.value = "";
    }
  };

  return (
    <>
      <div className="comment-title">Comment</div>
      <div className="input-row">
        <textarea maxLength={100} placeholder="Enter Comment" ref={textArea} />
        <button onClick={handleClick}>
          <AiOutlineUpload />
        </button>
      </div>
    </>
  );
};

export default CommentInput;
