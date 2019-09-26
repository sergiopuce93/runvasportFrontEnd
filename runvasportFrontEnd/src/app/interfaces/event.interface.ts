export interface Event {
    id: number,
    name: string,
    url: string,
    imagen: string,
    sport: string,
    estimatedParticipants: number,   
    limitedParticipants: number,     
    dateIni: Date,
    dateEnd: Date,
    dateIniInscription: Date, 
    dateEndInscription: Date,
    place: string,
    address: string, 
    country: string,
    provincia: string,
    population: string,
    postalCode: number,
    email: string, 
    clasification: number, 
    limitedInscri: number    
}

