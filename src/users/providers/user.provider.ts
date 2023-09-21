import { DataSource } from 'typeorm';
import { User } from '../models/user.entity';
import { configuration } from '../../config/configuration';

export const userProviders = [
  {
    provide: configuration.users.repository,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
    inject: [configuration.database.dataSource],
  },
];
