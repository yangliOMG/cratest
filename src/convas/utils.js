export function waves(args) {
  const {ctx, delx, dely, width, height,  renderCallback, color = '#1c86d1'} = args
  //画布属性
  var mW = width
  var mH = 20
  var lineWidth = 1
  //Sin 曲线属性
  var sX = 0
  var sY = mH / 2
  var axisLength = mW //轴长
  var waveWidth = 0.2 //波浪宽度,数越小越宽
  var waveHeight = 2 //波浪高度,数越大越高
  var speed = 0.05 //波浪速度，数越大速度越快
  var xOffset = 0 //波浪x偏移量
  ctx.lineWidth = lineWidth
  //画sin 曲线函数
  var drawSin = function(xOffset) {
    ctx.save()
    // var points = [] //用于存放绘制Sin曲线的点
    ctx.beginPath()
    //在整个轴长上取点
    for (var x = sX; x < sX + axisLength; x += 20 / axisLength) {
      //此处坐标(x,y)的取点，依靠公式 “振幅高*sin(x*振幅宽 + 振幅偏移量)”
      var y = -Math.sin((sX + x) * waveWidth - xOffset) 
      // points.push([x, sY + y * waveHeight])
      ctx.lineTo(x + delx, sY + y * waveHeight + dely)
    }
    //封闭路径
    ctx.lineTo(axisLength + delx, mH + dely+ height-20)
    ctx.lineTo(sX + delx, mH + dely+ height-20)
    // ctx.lineTo(points[0][0], points[0][1])
    ctx.fillStyle = color
    ctx.fill()
    ctx.restore()
  }
  var render = function() {
    ctx.clearRect(delx, dely, mW, mH)
    renderCallback && renderCallback()
    drawSin(xOffset)
    xOffset += speed //形成动态效果
    requestAnimationFrame(render)
  }
  render()
}
export function waterfall(ctx, delx, dely, height, size) {
  ctx.save()
  ctx.beginPath()
  var y = height
  var v = 5
  var arr = []
  ctx.fillStyle = '#1c86d1'
  ctx.lineWidth = 1
  ctx.moveTo(delx, dely)
  for (let t = 0; y > 0.5 * 9.8 * t * t; t += 0.1) {
    ctx.lineTo(v * t + delx, 0.5 * 9.8 * t * t + dely)
  }
  for (let t = 0; y - size  > 0.5 * 9.8 * t * t; t += 0.1) {
    arr.push([v * t/2+ delx, 0.5 * 9.8 * t * t + size + dely])
  }
  arr.reverse().forEach(r=>{
    ctx.lineTo(r[0], r[1])
  })
  ctx.closePath()
  
  ctx.fill()
  ctx.restore()
}
export function rock(ctx, radius, ...area ) {
  ctx.save()
  ctx.lineWidth = 1
  ctx.strokeStyle = 'black'
  if(area){
    ctx.moveTo(...area[0])
    for (let i = 1; i < area.length; i++) {
      ctx.lineTo(...area[i])
    }
    ctx.closePath()
    ctx.clip()
  }
  var r1 = radius, row = true
  for (let y = r1; y < ctx.canvas.height; y += 1.73*r1) {
    for (let x = row?r1:0 ; x < ctx.canvas.width; x += 2*r1) {
      ctx.beginPath()
      ctx.arc(x,y,r1-1,0,2*Math.PI,false)
      ctx.stroke()
    }
    row = !row
  }
  ctx.restore()
}
export function sawtooth(ctx, delx, dely, width, height, r, range ) {
  var speed = 0.1 //波浪速度，数越大速度越快
  var xOffset = 0 //波浪x偏移量
  var flag = true
  var draw = function(xOffset) {
    ctx.save()
    ctx.beginPath()
    for (var i = 0; i < 4; i++) {
      ctx.lineTo(0 + delx + i * r + xOffset, r + dely)
      ctx.lineTo(delx + i * r + xOffset, dely)
    }
    ctx.lineTo(0 + delx + i * r + xOffset, r + dely)
    ctx.closePath()
    ctx.fillStyle = 'black'
    ctx.fill()
    ctx.restore()
  }
  var render = function() {
    ctx.clearRect(delx, dely, width+r, height)
    draw(xOffset)
    if(flag && xOffset > range ){
      flag = false
    }else if(!flag && xOffset < 0){
      flag = true
    }
    flag? xOffset += speed : xOffset -= speed
    requestAnimationFrame(render)
  }
  render()
}
