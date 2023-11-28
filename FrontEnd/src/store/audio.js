import { defineStore } from 'pinia';
import audioService from '../services/audioService';

export const useAudioStore = defineStore('audioStore', {
  state: () => ({
    audioURL: '',
  }),
  getters: {
    getAudioValue() {
      return this.audioURL;
    },
  },
  actions: {
    async fetchAudio(fileID) {
      try {
        // const response = await audioService.getAudio('1742BpoFuR4of1iki7XZvCmPiqPnWfc4b')
        const response = await fetch(`http://localhost:8080/api/audio/getAudio/${fileID}`);
  
          // Set the correct MIME type for the audio file
          const mimeType = 'audio/mpeg';
  
          // Create a new Blob with the specified MIME type
          const blob = new Blob([await response.arrayBuffer()], { type: mimeType });
          console.log("ờ kia",blob)
          this.audioURL = URL.createObjectURL(blob)
        console.log("Fetch audio successful");
      } catch (error) {
        console.log("Fetch audio failed:", error);
      }
    },
  },
});