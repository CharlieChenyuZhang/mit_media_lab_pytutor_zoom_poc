# Description

This PoC is built on the [Zoom Video SDK for web](https://developers.zoom.us/docs/video-sdk/web/)

<img width="1728" alt="Screenshot 2024-07-22 at 8 49 50 AM" src="https://github.com/user-attachments/assets/38910563-aaee-40e2-ab16-1c3a7da55c4a">


# File explanation

To @parker:

1. If you want to disable the video/screenshare/recording etc. features, you can modify the file `src/feature/video/components/video-footer.tsx`.
2. The style of the video layout is fully customizable. If you want to change them, see the file `src/feature/video/video.scss`
3. On the first page load, the user is joining a zoom session automatically because we called init() in the useEffect. See `src/App.tsx`. This behavior can be changed.
4. If we want to use the zoom's off the shelf `live transcription` feature, the logic is in the file `src/feature/video/components/video-footer.tsx` and stored in the state `const [caption, setCaption] = useState({ text: '', isOver: false });`

## Setup

1. install the dependencies:

   `$ npm install`

2. Open the directory in your code editor.

3. Open the `src/config/dev.ts` file and enter required session values for the variables:

   | Key         | Value Description                                                                           |
   | ----------- | ------------------------------------------------------------------------------------------- |
   | `sdkKey`    | Your Video SDK Key. Required.                                                               |
   | `sdkSecret` | Your Video SDK Secret. Required.                                                            |
   | `topic`     | Required, a session name of your choice or the name of the session you are joining.         |
   | `name`      | Required, a name for the participant.                                                       |
   | `password`  | Required, a session passcode of your choice or the passcode of the session you are joining. |

   Example:

   ```js
   {
     // ...
     sdkKey: 'YOUR_VIDEO_SDK_KEY',
     sdkSecret: 'YOUR_VIDEO_SDK_SECRET',
     topic: 'Cool Cars',
     name: 'user123',
     password: 'abc123'
     // ...
   }
   ```

   > Reminder to not publish this sample app as is. Replace the Video SDK JWT generator with a [backend Video SDK JWT generator](https://developers.zoom.us/docs/video-sdk/auth/#generate-a-video-sdk-jwt) to keep your SDK Secret safe.

4. Save `dev.ts`.

5. Run the app:

   `$ npm start`
