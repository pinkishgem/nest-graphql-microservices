import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { LoggerModule } from 'nestjs-pino'

@Module({
  imports: [
    ConfigModule.forRoot(),
    LoggerModule.forRoot({
      pinoHttp: {
        safe: true,
        prettyPrint: process.env.NODE_ENV === 'development'
      }
    })
  ]
})
export class AppModule {}
