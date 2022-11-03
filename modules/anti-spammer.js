"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const packetids_1 = require("bdsx/bds/packetids");
const event_1 = require("bdsx/event");
const functions_1 = require("../functions");
event_1.events.packetBefore(packetids_1.MinecraftPacketIds.Text).on((pkt, ni) => {
    const msg = pkt.message;
    if (msg.includes("github.com/disepi/ambrosial") || msg.includes("horion.download")) {
        return (0, functions_1.TestFailed)(ni, "Spammer");
    }
    ;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW50aS1zcGFtbWVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYW50aS1zcGFtbWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsa0RBQXdEO0FBQ3hELHNDQUFvQztBQUNwQyw0Q0FBMEM7QUFFMUMsY0FBTSxDQUFDLFlBQVksQ0FBQyw4QkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFDLEVBQUU7SUFDdkQsTUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQztJQUN4QixJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsNkJBQTZCLENBQUMsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLEVBQUU7UUFDaEYsT0FBTyxJQUFBLHNCQUFVLEVBQUMsRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0tBQ3BDO0lBQUEsQ0FBQztBQUNOLENBQUMsQ0FBQyxDQUFDIn0=