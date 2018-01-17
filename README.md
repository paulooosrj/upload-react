## How to use

First, clone the repo.

```bash
$ git clone https://github.com/PaulaoDev/upload-react.git <yourAppName>
$ cd <yourAppName>
```

Third, install the dependencies.

```bash
$ npm install
```

Config cloudinary
- Create account free [Cloudinary](https://cloudinary.com/signup).

*Change file:* **server/http.js**
```javascript
  cloudinary.config({ 
      cloud_name: 'CLOUD CONFIG NAME', 
      api_key: 'CLOUD CONFIG KEY', 
      api_secret: 'CLOUD CONFIG SECRET' 
  });
```

Next, launch the app.

```bash
$ npm start
```

Now you should see a new browser window/tab opening and in http://localhost.

## License

MIT
