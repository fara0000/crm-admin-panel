import { AppModule } from "./app.module";
import { NestFactory } from "@nestjs/core";


async function start() {
    const port = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule);

    await app.listen(port, () => console.log(`Server is running on port ${port}!`));
}

start();