var in_client_id = '27e222348f3b45039110a221da8be367',
    in_client_secret = '8af3b9b5c92b465a890f8ae7e40ae15a',
    in_redirect_uri = 'https://promania.herokuapp.com/auth',
    in_auth_url = 'https://api.instagram.com/oauth/authorize/?client_id='
                  + in_client_id + '&redirect_uri='
                  + in_redirect_uri + '&response_type=code';

var db_user = 'irottweiler',
    db_password = 'Livia1990$',
    db_uri = 'mongodb://'
             + db_user + ':'
             + db_password + '@ds261342.mlab.com:61342/promania';

module.exports = {
  port: process.env.PORT || 3000,
  instagram: {
    client_id: in_client_id,
    client_secret: in_client_secret,
    auth_url: in_auth_url,
    redirect_uri: in_redirect_uri
  }
};


module.exports = {
  port: process.env.PORT || 3000,
  db: {
    uri: db_uri
  },
  instagram: {
    client_id: in_client_id,
    client_secret: in_client_secret,
    auth_url: in_auth_url
  }
};


