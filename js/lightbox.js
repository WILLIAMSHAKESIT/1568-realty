import PhotoSwipeLightbox from './photoswipe.js';
        const lightbox = new PhotoSwipeLightbox({
        gallery: '#my-gallery',
        children: 'a',
        initialZoomLevel: 'fit',
        secondaryZoomLevel: 1.5,
        maxZoomLevel: 1,
        pswpModule: () => import('./unpkg.com_photoswipe.js')
        });
        lightbox.on('uiRegister', function() {
            lightbox.pswp.ui.registerElement({
                name: 'custom-caption',
                order: 9,
                isButton: false,
                appendTo: 'root',
                html: 'Caption text',
                onInit: (el, pswp) => {
                lightbox.pswp.on('change', () => {
                    const currSlideElement = lightbox.pswp.currSlide.data.element;
                    let captionHTML = '';
                    if (currSlideElement) {
                    const hiddenCaption = currSlideElement.querySelector('.hidden-caption-content');
                    if (hiddenCaption) {
                        // get caption from element with class hidden-caption-content
                        captionHTML = hiddenCaption.innerHTML;
                    } else {
                        // get caption from alt attribute
                        captionHTML = currSlideElement.querySelector('img').getAttribute('alt');
                    }
                    }
                    el.innerHTML = captionHTML || '';
                });
                }
            });
        });
lightbox.init();