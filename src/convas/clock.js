import React from 'react';

class Clock extends React.Component {
  componentDidMount () {
	var ctx = document.getElementById("clock").getContext("2d");
    var width = ctx.canvas.width;
	var r = width /2;
    ctx.save();
    ctx.translate(r,r);//改坐标原点
    
    ctx.beginPath();//开始
    ctx.lineWidth=10;
    ctx.arc(0,0,r-5,0,2*Math.PI,false);
    ctx.stroke();
    
    var hourNumbers = [3,4,5,6,7,8,9,10,11,12,1,2];
    ctx.font = "18px Arial";
    ctx.textAlign = "center";//对齐方式--left  right
    ctx.textBaseline = 'middle';//文本基线
    hourNumbers.forEach(function(number,i){
        var rad = 2*Math.PI /12 * i;
        var x = Math.cos(rad) * (r-30);
        var y = Math.sin(rad) * (r-30);
        ctx.fillText(number, x ,y);
    });
    
    for (var i=0; i<60; i++) {
        var rad = 2*Math.PI / 60 * i;
        var x = Math.cos(rad) *(r-18);
        var y = Math.sin(rad) *(r-18);
        ctx.beginPath();
        if (i%5 === 0) {
            ctx.fillStyle="#000";
            ctx.arc(x,y,2,0,2*Math.PI,false);
        }else{
            ctx.fillStyle="#CCCCCC";
            ctx.arc(x,y,2,0,2*Math.PI,false);
        }
        ctx.fill();
    }
    ctx.restore();
  }
  

  render () {
    return (
      <canvas id="clock" height="200px" width="200px"></canvas>
    )
  }
}

export default Clock
