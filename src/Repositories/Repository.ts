import { Model } from "sequelize-typescript";
import { IRepository } from "../Interfaces/Repositories/IRepository";

export class Repository<T extends Model> implements IRepository<T> {
  private model: { new (): T } & typeof Model;

  constructor(model: { new (): T } & typeof Model) {
    this.model = model;
  }

  async findById(id: string): Promise<T | null> {
    return await this.model.findByPk<T>(id);
  }

  async findAll(): Promise<T[]> {
    return await this.model.findAll<T>();
  }

  async create(entity: T): Promise<T> {
    return await entity.save();
  }

  async update(entity: T): Promise<T | null> {
    const [_, [updatedEntity]] = await this.model.update<T>(entity.toJSON(), {
      where: { id: entity.id },
      returning: true,
    });

    return updatedEntity;
  }

  async delete(entity: T): Promise<boolean> {
    const deleted = await this.model.destroy<T>({
      where: { id: entity.id },
    });
    return deleted > 0;
  }
}
