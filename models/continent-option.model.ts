export default interface ContinentOption {
  id: Continent;
  label: string;
  value: string;
}

export enum Continent {
  all = '_all',
  africa = 'africa',
  europe = 'europe',
  americas = 'americas',
  asia = 'asia',
  oceania = 'oceania',
}
