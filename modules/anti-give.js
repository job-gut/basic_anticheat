"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const packetids_1 = require("bdsx/bds/packetids");
const common_1 = require("bdsx/common");
const event_1 = require("bdsx/event");
const functions_1 = require("../functions");
event_1.events.packetRaw(packetids_1.MinecraftPacketIds.InventoryTransaction).on((ptr, never, ni, _never) => {
    try {
        if (ptr.readVarUint() === 99999) {
            return (0, functions_1.TestFailed)(ni, "Give");
        }
        ;
    }
    catch (_a) {
        return common_1.CANCEL;
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW50aS1naXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYW50aS1naXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsa0RBQXdEO0FBQ3hELHdDQUFxQztBQUNyQyxzQ0FBb0M7QUFDcEMsNENBQTBDO0FBRTFDLGNBQU0sQ0FBQyxTQUFTLENBQUMsOEJBQWtCLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRTtJQUNwRixJQUFJO1FBQ0EsSUFBSSxHQUFHLENBQUMsV0FBVyxFQUFFLEtBQUssS0FBSyxFQUFFO1lBQzdCLE9BQU8sSUFBQSxzQkFBVSxFQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUNqQztRQUFBLENBQUM7S0FDTDtJQUFDLFdBQU07UUFDSixPQUFPLGVBQU0sQ0FBQztLQUNqQjtBQUNMLENBQUMsQ0FBQyxDQUFDIn0=