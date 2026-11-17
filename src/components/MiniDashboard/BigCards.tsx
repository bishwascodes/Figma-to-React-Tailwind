import React from 'react'


type BigCardsProps = {
  title: string;
  value: number | string;
};

const BigCards = ({ title, value }: BigCardsProps) => {
  return (
    <div className="wrapper">
      <div className="inner rounded-3xl bg-[#fff] p-10">
        <p className="title">
          {title}
        </p>
        <b className="text-[#0F172A] text-4xl">
          {value}
        </b>
      </div>
    </div>
  );
};

export default BigCards;
