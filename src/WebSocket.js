import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

window.Pusher = Pusher;

const echo = new Echo({
  broadcaster: 'pusher',
  key: '60bcc74c6d6e6c18a7aa',
  cluster: 'us3',
  encrypted: false,
});

export default echo;