export type MatchData = {
    petId: string
    action: 'love' | 'skip'
}

export type Pet = {
    id: string
    name: string
    photoUrl: string
    dateOfBirth: Date
}
