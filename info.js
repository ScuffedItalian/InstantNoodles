import { ChromaEnv, environment, Note } from "./index.js";

function RequireNoodle() {
    new Note()
        .time(5)
        .lineIndex(0)
        .lineLayer(0)
        .type(0)
        .direction(0)
        .fake(true)
        .interactable(false)
        .position([-5, -5, -5])
        .scale([0, 0, 0])
        .push()
}

function SuggestChroma(){
    new ChromaEnv().id("Environment").method("Contains").duiplicate(1).position([-999, -999, -999]).push()
}
export { RequireNoodle, SuggestChroma }