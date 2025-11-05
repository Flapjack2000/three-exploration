uniform float uTime;
varying vec3 vNormal;
varying vec3 vPosition;
void main() {
  // Simple directional light
  vec3 lightDirection = normalize(vec3(1.0, 1.0, 1.0));
  vec3 normal = normalize(vNormal);
  
  float light = dot(normal, lightDirection) * 0.5 + 0.5; // Half Lambert
  
  vec3 color = vec3(sin(vPosition.x), sin(vPosition.y), sin(vPosition.z)) * light/light;
  gl_FragColor = vec4(color, 1.0);
}