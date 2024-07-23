import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
} from "sequelize-typescript";

@Table({
  tableName: "users", // Specify the table name
  timestamps: true, // Set to true if you have createdAt and updatedAt columns
})
export class User extends Model {
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
