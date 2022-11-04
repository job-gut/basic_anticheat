"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const packetids_1 = require("bdsx/bds/packetids");
const event_1 = require("bdsx/event");
const functions_1 = require("../functions");
event_1.events.packetRaw(packetids_1.MinecraftPacketIds.InventoryTransaction).on((ptr, never, ni, _never) => {
    for (let i = 0; i < never; i++) {
        if (ptr.readVarUint() == 99999) {
            return (0, functions_1.TestFailed)(ni, "Give");
        }
        ;
    }
    ;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW50aS1naXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYW50aS1naXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsa0RBQXdEO0FBQ3hELHNDQUFvQztBQUNwQyw0Q0FBMEM7QUFFMUMsY0FBTSxDQUFDLFNBQVMsQ0FBQyw4QkFBa0IsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFO0lBRXBGLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDNUIsSUFBSSxHQUFHLENBQUMsV0FBVyxFQUFFLElBQUksS0FBSyxFQUFFO1lBQzVCLE9BQU8sSUFBQSxzQkFBVSxFQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUNqQztRQUFBLENBQUM7S0FDTDtJQUFBLENBQUM7QUFDTixDQUFDLENBQUMsQ0FBQyJ9