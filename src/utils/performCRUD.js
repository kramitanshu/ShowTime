// const fs = require('fs');
// const path = require('path');

// // Define a function for CRUD operations
// const performCRUD = async (operation, filePath, data = null) => {
//   switch (operation) {
//     case 'retrieve':
//       return new Promise((resolve, reject) => {
//         fs.readFile(filePath, 'utf8', (err, fileData) => {
//           if (err) {
//             reject(err);
//             return;
//           }
//           resolve(JSON.parse(fileData));
//         });
//       });
//     case 'update':
//       return new Promise((resolve, reject) => {
//         fs.writeFile(filePath, JSON.stringify(data), (err) => {
//           if (err) {
//             reject(err);
//             return;
//           }
//           resolve('File updated successfully');
//         });
//       });
//     case 'search':
//       return new Promise((resolve, reject) => {
//         fs.readFile(filePath, 'utf8', (err, fileData) => {
//           if (err) {
//             reject(err);
//             return;
//           }
//           const parsedData = JSON.parse(fileData);
//           const filteredData = parsedData.filter((item) => {
//             // Implement your search logic here
//             return true; // For demonstration, return all data
//           });
//           resolve(filteredData);
//         });
//       });
//     default:
//       throw new Error('Invalid operation');
//   }
// };

// // Example usage:
// const runExample = async () => {
//   const filePath = path.join(__dirname, 'data.json');

//   try {
//     // Retrieve data from file
//     const retrievedData = await performCRUD('retrieve', filePath);
//     console.log(retrievedData);

//     // Update data in file
//     const newData = { example: 'data' };
//     await performCRUD('update', filePath, newData);

//     // Search data in file
//     const searchData = await performCRUD('search', filePath);
//     console.log(searchData);
//   } catch (error) {
//     console.error('Error:', error.message);
//   }
// };

// // Call the example function
// runExample();
