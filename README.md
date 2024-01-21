# collectwire-assessment

Express/TypeScript API to performs operations on matrices in a csv file. 
API endpoints include /echo, /invert, /flatten, /sum, and /multiply.
Validation included are: Check that it is a matrix, check that every element in the matrix are numbers

### Installation

1. Clone the repository:

```bash
git clone https://github.com/darmesah/collectwire-assessment.git
```

2. Navigate to the project directory:

```bash
cd collectwire-accessment
```

3. Install dependencies:

```bash
npm install
```

### Usage

Start the server:

```bash
npm run dev
```

Server is set to run at `http://localhost:8088`.

### The available endpoints are:

- **Echo (POST /echo):** Returns the matrix as a string.
- **Invert (POST /invert):** Returns the inverted matrix as a string.
- **Flatten (POST /flatten):** Returns the matrix as a string of number, each separated by a comma.
- **Sum (POST /sum):** Returns the sum of all elements in the matrix.
- **Multiply (POST /multiply):** Returns the product of all the elements in the matrix.

Helper Functions Include
- bufferData: Reusable function to read the CSV file
- isValidNumsMatrix: Check if the read data is a matrix and all it elements are numbers
- makeNumsArray: Convert the array of elements to an array of numbers (reusable for arithmetical functions)


# Sample request
```bash
curl -F 'file=@src/matrix.csv' "localhost:8088/echo"
```
