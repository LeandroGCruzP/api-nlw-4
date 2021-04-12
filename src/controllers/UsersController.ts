import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";
import * as yup from "yup";

class UsersController {
  async create(request: Request, response: Response) {
    const { name, email } = request.body;

    let schema = yup.object().shape({
      name: yup.string().required("Nome é obrigatório"),
      email: yup.string().email().required("Email é obrigatório"),
    });

    // if (!(await schema.isValid(request.body))) {
    //   return response.status(400).json({ error: "Validation Failed!" });
    // }

    try {
      await schema.validate(request.body, { abortEarly: false });
    } catch (err) {
      return response.status(400).json({ error: err });
    }

    const usersRepository = getCustomRepository(UsersRepository);

    const userAlreadyExits = await usersRepository.findOne({
      email,
    });

    if (userAlreadyExits) {
      return response.status(400).json({
        error: "User already exists",
      });
    }

    const user = usersRepository.create({
      name,
      email,
    });

    await usersRepository.save(user);

    return response.status(201).json(user);
  }
}

export { UsersController };
