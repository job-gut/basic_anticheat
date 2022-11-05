import { MinecraftPacketIds } from "bdsx/bds/packetids";
import { events } from "bdsx/event";
import { TestFailed } from "../functions";

events.packetRaw(MinecraftPacketIds.InventoryTransaction).on((ptr, size, ni, PKID) => {
    try {
        for (let i = 0; i < size; i++) {
            if (ptr.readVarUint() == 99999) {
                return TestFailed(ni, "Give");
            };
        };
    } catch { }
});