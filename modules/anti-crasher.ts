import { MinecraftPacketIds } from "bdsx/bds/packetids";
import { events } from "bdsx/event";
import { bedrockServer } from "bdsx/launcher";
import { TestFailed } from "../functions";

const MAX = 0xffffffff;

events.packetBefore(MinecraftPacketIds.PlayerAuthInput).on((pkt, ni, pktid)=> {
    const pos = pkt.pos;
    const x = pos.x;
    const y = pos.y;
    const z = pos.z;

    if (x > MAX || y > MAX || z > MAX) {
        return TestFailed(ni, "Crasher");
    };
});

events.packetBefore(MinecraftPacketIds.MovePlayer).on((pkt, ni, pktid)=> {
    const pos = pkt.pos;
    const x = pos.x;
    const y = pos.y;
    const z = pos.z;

    if (x > MAX || y > MAX || z > MAX) {
        return TestFailed(ni, "Crasher");
    };
});

events.packetBefore(MinecraftPacketIds.LevelSoundEvent).on((pkt, ni, pktid)=> {
    if (pkt.sound === 0) {
        bedrockServer.serverInstance.disconnectClient(ni, "Crasher");
        return TestFailed(ni, "Crasher");
    };
});

events.playerAttack.on((ev)=> {
    const player = ev.player;
    const victim = ev.victim;
    if (!victim.isPlayer()) return;
    if (!player.isPlayer()) return;

    const ni = player.getNetworkIdentifier()!;
    if (ni === victim.getNetworkIdentifier()) { 
        bedrockServer.serverInstance.disconnectClient(ni, "Crasher");
        return TestFailed(ni, "Self Hit");
    };
});