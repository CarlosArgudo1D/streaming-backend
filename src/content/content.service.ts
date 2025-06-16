import { Injectable } from '@nestjs/common';
import { contentDb, movieDb, seriesDb } from 'src/prisma/clients';

@Injectable()
export class ContentService {
  async create(data: {
    title: string,
    description: string,
    type: 'movie' | 'series',
    duration?: number,
    seasons?: number,
  }) {
    const content = await contentDb.content.create({
      data: {
        title: data.title,
        description: data.description,
        type: data.type,
      }
    });

    if (data.type === 'movie') {
      await movieDb.movie.create({
        data: {
          contentId: content.id,
          duration: data.duration,
        }
      });
    } else {
      await seriesDb.series.create({
        data: {
          contentId: content.id,
          seasons: data.seasons,
        }
      });
    }

    return content;
  }

  async findAllContents() {
    return contentDb.content.findMany();
  }

  async findMovies() {
    return movieDb.movie.findMany();
  }

  async findSeries() {
    return seriesDb.series.findMany();
  }
}
