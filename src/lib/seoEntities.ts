/**
 * SEO Entity References — Wikipedia/Wikidata URIs for topical authority.
 * Used in JSON-LD `about` and `mentions` properties.
 */

export interface SchemaEntity {
  '@type': 'Thing';
  name: string;
  sameAs: string;
}

export const ENTITY_JEE_MAIN: SchemaEntity = {
  '@type': 'Thing',
  name: 'JEE Main',
  sameAs: 'https://en.wikipedia.org/wiki/Joint_Entrance_Examination_%E2%80%93_Main',
};

export const ENTITY_JEE_ADVANCED: SchemaEntity = {
  '@type': 'Thing',
  name: 'JEE Advanced',
  sameAs: 'https://en.wikipedia.org/wiki/Joint_Entrance_Examination_%E2%80%93_Advanced',
};

export const ENTITY_NEET_UG: SchemaEntity = {
  '@type': 'Thing',
  name: 'NEET-UG',
  sameAs: 'https://en.wikipedia.org/wiki/National_Eligibility_cum_Entrance_Test_(Undergraduate)',
};

export const ENTITY_NTA: SchemaEntity = {
  '@type': 'Thing',
  name: 'National Testing Agency',
  sameAs: 'https://en.wikipedia.org/wiki/National_Testing_Agency',
};

export const ENTITY_IIT: SchemaEntity = {
  '@type': 'Thing',
  name: 'Indian Institutes of Technology',
  sameAs: 'https://en.wikipedia.org/wiki/Indian_Institutes_of_Technology',
};

export const ENTITY_NCERT: SchemaEntity = {
  '@type': 'Thing',
  name: 'NCERT',
  sameAs: 'https://en.wikipedia.org/wiki/National_Council_of_Educational_Research_and_Training',
};

/** Get entities for a given exam type */
export function getExamEntities(exam: 'JEE' | 'NEET'): SchemaEntity[] {
  if (exam === 'JEE') {
    return [ENTITY_JEE_MAIN, ENTITY_JEE_ADVANCED, ENTITY_NTA, ENTITY_IIT];
  }
  return [ENTITY_NEET_UG, ENTITY_NTA, ENTITY_NCERT];
}
