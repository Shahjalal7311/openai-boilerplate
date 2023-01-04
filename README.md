# Open AI document
  - https://openai.com/api/

## Usage

Rename the `example.env` file to `.env` or run command in terminal `cp example.env .env`.

Create an account at [OpenAI](https://beta.openai.com/) and Generate an API KEY. Copy the api key and paste it to the `.env` file.

Install the dependencies

```bash
npm install
```

Run server

```bash
npm start
```

For Generate Image: http://localhost:5003/ .   
For Grammar correction: http://localhost:5003/translator/ . 

# API end point is
    - Generate Image: http://localhost:5003/openai/generateimage
    - Grammer Correction: http://localhost:5003/openai/texttranslate
