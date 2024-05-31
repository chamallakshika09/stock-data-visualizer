export function selectRandom(collection: unknown[]) {
  const index = randomIndex(collection.length);
  return collection[index];
}

export function randomIndex(length: number) {
  return Math.round(Math.random() * (length - 1));
}

export const getValidApiKey = (apiKeySet: string) => {
  const apiKeyArray: string[] = apiKeySet.split(',');
  return selectRandom(apiKeyArray);
};
