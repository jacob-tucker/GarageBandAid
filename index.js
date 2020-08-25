/*
 * Copyright 2020 Northwestern Inclusive Technology Lab
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const v11 = require("v11");
const prompt = require('prompt-sync')();

v11.speech.speak("What is your name?", v11.speech.getVoices()[6]);
const name = prompt('What is your name? ');
console.log(name);

v11.speech.speak("Would you like to mute or unmute?", v11.speech.getVoices()[6]);
const muteQuestion = prompt('Would you like to mute or unmute? ');

if(muteQuestion == 'Mute'){
  const garageband = v11.system.getApplicationByName("GarageBand");
  const muteButtons = garageband.getElementsByLabel('Mute');
  muteButtons.forEach((element) => {
    if(element.value == 0){
      element.actions.get('press')();
    }
  })
  v11.speech.speak("You have successfully muted, nice!", v11.speech.getVoices()[6]);
} else if (muteQuestion == 'Unmute'){
  const garageband = v11.system.getApplicationByName("GarageBand");
  const muteButtons = garageband.getElementsByLabel('Mute');
  muteButtons.forEach((element) => {
    if(element.value == 1){
      element.actions.get('press')();
    }
  })
  v11.speech.speak("You have successfully unmuted, nice!", v11.speech.getVoices()[6]);
}

v11.speech.speak("What's going on you guys", v11.speech.getVoices()[6]);
//console.log(v11.system);
v11.start();
