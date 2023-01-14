import * as fs from 'fs';
import { FilterTrack } from './func.js';
import { AnimateTrack, Bomb, diff, lightMapper, Note, TrackAnimation, Wall, walls } from './index.js';
import { Output } from './index.js ';
import { RequireNoodle, SuggestChroma } from './info.js';
import { logMapStats } from './output.js';


//DevNote
//Try to add modelToEnv
//add noodle req add




new Note()
    .time(5)
    .lineLayer(0)
    .lineIndex(0)
    .type(0)
    .direction(0)
    .track("DADDY")
    .fake(true)
    .color( [0, 1, 1] )
    .scale( [1, 1, 1] )
    .position( [5, 1] )
    .push()

new Wall()
    .time(20)
    .lineIndex(4)
    .type(1)
    .duration(50)
    .width(20)
    .track("DADDYWALL")
    .color( [1, 0, 1, 0] )
    .push()

new Bomb()
    .time(4)
    .lineIndex(0)
    .lineLayer(0)
    .direction(0)
    .track("bomb")
    .color( [1,0,1] )
    .push()




FilterTrack(walls, 0, 50, "DADDY")

RequireNoodle()
SuggestChroma()

logMapStats()

fs.writeFileSync(Output, JSON.stringify(diff, null, 4))











