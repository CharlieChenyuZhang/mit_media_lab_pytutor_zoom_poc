import { getExploreName } from '../utils/platform';
// FIXME:sdkKey and sdkSecret needs to be replaced with the real values
export const devConfig = {
  sdkKey: 'BjWiRfuKSvmoXHOTSW1K9g',
  sdkSecret: 'cFXPUkh1J4iEluw1TUbNDrUDBfn0uo8AhDcH',
  webEndpoint: 'zoom.us', // zfg use www.zoomgov.com
  topic: 'MIT media lab Zoom PoC',
  name: `${getExploreName()}-${Math.floor(Math.random() * 1000)}`, // user name displayed on screen
  password: '',
  signature: '',
  sessionKey: '',
  userIdentity: '',
  // The user role. 1 to specify host or co-host. 0 to specify participant, Participants can join before the host. The session is started when the first user joins. Be sure to use a number type.
  role: 1
};
