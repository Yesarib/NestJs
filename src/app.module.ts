import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmartkModule } from './bookmartk/bookmartk.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    BookmartkModule,
    PrismaModule,
  ],
})
export class AppModule {}
