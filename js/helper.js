const get_request = function(path, cb) {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      cb(this);
    }
  };
  xhttp.open("GET", path, true);
  xhttp.send();
}

const get_pawnimal = function(address, format) {

    let path = 'https://pawnimal.paw.digital/api/v1/nano?address='+address;
    path += '&format='+format;
    path += '&size=128';
    path += '&outline=true';
    path += '&outline_color=black';
    path += '&svc=pawplinko.somenano.com';

    return path;
}

const load_pawnimal = function(address, cb) {
  const path = get_pawnimal(address);
  get_request(path, function(data) {
    if (data.response) {
      cb(data.response);
    }
  });
}