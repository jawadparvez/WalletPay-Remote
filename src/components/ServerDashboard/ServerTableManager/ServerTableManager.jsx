import React from "react";
import { useState } from "react";
import ServerTableManager1 from "./TableManager1";
import ServerTableManager2 from "./TableManager2";

function ServerTableManager() {
  const [page, setPage] = useState(0);

  const componentList = [
    <ServerTableManager1 page={page} setPage={setPage} />,
    <ServerTableManager2 page={page} setPage={setPage} />,
  ];
  return <div>{componentList[page]}</div>;
}

export default ServerTableManager;
