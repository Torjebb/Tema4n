<template>
  <div class="tablebackground">
    <div class="table">

      <div>
        <input type="text" class="table__input" placeholder="Search" @input="onSearch">
      </div>

      <table>

        <thead>
          <tr>
            <th class="table__header" v-for="(column, index) in columns" v-bind:key="index" v-on:click="sortItems(index)">{{ column }}</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(row, index) in rows" v-bind:key="index">
            <td v-for="(rowItem, itemIndex) in row" v-bind:key="index">{{ rowItem }}</td>
          </tr>
        </tbody>

      </table>
    </div>
  </div>
</template>

<script>

  const performSearch = (rows, term) => {
    const results = rows.filter(
      // fjerne case-sensetive for søk av innhold
      row => row.join(" ").toLowerCase().includes(term.toLowerCase())
    )

    return results;
  }

  export default {
    data() {
      return {
        rawRows: [
          [
            "Torje", "27", "Norway", "Male"
          ],
          [
            "Hans", "25", "Germany", "Male"
          ],
          [
            "Marie", "31", "French", "Female"
          ],
          [
            "Karen", "44", "USA", "Female"
          ],
          [
            "Elizaveta", "34", "Russia", "Female"
          ],
          [
            "Nguyen", "22", "Vietnam", "Male"
          ]
        ],
        rows: [],
        columns: [
          'Name',
          'Age',
          'Country',
          'Gender'
        ],

        sortIndex: null,
        sortDirection: null,
      }
    },

    methods: {
      sortItems(index) {

        // retning, bytter mellom ascending og descending
        if (this.sortIndex === index) {
          switch (this.sortDirection) {
            case null:
              this.sortDirection = 'asc';
              break;
            case 'asc':
              this.sortDirection = 'desc';
              break;
            case 'desc':
              this.sortDirection = null;
              break;
          }
          
        } else {
          this.sortDirection = 'asc'
        }

        if (!this.sortDirection) {
          this.rows = this.rawRows;
          return
        }


        this.sortIndex = index;

        this.rows = this.rows.sort(
          (rowA, rowB) => {
            if (this.sortDirection === 'desc') {
              return rowB[index].localeCompare(rowA[index])
            }
            return rowA[index].localeCompare(rowB[index])
          }
        )
      },

      onSearch(e) {
        const term = e.target.value;

        this.rows = performSearch(this.rawRows, term)
      }

      },
      mounted() {
        this.rows = this.rawRows
      }
  }
</script>

<style>
  .tablebackground {
    background: var(--dblue);
    width: 100vw;
    height: 100vh;
  }

  .table {
    background: var(--blue);
    width: 80vw;
    margin: auto;
    height: 80vh;
  }

  th {
    font-style: normal;
	  font-weight: bold;
	  font-size: 32px;
	  line-height: 37px;
	  letter-spacing: 0.05em;
    color: var(--highlight);
    font-weight: normal;
  }

  td {
    padding: 12px;
    color: var(--highlight);
  }

  tr {
      border-collapse: collapse;
  }

  table, td, th {
    border: 1px solid var(--highlight);
  }

  table {
    width: 70%;
    border-collapse: collapse;
    margin: auto;
  }
  .table__input {
    border: 1px solid var(--highlight);
    margin-top: 12px;
    margin-bottom: 8px;
    padding: 2px;
  }
</style>