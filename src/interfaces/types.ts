export interface RecapType {
  recapData: {
    id: number;
    certificate: string;
    learner: string;
    course: string;
    generationDate: string;
    expirationDate: string;
  }[];
}
type SortDirection = "asc" | "desc";

export interface tableButtonHeaderType {
  certificate: SortDirection | null;
  learner: SortDirection | null;
  course: SortDirection | null;
  generationDate: SortDirection | null;
  expirationDate: SortDirection | null;
  actions: SortDirection | null;
}
