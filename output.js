import * as fs from 'fs';
import { Output } from './index.js';


var data = JSON.parse(fs.readFileSync(Output))

function logMapStats(){
    console.log("\u001b[31m\n<---------- Noodle Map Statistics ---------->\n\n", data._customData._customEvents.length, "\u001b[33;1mCustomEvents Pushed\n", data._customData._pointDefinitions.length, "\u001b[32mNotes CustomData Pushed\n", "\n\u001b[36m<---------- Chroma Map Statistics ---------->\n\n", data._customData._environment.length, "\u001b[34mEnvironment Enhancments Pushed\n", data._events.length, "\u001b[35mLight Events Pushed", "\n\n\u001b[32m<---------- Vanilla Map Statistics ---------->\n\n", data._notes.length, "\u001b[32mNotes\n", data._obstacles.length, "\u001b[32mWalls\n")
}

export { logMapStats }