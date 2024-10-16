import React from 'react';
import { Card, CardFooter, Image, Checkbox } from '@nextui-org/react';
import { FaBullhorn, FaVolumeUp } from "react-icons/fa";
import img1 from '../../assets/img3.png';
import './ProductCard.css';
import { IoVolumeMedium, IoVolumeMediumOutline } from 'react-icons/io5';
import { IoIosVolumeLow, IoIosVolumeMute } from 'react-icons/io';

export const ProductCard = ({ data, speakerchange, checkedSpeakers }) => {

  console.log(data)
  // Modified handleChange to accept itemId
  const handleChange = (event, id) => {
    speakerchange(id, event.target.checked);
  };

  const renderVolumeIcon = (volPercentage) => {
    if (volPercentage === "") {
      return <IoIosVolumeMute />;
    } else if (volPercentage > 0 && volPercentage <= 25) {
      return <IoIosVolumeLow />;
    } else if (volPercentage > 25 && volPercentage <= 50) {
      return <IoVolumeMediumOutline />;
    } else if (volPercentage > 50 && volPercentage <= 80) {
      return <IoVolumeMedium />;
    } else if (volPercentage > 80) {
      return <FaVolumeUp />;
    }
  };

  return (
    <div className="product-card">
      {data?.length > 0 ? (
        data.map((item, index) => (
          <div className={`flex flex-col justify-center items-center p-4 bg-white  shadow-lg w-[180px] border border-gray-200 rounded-2xl transition-transform transform hover:scale-105 duration-300 ${item.STATUS === 'online' ? 'bg-green-100' : 'bg-red-100'}`} key={index}>
            <div className='flex justify-between w-full mb-3'>
              <div className={`text-[10px] text-white bg-orange-600 p-2 rounded-full shadow ${item.STATUS === 'online' ? 'bg-green-600' : 'bg-red-600'}`}>
                <FaBullhorn />
              </div>
              <p className='text-sm text-gray-600 font-medium'>{item.exten_name}</p>
              <div className='flex items-center'>
                <Checkbox
                  onChange={(e) => handleChange(e, item.id)}
                  isSelected={checkedSpeakers.map((item) => item.id).includes(item.id)}
                  className='border-slate-950'
                  
                />
              </div>
            </div>

            <p className='text-sm text-gray-600 font-medium mb-4'>{item.exten}</p>
            <div className='flex justify-between items-center w-full'>
              <p className='text-xs text-gray-600 font-semibold capitalize'>{item?.STATUS || ""}</p>
              <p className='text-xs text-gray-600 font-semibold flex gap-2 items-center justify-center'>
                {renderVolumeIcon(item?.vol_percentage)} {item?.vol_percentage || "0"}%
              </p>
            </div>
          </div>
        ))
      ) : null}
    </div>
  );
};
