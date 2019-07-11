import React from 'react'
import { waves, waterfall } from './utils.js'

class Pump extends React.Component {
  componentDidMount() {
    var ctx = this.refs.canvas.getContext('2d')
    ctx.save()

    ctx.lineWidth = 2
    ctx.strokeStyle = 'black'
    ctx.beginPath() //开始
    ctx.rect(0, 70, 80, 20) //左边管道
    ctx.rect(120, 100, 10, 90)  //中间挡板
    ctx.rect(60, 20, 120, 170)  //中间容器
    ctx.rect(180, 149, 80, 22) //右边管道
    ctx.stroke()

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

    waves({ctx, delx:0, dely:70, width:80, height:20})
    waves({ctx, delx:61, dely:95, width:58, height:94, renderCallback:()=>waterfall(ctx, 80 ,80, 40, 10)})
    waves({ctx, delx:131, dely:145, width:48, height:44})
    waves({ctx, delx:179, dely:150, width:48, height:20})
  }

  render() {
    return <canvas ref="canvas" height="200px" width="200px" />
  }
}

export default Pump
