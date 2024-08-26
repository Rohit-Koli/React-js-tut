import React from 'react'

export const Card = ({userData}) => {
  return (
    <h1 className="text-3xl font-bold ">
      <div className="card">
        {userData.map((id,title)=>{
            <li key={id}>
                {title}
            </li>
        })}
      </div>
    </h1>
  )
}
