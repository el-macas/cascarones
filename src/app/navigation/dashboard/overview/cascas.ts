export interface Cascaron {
  name: string;
  whatsappNumber: string;
  photo: string;
  text: string;
  proofs?: string[];
}

export const CASCAS: Cascaron[] = [
  {
    name: 'Marion Montenegro',
    whatsappNumber: '+19723583329',
    photo: 'marion-montenegro.jpg',
    text: `
    Secuaz de Carolina Vasquez.
    Se volvió cascaron a raiz de su entrada en el grupo de whatsapp de Carolina Vasquez.
    Tiene miedo de los macas, hace promoción de los 'mm-macas' como intento de reprogramar a los macas o crear
    unos nuevos con quien sabe cuales propositos. Suele enviar PDF's decodificando palabras pero a la vez
    introduciendo programación basura tóxica y embichadora (comunmmente enfermedades y traumas). Ataca a todo
    el que no concuerde con el
    `
  },
  {
    name: 'Nery Marconi',
    whatsappNumber: '+5493537661080',
    photo: 'nery-marconi.jpeg',
    text: `
    Secuaz de Marlon Montenegro.
    Se volvió cascaron a raiz de su entrada en el grupo de whatsapp de Carolina Vasquez.
    Sostiene (falsamente) que los macas son egregores asesinos y que destruyen a la monada si ésta cubre
    sus energias con ellos. También esta a favor de las bacterias alegando que son beneficiosas.`,
    proofs: [
      'nm1.jpg'
    ]
  },
]