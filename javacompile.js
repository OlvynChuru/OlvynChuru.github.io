var clickMeButton = document.createElement('button');
clickMeButton.innerHTML = 'I\'m a JavaScript button!';
clickMeButton.id = 'jsButton';
clickMeButton.className = 'button';
document.body.appendChild(clickMeButton);
debugger;
var HackerEarth=require(['HackerEarth-node']); //require the Library
//Now set your application 
var hackerEarth = new HackerEarth(
                                '27e379779a4936b06d782e9ec8a64203ba99eea6',  //Your Client Secret Key here this is mandatory
                                ''  //mode sync=1 or async(optional)=0 or null async is by default and preferred for nodeJS
);
/*var config={};
config.time_limit=3;  //your time limit in integer
config.memory_limit=32324;  //your memory limit in integer
config.source='public class ExampleCodeList {

	public static void main(String[] args) {
		System.out.println(5);
	}
}';
config.input="";  //input against which you have to test your source code
config.language="JAVA"; //optional choose any one of them or none
*/
const config = {
      time_limit:1,
      memory_limit:323244,
      source:'System.out.println(5);',
	  input:"",
      language:"JAVA"
  };

hackerEarth.compile(config,function(err,response){
//      const res=JSON.parse(response);
	  
      if(err) {
		clickMeButton.innerHTML = 'ugu';
      } else {
		clickMeButton.innerHTML = 'ugu';
      }
});
/*
#! -*- coding: utf-8 -*-



import requests

# constants
RUN_URL = u'http://api.hackerearth.com/code/run/'
CLIENT_SECRET = '5db3f1c12c59caa1002d1cb5757e72c96d969a1a'

source = "import sys;print(sys.path)"

data = {
    'client_secret': CLIENT_SECRET,
    'async': 0,
    'source': source,
    'lang': "JAVA",
    'time_limit': 5,
    'memory_limit': 262144,
}

r = requests.post(RUN_URL, data=data)
print r.json()
*/
/* var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');

var size = 320;
var dpr = window.devicePixelRatio;
canvas.width = size * dpr;
canvas.height = size * dpr;
context.scale(dpr, dpr);

context.lineWidth = 2;
  
var circles = [];
var minRadius = 2;
var maxRadius = 100;
var totalCircles = 500;
var createCircleAttempts = 500;
 
function createAndDrawCircle() {
  
  var newCircle;
  var circleSafeToDraw = false;
  for(var tries = 0; tries < createCircleAttempts; tries++) {
    newCircle = {
      x: Math.floor(Math.random() * size),
      y: Math.floor(Math.random() * size),
      radius: minRadius
    }
    
    if(doesCircleHaveACollision(newCircle)) {
      continue;
    } else {
      circleSafeToDraw = true;
      break;
    }
  }

  if(!circleSafeToDraw) {
    return;
  }

  for(var radiusSize = minRadius; radiusSize < maxRadius; radiusSize++) {
    newCircle.radius = radiusSize;
    if(doesCircleHaveACollision(newCircle)){
      newCircle.radius--;
      break;
    } 
  }

  var palette = me_half_invisible;
  function randomColor(){
      var number = Math.floor(Math.random() * Math.floor(4));
      var randomColor = palette[number];
      return randomColor;
  }

  var ourColor = randomColor();

  circles.push(newCircle);
  context.beginPath();
  context.arc(newCircle.x, newCircle.y, newCircle.radius, 0, 2*Math.PI);
  context.strokeStyle = ourColor;
  context.stroke(); 
}

function doesCircleHaveACollision(circle) {
  for(var i = 0; i < circles.length; i++) {
    var otherCircle = circles[i];
    var a = circle.radius + otherCircle.radius;
    var x = circle.x - otherCircle.x;
    var y = circle.y - otherCircle.y;

    if (a >= Math.sqrt((x*x) + (y*y))) {
      return true;
    }
  }
  
  if(circle.x + circle.radius >= size ||
     circle.x - circle.radius <= 0) {
    return true;
  }
    
  if(circle.y + circle.radius >= size ||
      circle.y - circle.radius <= 0) {
    return true;
  }
  
  return false;
}

for( var i = 0; i < totalCircles; i++ ) {  
  createAndDrawCircle();
}
 */