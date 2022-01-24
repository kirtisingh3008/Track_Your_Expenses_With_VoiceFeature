import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "./context/context";
import { SpeechProvider, SpeechState, useSpeechContext } from "@speechly/react-client";
import App from './App';
import './index.css';

ReactDOM.render(
    <SpeechProvider appId="db552ac6-b252-47aa-ad80-960bd19498d1" language="en-US">
     <Provider>
     <App/>
     </Provider>
    </SpeechProvider>,
   
document.getElementById('root'));