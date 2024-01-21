// MAIN FUNCTIONS

export const displayMatrix = (csvFile: string | undefined): string => {
  return bufferData(csvFile).csvFile;
};

export const invertMatrix = (csvFile: string | undefined): string => {
  const matrix: string[][] = bufferData(csvFile).csvData;

  const invertedMatrix = matrix[0].map((_, columnIndex) =>
    matrix.map((row) => row[columnIndex])
  );

  const invertedMatrixString = invertedMatrix
    .map((row) => row.join(","))
    .join("\n");

  return invertedMatrixString;
};

export const flattenMatrix = (csvFile: string | undefined) => {
  const matrixData = bufferData(csvFile).csvFile;

  const rowData = matrixData!.split("\n");
  const commaSeparation = rowData.join(",");
  return commaSeparation;
};

export const sumMatrix = (csvFile: string | undefined) => {
  const commaSeparatedData = flattenMatrix(csvFile);

  const numsArray = makeNumsArray(commaSeparatedData);

  const sum = numsArray.reduce((acc, val) => acc + val, 0);
  return sum.toString();
};

export const multiplyMatrix = (csvFile: string | undefined) => {
  const commaSeparatedData = flattenMatrix(csvFile);

  const numsArray = makeNumsArray(commaSeparatedData);

  const multiply = numsArray.reduce((acc, val) => acc * val, 1);
  return multiply.toString();
};

// HELPER FUNCTIONS

export const bufferData = (csvFile: string | undefined) => {
  if (!csvFile) {
    throw new Error("No file uploaded, upload a CSV file");
  }

  const csvData: any[] = csvFile
    .toString()
    .split("\n")
    .map((line) => line.split(","));

  if (!isValidNumsMatrix(csvData)) {
    throw new Error("Invalid matrix format in the CSV file.");
  }

  return { csvFile, csvData };
};

export const isValidNumsMatrix = (matrix: string[][]): boolean => {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return false;
  }

  return matrix.every((row) => row.every((value) => !isNaN(Number(value))));
};

const makeNumsArray = (data: string) => {
  const numsArray = data.split(",").map((value) => +value);

  return numsArray;
};
