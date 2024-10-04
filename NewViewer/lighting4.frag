#version 330 core

in vec4 frontColor;
out vec4 fragColor;

in vec3 N;
in vec3 V;
in vec3 L;

uniform vec4 matAmbient;
uniform vec4 lightAmbient;
uniform vec4 matDiffuse;
uniform vec4 lightSpecular;
uniform vec4 lightDiffuse;
uniform float matShininess;
uniform vec4 matSpecular;

vec4 Phong(vec3 V, vec3 N, vec3 L) {
    V = normalize(V);
    N = normalize(N);
    L = normalize(L);
    
    vec4 light = matAmbient*lightAmbient;
    
    light += matDiffuse*lightDiffuse*max(0.0, dot(N, L)); 
    
    vec3 R = reflect(-L, N);
    float RVdot = max(0.0, dot(R,V));
    float S = 0;
    if (RVdot > 0) S = pow(RVdot, matShininess);
    light += matSpecular*lightSpecular*S;
    
    return light;
}

void main()
{
    fragColor = Phong(V, N, L);
}
