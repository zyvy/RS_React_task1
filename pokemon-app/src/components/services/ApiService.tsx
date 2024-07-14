import {
  AnimeApiResponce,
  AnimeData,
  AnimeSearchResponce,
} from '../types/types';
export async function getAnimeById(id: string): Promise<AnimeData> {
  const url = `https://api.jikan.moe/v4/anime/${id}`;
  const result = await fetch(url);
  const resultJson: AnimeApiResponce = await result.json();
  return resultJson.data;
}
export async function searchAnime(name: string): Promise<AnimeSearchResponce> {
  const url = `https://api.jikan.moe/v4/anime?q=${name}`;
  const result = await fetch(url);
  const resultJson: AnimeSearchResponce = await result.json();
  return resultJson;
}
