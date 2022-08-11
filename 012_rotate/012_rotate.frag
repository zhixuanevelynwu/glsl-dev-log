#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
const float PI=3.1415926535;

mat2 scale(vec2 scale){
    return mat2(scale.x,0.,0.,scale.y);
}

mat2 rotate(float angle){
    return mat2(cos(angle),-sin(angle),sin(angle),cos(angle));
}

float polygonShape(vec2 position,float radius,float sides){
    // get to the center of the screen
    position=position*2.-1.;
    
    // tangent of an angle
    //      length of the opposite side
    // atan
    //      the opposite of tangent
    //      the degree of the opposite angle
    float angle=atan(position.x,position.y);
    
    // why times by 2
    float slice=PI*2./sides;
    
    // .5 - regulates it again and put things into the center
    return step(radius,cos(floor(.5+angle/slice)*slice-angle)*length(position));
}

void main(){
    vec2 coord=gl_FragCoord.xy/u_resolution;
    vec3 color=vec3(0.);
    
    coord-=vec2(.5);
    // coord*=scale(vec2(sin(u_time*5.)+2.));
    coord*=scale(vec2(4.,4.));
    coord*=rotate(sin(u_time*2.));
    coord+=vec2(.5);
    
    float polygon=polygonShape(coord,.6,6.);
    
    color+=vec3(polygon);
    
    gl_FragColor=vec4(color,1.);
}