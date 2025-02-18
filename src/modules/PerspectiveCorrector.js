export class PerspectiveCorrector {
    constructor() {
        this.points = [];
    }

    addPoint(x, y) {
        if (this.points.length < 4) {
            this.points.push({ x, y });
        }
    }

    correctPerspective(imageData) {
        // TODO: 實作透視校正演算法
        return imageData;
    }
}
