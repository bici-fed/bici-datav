export var Lock;
(function (Lock) {
    Lock[Lock["None"] = 0] = "None";
    Lock[Lock["Readonly"] = 1] = "Readonly";
    Lock[Lock["NoMove"] = 2] = "NoMove";
    Lock[Lock["NoEvent"] = 10] = "NoEvent";
})(Lock || (Lock = {}));
export var AnchorMode;
(function (AnchorMode) {
    AnchorMode[AnchorMode["Default"] = 0] = "Default";
    AnchorMode[AnchorMode["In"] = 1] = "In";
    AnchorMode[AnchorMode["Out"] = 2] = "Out";
})(AnchorMode || (AnchorMode = {}));
//# sourceMappingURL=status.js.map