

var filterObj;

function FilterTrack(objName, t1, t2, track) {
    filterObj = objName.filter(obj => obj._time >= t1 && obj._time <= t2)
    filterObj.forEach(obj => {
        if(obj._customData._track) obj._customData._track = track;
        else if (Array.isArray(obj._customData._track)) obj._customData._track.push(track)
        else if (obj._customData._track != track) obj._customData._track = [obj._customData._track, track]
    })
}

export { FilterTrack }