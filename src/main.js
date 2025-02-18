import { ImageUploader } from './modules/ImageUploader';
import { PerspectiveCorrector } from './modules/PerspectiveCorrector';
import { StateManager } from './modules/StateManager';

document.addEventListener('DOMContentLoaded', () => {
    const state = new StateManager();
    const uploader = new ImageUploader('dropZone', 'fileInput');
    const perspectiveCorrector = new PerspectiveCorrector('perspectiveEditor');

    uploader.onImageLoaded((image) => {
        state.setImage(image);
        state.nextStep();
    });
});
