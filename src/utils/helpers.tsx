import { RecapType } from "../interfaces/types";

// function switchFunction(sortByParam: string | null) {
//   switch (sortByParam) {
//     case "certificate":
//       return compareValue(a.certificate, b.certificate);
//     case "learner":
//       return compareValue(a.learner, b.learner);
//     case "course":
//       return compareValue(a.course, b.course);
//     case "generationDate":
//       return compareValue(a.generationDate, b.generationDate);
//     case "expirationDate":
//       return compareValue(a.expirationDate, b.expirationDate);
//     default:
//       return 0;
//   }
// }
type SortDirection = "asc" | "desc";

export function getSortedData(
  data: RecapType["recapData"],
  sortOrder: SortDirection,
  sortByParam: string | null
) {
  return [...data].sort((a, b) => {
    const compareValue = (valueA: string, valueB: string) => {
      return sortOrder === "asc"
        ? valueA.localeCompare(valueB)
        : valueB.localeCompare(valueA);
    };

    switch (sortByParam) {
      case "certificate":
        return compareValue(a.certificate, b.certificate);
      case "learner":
        return compareValue(a.learner, b.learner);
      case "course":
        return compareValue(a.course, b.course);
      case "generationDate":
        return compareValue(a.generationDate, b.generationDate);
      case "expirationDate":
        return compareValue(a.expirationDate, b.expirationDate);
      default:
        return 0;
    }
  });
}

// prop : tableData={getSortedData(
//   filteredData,
//   sortOrder,
//   sortBy
// ).slice(0, visibleFilteredRows)}
