import arrowleft from "../images/arrow_left.png";
import arrowright from "../images/arrow_right.png";

function PageButton({ children }) {
  return (
    <button className="flex h-10 w-10 items-center justify-center rounded-full border">
      {children}
    </button>
  );
}

export default function Pagination() {
  const testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // ! test
  const startPage = 1;

  const handleRightButton = (startPage) => {
    return testData.slice(startPage + 5, startPage + 10)
      ? startPage + 5
      : alert("Don't have data");
  };

  const handleLeftButton = (startPage) => {
    return testData.slice(startPage - 6, startPage - 1)
      ? startPage - 5
      : alert("Don't have data");
  };

  return (
    <div className="mt-10 flex justify-center gap-x-1">
      <PageButton onClick={() => handleLeftButton(startPage)}>
        <img src={arrowleft} alt="arrowleft" />
      </PageButton>
      {testData &&
        testData.slice(startPage - 1, startPage + 4).map((page) => {
          return <PageButton>{page}</PageButton>;
        })}
      <PageButton onClick={() => handleRightButton(startPage)}>
        <img src={arrowright} alt="arrowright" />
      </PageButton>
      <h1>!!!{startPage}</h1>
    </div>
  );
}
