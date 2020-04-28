
import React, { Component } from 'react'
import { Chart,Area } from 'react-charts'
 export default function MyChart() {
  const data =[
    {
      label: 'Series 1',
      data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
    },
    {
      label: 'Series 2',
      data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
    },
    {
      label: 'Series 3',
      data: [[0, 2], [1, 2], [2, 5], [3, 6], [4, 4]]
    }
  ]
 
  const axes =  [
                   { primary: true, type: 'linear', position: 'bottom' },
                   { type: 'linear', position: 'left' }
                 ]
 
  return (
    <div
      style={{
        width: '100%',
        height: '300px'
      }}
    >
      <Chart data={data} axes={axes} />
    
    </div>
  )
}