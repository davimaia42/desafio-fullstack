import { Repository, Any } from "typeorm";
import { AppDataSource } from "../../database";
import { Classroom } from "../../entities/Classroom";
import { IClassroomsRepository } from "../IClassroomsRepository";

export class PostgresClassroomsRepository implements IClassroomsRepository {
    classRoomRepository: Repository<Classroom>;

    constructor() {
        this.classRoomRepository = AppDataSource.getRepository(Classroom);
    }

    async list(): Promise<Classroom[]> {
        return await this.classRoomRepository.find();
    }

    async findByIds(ids: string[]): Promise<Classroom[]> {
        return await this.classRoomRepository.findBy({ id: Any(ids) });
    }
}