import icoLeft from "../img/ic_arrow_left.svg"
import icoRight from "../img/ic_arrow_right.svg"

export function Pagination ({now, total, onClick, onChange}) {
  const rendering = () => {
    const result = [];
    for (let i = 0; i < total; i++) {
      result.push(<li key={i} className="pagination-list"><button type="button" value={i+1} onClick={onClick} className="pagination-list__btn">{i+1}</button></li>);
    }
    result[now-1] = <li key={now-1} className="pagination-list"><button type="button" value={now} onClick={onClick} className="pagination-list__btn on">{now}</button></li>;
    return result;
  }

  const handlePrevClick = (e) => {
    if(now > 1) onChange((prevPaging) => prevPaging - 1);
  }
  const handleNextClick = (e) => {
    if(now < total) onChange((prevPaging) => prevPaging + 1);
  }
  return (
    <div className="pagination">
      <ul className="pagination-container">
        <li className="pagination-list"><button type="button" className="pagination-list__btn" onClick={handlePrevClick}><img src={icoLeft} alt="이전 페이지"/></button></li>
        {rendering()}
        <li className="pagination-list"><button type="button" className="pagination-list__btn" onClick={handleNextClick}><img src={icoRight} alt="이후 페이지"/></button></li>
      </ul>
    </div>
  )
}