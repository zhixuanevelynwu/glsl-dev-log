#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main(){
    vec2 coord=(gl_FragCoord.xy/u_resolution.xy);
    vec3 color=vec3(0.,0.,0.);
    
    float angle=atan(-coord.y+.25,coord.x-.5)*.1;
    float len=length(coord-vec2(.5,.25));
    
    color.r+=sin(len*40.+angle*40.+u_time);
    color.g+=sin(len*30.+angle*60.-u_time);
    color.b+=sin(len*50.+angle*50.+3.);
    
    gl_FragColor=vec4(color,1.);
}