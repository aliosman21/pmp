import { Global, Module } from '@nestjs/common';
import { Db, MongoClient } from 'mongodb';

@Global()
@Module({
    providers: [
        {
            provide: 'mongoClient',
            useFactory: async (): Promise<Db> => {
                const client = new MongoClient(process.env.MONGO_URL as string);
                await client.connect();
                const db = client.db(process.env.MONGO_DB_NAME as string); // Specify the database name here
                return db;
            },
        },
    ],
    exports: ['mongoClient'],
})
export class MongoDatabaseModule { }
