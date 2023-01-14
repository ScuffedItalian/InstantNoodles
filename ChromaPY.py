import json
import os
Input = "EasyStandard.dat" #Put your diff files here
Output = "ExpertPlusStandard.dat" #Put your diff files here

with open(Input, "r") as inpFile:
    chroMap = json.load(inpFile)


chroMap["_customData"] = { "_environment": [], "_customEvents": [] }
customData = chroMap["_customData"]

_walls = chroMap["_obstacles"]
_notes = chroMap["_notes"]
_environment = chroMap["_customData"]["_environment"]
_customEvents = chroMap["_customData"]["_customEvents"]

for note in _notes:
    if '_customData' not in note:
        note["_customData"] = {}
#Use append statment to push objects.
defFilter = None

#NoteTrack def
def TrackNote(timeStart, timeEnd, track):
    defFilter = [note for note in _notes if timeStart <= note['_time'] <= timeEnd]
    for note in defFilter:
        if '_track' not in note["_customData"]:
            note["_customData"]["_track"] = track


def TrackWall(timeStart, timeEnd, track):
    defFilter = [wall for wall in _walls if timeStart <= wall['_time'] <= timeEnd]
    for wall in defFilter:
        if '_track' not in wall["_customData"]:
            wall["_customData"]["_track"] = track

# PUT CODE BELOW

# PUT CODE ABOVE


with open(Output, 'w') as outFile:
    json.dump(chroMap, outFile)


