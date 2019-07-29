const sim = {
    nombre: '',
    edad: '',
    ciudad: '',
    profesion: '',
    curiosidad: '',
    imagen: '',
    hambre: 8,
    energia: 8,
    dinero: 8,
    felicidad: 8,

    dormir() {
        this.energia += 5;
        this.hambre -= 3;
        this.limitarEstados();
    },
    morfar() {
        this.energia += 4;
        this.hambre += 5;
        this.limitarEstados();
    },
    laburar() {
        this.felicidad -= 5;
        this.hambre -= 3;
        this.dinero += 5;
        this.limitarEstados();
    },
    salir() {
        this.dinero -= 5;
        this.energia -= 3;
        this.hambre -= 4;
        this.limitarEstados();
    },
    ejercitar() {
        this.energia += 3;
        this.hambre -= 4;
        this.limitarEstados();
    },
    viciar() {
        this.felicidad += 6;
        this.hambre -= 2;
        this.limitarEstados();
    },
    limitarEstados() {
        const estados = ['hambre', 'energia', 'dinero', 'felicidad']
        for (const estado of estados) {
            if (this[estado] >= 10) {
                this[estado] = 10;
            }
            if (this[estado] <= 0) {
                this[estado] = 0;
            }
        }
    }
}

const next = document.getElementById('siguiente');
const prev = document.getElementById('anterior');
const name = document.getElementById('nombre');
const age = document.getElementById('edad');
const city = document.getElementById('ciudad');
const job = document.getElementById('profesion');
const curiosity = document.getElementById('curiosidad');
const picture = document.getElementById('imagen');

const character1 = Object.assign({}, sim, {
    nombre: 'Lisa',
    edad: '28',
    ciudad: 'Capital Federal',
    profesion: 'Programadora',
    curiosidad: 'Crack en JS',
    imagen: 'character.png',
});

const character2 = Object.assign({}, sim, {
    nombre: 'Nora',
    edad: '29',
    ciudad: 'La Plata',
    profesion: 'Bailarina',
    curiosidad: 'Sabe rapear',
    imagen: 'character_2.png',
});

const character3 = Object.assign({}, sim, {
    nombre: 'Sandra',
    edad: '34',
    ciudad: 'Pilar',
    profesion: 'Veterinaria',
    curiosidad: 'Ama los cosplay',
    imagen: 'character_3.png',
});

const character4 = Object.assign({}, sim, {
    nombre: 'Noelia',
    edad: '32',
    ciudad: 'Capital Federal',
    profesion: 'Psicóloga',
    curiosidad: 'Canta ópera',
    imagen: 'character_4.png',
});

const character5 = Object.assign({}, sim, {
    nombre: 'Pilar',
    edad: '33',
    ciudad: 'Rosario',
    profesion: 'Profesora',
    curiosidad: 'Le encanta la filosofía',
    imagen: 'character_5.png',
});

const character6 = Object.assign({}, sim, {
    nombre: 'Florencia',
    edad: '28',
    ciudad: 'Capital Federal',
    profesion: 'Programadora',
    curiosidad: 'Experta en violín',
    imagen: 'character_6.png',
});

const sims = [character1, character2, character3, character4, character5, character6];