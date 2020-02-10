import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//import { databaseProviders } from './../database.providers';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(),UsersModule],
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
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
