const requestAuthorize = new XMLHttpRequest();

// Authorize endpoint
// After the user is authenticated and approves the authorization request, Bynder will redirect the user back with an authorization code which can then be passed to the Token endpoint.

requestAuthorize.open('GET', 'https://private-anon-02f7cdd9bc-bynder.apiary-mock.com/v6/authentication/oauth2/auth?client_id=00000000-0000-0000-0000-000000000000&scope=offline%20asset%3Aread&redirect_uri=https%3A%2F%2Flocalhost%2Fcallback&response_type=code&state=state');

requestAuthorize.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

// requestAuthorize.send();

// Token endpoint (using authorization code)
// The token endpoint requires authorization either in the body or by sending the Authorization header.

const requestToken = new XMLHttpRequest();

requestToken.open('POST', 'https://private-anon-02f7cdd9bc-bynder.apiary-mock.com/v6/authentication/oauth2/token');

requestToken.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
requestToken.setRequestHeader('Origin', 'Allowed domain for cross-domain requests. Only required if any domains were specified in "Set HTTP access control (CORS)" for the OAuth application.');
requestToken.setRequestHeader('Authorization', 'Basic b64(client_id:client_secret)');

requestToken.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

// requestToken.send();

// Retrieve Assets (XMLHttpRequest)

const requestAssets = new XMLHttpRequest();

requestAssets.open('GET', 'https://private-anon-02f7cdd9bc-bynder.apiary-mock.com/api/v4/media/?type=document');

requestAssets.onreadystatechange = function () {
  if (this.readyState === 4) {
    // console.log('Status:', this.status);
    // console.log('Headers:', this.getAllResponseHeaders());
    // console.log('Body:', this.responseText);
    afnDisplayAssets(this.responseText);
  }
};

// requestAssets.send();

// Retrieve Assets (Fetch)

const fetchAssets = new Request('https://private-anon-02f7cdd9bc-bynder.apiary-mock.com/api/v4/media/?type=document', {
  method: 'GET',
});

fetch(fetchAssets)
  .then((response) => response.json())
  .then((results) => afnDisplayAssets(results));

// Display Assets

function afnDisplayAssets(results) {
  const wrapper = document.getElementById('afn-bynder-wrapper');
  const list = document.createElement('ul');
  list.classList.add('afn-doc-list');
  results.forEach(function (result) {
    const name = result.name;
    const link = result.name;
    listItem = document.createElement('li');
    listItem.innerHTML = `<li><a href="#${link}#">${name}</a></li>`;
    list.appendChild(listItem);
    console.log(result);
  });
  wrapper.appendChild(list);
}

// Retrieve Collections

const requestCollections = new XMLHttpRequest();

requestCollections.open('GET', 'https://private-anon-02f7cdd9bc-bynder.apiary-mock.com/api/v4/collections/?limit=&page=&orderBy=&ids=&count=&keyword=&isPublic=&minCount=5');

requestCollections.setRequestHeader('Authorization', 'OAuth 1.0a Authorization Header with both consumer and access token pair OR OAuth 2.0 Bearer access token.');

requestCollections.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

// requestCollections.send();
