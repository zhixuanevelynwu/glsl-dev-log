#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

float circleShape(vec2 position,float radius){
    return step(radius,length(position-vec2(.5)));
}

// make the glslViewer window float on the top:
//      glslViewer -l fileName
void main(){
    vec2 coord=gl_FragCoord.xy/u_resolution;
    vec3 color=vec3(0.,0.,0.);
    
    vec2 translate=vec2(sin(u_time*5.),-cos(u_time*5.));
    coord+=translate*.5;
    
    color+=vec3(circleShape(coord,.3));
    
    gl_FragColor=vec4(color,1.);
}