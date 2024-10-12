import React from 'react';
import { Card, CardFooter, Image, Checkbox } from '@nextui-org/react';
import img1 from '../../assets/img1.png';
import './ProductCard.css';

export const ProductCard = ({ data, speakerchange, checkedSpeakers }) => {
  // Modified handleChange to accept itemId
  const handleChange = (event, id) => {
    speakerchange(id, event.target.checked);
  };


  return (
    <div className="product-card">
      {data?.length > 0 ? (
        data.map((item, index) => (
          <Card isFooterBlurred radius="lg" className={`border-none card ${item.activesatatus === 'Active' ? 'bg-green-100' : 'bg-red-100'}`} key={index}>
            <Image
              alt="Product image"
              className="object-cover"
              height={150}
              src={img1}
              width={150}
            />
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 p-3">
              <p className="text-tiny text-black fw-bold">Speaker {item.exten_name}</p>
              {/* Passing both the event and itemId to the handleChange function */}
              <Checkbox
                // isChecked={checkedSpeakers.includes(item.id)}
                onChange={(e) => handleChange(e, item.id)}
                isSelected={checkedSpeakers.map((item) => item.id).includes(item.id)}
              />
            </CardFooter>
          </Card>
        ))
      ) : null}
    </div>
  );
};
