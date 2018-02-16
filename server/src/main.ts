import * as http from 'http';
import App from './App';

const port = 3000;
const server = http.createServer(App);

App.set('port', port);

server.listen(port);
server.on('listening', onListening);

function onListening(): void {
  console.log(`Listening on port ` + port);
}