import React from "react";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/places/boat.jpg";
import Img2 from "../../assets/places/tajmahal.jpg";
import Img3 from "../../assets/places/water.jpg";
import Img4 from "../../assets/places/place4.jpg";
import Img5 from "../../assets/places/place5.jpg";
import Img6 from "../../assets/places/place6.jpg";

const PlacesData = [
  {
    img: Img1,
    title: "보트",
    location: "미국",
    description: "손에 꼽히는 보트명소입니다",
    price: 6700,
    type: "가 격",
  },
  {
    img: Img2,
    title: "타지마할",
    location: "인도",
    description: "타지마할입니다",
    price: 6700,
    type: "가 격",
  },
  {
    img: Img3,
    title: "하와이",
    location: "미국",
    description: "하와이입니다",
    price: 6200,
    type: "가 격",
  },
  {
    img: Img4,
    title: "시드니",
    location: "호주",
    description: "유명한 오페라하우스입니다",
    price: 6700,
    type: "가 격",
  },
  {
    img: Img5,
    title: "로스 엔젤레스",
    location: "미국",
    description: "로스엔젤레스입니다",
    price: 6700,
    type: "가 격",
  },
  {
    img: Img6,
    title: "로스 베가스",
    location: "캘리포니아",
    description: "캘리포니아입니다",
    price: 6200,
    type: "가 격",
  },
];

const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            관 광 명 소
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlacesData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;
