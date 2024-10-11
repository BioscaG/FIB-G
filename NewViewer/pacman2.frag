#version 330 core

in vec4 frontColor;
out vec4 fragColor;

in vec2 vtexCoord;

uniform sampler2D pacman;

const vec4 black = vec4(0.0);

void main()
{
    float row = floor(vtexCoord.y/(1.0/13));
    float column = floor(vtexCoord.x/(1.0/13));
    float plusx = mod(vtexCoord.x, 1.0/13);
    float plusy = mod(vtexCoord.y, 1.0/13);
    //if (column == 3 && row == 1) fragColor = texture(pacman, vec2(1.0/6, 0.0) + vec2(plusx, plusy*13));
    if (column > 0 && column < 12 && (row == 0 || row == 12)) fragColor = texture(pacman, vec2(3.0/6,0.0) + vec2(plusx*13/6, plusy*13));
    else if (row > 0 && row < 12 && (column == 0 || column == 12)) fragColor = texture(pacman, vec2(3.0/6,0.0) + vec2(plusy*13/6, plusx*13));
    else if (column > 1 && column < 11 && column != 6 && row > 1 && row < 11 && mod(row, 2.0) == 0) fragColor = texture(pacman, vec2(3.0/6,0.0) + vec2(plusx*13/6, plusy*13));
    else if (column == 12 && row == 12) fragColor = texture(pacman, vec2(4.0/6, 0.0) + vec2(plusx*13/6, plusy*13));
    else if (column == 0 && row == 12) fragColor = texture(pacman, vec2(5.0/6, 0.0) + vec2(-plusx*13/6, plusy*13));
    else if (column == 0 && row == 0) fragColor = texture(pacman, vec2(5.0/6, 1.0) + vec2(-plusx*13/6, -plusy*13));
    else if (column == 12 && row == 0) fragColor = texture(pacman, vec2(4.0/6, 1.0) + vec2(plusx*13/6, -plusy*13));
    else if (row == 3 && (column == 1 || column == 5)) fragColor = texture(pacman, vec2(0.0/6, 0.0) + vec2(plusx*13/6, plusy*13));
    else if (row == 3 && column == 4) fragColor = texture(pacman, vec2(1.0/6, 0.0) + vec2(plusx*13/6, plusy*13));
    else if (row == 3 && column > 4 && column < 12) fragColor = texture(pacman, vec2(2.0/6, 0.0) + vec2(plusx*13/6, plusy*13)); 
    else fragColor = texture(pacman, vec2(5.0/6,0.0) + vec2(plusy*13/6, plusx*13));
}
