import { Table, Column, DataType, Model } from "sequelize-typescript";

@Table({
  tableName: "Users",
  timestamps: true,
})
export class Users extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  })
  id!: number; // Changed to number

  @Column({ type: DataType.STRING, allowNull: true })
  name!: string;

  @Column({ type: DataType.STRING, allowNull: true })
  lastname!: string;

  @Column({ type: DataType.DATE, allowNull: true })
  dob!: Date; // Changed to Date

  @Column({ type: DataType.STRING, allowNull: true })
  address!: string;
}
