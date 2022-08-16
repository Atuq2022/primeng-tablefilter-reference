export interface Region {
  name?: string;
  image?: string;
}

export interface Section {
  id?: number;
  name?: string;
  region?: Region;
}

export interface RiskConsequenceModel {
  id? : string
  AnomalyRegionId? : string
  Region? : string
  RegionLabel? : string
  Section? : string[]
  SectionLabels? : string[]
  //AspectGradeId? : string
  AnomalyId? : string
  //Aspect? : string
  //AspectDescription? : string
  //ConsequenceDescription? : string
  ConsequenceGrade? : number[]
}