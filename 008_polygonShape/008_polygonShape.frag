#ifdef GL_ES
precision mediump float;
#endif

const float PI=3.1415926535;

uniform vec2 u_resolution;

float polygonShape(vec2 position,float radius,float sides){
    position=position*2.-1.;
    
    // tangent of an angle
    //      length of the opposite side
    // atan
    //      the opposite of tangent
    float angle=atan(position.x,position.y);
    
    // why times by 2
    float slice=PI*2./sides;
    
    return step(radius,cos(floor(.5+angle/slice)*slice-angle)*length(position));
}

void main(){
    vec2 position=gl_FragCoord.xy/u_resolution;
    
    vec3 color=vec3(0);
    
    float polygon=polygonShape(position,.6,6.);
    
    color=vec3(polygon);
    
    gl_FragColor=vec4(color,1.);
}