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

                if(next == this.imagesPaths.length) {
                    this.currentImage = 0;
                }
            },
            previousImage() {
                const prev = this.currentImage - 1;
                this.currentImage = prev;

                if(prev < 0) {
                    this.currentImage = this.imagesPaths.length - 1;
                }
            }
        },
        created() {
            const vueObj = this;

            setInterval(() => {
                this.nextImage();
            }, 2000);
        }
    }
);