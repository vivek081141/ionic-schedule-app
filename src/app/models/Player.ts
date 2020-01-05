
export class Player {
    id: string;
    name: string;

    constructor(response: any) {
        this.id = response.id;
        this.name = response.name;
    }
}