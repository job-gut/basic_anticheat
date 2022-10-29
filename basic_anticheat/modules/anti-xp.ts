import { MinecraftPacketIds } from "bdsx/bds/packetids";
import { ActorEventPacket } from "bdsx/bds/packets";
import { events } from "bdsx/event";
import { TestFailed } from "../functions";

events.packetBefore(MinecraftPacketIds.ActorEvent).on((pkt, ni, pktid)=> {
    if (pkt.event === ActorEventPacket.Events.PlayerAddXpLevels) {
        return TestFailed(ni, "XP");
    };
});