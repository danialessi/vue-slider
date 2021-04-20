var app = new Vue(
    {
        el: '#root',
        data: {
            // images
            currentImage: 0,
            imagesPaths: [
                'img/campagna.jpg',
                'img/cascate.webp',
                'img/fiori.jpeg',
                'img/montagne.webp',
            ],
        },
        methods: {
            nextImage() {
                const next = this.currentImage + 1;
                this.currentImage = next;
            },
            previousImage() {
                const prev = this.currentImage - 1;
                this.currentImage = prev;
            }
        }
    }
)