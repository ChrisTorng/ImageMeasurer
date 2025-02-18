export class StateManager {
    constructor() {
        this.state = {
            currentImage: null,
            measurements: [],
            referencePoints: [],
            currentStep: 0
        };

        this.steps = [
            'upload',
            'perspective',
            'reference',
            'measure'
        ];
    }

    updateState(newState) {
        this.state = { ...this.state, ...newState };
    }

    getCurrentState() {
        return this.state;
    }

    setImage(imageData) {
        this.updateState({ currentImage: imageData });
    }

    nextStep() {
        if (this.state.currentStep < this.steps.length - 1) {
            this.updateState({ 
                currentStep: this.state.currentStep + 1 
            });
        }
    }

    getCurrentStep() {
        return this.steps[this.state.currentStep];
    }
}
