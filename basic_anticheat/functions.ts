import { NetworkIdentifier } from "bdsx/bds/networkidentifier";
import { CANCEL } from "bdsx/common";
import { bedrockServer } from "bdsx/launcher";

export function TestFailed(ni: NetworkIdentifier, cheatName: string): CANCEL {
    const player = ni.getActor()!;
    const playerName = player.getNameTag();

    const OnlineOP = bedrockServer.serverInstance.getPlayers().filter(pl => pl.getPermissionLevel() >= 1);
    for (const operator of OnlineOP) {
        operator.sendMessage(`[AC] §8${playerName} §chas failed §8${cheatName}`);
    };

    console.log(`[AC] ${playerName} has failed ${cheatName}`);

    return CANCEL;
};