import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CustomResponseFilter } from './common/filter/logging-exception.filter';
import { DetailedLoggingInterceptor } from './common/interceptors/detailed-logging.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(
    new DetailedLoggingInterceptor()
  )
  app.useGlobalFilters(
    new CustomResponseFilter(),
  )
  await app.listen(process.env.PORT ?? 3000);
  console.log(`🚀 ~ App is running on port: ${await app.getUrl()}`);
}
bootstrap();
