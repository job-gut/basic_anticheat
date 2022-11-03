"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestFailed = void 0;
const common_1 = require("bdsx/common");
const launcher_1 = require("bdsx/launcher");
function TestFailed(ni, cheatName) {
    const player = ni.getActor();
    const playerName = player.getNameTag();
    const OnlineOP = launcher_1.bedrockServer.serverInstance.getPlayers().filter(pl => pl.getPermissionLevel() >= 1);
    for (const operator of OnlineOP) {
        operator.sendMessage(`[AC] §8${playerName} §chas failed §8${cheatName}`);
    }
    ;
    console.log(`[AC] ${playerName} has failed ${cheatName}`);
    return common_1.CANCEL;
}
exports.TestFailed = TestFailed;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZnVuY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHdDQUFxQztBQUNyQyw0Q0FBOEM7QUFFOUMsU0FBZ0IsVUFBVSxDQUFDLEVBQXFCLEVBQUUsU0FBaUI7SUFDL0QsTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDLFFBQVEsRUFBRyxDQUFDO0lBQzlCLE1BQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUV2QyxNQUFNLFFBQVEsR0FBRyx3QkFBYSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN0RyxLQUFLLE1BQU0sUUFBUSxJQUFJLFFBQVEsRUFBRTtRQUM3QixRQUFRLENBQUMsV0FBVyxDQUFDLFVBQVUsVUFBVSxtQkFBbUIsU0FBUyxFQUFFLENBQUMsQ0FBQztLQUM1RTtJQUFBLENBQUM7SUFFRixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsVUFBVSxlQUFlLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFFMUQsT0FBTyxlQUFNLENBQUM7QUFDbEIsQ0FBQztBQVpELGdDQVlDO0FBQUEsQ0FBQyJ9