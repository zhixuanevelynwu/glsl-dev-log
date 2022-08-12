#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main(){
    vec2 coord=gl_FragCoord.xy/u_resolution.xy;
    vec3 color=vec3(1.);
    
    float size=50.;
    
    float alpha=sin(floor(coord.y*size)+u_time*10.)+1./2.;
    
    gl_FragColor=vec4(color,alpha);
}