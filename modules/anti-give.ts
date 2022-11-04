import { MinecraftPacketIds } from "bdsx/bds/packetids";
import { events } from "bdsx/event";
import { TestFailed } from "../functions";

events.packetRaw(MinecraftPacketIds.InventoryTransaction).on((ptr, never, ni, _never) => {

    try {
        for (let i = 0; i < never; i++) {
            if (ptr.readVarUint() == 99999) {
                return TestFailed(ni, "Give");
            };
        };
    } catch { }
});