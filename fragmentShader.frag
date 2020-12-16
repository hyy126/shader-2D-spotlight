#ifdef GL_ES
precision highp float;
#endif

uniform sampler2D tMap;
uniform float canvasWidth;
uniform float canvasHeight;
uniform float xPot;
uniform float yPot;
varying vec2 vUv;

void main(){
  //计算实际像素距离
  float d=distance(vec2(vUv.x*canvasWidth,vUv.y*canvasHeight),vec2(xPot*canvasWidth,yPot*canvasHeight));
  //平滑阶梯函数  分界部分产生模糊渐变 抗锯齿
  float smoothValue=smoothstep(d,d+30.,250.);
  
  vec4 color=texture2D(tMap,vUv);
  gl_FragColor.rgb=smoothValue*color.rgb;
  gl_FragColor.a=1.;
}