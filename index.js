var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var xrpl = require("xrpl");
document.getElementById("getamminfo").onclick = function () {
    main();
};
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var client, amm_info_request, amm_info_result, lp_token, amount, amount2, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    client = new xrpl.Client("wss://xrplcluster.com/");
                    return [4 /*yield*/, client.connect()];
                case 1:
                    _a.sent();
                    amm_info_request = {
                        command: "amm_info",
                        asset: {
                            currency: step1field.value,
                            issuer: step2field.value,
                        },
                        asset2: {
                            currency: step3field.value,
                            issuer: step4field.value,
                        },
                        ledger_index: "validated",
                    };
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, client.request(amm_info_request)];
                case 3:
                    amm_info_result = _a.sent();
                    console.log(amm_info_result);
                    lp_token = amm_info_result.result.amm.lp_token;
                    amount = amm_info_result.result.amm.amount;
                    amount2 = amm_info_result.result.amm.amount2;
                    console.log("The AMM account ".concat(lp_token.issuer, " has ").concat(lp_token.value, " total\n               LP tokens outstanding, and uses the currency code ").concat(lp_token.currency, "."));
                    console.log("In its pool, the AMM holds ".concat(amount.value, " ").concat(amount.currency, " issued by ").concat(amount.issuer, "\n               and ").concat(amount2.value, " ").concat(amount2.currency, " issued by ").concat(amount2.issuer));
                    //document.getElementById("getamminforesult").value = amm_info_result.result;
                    document.getElementById("getamminforesult").value = "The AMM account ".concat(lp_token.issuer, " \nhas ").concat(lp_token.value, " LP tokens and uses the currency \ncode ").concat(lp_token.currency, ". \nIn its pool, the AMM holds ").concat(amount.value, " of the ").concat(amount.currency, " token issued by \n").concat(amount.issuer, " and \n").concat(amount2.value, " of the ").concat(amount2.currency, " token issued by ").concat(amount2.issuer);
                    return [3 /*break*/, 5];
                case 4:
                    err_1 = _a.sent();
                    if (err_1.data.error === "actNotFound") {
                        console.log("No AMM exists yet for the pair (This is probably as expected.)");
                        document.getElementById("getamminforesult").value = "No AMM exists yet for the pair (This is probably as expected.)";
                    }
                    else {
                        throw err_1;
                    }
                    return [3 /*break*/, 5];
                case 5:
                    client.disconnect();
                    document.getElementById("clear1").onclick = function () {
                        window.location.reload();
                    };
                    return [2 /*return*/];
            }
        });
    });
}
main();
document.getElementById("getammXRPinfo").onclick = function () {
    main3();
};
function main3() {
    return __awaiter(this, void 0, void 0, function () {
        var client, amm_info_request, amm_info_result, lp_token, amount, amount2, amm_info_request2, amm_info_result2, balance, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    client = new xrpl.Client("wss://xrplcluster.com/");
                    return [4 /*yield*/, client.connect()];
                case 1:
                    _a.sent();
                    amm_info_request = {
                        command: "amm_info",
                        asset: {
                            currency: "XRP",
                        },
                        asset2: {
                            currency: xrp5.value,
                            issuer: xrp7.value,
                        },
                        ledger_index: "validated",
                    };
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 8, , 9]);
                    return [4 /*yield*/, client.request(amm_info_request)];
                case 3:
                    amm_info_result = _a.sent();
                    console.log(amm_info_result);
                    lp_token = amm_info_result.result.amm.lp_token;
                    amount = amm_info_result.result.amm.amount;
                    amount2 = amm_info_result.result.amm.amount2;
                    amm_info_request2 = {
                        command: "account_info",
                        account: xrp3.value,
                        ledger_index: "validated",
                    };
                    _a.label = 4;
                case 4:
                    _a.trys.push([4, , 6, 7]);
                    return [4 /*yield*/, client.request(amm_info_request2)];
                case 5:
                    amm_info_result2 = _a.sent();
                    console.log(amm_info_result2);
                    balance = amm_info_result2.result.account_data.Balance;
                    //document.getElementById("getamminforesult").value = amm_info_result.result;
                    document.getElementById("getammXRPinforesult").value = "The AMM account ".concat(lp_token.issuer, " \nhas ").concat(lp_token.value, " LP tokens and uses the currency \ncode ").concat(lp_token.currency, ". \nIn its pool, the AMM holds ").concat(balance / 1000000, " XRP and \n").concat(amount2.value, " of the ").concat(amount2.currency, " token \nissued by ").concat(amount2.issuer);
                    document.getElementById("clear3").onclick = function () {
                        window.location.reload();
                    };
                    return [3 /*break*/, 7];
                case 6: return [7 /*endfinally*/];
                case 7: return [3 /*break*/, 9];
                case 8:
                    err_2 = _a.sent();
                    if (err_2.data.error === "actNotFound") {
                        console.log("No AMM exists yet for the pair (This is probably as expected.)");
                        document.getElementById("getammXRPinforesult").value = "No AMM exists yet for the pair (This is probably as expected.)";
                    }
                    else {
                        throw err_2;
                    }
                    client.disconnect();
                    document.getElementById("clear3").onclick = function () {
                        window.location.reload();
                    };
                    return [3 /*break*/, 9];
                case 9: return [2 /*return*/];
            }
        });
    });
}
main3();
document.getElementById("lines2").onclick = function () {
    main2();
};
function main2() {
    return __awaiter(this, void 0, void 0, function () {
        var client, lines, account_lines_result, trustlineResponse, i;
        var _a, _b, _c, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    client = new xrpl.Client("wss://xrplcluster.com/");
                    return [4 /*yield*/, client.connect()];
                case 1:
                    _e.sent();
                    lines = [];
                    account_lines_result = {
                        command: "account_lines",
                        account: lines1field.value,
                        limit: 200,
                        // Tip: To look up only the new AMM's LP Tokens, uncomment:
                        // "peer": lp_token.issuer,
                        ledger_index: "validated",
                    };
                    return [4 /*yield*/, client.request(account_lines_result)];
                case 2:
                    trustlineResponse = _e.sent();
                    console.log(trustlineResponse.result.lines);
                    document.getElementById("lines2field").value = JSON.stringify(trustlineResponse.result.lines, null, 2);
                    if (!((_a = trustlineResponse === null || trustlineResponse === void 0 ? void 0 : trustlineResponse.result) === null || _a === void 0 ? void 0 : _a.lines)) return [3 /*break*/, 5];
                    lines = lines.concat((_b = trustlineResponse === null || trustlineResponse === void 0 ? void 0 : trustlineResponse.result) === null || _b === void 0 ? void 0 : _b.lines);
                    i = 0;
                    if (!trustlineResponse.result.marker) return [3 /*break*/, 5];
                    _e.label = 3;
                case 3:
                    if (!trustlineResponse.result.marker) return [3 /*break*/, 5];
                    account_lines_result.marker = trustlineResponse.result.marker;
                    account_lines_result.ledger_index =
                        trustlineResponse.result.ledger_index;
                    console.log("additional calls: " + ++i);
                    return [4 /*yield*/, client.request(account_lines_result)];
                case 4:
                    trustlineResponse = _e.sent();
                    if ((_c = trustlineResponse === null || trustlineResponse === void 0 ? void 0 : trustlineResponse.result) === null || _c === void 0 ? void 0 : _c.lines) {
                        lines = lines.concat((_d = trustlineResponse === null || trustlineResponse === void 0 ? void 0 : trustlineResponse.result) === null || _d === void 0 ? void 0 : _d.lines);
                    }
                    console.log(lines);
                    //document.getElementById("resultField").value = lines.balance;
                    document.getElementById("lines2field").value = JSON.stringify(lines, null, 2);
                    return [3 /*break*/, 3];
                case 5:
                    client.disconnect();
                    document.getElementById("clear2").onclick = function () {
                        window.location.reload();
                    };
                    return [2 /*return*/];
            }
        });
    });
}
main2();
document.getElementById("lines54").onclick = function () {
    main50();
};
function main50() {
    return __awaiter(this, void 0, void 0, function () {
        var client, lines, account_lines_result, trustlineResponse, i;
        var _a, _b, _c, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    client = new xrpl.Client("wss://xrplcluster.com/");
                    return [4 /*yield*/, client.connect()];
                case 1:
                    _e.sent();
                    lines = [];
                    account_lines_result = {
                        command: "account_lines",
                        account: lines51.value,
                        limit: 200,
                        // Tip: To look up only the new AMM's LP Tokens, uncomment:
                        peer: lines53.value,
                        ledger_index: "validated",
                    };
                    return [4 /*yield*/, client.request(account_lines_result)];
                case 2:
                    trustlineResponse = _e.sent();
                    console.log(trustlineResponse.result.lines);
                    document.getElementById("lines55").value = JSON.stringify(trustlineResponse.result.lines, null, 2);
                    if (!((_a = trustlineResponse === null || trustlineResponse === void 0 ? void 0 : trustlineResponse.result) === null || _a === void 0 ? void 0 : _a.lines)) return [3 /*break*/, 5];
                    lines = lines.concat((_b = trustlineResponse === null || trustlineResponse === void 0 ? void 0 : trustlineResponse.result) === null || _b === void 0 ? void 0 : _b.lines);
                    i = 0;
                    if (!trustlineResponse.result.marker) return [3 /*break*/, 5];
                    _e.label = 3;
                case 3:
                    if (!trustlineResponse.result.marker) return [3 /*break*/, 5];
                    account_lines_result.marker = trustlineResponse.result.marker;
                    account_lines_result.ledger_index =
                        trustlineResponse.result.ledger_index;
                    console.log("additional calls: " + ++i);
                    return [4 /*yield*/, client.request(account_lines_result)];
                case 4:
                    trustlineResponse = _e.sent();
                    if ((_c = trustlineResponse === null || trustlineResponse === void 0 ? void 0 : trustlineResponse.result) === null || _c === void 0 ? void 0 : _c.lines) {
                        lines = lines.concat((_d = trustlineResponse === null || trustlineResponse === void 0 ? void 0 : trustlineResponse.result) === null || _d === void 0 ? void 0 : _d.lines);
                    }
                    console.log(lines);
                    //document.getElementById("resultField").value = lines.balance;
                    document.getElementById("lines55").value = JSON.stringify(lines, null, 2);
                    return [3 /*break*/, 3];
                case 5:
                    client.disconnect();
                    document.getElementById("clear50").onclick = function () {
                        window.location.reload();
                    };
                    return [2 /*return*/];
            }
        });
    });
}
main50();
document.getElementById("step20").onclick = function () {
    main10();
};
function main10() {
    return __awaiter(this, void 0, void 0, function () {
        var client, amm_info_request, amm_info_result, lp_token, amount, amount2, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    client = new xrpl.Client("wss://xrplcluster.com/");
                    return [4 /*yield*/, client.connect()];
                case 1:
                    _a.sent();
                    amm_info_request = {
                        command: "amm_info",
                        asset: {
                            currency: step11.value,
                            issuer: step13.value,
                        },
                        asset2: {
                            currency: step15.value,
                            issuer: step17.value,
                        },
                        ledger_index: step19.value,
                    };
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, client.request(amm_info_request)];
                case 3:
                    amm_info_result = _a.sent();
                    console.log(amm_info_result);
                    lp_token = amm_info_result.result.amm.lp_token;
                    amount = amm_info_result.result.amm.amount;
                    amount2 = amm_info_result.result.amm.amount2;
                    console.log("The AMM account ".concat(lp_token.issuer, " had ").concat(lp_token.value, " total\n               LP tokens outstanding, and used the currency code ").concat(lp_token.currency, "."));
                    console.log("In its pool, the AMM had ".concat(amount.value, " ").concat(amount.currency, " issued by ").concat(amount.issuer, "\n               and ").concat(amount2.value, " ").concat(amount2.currency, " issued by ").concat(amount2.issuer));
                    //document.getElementById("getamminforesult").value = amm_info_result.result;
                    document.getElementById("step21").value = "In the specified ledger index the AMM account ".concat(lp_token.issuer, " \nhad ").concat(lp_token.value, " LP tokens, currency \ncode ").concat(lp_token.currency, ". \nIn its pool, the AMM had ").concat(amount.value, " of the ").concat(amount.currency, " token issued by ").concat(amount.issuer, " and \n").concat(amount2.value, " of the ").concat(amount2.currency, " token issued by ").concat(amount2.issuer);
                    return [3 /*break*/, 5];
                case 4:
                    err_3 = _a.sent();
                    if (err_3.data.error === "actNotFound") {
                        console.log("No AMM exists yet for the pair (This is probably as expected.)");
                        document.getElementById("step21").value = "No AMM exists yet for the pair (This is probably as expected.)";
                    }
                    else {
                        throw err_3;
                    }
                    return [3 /*break*/, 5];
                case 5:
                    client.disconnect();
                    document.getElementById("clear4").onclick = function () {
                        window.location.reload();
                    };
                    return [2 /*return*/];
            }
        });
    });
}
main10();
document.getElementById("step110").onclick = function () {
    main100();
};
function main100() {
    return __awaiter(this, void 0, void 0, function () {
        var client, amm_info_request, amm_info_result, lp_token, amount, amount2, amm_info_request2, amm_info_result2, balance, err_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    client = new xrpl.Client("wss://xrplcluster.com/");
                    return [4 /*yield*/, client.connect()];
                case 1:
                    _a.sent();
                    amm_info_request = {
                        command: "amm_info",
                        asset: {
                            currency: "XRP",
                        },
                        asset2: {
                            currency: step105.value,
                            issuer: step107.value,
                        },
                        ledger_index: step109.value,
                    };
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 8, , 9]);
                    return [4 /*yield*/, client.request(amm_info_request)];
                case 3:
                    amm_info_result = _a.sent();
                    console.log(amm_info_result);
                    lp_token = amm_info_result.result.amm.lp_token;
                    amount = amm_info_result.result.amm.amount;
                    amount2 = amm_info_result.result.amm.amount2;
                    amm_info_request2 = {
                        command: "account_info",
                        account: step103.value,
                        ledger_index: step109.value,
                    };
                    _a.label = 4;
                case 4:
                    _a.trys.push([4, , 6, 7]);
                    return [4 /*yield*/, client.request(amm_info_request2)];
                case 5:
                    amm_info_result2 = _a.sent();
                    console.log(amm_info_result2);
                    balance = amm_info_result2.result.account_data.Balance;
                    //document.getElementById("getamminforesult").value = amm_info_result.result;
                    document.getElementById("step111").value = "In the specified ledger index the AMM account ".concat(lp_token.issuer, " \nhad ").concat(lp_token.value, " LP tokens, currency \ncode ").concat(lp_token.currency, ". \nIn its pool, the AMM had ").concat(balance / 1000000, " XRP and \n").concat(amount2.value, " of the ").concat(amount2.currency, " token issued by ").concat(amount2.issuer);
                    document.getElementById("clear5").onclick = function () {
                        window.location.reload();
                    };
                    return [3 /*break*/, 7];
                case 6: return [7 /*endfinally*/];
                case 7: return [3 /*break*/, 9];
                case 8:
                    err_4 = _a.sent();
                    if (err_4.data.error === "actNotFound") {
                        console.log("No AMM exists yet for the pair (This is probably as expected.)");
                        document.getElementById("step111").value = "No AMM exists yet for the pair (This is probably as expected.)";
                    }
                    else {
                        throw err_4;
                    }
                    client.disconnect();
                    document.getElementById("clear5").onclick = function () {
                        window.location.reload();
                    };
                    return [3 /*break*/, 9];
                case 9: return [2 /*return*/];
            }
        });
    });
}
main100();
//# sourceMappingURL=index.js.map