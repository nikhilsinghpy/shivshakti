import React from 'react';
import { Link } from 'react-router-dom';
import './IconCard.css';
export const IconCard = ({
  data = [],
  cardClass = '',
  iconClass = '',
  textClass = '',
  contentClass='',
}) => {
  return (
    <div className={`flex flex-wrap gap-7 w-full ${contentClass}`}>
      {data.map((item, index) => (
        <Link to={item.to} key={index}>
          <div className={`card-outer`}>
            <div className={`${cardClass} icon-card card bg-white shadow-md rounded-3xl p-4  flex flex-col items-center justify-center`}>
              <div
                className={`${item.bgColor || 'bg-blue-100'} rounded-full icon-card-logo flex justify-center items-center `}
              >
                <item.icon className={`icon-card-icon ${iconClass}`} />
              </div>
            </div>
            <p
              className={`text-gray-600 text-sm text-center font-bold mt-3 ${textClass}`}
            >
              {item.title}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};
