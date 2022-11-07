import React from "react";
import { useState } from "react";
import TabHistory1 from "./Tabhistory1";
import TabHistory2 from "./Tabhistory2";
import TabHistory3 from "./Tabhistory3";

function TabHistory() {
  const [page, setPage] = useState(0);

  const componentList = [
    <TabHistory1 page={page} setPage={setPage} />,
    <TabHistory2 page={page} setPage={setPage} />,
    <TabHistory3 page={page} setPage={setPage} />,
  ];
  return <div>{componentList[page]}</div>;
}

export default TabHistory;
