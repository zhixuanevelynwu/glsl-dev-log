#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

float rectShape(vec2 position,vec2 scale){
    // makes it smaller
    scale=vec2(.5)-scale*.5;
    
    // shaper
    vec2 shaper=vec2(step(scale.x,position.x),step(scale.y,position.y));
    shaper*=vec2(step(scale.x,1.-position.x),step(scale.y,1.-position.y));
    
    return shaper.x*shaper.y;
    
}

void main(){
    vec2 position=gl_FragCoord.xy/u_resolution;
    
    vec3 color=vec3(0.);
    
    float rectangle=rectShape(position,vec2(.3,.3));
    
    color=vec3(rectangle);
    
    gl_FragColor=vec4(color,1.);
}