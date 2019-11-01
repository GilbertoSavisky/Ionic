import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
    private config = {
        showSlide: false,
        nome: '',
        userName: ''
    };

    constructor() {

    }

    getConfigData(): any {
        return localStorage.getItem(this.config.nome) || {};
    }

    setConfigData(showSlide?: boolean, nome?: string, userName?: string) {
        const config = {
            showSlide: false,
            nome: '',
            userName
        };

        if (showSlide) {
            config.showSlide = showSlide;
        }

        if (nome) {
            config.nome = nome;
        }

        if (userName) {
            config.userName = userName;
        }

        localStorage.setItem('config', JSON.stringify(config));
    }
}
