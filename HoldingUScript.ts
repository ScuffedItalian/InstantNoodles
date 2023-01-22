import { ease, mapDir, Prop } from "./src/consts.ts";
import { Environment } from "./src/environment.ts";
import { AnimateTrack } from "./src/events.ts";
import { random } from "./src/general.ts";
import { Requirement, Settings } from "./src/info.ts";
import { events, Map } from "./src/main.ts";
import { notes } from "./src/mapHandler.ts";
import { Animation, CustomData, filter, track, Wall } from "./src/objects.ts";
const INPUT = 'HardStandard.dat'
const OUTPUT = 'ExpertPlusLawless.dat'

const difficulty = Map.initialize(INPUT, OUTPUT, 16, 0)

// #region Noodle stuff below

// track(filter(notes, 0, 385, Prop.Note.Type.Red), "RedTrack")
// track(filter(notes, 0, 385), "BlueTrack")

// new CustomData(filter(notes, 193, 255))
//     .njs(8)

// new Animation(filter(notes, 193, 255))
//     .pos([
//         [0, -0.65, 0, 0],
//         [0, 0, 0, 0.4, ease.Out.Sine]

//     ])
//     .localRot([
//         [-35, 0, 0, 0],
//         [0, 0, 0, 0.4, ease.Out.Sine]
//     ])

new Animation(filter(notes, 66, 95, Prop.Note.Type.Blue))
    .pos([
        [0, 50, 0, 0],
        [0,0,0,0.3, ease.Out.Cubic, "splineCatmullRom"]
    ])

new Animation(filter(notes, 66, 95, Prop.Note.Type.Red))
    .pos([
        [0, -50, 0, 0],
        [0,0,0,0.3, ease.Out.Cubic, "splineCatmullRom"]
    ])

new Animation(filter(notes, 95, 121, Prop.Note.Type.Red))
    .pos([
        [0, -50, 0, 0],
        [0,0,0,0.3, ease.Out.Cubic, "splineCatmullRom"]
    ])

new Animation(filter(notes, 95, 121, Prop.Note.Type.Blue))
    .pos([
        [0, 50, 0, 0],
        [0,0,0,0.3, ease.Out.Cubic, "splineCatmullRom"]
    ])

new Animation(filter(notes, 128, 160, Prop.Note.Type.Red))
    .pos([
        [-50, 0, 0, 0],
        [0,0,0,0.3, ease.Out.Sine, "splineCatmullRom"]
    ])

new Animation(filter(notes, 128, 160, Prop.Note.Type.Blue))
    .pos([
        [50, 0, 0, 0],
        [0,0,0,0.3, ease.Out.Sine, "splineCatmullRom"]
    ])

    new Animation(filter(notes, 160, 191, Prop.Note.Type.Red))
    .pos([
        [0, -50, 0, 0],
        [0,0,0,0.3, ease.Out.Cubic, "splineCatmullRom"]
    ])

new Animation(filter(notes, 160, 191, Prop.Note.Type.Blue))
    .pos([
        [0, 50, 0, 0],
        [0,0,0,0.3, ease.Out.Cubic, "splineCatmullRom"]
    ])

// new AnimateTrack(0)
//     .track("RedTrack")
//     .duration(385)
//     .color([0, 0.532, 0.109, 1])
//     .push();

// new AnimateTrack(0)
//     .track("BlueTrack")
//     .duration(385)
//     .color([0.736, 0.683, 0, 1])
//     .push();

const filter1 = filter(notes, 4, 61)
filter1.forEach((x: any) => {
    new CustomData([x])
        .disableNoteGravity(true)
        .disableNoteLook(true)
        .disableSpawnEffect(true)
        .njs(8)
    new Animation([x])
        // .pos([
        //     [0,50,0,0],
        //     [0,0,0,0.3, ease.Out.Cubic, "splineCatmullRom"]
        // ])
        .dis([
            [0, 0],
            [0.6, 0.2],
            [0.8, 0.4],
            [1, 0.6]

        ])

    for(let i=0; i < 3; i++) {
        const dupe = JSON.parse(JSON.stringify(x));
        dupe._time = dupe._time + i * 0.5
        new CustomData([dupe])
            .fake(true)
            .disableNoteGravity(true)
            .disableNoteLook(true)
            .disableSpawnEffect(true)
            .njs(8)
        new Animation([dupe])
            .dis([
                [0, 0.15],
                [0.35, 0.23],
                [0, 0.59]
            ])
            .disArr([[0,0]])


        notes.push(dupe)
        
        

    }
    
    

})





//Environment enhancments
new Wall(0)
    .duration(385)
    .defPosAnim([
        [-200, -1.2, -200, 0],
        [-200, -1.2, -300, 0.2],
        [-200, -1.2, -400, 0.4],
        [-200, -1.2, -500, 0.6],
        [-200, -1.2, -600, 0.8],
        [-200, -1.2, -700, 1]
    ])
    .disAnim([
        [1,0]
    ])
    .scale([300, 1, 1000])
    .color([66/255, 236/255, 245/255, 10])
    .fake(true)
    .interactable(false)
    .push();


for(let i=0; i < 35; i++) {
    new Environment()
        .regex(/^BTSEnvironment\.\[\d\]Environment\.\[\d\d\]PillarTrackLaneRingsR$/)
        .duplicate(1)
        .pos([10,0, 0 + i * 4])
        // .localRot([0, 25, 0])
        .rot([0, 0, 25])
        .scale([0.2, 0.2, 0.2])
        .push();
}

for(let i=0; i < 35; i++) {
    new Environment()
        .regex(/^^BTSEnvironment\.\[\d\]Environment\.\[\d\d\]PillarTrackLaneRingsR \(\d\)$$/)
        .duplicate(1)
        .pos([-10,0, 0 + i * 4])
        // .localRot([0, 25, 0])
        .rot([0, 0, -25])
        .scale([0.2, 0.2, 0.2])
        .push();
        
}

new Environment()
    .regex(/^BTSEnvironment\.\[\d\]Environment\.\[\d\d\]Clouds$/)
    .pos([-999,-999,-999])
    .push();

new Environment()
    .contains("Construction")
    .pos([0,-999,0])
    .push();

new Environment()
    .contains("GlowLineL")
    .pos([0,-999,0])
    .push();

new Environment()
    .contains("GlowLineR")
    .pos([0,-999,0])
    .push();

new Environment()
    .contains("GlowLineH")
    .pos([0,-999,0])
    .push();

new Environment()
    .contains("TrackMirror")
    .pos([0,-999,0])
    .push();

new Environment()
    .contains("PlayersPlace")
    .pos([0,-999,0])
    .push();

new Environment()
    .contains("GlowLineC")
    .pos([0,-999,0])
    .push();

// #endregion Noodle stuff above
new Settings(OUTPUT)
    .screenDistortions(true)
new Requirement(OUTPUT)
    .noodle()
    .chroma()
Map.formatFile(true)
Map.finalize(difficulty);
