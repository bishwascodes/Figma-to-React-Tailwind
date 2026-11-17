import React from 'react'


type BigCardsProps = {
  title: string;
  value: number | string;
};

const BigCards = ({ title, value }: BigCardsProps) => {
  return (
    <div className="wrapper">
      <div className="inner rounded-xl bg-[#fff] p-6">
        <p className="title text-[#64748B] text-sm">
          {title}
        </p>
        <b className="block mt-4 text-[#0F172A] text-4xl">
          {value}
        </b>
      </div>
    </div>
  );
};

export default BigCards;
