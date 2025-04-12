/* Giving



Create a basic HTML page.
- Each product should have:

name (string)
price (number)
inStock (boolean)

document.createElement("table") to create a table.
document.createElement("tr") to create a table row. 
document.createElement("td") to create a table cell.

*/

const products = [
    { name: "Laptop", price: 999.99, inStock: true },
    { name: "Smartphone", price: 599.49, inStock: false },
    { name: "Keyboard", price: 49.99, inStock: true },
  ];

  /* for if loop to add dynamically the table to the HTML page 
const table = document.createElement("table"); */

const filterSelect = document.getElementById("stock-filter");


renderTable("all");

//Handle filter change
    filterSelect.addEventListener("change", () => {
      // Make a new function to re-redner the table when the filter change
      renderTable(filterSelect.value);
 });

function renderTable(filter) {
  // To do
}
  // Step 2: Clear the table before rendering new data
  const productTable = document.getElementById("product-table");
  productTable.innerHTML = ""; // Clear existing table

  // Step 3: Create table and header as before
  let table = document.createElement("table");
  let headerRow = document.createElement("tr");

  const headerList = ["Name", "Price", "In Stock"];
  for (let i = 0; i < headerList.length; i++) {
    const header = document.createElement("th");
    const headerName = headerList[i]; // Get value via index of the array
    header.textContent = headerName;
    headerRow.appendChild(header);
  }

  table.appendChild(headerRow);

  // Step 4: Filter products based on the selected filter
  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((product) =>
          filter === "in" ? product.inStock : !product.inStock
        );

  // Step 5: Add filtered products to the table
  for (let i = 0; i < filteredProducts.length; i++) {
    let productRow = document.createElement("tr");

    let productNameCell = document.createElement("td");
    productNameCell.textContent = filteredProducts[i].name;

    let productPriceCell = document.createElement("td");
    productPriceCell.textContent = filteredProducts[i].price;

    let productInStockCell = document.createElement("td");
    productInStockCell.textContent = filteredProducts[i].inStock ? "Yes" : "No";

    productRow.appendChild(productNameCell);
    productRow.appendChild(productPriceCell);
    productRow.appendChild(productInStockCell);

    table.appendChild(productRow);
  }

  // Insert table to the div where id is product-table
  productTable.appendChild(table);
}*/




const filterSelect = document.getElementById("stock-filter");

renderTable("all");

filterSelect.addEventListener("change", () => {
  renderTable(filterSelect.
});

function renderTable(filter) {
  const productTable = document.getElementById("product-table");
  productTable.innerHTML = ""; // Clear existing table

  let table = document.createElement("table");
  let headerRow = document.createElement("tr");
}
