import React, { useRef, useEffect } from 'react'
import { waves, sawtooth } from './utils.js'

export default function() {
  const refs = useRef(null)
  useEffect(() => {
    var ctx = refs.current.getContext('2d')
    ctx.lineWidth = 2
    ctx.strokeStyle = 'black'
    ctx.save()
    ctx.beginPath() //开始
    ctx.rect(20, 150, 70, 30) //地下容器
    ctx.stroke()
    ctx.restore()

    ctx.save()
    ctx.beginPath()
    ctx.strokeStyle = 'grey'
    ctx.moveTo(0, 150)
    ctx.lineTo(200, 150)
    ctx.lineWidth = 1
    for (let i = 0; i < 220; i += 10) {
      ctx.moveTo(i, 150)
      ctx.lineTo(i - 10, 160)
    }
    ctx.stroke()
    ctx.restore()

    waves({ ctx, delx: 21, dely: 149, width: 68, height: 30, color: 'brown' })

    sawtooth(ctx, 100, 129, 80, 20, 20, 40)
  })
  return (
    <canvas
      ref={refs}
      height="200px"
      width="200px"
      style={{ marginLeft: '20px' }}
    />
  )
}
