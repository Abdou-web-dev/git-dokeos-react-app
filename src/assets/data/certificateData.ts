import { RecapType } from "../../interfaces/types";
import {
  getRandomExpDate,
  getRandomGenerationDate,
  getRandomInt_150_1000,
} from "../../utils/generateDates";

// Generating 100 new objects with unique generation and expiration dates
const dynamic_new_data: RecapType["recapData"] = Array.from(
  { length: 100 },
  (_, index) => {
    const randomGenerationDate = getRandomGenerationDate();
    const randomExpDate = getRandomExpDate(randomGenerationDate);

    return {
      id: index + 8, // Assuming IDs start from 7
      certificate: `Certificat ${index + 8}`,
      learner: `Learner ${index + 8}`,
      course: `Course ${index + 8}`,
      generationDate: randomGenerationDate,
      expirationDate: randomExpDate,
    };
  }
);

const static_new_elements: RecapType["recapData"] = [
  {
    id: getRandomInt_150_1000(),
    learner: "Reda Talissi",
    certificate: "Certificat Rust",
    course: "Rust basics",
    generationDate: "2018-01-30",
    expirationDate: "2019-11-30",
  },
  {
    id: getRandomInt_150_1000(),
    learner: "Sara Hanifi",
    certificate: "Certificat C++",
    course: "C++ basics",
    generationDate: "2021-01-30",
    expirationDate: "2022-04-12",
  },
  {
    id: getRandomInt_150_1000(),
    learner: "Anwar Mani",
    certificate: "Certificat C",
    course: "C basics",
    generationDate: "2020-01-30",
    expirationDate: "2024-11-25",
  },
  {
    id: getRandomInt_150_1000(),
    learner: "Ilham batij",
    certificate: "Certificat C#",
    course: "C# basics",
    generationDate: "2000-01-30",
    expirationDate: "2015-11-31",
  },
];

export const certifData: RecapType["recapData"] = [
  {
    id: 1,
    certificate: "Certificat Dokeos",
    learner: "Saski Doe",
    course: "React Basics",
    generationDate: "2022-01-01",
    expirationDate: "2023-01-01",
  },
  {
    id: 2,
    certificate: "Certificat Scrum",
    learner: "Jane Smith",
    course: "JavaScript Fundamentals",
    generationDate: "2021-04-01",
    expirationDate: "2024-08-01",
  },
  {
    id: 3,
    certificate: "Certificat 3",
    learner: "Felix Vercouter",
    course: "Python Fundamentals",
    generationDate: "2019-02-11",
    expirationDate: "2023-02-08",
  },
  {
    id: 4,
    certificate: "Certificat 4",
    learner: "Assil kary",
    course: "Java Fundamentals",
    generationDate: "2015-12-01",
    expirationDate: "2020-02-09",
  },
  {
    id: 5,
    certificate: "Certificat 5",
    learner: "Babil Samad",
    course: "Node Fundamentals",
    generationDate: "2011-02-11",
    expirationDate: "2013-11-05",
  },
  {
    id: 6,
    certificate: "Certificat X",
    learner: "Kanyue Abdel",
    course: ".NET Fundamentals",
    generationDate: "2014-12-01",
    expirationDate: "2020-05-01",
  },
  {
    id: 7,
    certificate: "Certificat Ruby Master",
    learner: "Mariem khay",
    course: "Ruby Fundamentals",
    generationDate: "2014-06-01",
    expirationDate: "2020-11-01",
  },
].concat(dynamic_new_data, static_new_elements);

export const tableHeaders: {
  label: string;
  title: string;
}[] = [
  { label: "certificate", title: "Nom du Certificat" },
  { label: "learner", title: "Apprenant" },
  { label: "course", title: "Formation" },
  { label: "generationDate", title: "Date de génération" },
  { label: "expirationDate", title: "Date d'expriration" },
  { label: "actions", title: "Actions" },
];

// Generating 100 new objects
// ...Array.from({ length: 100 }, (_, index) => ({
//   id: index + 7, // Assuming IDs start from 3 (adjust as needed)
//   certificate: `Certificat ${index + 7}`,
//   learner: `Learner ${index + 7}`,
//   course: `Course ${index + 7}`,
//   generationDate: randomGenerationDate, // You need to replace this with a function to generate a random date
//   expirationDate: randomExpDate,
// })),

// Example usage:
// newData.forEach((item) => {
//   console.log(
//     `Certificat ${item.id}\tLearner ${item.learner}\tCourse ${item.course}\t${item.generationDate}\t${item.expirationDate}`
//   );
// });
