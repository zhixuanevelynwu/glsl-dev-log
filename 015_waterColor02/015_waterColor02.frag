#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

const int AMOUNT=12;

void main(){
    vec2 coord=20.*(gl_FragCoord.xy-u_resolution/2.)/min(u_resolution.x,u_resolution.y);
    
    float len;
    
    for(int i=0;i<AMOUNT;i++){
        len=length(vec2(coord.x,coord.y));
        
        coord.x-=cos(coord.y+sin(len))+cos(u_time/9.);
        coord.y+=sin(coord.x+cos(len))+sin(u_time/12.);
    }
    
    // i like it!
    gl_FragColor=vec4(cos(len*2.),cos(len*3.),cos(len*2.*coord.y),1.);
    
}