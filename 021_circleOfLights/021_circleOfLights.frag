#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main(){
    vec2 coord=(gl_FragCoord.xy/u_resolution.xy);
    vec3 color=vec3(0.);
    
    vec2 translate=vec2(-.5,-.5);
    coord+=translate;
    
    for(int i=0;i<40;i++){
        float radius=.3;
        float rad=radians(360./40.)*float(i);
        
        color+=.003/length(coord+vec2(radius*cos(rad),radius*sin(rad)));
    }
    
    gl_FragColor=vec4(color,1.);
}