import React from "react";
import ImgMediaCard from "../components/cards";

export default function Events() {
  const evnets = [];
  return (
    <div>
      <ImgMediaCard
        image={"./assets/test.jpeg"}
        description={"My First workShop"}
        title={"WorkShop"}
        button1Text={"Join"}
      />
    </div>
  );
}
