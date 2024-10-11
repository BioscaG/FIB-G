#version 330 core

in vec4 frontColor;
out vec4 fragColor;

in vec2 vtexCoord;
uniform sampler2D explosion;

uniform float time;

void main()
{
    int timeaux = int(mod(time/(1/30), 48));
    float x = timeaux%8;
    float y = timeaux%6;
    vec2 aux = vtexCoord/vec2(8.0, 6.0) + vec2(x, 0.0)/vec2(8.0, 6.0);
    fragColor = texture(explosion, aux);
}
