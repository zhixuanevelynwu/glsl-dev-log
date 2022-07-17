#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

float circleShape(vec2 position,float radius){
    // step(edgeCase, function_f(x))
    //     --> consider it as f(x) = the second parameter
    // length(vec2(a, b)) = a^2 + b^2 = its distance from (0, 0)
    // This step function is checking the distance of each grid from
    // the origin point. If it is smaller than radius, mark it as 0
    return step(radius,length(position-vec2(.5)));
}

void main(){
    // gl_FragCoord returns the grid that is currently processing
    // u_resolution helps with the scaling
    vec2 position=gl_FragCoord.xy/u_resolution;
    
    float circle=circleShape(position,.2);
    
    vec3 color=vec3(circle);
    
    gl_FragColor=vec4(color,1.);
}