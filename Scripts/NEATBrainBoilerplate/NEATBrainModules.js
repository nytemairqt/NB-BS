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

// NEATBrain Modules

// Left Residue
const leftRS = Synth.getChildSynth("leftRS");
const leftRS_midiProcessor = Synth.getMidiProcessor("leftRS_midiProcessor");
const leftRS_gainAHDSR = Synth.getModulator("leftRS_gainAHDSR");
const leftRS_gainVelocity = Synth.getModulator("leftRS_gainVelocity");
const leftRS_gainLFO = Synth.getModulator("leftRS_gainLFO");
const leftRS_gainRandom = Synth.getModulator("leftRS_gainRandom");
const leftRS_fxLevelAdjust = Synth.getEffect("leftRS_fxLevelAdjust");
const leftRS_fxProfileA = Synth.getEffect("leftRS_fxProfileA");
const leftRS_fxProfileB = Synth.getEffect("leftRS_fxProfileB");
const leftRS_fxProfileC = Synth.getEffect("leftRS_fxProfileC");
const leftRS_fxToneAdjust = Synth.getEffect("leftRS_fxToneAdjust");

Engine.addModuleStateToUserPreset("leftRS_fxProfileA");
Engine.addModuleStateToUserPreset("leftRS_fxProfileB");
Engine.addModuleStateToUserPreset("leftRS_fxProfileC");
Engine.addModuleStateToUserPreset("leftRS_fxToneAdjust");

// Left Waveguide
const leftWG = Synth.getChildSynth("leftWG");
const leftWG_midiProcessor = Synth.getMidiProcessor("leftWG_midiProcessor");
const leftWG_gainAHDSR = Synth.getModulator("leftWG_gainAHDSR");
const leftWG_gainVelocity = Synth.getModulator("leftWG_gainVelocity");
const leftWG_gainLFO = Synth.getModulator("leftWG_gainLFO");
const leftWG_gainRandom = Synth.getModulator("leftWG_gainRandom");
const leftWG_pitchAHDSR = Synth.getModulator("leftWG_pitchAHDSR");
const leftWG_pitchAHDSRVelocity = Synth.getModulator("leftWG_pitchAHDSRVelocity");
const leftWG_pitchLFO = Synth.getModulator("leftWG_pitchLFO");
const leftWG_pitchRandom = Synth.getModulator("leftWG_pitchRandom");
const leftWG_pitchBend = Synth.getModulator("leftWG_pitchBend");
const leftWG_fxLevelAdjust = Synth.getEffect("leftWG_fxLevelAdjust");
const leftWG_fxProfileA = Synth.getEffect("leftWG_fxProfileA");
const leftWG_fxProfileB = Synth.getEffect("leftWG_fxProfileB");
const leftWG_fxProfileC = Synth.getEffect("leftWG_fxProfileC");
const leftWG_fxToneControl = Synth.getEffect("leftWG_fxToneControl");
const leftWG_fxToneAdjust = Synth.getEffect("leftWG_fxToneAdjust");

Engine.addModuleStateToUserPreset("leftWG_fxProfileA");
Engine.addModuleStateToUserPreset("leftWG_fxProfileB");
Engine.addModuleStateToUserPreset("leftWG_fxProfileC");
Engine.addModuleStateToUserPreset("leftWG_fxToneControl");
Engine.addModuleStateToUserPreset("leftWG_fxToneAdjust");

// Left Release
const leftRLS = Synth.getChildSynth("leftRLS");
const leftRLS_midiProcessor = Synth.getMidiProcessor("leftRLS_midiProcessor");
const leftRLS_gainAHDSR = Synth.getModulator("leftRLS_gainAHDSR");

