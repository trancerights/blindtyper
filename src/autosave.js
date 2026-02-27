'use strict';

const textArea = document.querySelector('#textArea');
import * as time from './time.js';

export let latestRestorePoint = null;
export let latestRestorePointHRD = null;

export function cacheData(value) {
  if (value.trim() !== '') {
    const saveData = {
      lastEdited: time.readableTimestamp(),
      contents: value
    };
    const parsedData = JSON.stringify(saveData);
    localStorage.setItem(`draft-${Math.floor(Date.now() / 1000)}`, parsedData);
  }
}

export function checkCachedData() {
  let currentWinner = -Infinity;
  let currentWinnerKey = null;
  let currentWinnerValue = null;

  for (const [key, value] of Object.entries(localStorage)) {
    const numericKey = Number(key.replace(/\D/g, ''));

    if (numericKey >= currentWinner) {
      currentWinner = numericKey;
      currentWinnerKey = key;
      currentWinnerValue = value;
    }
  }

  if (currentWinnerKey) {
    const parsedValue = JSON.parse(currentWinnerValue);
    latestRestorePoint = parsedValue.contents;
    latestRestorePointHRD = parsedValue.lastEdited;
    console.log(`Latest draft found: ${currentWinnerKey} (timestamp: ${latestRestorePointHRD})`);
  } else {
    console.log('No saved drafts found');
  }
}

export function restoreData() {
  textArea.value = latestRestorePoint;
  localStorage.clear();
}

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    setInterval(() => {
      cacheData(textArea.value);
      if (textArea.value.trim() !== '') {
        console.log(`Cached draft at: ${time.readableTimestamp()}`);
      }
      limitDrafts(5);
    }, 5000);
  }, 3000);
});

function limitDrafts(max = 5) {
  const drafts = [];

  for (const [key, value] of Object.entries(localStorage)) {
    if (key.startsWith('draft-')) {
      const timestamp = Number(key.replace(/\D/g, ''));
      drafts.push({ key, timestamp });
    }
  }

  drafts.sort((a, b) => b.timestamp - a.timestamp);

  while (drafts.length > max) {
    const toDelete = drafts.pop();
    localStorage.removeItem(toDelete.key);
  }
}
