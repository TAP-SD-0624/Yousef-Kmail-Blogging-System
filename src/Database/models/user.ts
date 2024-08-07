import {
  Table,
  Column,
  DataType,
  PrimaryKey,
  AutoIncrement,
  AfterCreate,
} from "sequelize-typescript";
import SoftDeleteModel from "../models_Base/SoftDeleteModel";

@Table({
  tableName: "users", // Specify the table name
  timestamps: true, // Set to true if you have createdAt and updatedAt columns
})
class User extends SoftDeleteModel {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

  @Column(DataType.STRING)
  name!: string;

  @Column(DataType.DATEONLY)
  dateOfBirth!: string;
}

export default User;
