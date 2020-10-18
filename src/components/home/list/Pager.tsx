import React from "react";
import IPagerProps from "./IPagerProps";

export default function Pager(props: IPagerProps) {
  return (
    <ul className="pagination">
        <li className="page-item"><button className="page-link" onClick={props.onPreviousClick}>Previous</button></li>
        <li className="page-item"><button className="page-link" onClick={props.onNextClick}>Next</button></li>
    </ul>
  );
}
