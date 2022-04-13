import "./App.css";
import "@tensorflow/tfjs";
import * as speechCommands from "@tensorflow-models/speech-commands";
import { useState } from "react";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sampleResults = [
    0.9888681769371033, 0.0012213034788146615, 1.005446207709610462, 0.004464114084839821,
  ];
  const labels = ["Background Noise", "Hello", "Potato", "depends"];
  const coolLabels = ["🏜️🏜️🏜️", "💁💁💁", "🥔🥔🥔", "🚃🚃🚃"];

  // Math.max ?

  const findBiggestIndex = (list) => {
    const biggestValue = Math.max(...list);
    const biggestIndex = list.indexOf(biggestValue);

    return biggestIndex;
  };

  console.log(findBiggestIndex(sampleResults));

  const createModel = async () => {
    const URL = "http://localhost:3000/my_model/";
    const checkpointURL = URL + "model.json"; // model topology
    const metadataURL = URL + "metadata.json"; // model metadata

    const recognizer = speechCommands.create(
      "BROWSER_FFT", // fourier transform type, not useful to change
      undefined, // speech commands vocabulary feature, not useful for your models
      checkpointURL,
      metadataURL
    );

    // check that model and metadata are loaded via HTTPS requests.
    await recognizer.ensureModelLoaded();

    return recognizer;
  };

  const recognizerOptions = {
    includeSpectrogram: true, // in case listen should return result.spectrogram
    probabilityThreshold: 0.75,
    invokeCallbackOnNoiseAndUnknown: true,
    overlapFactor: 0.5, // probably want between 0.5 and 0.75. More info in README
  };

  const init = async () => {
    const recognizer = await createModel();
    const classLabels = recognizer.wordLabels(); // get class labels

    // listen() takes two arguments:
    // 1. A callback function that is invoked anytime a word is recognized.
    // 2. A configuration object with adjustable fields
    recognizer.listen((result) => {
      const scores = Array.from(result.scores); // probability of prediction for each class
      console.log(scores, classLabels);
      const newCurrentIndex = findBiggestIndex(scores);
      if (newCurrentIndex) {
        setCurrentIndex(newCurrentIndex);
      }
      // render the probability scores per class
    }, recognizerOptions);

    // Stop the recognition in 5 seconds.
    // setTimeout(() => recognizer.stopListening(), 5000);
  };

  return (
    <div className="App">
      <h1>Super voice to emoji!</h1>
      <button onClick={init}>Start listening</button>
      <p style={{ fontSize: 80 }}>{coolLabels[currentIndex]}</p>
    </div>
  );
}

export default App;
