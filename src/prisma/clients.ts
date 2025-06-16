import { PrismaClient as ContentClient } from '../../prisma/generated/contents';
import { PrismaClient as MovieClient } from '../../prisma/generated/movies';
import { PrismaClient as SeriesClient } from '../../prisma/generated/series';

export const contentDb = new ContentClient();
export const movieDb = new MovieClient();
export const seriesDb = new SeriesClient();
