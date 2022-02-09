import { world } from "mojang-minecraft";
import { mobList } from "./modules/mob_list.js";

world.events.blockBreak.subscribe(eventData => blockBreak(eventData));

function randInt(min, max) {
    max++;
    return Math.floor(Math.random() * (max - min)) + min;
}

function randChoice(array, num) {
    if (num) {
        const choice = [];
        while (num > 0) {
            num--;
            choice.push(array[randInt(0, array.length - 1)]);
        }
        return choice;
    } else {
        return array[randInt(0, array.length - 1)];
    }
}

function blockBreak(eventData) {
    const brokenBlock = eventData.block;
    const locX = brokenBlock.location.x;
    const locY = brokenBlock.location.y;
    const locZ = brokenBlock.location.z;
    eventData.player.runCommand(`summon ${randChoice(mobList)} ${locX} ${locY} ${locZ}`);
}