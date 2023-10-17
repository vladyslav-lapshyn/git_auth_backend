'use strict';

import { AllowNull, Column, DataType, Model, Table, Unique } from "sequelize-typescript";

@Table({
  tableName: 'users',
  timestamps: false,
})

export class User extends Model {
  @AllowNull(false)
  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
  })
    createdAt!: Date;

  @AllowNull(false)
  @Unique(true)
  @Column({
    type: DataType.STRING,
  })
    githubId: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
    userName: string
}