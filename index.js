'use strict';
import * as fs from 'fs';
var Input = "ExpertStandard.dat"; //Change Difficulties!!
var Output = "ExpertPlusStandard.dat"; //Change Difficulties!!
let diff = JSON.parse(fs.readFileSync(Input))
diff._customData = {
    _environment: [],
    _customEvents: [],
    _pointDefinitions: []
}
var notes = diff._notes;
var walls = diff._obstacles;
var customData = diff._customData;
var lightEvents = diff._events;
var environment = customData._environment;
var customEvents = customData._customEvents;
var pointDefs = customData._pointDefinitions




walls.forEach(wall => {
	if (!wall._customData) {
		wall._customData = {}
	}
})

notes.forEach(note => {
	if (!note._customData) {
		note._customData = {}
	}
})



class ChromaEnv {
    constructor(){

    }
    id(x){
        this._id = x
        return this;
    }
    method(x){
        this._lookupMethod = x
        return this;
    }
    duiplicate(x){
        this._duplicate = x
        return this;
    }
    active(x){
        this._active = x
        return this;
    }
    scale(x){
        this._scale = x
        return this;
    }
    position(x){
        this._position = x
        return this;
    }
    localPosition(x){
        this._localPosition = x
        return this;
    }
    rotation(x){
        this._rotation = x
        return this;
    }
    localRotation(x){
        this._localRotation = x
        return this;
    }
    track(x){
        this._track = x
        return this;
    }
    push(){
        environment.push(this)
    }
}


class lightMapper {
    constructor(){
        this._customData = {}
    }
    time(x){
        this._time = x
        return this;
    }
    type(x){
        this._type = x
        return this;

    }
    value(x){
        this._value = x
        return this;
    }
    floatValue(x){
        this._floatValue = x
        return this;
    }
    speed(x){
        this._customData._speed = x
        return this;
    }
    rotation(x){
        this._customData._rotation = x
        return this;
    }
    step(x){
        this._customData._step = x
        return this;
    }
    prop(x){
        this._customData._prop = x
        return this;
    }
    direction(x){
        this._customData._direction = x
        return this;
    }
    counterSpin(x){
        this._customData._counterSping = x
        return this;
    }
    push(){
        lightEvents.push(this)
    }

}

class Note {
    constructor(){
        this._customData = {}
    }
    time(x){
        this._time = x
        return this;
    }
    lineIndex(x){
        this._lineIndex = x
        return this;
    }
    lineLayer(x){
        this._lineLayer = x
        return this;
    }
    type(x){
        this._type = x
        return this;
    }
    direction(x){
        this._cutDirection = x
        return this;
    }
    track(x){
        this._customData._track = x
        return this;
    }
    fake(x){
        this._customData._fake = x
        return this;
    }
    color(x){
        this._customData._color = x
        return this;
    }
    position(x){
        this._customData._positon = x
        return this;
    }
    rotation(x){
        this._customData._rotation = x
        return this;
    }
    scale(x){
        this._customData._scale = x
        return this;
    }
    interactable(x){
        this._customData._interactable = x
        return this;
    }
    noteJumpMovementSpeed(x){
        this._customData._noteJumpMovementSpeed = x
        return this;
    }
    noteJumpStartBeatOffset(x){
        this._customData._noteJumpStartBeatOffset = x
        return this;
    }
    disableNoteGravity(x){
        this._customData._disableNoteGravity = x
        return this;
    }
    disableSpawnEffect(x){
        this._customData._disableSpawnEffect = x
        return this;
    }
    disableNoteLook(x){
        this._customData._disableNoteLook = x
        return this;
    }
    push(){
        notes.push(this)
    }
}

class Wall {
    constructor(){
        this._customData = {}
    }
    time(x){
        this._time = x
        return this;
    }
    lineIndex(x){
        this._lineIndex = x
        return this;
    }
    type(x){
        this._type = x
        return this;
    }
    duration(x){
        this._duration = x
        return this;
    }
    width(x){
        this._width = x
        return this;
    }
    track(x){
        this._customData._track = x
        return this;
    }
    color(x){
        this._customData._color = x
        return this;
    }
    push(){
        walls.push(this)
    }
}




class Bomb {
    constructor(){
        this._customData = {}
        this._type = 3
    }
    time(x){
        this._time = x
        return this;
    }
    lineIndex(x){
        this._lineIndex = x
        return this;
    }
    lineLayer(x){
        this._lineLayer = x
        return this;
    }
    direction(x){
        this._cutDirection = x
        return this;
    }
    track(x){
        this._customData._track = x
        return this;
    }
    fake(x){
        this._customData._fake = x
        return this;
    }
    color(x){
        this._customData._color = x
        return this;
    }
    position(x){
        this._customData._positon = x
        return this;
    }
    rotation(x){
        this._customData._rotation = x
        return this;
    }
    scale(x){
        this._customData._scale = x
        return this;
    }
    interactable(x){
        this._customData._interactable = x
        return this;
    }
    noteJumpMovementSpeed(x){
        this._customData._noteJumpMovementSpeed = x
        return this;
    }
    noteJumpStartBeatOffset(x){
        this._customData._noteJumpStartBeatOffset = x
        return this;
    }
    disableNoteGravity(x){
        this._customData._disableNoteGravity = x
        return this;
    }
    disableSpawnEffect(x){
        this._customData._disableSpawnEffect = x
        return this;
    }
    disableNoteLook(x){
        this._customData._disableNoteLook = x
        return this;
    }
    push(){
        notes.push(this)
    }
}

//ANIMATION CLASSES
class TrackAnimation {
    constructor(){
        this._data = {}

        this._type = "AnimateTrack"
    }
    time(x){
        this._time = x
        return this;
    }
    track(x){
        this._data._track = x
        return this;
    }
    duration(x){
        this._duration = x
        return this;
    }
    dissolve(x){
        this._data._dissolve = x
        return this;
    }
    position(x){
        this._data._position = x
        return this;
    }
    localPosition(x){
        this._data._localPosition = x
        return this;
    }
    rotation(x){
        this._data._rotation = x
        return this;
    }
   
    offsetPosition(x){
        this._data._offsetPosition = x
        return this;
    }
    localRotation(x){
        this._data._localRotation = x
        return this;
    }
    offsetWorldPosition(x){
        this._data._offsetWorldPosition = x
        return this;
    }
    scale(x){
        this._data._scale = x
        return this;
    }
    dissolve(x){
        this._data._dissolve = x
        return this;
    }
    dissolveArrow(x){
        this._data._dissolveArrow = x
        return this;
    }
    color(x){
        this._data._color = x
        return this;
    }
    interactable(x){
        this._data._imteractable = x
        return this;

    }
    timeAnim(x){
        this._data._time = x
        return this;
    }
    push(){
        customEvents.push(this)
    }

}

class AssignPathAnimation {
    constructor(){
        this._data = {}

        this._type = "AssignPathAnimation"
    }
    time(x){
        this._time = x
        return this;
    }
    track(x){
        this._data._track = x
        return this;
    }
    position(x){
        this._data._position = x
        return this;
    }
    localPosition(x){
        this._data._localPosition = x
        return this;
    }
    rotation(x){
        this._data._rotation = x
        return this;
    }
    duration(x){
        this._duration = x
        return this;
    }
    dissolve(x){
        this._data._dissolve = x
        return this;
    }
    offsetPosition(x){
        this._data._offsetPosition = x
        return this;
    }
    localRotation(x){
        this._data._localRotation = x
        return this;
    }
    offsetWorldRotation(x){
        this._data._offsetWorldRotation = x
        return this;
    }
    scale(x){
        this._data._scale = x
        return this;
    }
    dissolve(x){
        this._data._dissolve = x
        return this;
    }
    dissolveArrow(x){
        this._data._dissolveArrow = x
        return this;
    }
    color(x){
        this._data._color = x
        return this;
    }
    interactable(x){
        this._data._imteractable = x
        return this;

    }
    definitePosition(x){
        this._data._definitePosition = x
        return this;
    }
    push(){
        customEvents.push(this)
    }

}

class AssignTrackParent {
    constructor(){
        this._data = {}
        this._type = "AssignTrackParent"
    }
    time(x){
        this._time = x;
        return this;
    }
    childTrack(x){
        this._data._childrenTracks = x
        return this;
    }
    parentTrack(x){
        this._data._parentTrack = x
        return this;
    }
    push(){
        customEvents.push(this)
    }

}

function importFunc() {
    return null
}

class PlayerTrack {
    constructor(){
        this._data = {}
        this._type = "AssignPlayerToTrack"
    }
    time(x){
        this._time = x
        return this;
    }
    track(x){
        this._data._tracl = x
        return this;
    }
    push(){
        customEvents.push(this)
    }
}


export { notes, walls, customData, environment, customEvents, pointDefs, Output, Input, diff, Note, Wall, Bomb, lightEvents, lightMapper, TrackAnimation,  AssignPathAnimation, AssignTrackParent,  ChromaEnv, PlayerTrack, importFunc }



