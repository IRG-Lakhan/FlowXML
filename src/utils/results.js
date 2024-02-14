export function showResults(results) {

}

// https://www.youtube.com/watch?v=ZnZd6SoboRE
// https://stackoverflow.com/questions/5636375/how-to-create-a-collapsing-tree-table-in-html-css-js
/**
<table id="myTable" class="table table-borderless table-striped table-earning">
  <thead>
    <tr>
      <th>date</th>
      <th>file name</th>
    </tr>
  </thead>
  <tbody id="testBody"></tbody>
</table>
<script>
  const items1 = [
    { date: "10/17/2018", name: "john doe" },
    { date: "10/18/2018", name: "jane doe" },
  ];
  const items2 = [
    { date: "10/17/2019", name: "john doe" },
    { date: "10/18/2019", name: "jane doe" },
  ];
  function loadTableData(items) {
    const table = document.getElementById("testBody");
    items.forEach( item => {
      let row = table.insertRow();
      let date = row.insertCell(0);
      date.innerHTML = item.date;
      let name = row.insertCell(1);
      name.innerHTML = item.name;
    });
  }
  loadTableData(items1);
  loadTableData(items2);
  loadTableData([]);
</script>

 */