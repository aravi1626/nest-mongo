class UserDto {
  name: string;
  email: string;
  skills: string[];
}

export class CreateUserDto extends UserDto {}

export class UpdateUserDto extends UserDto {}
