import React, { useRef, useEffect }  from 'react'
import { waves, rock } from './utils.js'

export default function (){
  const refs = useRef(null)
  useEffect(() => {
    var ctx = refs.current.getContext('2d')
    ctx.lineWidth = 2
    ctx.strokeStyle = 'black'
    ctx.save()
    ctx.beginPath() //开始
    ctx.rect(20, 0, 160, 190)  //中间容器
    ctx.stroke()
    ctx.restore()

    ctx.save()
    ctx.moveTo(20, 70)
    ctx.lineTo(40, 70)
    ctx.lineTo(70, 40)
    ctx.lineTo(75, 44)
    ctx.lineTo(44, 80)
    ctx.lineTo(20, 80)    
    ctx.closePath()
    ctx.stroke()
    ctx.moveTo(180, 70)
    ctx.lineTo(160, 70)
    ctx.lineTo(130, 40)
    ctx.lineTo(125, 44)
    ctx.lineTo(156, 80)
    ctx.lineTo(180, 80)    
    ctx.closePath()
    ctx.stroke()
    ctx.moveTo(95, 190)
    ctx.lineTo(95, 160)
    ctx.lineTo(75, 80)
    ctx.lineTo(85, 80)
    ctx.lineTo(98, 150)
    ctx.lineTo(102, 150)
    ctx.lineTo(115, 80)
    ctx.lineTo(125, 80)
    ctx.lineTo(105, 160)
    ctx.lineTo(105, 190)
    ctx.closePath()
    ctx.stroke()
    ctx.restore()

    ctx.save()
    ctx.beginPath()
    ctx.strokeStyle = 'grey'
    ctx.moveTo(0, 190)
    ctx.lineTo(200, 190)
    ctx.lineWidth = 1
    for (let i = 0; i < 220; i += 10) {
      ctx.moveTo(i, 190)
      ctx.lineTo(i - 10, 200)
    }
    ctx.stroke()
    ctx.restore()

    rock(ctx, 5, [20, 100],[80, 100],[95, 160],[20, 160] )
    waves({ctx, delx:21, dely:165, width:73, height:24})
    rock(ctx, 5, [180, 100],[120, 100],[105, 160],[180, 160] )
    waves({ctx, delx:106, dely:165, width:73, height:24})
  })
  return <canvas ref={refs} height="200px" width="200px" style={{marginLeft:'20px' }}/>
}
