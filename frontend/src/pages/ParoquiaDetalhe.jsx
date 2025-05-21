import React from 'react'
import { useParams } from 'react-router-dom'

const ParoquiaDetalhe = () => {
  const { id } = useParams()

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-blue-600">Detalhes da Paróquia</h2>
      <p className="text-gray-600 mt-2">ID da paróquia: {id}</p>
    </div>
  )
}

export default ParoquiaDetalhe
