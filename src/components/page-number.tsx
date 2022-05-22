import Pagination from "react-js-pagination";
import {
  AiOutlineDoubleLeft,
  AiOutlineCaretLeft,
  AiOutlineCaretRight,
  AiOutlineDoubleRight,
} from "react-icons/ai";

interface Props {
  page: number;
  length: number;
  handlePageChange: (page: number) => void;
}

const PageNumber = (props: Props) => {
  return (
    <Pagination
      activePage={props.page}
      itemsCountPerPage={4}
      totalItemsCount={props.length}
      pageRangeDisplayed={4}
      firstPageText={
        <AiOutlineDoubleLeft style={{ transform: "translateY(20%)" }} />
      }
      lastPageText={
        <AiOutlineDoubleRight style={{ transform: "translateY(20%)" }} />
      }
      prevPageText={
        <AiOutlineCaretLeft style={{ transform: "translateY(20%)" }} />
      }
      nextPageText={
        <AiOutlineCaretRight style={{ transform: "translateY(20%)" }} />
      }
      onChange={props.handlePageChange}
    />
  );
};

export default PageNumber;
