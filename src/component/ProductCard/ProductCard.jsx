import React from 'react'
import { Card, CardFooter, Image, Button } from '@nextui-org/react'
import { useNavigate } from 'react-router-dom'
import './ProductCard.css'

export const ProductCard = ({ data }) => {
  const navigate = useNavigate()
  const handleclick = (item) => {
    navigate(`/product${item.id}`)
  }
  return (
    <div className="product-card">
      {data.map((item, index) => {
        return (
          <Card isFooterBlurred radius="lg" className="border-none card" key={index}>
            <Image
              alt="Woman listing to music"
              className="object-cover"
              height={200}
              src={item.imgae}
              width={200}
            />
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-tiny text-black fw-bold">{item.title}</p>
              <Button
                className="text-tiny text-white bg-black/20"
                variant="flat"
                color="default"
                radius="lg"
                size="sm"
                onClick={() => handleclick(item)}
              >
                GO
              </Button>
            </CardFooter>
          </Card>
        )
      })}
    </div>
  )
}
