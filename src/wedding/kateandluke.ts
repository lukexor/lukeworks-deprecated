import Vue from 'vue';

const app = new Vue({
    el: '#app',
    data: {
        currentSection: 'main',
        sections: [{
                id: 'main',
                text: 'Kate & Luke',
                img: 0,
            },
            {
                id: 'wedding',
                text: 'WEDDING',
                img: 1,
            },
            {
                id: 'covid',
                text: 'COVID NEWS',
                img: 1,
            },
            {
                id: 'registry',
                text: 'REGISTRY',
                img: 1,
            },
            {
                id: 'rsvp',
                text: 'RSVP',
                img: 1,
            },
        ],
        currentImage: 0,
        images: [
            '/static/images/wedding/main.jpg',
            '/static/images/wedding/wedding.jpg',
        ],
    },
    methods: {
        toggleMenu: function(): void {
            const links = document.getElementById('links');
            const links_bg = document.getElementById('links-bg');
            if (links && links_bg) {
                if (links.style.display === 'block') {
                    links.style.display = 'none';
                    links_bg.style.display = 'none';
                } else {
                    links.style.display = 'block';
                    links_bg.style.display = 'block';
                }
            }
        },
        navigate: function(event: any) {
            const section = event?.target?.id;
            if (this.currentSection !== section) {
                this.currentSection = section;
                if (section === 'main') {
                    window.location.hash = '';
                } else {
                    window.location.href = `${window.location.origin}#${section}`;
                }
                const menu = document.getElementById('menu');
                if (menu && window.getComputedStyle(menu)['display'] === 'block') {
                    this.toggleMenu();
                }
                const sectionEl = this.sections.find(e => e.id === section);
                if (sectionEl) {
                    this.fadeImg(sectionEl.img);
                }
            }
        },
        changeImage: function(event: any) {
            const img = parseInt(event?.target?.id.replace(/\D/g, ''));
            if (this.currentImage !== img) {
                this.fadeImg(img);
            }
        },
        nextImage: function() {
            this.currentImage = (this.currentImage + 1) % this.images.length;
            this.fadeImg(this.currentImage);
        },
        fadeImg: function(id: number) {
            const oldImage = document.getElementById(`image-${this.currentImage}`);
            if (oldImage) {
                oldImage.classList.remove('visible');
            }
            this.currentImage = id;
            const image = document.getElementById(`image-${id}`);
            if (image) {
                image.classList.add('visible');
                const text = document.getElementById('gallery-text');
                if (text) {
                    text.style.opacity = '1';
                }
            }
        },
        rsvpSubmit: function(event: Event) {
            const submit = document.getElementById('rsvp-submit');
            if (submit) {
                (<HTMLInputElement>submit).disabled = true;
            }

            // Validate input
            const name = <HTMLInputElement>document.getElementById('name');
            const errors = [];
            if (name) {
                name.classList.remove('error-form');
                if (name.value.length === 0) {
                    name.classList.add('error-form');
                    errors.push('Full Name');
                }
            }

            const rsvp = document.querySelector('input[name="rsvp"]:checked');
            const rsvpRadio = document.getElementById('rsvp-radio')
            if (rsvpRadio) {
                rsvpRadio.classList.remove('error-form');
            }
            if (!rsvp) {
                errors.push('RSVP Yes/No');
                if (rsvpRadio) {
                    rsvpRadio.classList.add('error-form');
                }
            }

            // Set Errors
            const rsvpError = document.getElementById('rsvp-error');
            if (rsvpError) {
                if (errors.length > 0) {
                    rsvpError.innerHTML = `Please enter the following fields:<br>\
                        <ul class="error-list">
                        ${errors.map(e => `<li>${e}</li>`).join('')}
                        </ul>
                    `;
                    rsvpError.style.display = 'block';
                    if (submit) {
                        (<HTMLInputElement>submit).disabled = false;
                    }
                    return;
                } else {
                    rsvpError.innerHTML = '';
                    rsvpError.style.display = 'none';
                }
            }

            // Submit RSVP
            const section = document.getElementById('gallery-text-4');

            const url = '/rsvp';
            const request = new XMLHttpRequest();
            request.open('POST', url, true);
            request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

            const error = () => {
                if (section) {
                    section.innerHTML = "\
                      <h1>Uh Oh!</h1>\
                      <p>Unfortunately, an error happened and your RSVP may not have been sent.<br>\
                      We'll look into it as soon as possible so please try again later.</p>\
                    ";
                }
            };

            request.onload = () => {
                // Success
                if (request.status === 200) {
                  if (section) {
                      section.innerHTML = "\
                      <h1>Thank You!</h1>\
                      <p>We look forward to celebrating with you!</p>\
                    ";
                  }
                } else {
                  error();
                }
            };
            request.onerror = error;

            const form = document.getElementById('rsvp-form');
            if (form) {
                const urlencodeFormData = (fd: FormData) => {
                    var s = '';
                    const encode = (s: string) => {
                        return encodeURIComponent(s).replace(/%20/g,'+');
                    }
                    for (const pair of fd.entries()) {
                        if (typeof pair[1] === 'string') {
                            s += (s ? '&' : '') + encode(pair[0]) + '=' + encode(pair[1]);
                        }
                    }
                    return s;
                };
                request.send(urlencodeFormData(new FormData(<HTMLFormElement>form)));
            }
            event.preventDefault();
            return;
        },
    },
    created: function() {
        // Fade in page
        window.addEventListener('load', () => {
            const section = window.location.hash.substr(1);
            if (section.length > 0 && this.sections.find(e => e.id === section)) {
                this.currentSection = section;
                const menu = document.getElementById('menu');
                if (menu && window.getComputedStyle(menu)['display'] === 'block') {
                    this.toggleMenu();
                }
                const sectionEl = this.sections.find(e => e.id === section);
                if (sectionEl) {
                    this.fadeImg(sectionEl.img);
                }
            } else {
                this.fadeImg(0);
            }
        });
    }
});
