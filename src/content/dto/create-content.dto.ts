// src/content/dto/create-content.dto.ts
export class CreateContentDto {
  title: string;
  type: 'movie' | 'series';
  description: string;
 duration?: number; // Only for movies
  seasons?: number; // Only for series
}
