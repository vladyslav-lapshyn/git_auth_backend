"use strict";
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
import { AllowNull, Column, DataType, Model, Table, Unique } from "sequelize-typescript";
export let User = class User extends Model {
    createdAt;
    githubId;
    userName;
};
_ts_decorate([
    AllowNull(false),
    Column({
        type: DataType.DATE,
        defaultValue: DataType.NOW
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], User.prototype, "createdAt", void 0);
_ts_decorate([
    AllowNull(false),
    Unique(true),
    Column({
        type: DataType.STRING
    }),
    _ts_metadata("design:type", String)
], User.prototype, "githubId", void 0);
_ts_decorate([
    AllowNull(false),
    Column({
        type: DataType.STRING
    }),
    _ts_metadata("design:type", String)
], User.prototype, "userName", void 0);
User = _ts_decorate([
    Table({
        tableName: "users",
        timestamps: false
    })
], User);
