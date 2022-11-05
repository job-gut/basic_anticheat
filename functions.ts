import { NetworkIdentifier } from "bdsx/bds/networkidentifier";
import { CANCEL } from "bdsx/common";
import { bedrockServer } from "bdsx/launcher";

export function TestFailed(ni: NetworkIdentifier, cheatName: string): CANCEL {
    const player = ni.getActor()!;
    if (!player) { 
        const pls = bedrockServer.serverInstance.getPlayers();
        for (const pl of pls) {
            pl.sendMessage(`[Basic-AntiCheat] §8A hacker §chas failed §8${cheatName}`);
        };
    
        console.log(`[Basic-AntiCheat] A hacker has failed ${cheatName}`);
        return CANCEL;
    };

    const playerName = player.getNameTag();

    const pls = bedrockServer.serverInstance.getPlayers();
    for (const pl of pls) {
        pl.sendMessage(`[Basic-AntiCheat] §8${playerName} §chas failed §8${cheatName}`);
    };

    console.log(`[Basic-AntiCheat] ${playerName} has failed ${cheatName}`);

    return CANCEL;
};