import { ICoursesRepository } from "../../repositories/ICoursesRepository";
import { ICreateCourseDTO } from "./CreateCourseDTO";

export class CreateCourseService {
    constructor(private coursesRepository: ICoursesRepository) {}

    async execute(data: ICreateCourseDTO) {
        if (!data.teacher_ids || data.teacher_ids.length === 0) {
            throw new Error('A course must have at least one teacher');
        }

        if (!data.classroom_ids || data.classroom_ids.length === 0) {
            throw new Error('A course must have at least one classroom');
        }

        return await this.coursesRepository.save(data);
    }
}