import { useParams } from "react-router-dom";
import useRestaraunt from "../utils/useRestaraunt";
import { useState } from "react";
import { useOnline } from "../utils/useOnline";

function RestarauntMenu() {
  const { id } = useParams<string>();
  const isOnline: boolean = useOnline();
  let menuList: any;
  menuList = useRestaraunt(id);
  return (
    <div>
      {!isOnline ? (
        <p>No internet connection</p>
      ) : (
        menuList &&
        menuList.map((item: any) => (
          <p style={{ display: "flex", gap: "5px" }}>{item.name}</p>
        ))
      )}
    </div>
  );
}

export default RestarauntMenu;
