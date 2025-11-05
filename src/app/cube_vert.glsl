uniform float uTime;
varying vec3 vNormal;
varying vec3 vPosition;

void main() {
  vec3 pos = position;
  float freq = 3.0;

  // Create sine wave
  float wave = sin(pos.x * freq + uTime);
  pos.z += wave;
  
  vNormal = normalMatrix * normal;
  vPosition = pos;
  
  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(pos, 1.0);
}