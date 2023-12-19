import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmartkModule } from './bookmartk/bookmartk.module';

@Module({
  imports: [AuthModule, UserModule, BookmartkModule],
})
export class AppModule {}
