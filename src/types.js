
export type FactorType = {
  title: string,
  description: string,
  direction: string,
  value: number,
};

export type FactorsType = {
  [id: string]: FactorType,
};

export type TipType = {
  title: string,
  description: string,
  estimatedImpact: number,
};

export type TipsType = {
  [id: string]: TipType,
};
