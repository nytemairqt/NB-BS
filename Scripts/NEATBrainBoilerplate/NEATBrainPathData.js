/*
    Copyright 2023, 2024 iamlamprey

    This file is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This file is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with This file. If not, see <http://www.gnu.org/licenses/>.
*/

const pathResetButtonStroke = [110,109,0,0,32,64,66,96,101,64,98,104,145,77,64,217,206,39,64,229,208,138,64,98,16,0,64,248,83,179,64,98,16,0,64,98,197,32,248,64,98,16,0,64,0,0,24,65,131,192,114,64,0,0,24,65,0,0,192,64,98,0,0,24,65,223,79,3,65,197,32,248,64,231,251,31,65,248,83,179,
64,231,251,31,65,98,106,188,148,64,231,251,31,65,213,120,113,64,236,81,26,65,25,4,70,64,145,237,16,65,101,0,0 ];

const pathResetButtonFill = [110,109,229,208,226,63,168,198,219,63,108,205,204,140,63,33,176,174,64,108,59,223,143,64,197,32,112,64,99,101,0,0 ];

const pathMindIcon = [ 110,109,1,128,7,68,136,130,197,67,108,0,128,38,68,185,137,68,67,108,0,128,69,68,136,130,197,67,109,161,13,19,68,136,130,197,67,108,0,128,38,68,14,228,134,67,109,96,242,57,68,136,130,197,67,108,0,128,38,68,14,228,134,67,109,141,248,13,68,76,249,176,67,
108,240,54,25,68,76,249,176,67,109,116,7,63,68,76,249,176,67,108,17,201,51,68,76,249,176,67,109,160,65,29,68,150,118,128,67,108,0,128,38,68,135,124,155,67,108,98,190,47,68,150,118,128,67,109,68,197,38,68,38,158,177,67,108,73,17,31,68,129,192,177,67,108,
104,87,36,68,28,194,164,67,109,188,58,38,68,38,158,177,67,108,184,238,45,68,129,192,177,67,108,154,168,40,68,28,194,164,67,109,107,88,15,68,168,70,190,67,108,191,154,9,68,168,70,190,67,109,150,167,61,68,168,70,190,67,108,66,101,67,68,168,70,190,67,109,
18,101,25,68,62,253,190,67,108,171,155,29,68,62,253,190,67,98,171,155,29,68,62,253,190,67,156,15,28,68,36,187,217,67,68,197,38,68,114,26,217,67,109,240,154,51,68,62,253,190,67,108,86,100,47,68,62,253,190,67,98,86,100,47,68,62,253,190,67,101,240,48,68,
36,187,217,67,188,58,38,68,114,26,217,67,109,0,128,38,68,62,30,198,67,98,190,186,39,68,62,30,198,67,50,186,40,68,36,29,200,67,50,186,40,68,160,146,202,67,98,50,186,40,68,28,8,205,67,190,186,39,68,73,7,207,67,0,128,38,68,73,7,207,67,98,67,69,37,68,73,
7,207,67,208,69,36,68,28,8,205,67,208,69,36,68,160,146,202,67,98,208,69,36,68,36,29,200,67,67,69,37,68,62,30,198,67,0,128,38,68,62,30,198,67,99,109,0,128,38,68,43,2,114,67,98,190,186,39,68,43,2,114,67,50,186,40,68,248,255,117,67,50,186,40,68,240,234,
122,67,98,50,186,40,68,230,213,127,67,190,186,39,68,218,233,129,67,0,128,38,68,218,233,129,67,98,67,69,37,68,218,233,129,67,208,69,36,68,230,213,127,67,208,69,36,68,240,234,122,67,98,208,69,36,68,248,255,117,67,67,69,37,68,43,2,114,67,0,128,38,68,43,
2,114,67,99,109,23,48,11,68,142,92,192,67,98,251,229,11,68,142,92,192,67,132,121,12,68,230,131,193,67,132,121,12,68,174,239,194,67,98,132,121,12,68,48,91,196,67,251,229,11,68,136,130,197,67,23,48,11,68,136,130,197,67,98,51,122,10,68,136,130,197,67,170,
230,9,68,48,91,196,67,170,230,9,68,174,239,194,67,98,170,230,9,68,230,131,193,67,51,122,10,68,142,92,192,67,23,48,11,68,142,92,192,67,99,109,212,27,66,68,142,92,192,67,98,149,209,66,68,142,92,192,67,66,101,67,68,230,131,193,67,66,101,67,68,174,239,194,
67,98,66,101,67,68,48,91,196,67,149,209,66,68,136,130,197,67,212,27,66,68,136,130,197,67,98,241,101,65,68,136,130,197,67,68,210,64,68,48,91,196,67,68,210,64,68,174,239,194,67,98,68,210,64,68,230,131,193,67,241,101,65,68,142,92,192,67,212,27,66,68,142,
92,192,67,99,109,0,128,38,68,218,233,129,67,108,0,128,38,68,230,54,136,67,101,0,0 ];

// Profile Images
Engine.loadImageIntoPool("{PROJECT_FOLDER}wgProfileA.png");
Engine.loadImageIntoPool("{PROJECT_FOLDER}wgProfileB.png");
Engine.loadImageIntoPool("{PROJECT_FOLDER}wgProfileC.png");
Engine.loadImageIntoPool("{PROJECT_FOLDER}rsProfileA.png");
Engine.loadImageIntoPool("{PROJECT_FOLDER}rsProfileB.png");
Engine.loadImageIntoPool("{PROJECT_FOLDER}rsProfileC.png");
