import { EntityRepository, Repository } from "typeorm";

import { SurveyUser } from "../models/SurveyUser";

@EntityRepository(SurveyUser)
class SurveysUsersRepository extends Repository<SurveyUser> {}

export { SurveysUsersRepository };

// Aula 4: 16:15
