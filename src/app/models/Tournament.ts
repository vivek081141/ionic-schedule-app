
export class Tournament {
    id: string;
    name: string;

    constructor(response: any) {
        this.id = response.id;
        this.name = response.name;
    }
}

export interface ITournament {
    id: string;
    name: string;
}
