function search() {
    var searchTerm = document.getElementById('searchInput').value;
    // here perform the search logic, can use an API, a local array, or any other data source to get the search results
    // let's assume we have a hardcoded array of results
    var searchResults = ['Result 1', 'Result 2', 'Result 3']; 
    displayResults(searchResults);
  }
  
  function displayResults(results) {
    var searchResultsDiv = document.getElementById('searchResults');
    searchResultsDiv.innerHTML = '';
    if (results.length === 0) {
      searchResultsDiv.innerHTML = 'No results found';
    } else {
      for (var i = 0; i < results.length; i++) {
        var resultItem = document.createElement('p');
        resultItem.textContent = results[i];
        searchResultsDiv.appendChild(resultItem);
      }
    }
  }