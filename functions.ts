import { NetworkIdentifier } from "bdsx/bds/networkidentifier";
import { CANCEL } from "bdsx/common";
import { bedrockServer } from "bdsx/launcher";

export function TestFailed(ni: NetworkIdentifier, cheatName: string): CANCEL {
    const player = ni.getActor()!;
    const playerName = player.getNameTag();

    const pls = bedrockServer.serverInstance.getPlayers();
    for (const pl of pls) {
        pl.sendMessage(`[AC] §8${playerName} §chas failed §8${cheatName}`);
    };

    console.log(`[AC] ${playerName} has failed ${cheatName}`);

    return CANCEL;
};