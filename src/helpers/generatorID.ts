

export function generatorId(): string {
 return "id" + Math.random().toString(30).slice(2)
}
export function generatorNumberId(): number {
 return Math.ceil(Math.random() * 100000000000)
}