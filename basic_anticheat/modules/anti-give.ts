import { MinecraftPacketIds } from "bdsx/bds/packetids";
import { CANCEL } from "bdsx/common";
import { events } from "bdsx/event";
import { TestFailed } from "../functions";

events.packetRaw(MinecraftPacketIds.InventoryTransaction).on((ptr, never, ni, _never) => {
    try {
        if (ptr.readVarUint() === 99999) {
            return TestFailed(ni, "Give");
        };
    } catch {
        return CANCEL;
    }
});