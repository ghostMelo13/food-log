import { Controller, Get } from '@nestjs/common';
import { SupabaseService } from 'src/supabase/supabase.service';
import { User } from 'src/types/user.types';

@Controller('users')
export class UsersController {
    constructor(private readonly supabaseService: SupabaseService) {}

    @Get()
    async getUsers(): Promise<User[]> {
        return this.supabaseService.getUsers();
    }
}
