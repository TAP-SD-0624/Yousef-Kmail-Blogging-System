import {
  AllowNull,
  Column,
  DataType,
  Default,
  Model,
} from "sequelize-typescript";
import { NotFoundError } from "../../Errors/NotFoundError";

class SoftDeleteModel extends Model {
  @Default(false)
  @AllowNull(false)
  @Column(DataType.BOOLEAN)
  isDeleted!: boolean;

  public async SoftDelete() {
    this.isDeleted = true;
    await this.save();
  }
  public async SoftRestore() {
    this.isDeleted = false;
    await this.save();
  }

  public static async DeleteById(id: string | number) {
    const item = await this.findByPk(id);
    if (!item || item.isDeleted) {
      throw new NotFoundError();
    }
    item.isDeleted = true;
    await item.save();
  }

  public static async RestoreById(id: string | number) {
    const item = await this.findByPk(id);
    if (!item) {
      throw new NotFoundError();
    }
    if (!item.isDeleted) {
      return;
    }
    item.isDeleted = false;
    await item.save();
  }
}

export default SoftDeleteModel;
