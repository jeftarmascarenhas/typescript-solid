import { User } from "../../entities/User"
import { EmailProvider } from "../../providers/EmailProvider"
import { UsersRepository } from "../../repositories/UsersRepository"
import { CreateUserRequestDTO } from "./CreateUserDTO"

export class CreateUserUseCase {
  // private userRepository: UsersRepository isn't necessary because existes private on the constructor

  constructor(
    private userRepository: UsersRepository,
    private emailProvider: EmailProvider
  ) {
    // this.userRepository = userRepository
  }

  async execute(data: CreateUserRequestDTO) {
    const userAlreadyExists = await this.userRepository.findByEmail(data.email)

    if (userAlreadyExists) {
      throw new Error("User already exists")
    }

    const user = new User(data)

    this.userRepository.save(user)

    this.emailProvider.sendEmail({
      to: {
        name: data.name,
        email: data.email,
      },
      from: {
        name: "Architecture Teams",
        email: "architecture@teams.com",
      },
      subject: "Welcome the Team Platform",
      body: "<p>You can now login to our platform</p>",
    })
  }
}
