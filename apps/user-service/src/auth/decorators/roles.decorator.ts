import { SetMetadata } from '@nestjs/common';
import { UserRole } from '../../common/types/auth-user.type';
import { ROLES_KEY } from '../../common/constants/roles.constant';

export const Roles = (...roles: UserRole[]) => SetMetadata(ROLES_KEY, roles);
