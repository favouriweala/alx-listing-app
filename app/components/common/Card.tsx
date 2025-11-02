import React from 'react'
import { CardProps } from '@/interfaces'

const Card: React.FC<CardProps> = ({ title, description, image }) => {
  return (
    <div className="border rounded-xl shadow-md p-4 bg-white hover:shadow-lg transition">
      {image && <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg mb-3" />}
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  )
}

export default Card
