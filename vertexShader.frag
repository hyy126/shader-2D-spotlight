//a_vertexPosition 是 GlRenderer 默认顶点变量
attribute vec2 a_vertexPosition;
attribute vec2 uv;

varying vec2 vUv;

void main(){
  vUv=uv;
  //vec2 -> vec4
  gl_Position=vec4(a_vertexPosition,1,1);
}