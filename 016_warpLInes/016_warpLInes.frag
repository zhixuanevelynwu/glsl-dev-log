#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main(){
    vec2 coord=(gl_FragCoord.xy/u_resolution.xy);
    
    float color=0.;
    
    color+=sin(coord.x*50.+cos(u_time+coord.y*10.+sin(coord.x*50.+u_time*2.)))*2.;
    color+=cos(coord.x*20.+sin(u_time+coord.y*10.+cos(coord.x*50.+u_time*2.)))*2.;
    color+=sin(coord.x*30.+cos(u_time+coord.y*10.+sin(coord.x*50.+u_time*2.)))*2.;
    color+=cos(coord.x*10.+sin(u_time+coord.y*10.+cos(coord.x*50.+u_time*2.)))*2.;
    
    // :O wow
    gl_FragColor=vec4(vec3(color+coord.y,coord.x,color),1.);
    
}