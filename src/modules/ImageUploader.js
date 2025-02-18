export class ImageUploader {
    constructor(dropZoneId, fileInputId) {
        this.supportedTypes = ['image/jpeg', 'image/png', 'image/gif'];
        this.imageLoadedCallback = null;
        
        this.dropZone = document.getElementById(dropZoneId);
        this.fileInput = document.getElementById(fileInputId);
        
        this.initializeEventListeners();
    }

    async uploadImage(file) {
        if (!this.supportedTypes.includes(file.type)) {
            throw new Error('不支援的檔案類型');
        }

        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    }

    onImageLoaded(callback) {
        this.imageLoadedCallback = callback;
    }

    initializeEventListeners() {
        this.dropZone?.addEventListener('dragover', (e) => {
            e.preventDefault();
            this.dropZone.classList.add('drag-over');
        });

        this.dropZone?.addEventListener('dragleave', () => {
            this.dropZone.classList.remove('drag-over');
        });

        this.dropZone?.addEventListener('drop', async (e) => {
            e.preventDefault();
            this.dropZone.classList.remove('drag-over');
            const file = e.dataTransfer.files[0];
            if (file) {
                const imageData = await this.uploadImage(file);
                this.imageLoadedCallback?.(imageData);
            }
        });

        this.fileInput?.addEventListener('change', async (e) => {
            const file = e.target.files[0];
            if (file) {
                const imageData = await this.uploadImage(file);
                this.imageLoadedCallback?.(imageData);
            }
        });
    }
}
