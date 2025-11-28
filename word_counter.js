function wordCounter(text) {

    const lowerText = text.toLowerCase();

    const wordMap = {};

    const words = lowerText.split(/\W+/);

    for (const word of words) {

        if (word in wordMap) {

            wordMap[word] ++;

        } else {

            wordMap[word] = 1;

        }

    }

    return wordMap;

}

const text = "Hello, hello! How are you? You look well. Well, well, well...";

const result = wordCounter(text);


console.log(result);