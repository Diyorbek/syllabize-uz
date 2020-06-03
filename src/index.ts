import { unifyDigrams, splitDigrams } from './transformWord';
import { APOSTROPHE, VOVELS } from './characterCollection';

function findVovelIndices(word: string): number[] {
  const vovelIndices: number[] = [];
  const vovels = new RegExp(`[${VOVELS}]`);
  const wordLength = word.length;

  for (let index = 0; index < wordLength; index++) {
    const char = word[index];

    if (vovels.test(char)) {
      vovelIndices.push(index);
    }
  }

  return vovelIndices;
}

function fragmentize(fragment: string, vovelsIndices: number[]): string[] {
  if (vovelsIndices.length <= 1) {
    return [fragment];
  }

  const syllables: string[] = [];
  const distance = vovelsIndices[1] - vovelsIndices[0];

  const syllableLength =
    vovelsIndices[0] + (distance < 3 ? 1 : distance < 4 ? 2 : 3);

  const syllable = fragment.substr(0, syllableLength);

  syllables.push(syllable);

  const nextVovelsIndices = vovelsIndices
    .slice(1)
    .map((vovelIndex) => vovelIndex - syllable.length);

  const next = fragmentize(fragment.slice(syllableLength), nextVovelsIndices);

  syllables.push(...next);

  return syllables;
}

export function syllabize(word: string): string[] {
  const unifiedWord = unifyDigrams(word);
  const parts = unifiedWord.split(APOSTROPHE);

  const syllabized = parts.map((part, i) => {
    const vovelsIndices = findVovelIndices(part);
    const syllables = fragmentize(part, vovelsIndices);

    if (parts.length > 1 && i !== parts.length - 1) {
      syllables[syllables.length - 1] += APOSTROPHE;
    }

    return syllables;
  });

  return new Array<string>()
    .concat(...syllabized)
    .map((syllable) => splitDigrams(syllable));
}
