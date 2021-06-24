import { MailtrapEmailProvider } from "../../providers/implementations/MailtrapEmailProvider"
import { PostgresUsersRepository } from "../../repositories/implementations/PostgresUsersRepository"
import { CreateUserController } from "./CreateUserController"
import { CreateUserUseCase } from "./CreateUserUseCase"

const mailtrapEmailProvider = new MailtrapEmailProvider()

const postgresUsersRepository = new PostgresUsersRepository()

const createUserUseCase = new CreateUserUseCase(
  postgresUsersRepository,
  mailtrapEmailProvider
)

const createUserController = new CreateUserController(createUserUseCase)

export { createUserUseCase, createUserController }
