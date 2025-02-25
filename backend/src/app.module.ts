import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongoDatabaseModule } from './mongodb.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [ConfigModule.forRoot(), MongoDatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
