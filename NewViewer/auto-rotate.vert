#version 330 core

layout (location = 0) in vec3 vertex;
layout (location = 1) in vec3 normal;
layout (location = 2) in vec3 color;
layout (location = 3) in vec2 texCoord;

out vec4 frontColor;
out vec2 vtexCoord;

uniform mat4 modelViewProjectionMatrix;
uniform mat3 normalMatrix;

uniform float speed = 0.5;
uniform float time;

float PI=acos(-1.0);


mat3 rot(float ang) {
    return mat3(cos(ang), 0, -sin(ang),
    		0, 1, 0, 
    		sin(ang), 0, cos(ang));
}

void main()
{	
    float rotation = speed*time;
    vec3 V = rot(rotation)*vertex;
    vec3 N = normalize(normalMatrix * normal);
    frontColor = vec4(color,1.0);
    vtexCoord = texCoord;
    gl_Position = modelViewProjectionMatrix * vec4(V, 1.0);
}
