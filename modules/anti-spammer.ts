import { MinecraftPacketIds } from "bdsx/bds/packetids";
import { events } from "bdsx/event";
import { TestFailed } from "../functions";

events.packetBefore(MinecraftPacketIds.Text).on((pkt, ni)=> {
    const msg = pkt.message;
    if (msg.includes("github.com/disepi/ambrosial") || msg.includes("horion.download")) {
        return TestFailed(ni, "Spammer");
    };
});