import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("products").del();

    // Inserts seed entries
    await knex("products").insert([
        { name: "Nhoque quatro queijos", price: 45 },
        { name: "Isca de frango", price: 60 },
        { name: "Tilápia com acaparras", price: 100 },
        { name: "Bolinho de mandioca", price: 75 },
        { name: "Escondidinho de carne de sol", price: 65 },
        { name: "Porção de batatas fritas", price: 40 },
        { name: "Executivo de frango grelhado", price: 36 },
        { name: "Executivo de tilápia grelhada", price: 39 },
        { name: "Caldo de palmito", price: 30 },
        { name: "Refrigerante 350ml", price: 7.5 },
        { name: "Suco de laranja 440ml", price: 10 },    
    ]);
};
