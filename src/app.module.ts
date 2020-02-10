import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//import { databaseProviders } from './../database.providers';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [],
  providers: [],
  exports: []
})
// @Module({
//   imports: [UsersModule],
//   controllers: [AppController],
//   providers: [AppService,...databaseProviders],
//   exports: [...databaseProviders]
// })
export class AppModule {}
