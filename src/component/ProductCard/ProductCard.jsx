import React from 'react';
import { Card, CardFooter, Image, Button } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css';
import { Checkbox } from "@nextui-org/react";
import img1 from '../../assets/img1.png';

export const ProductCard = ({ data }) => {
  const navigate = useNavigate();

  // Modified handlechange to accept itemId
  const handleChange = (event, id) => {
    console.log('Checked:', event.target.checked);
    console.log('Item ID:', id);
  };

  return (
    <div className="product-card">
      {data?.length > 0 ? (
        data.map((item, index) => (
          <Card isFooterBlurred radius="lg" className="border-none card" key={index}>
            <Image
              alt="Product image"
              className="object-cover"
              height={200}
              src={img1}
              width={200}
            />
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 p-3">
              <p className="text-tiny text-black fw-bold">Speaker {item.exten_name}</p>
              {/* Passing both the event and itemId to the handleChange function */}
              <Checkbox onChange={(e) => handleChange(e, item.id)}></Checkbox>
            </CardFooter>
          </Card>
        ))
      ) : null}
    </div>
  );
};
