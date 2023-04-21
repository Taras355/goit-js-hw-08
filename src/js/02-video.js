import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const CURRENT_TIME_KEY = "videoplayer-current-time";

const player = new Player("vimeo-player");

const currentTime = JSON.parse(localStorage.getItem(CURRENT_TIME_KEY)) ?? 0;
player.setCurrentTime(currentTime);

player.on("timeupdate", throttle(onPlay, 1000));
function onPlay({ seconds }) {
    localStorage.setItem(CURRENT_TIME_KEY, JSON.stringify(seconds));
}
