// noinspection JSAnnotator

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    // Criando empresas
    const empresa1 = await prisma.empresa.create({
        data: {
            nome: 'Construtora ABC',
            obras: {
                create: [
                    {
                        nome: 'Obra 1',
                        descricao: 'Construção de um prédio comercial.',
                        sensores: {
                            create: [
                                {
                                    nome: 'Sensor de Temperatura 1',
                                    identificador: 'sensor-abc-001',
                                    dados: {
                                        create: [
                                            { temperatura: 23.5, umidade: 45.2 },
                                            { temperatura: 22.1, umidade: 46.7 }
                                        ]
                                    }
                                },
                                {
                                    nome: 'Sensor de Umidade 2',
                                    identificador: 'sensor-abc-002',
                                    dados: {
                                        create: [
                                            { temperatura: 24.3, umidade: 48.0 },
                                            { temperatura: 25.1, umidade: 49.5 }
                                        ]
                                    }
                                }
                            ]
                        }
                    },
                    {
                        nome: 'Obra 2',
                        descricao: 'Reforma de um estádio de futebol.',
                        sensores: {
                            create: [
                                {
                                    nome: 'Sensor de Temperatura 3',
                                    identificador: 'sensor-abc-003',
                                    dados: {
                                        create: [
                                            { temperatura: 30.2, umidade: 50.4 },
                                            { temperatura: 28.7, umidade: 52.1 }
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        }
    });

    const empresa2 = await prisma.empresa.create({
        data: {
            nome: 'Engenharia XYZ',
            obras: {
                create: [
                    {
                        nome: 'Obra 3',
                        descricao: 'Construção de um shopping center.',
                        sensores: {
                            create: [
                                {
                                    nome: 'Sensor de Temperatura 4',
                                    identificador: 'sensor-xyz-001',
                                    dados: {
                                        create: [
                                            { temperatura: 26.0, umidade: 55.1 },
                                            { temperatura: 27.3, umidade: 56.4 }
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        }
    });

    // Criando usuários
    const usuario1 = await prisma.usuario.create({
        data: {
            nome: 'João Silva',
            email: 'joao.silva@empresaabc.com',
            senha: 'senha123',  // Note: A senha deve ser hasheada em um ambiente real
            empresa: { connect: { id: empresa1.id } }
        }
    });

    const usuario2 = await prisma.usuario.create({
        data: {
            nome: 'Maria Oliveira',
            email: 'maria.oliveira@engxyz.com',
            senha: 'senha456',  // Note: A senha deve ser hasheada em um ambiente real
            empresa: { connect: { id: empresa2.id } }
        }
    });

    console.log({ empresa1, empresa2, usuario1, usuario2 });
}

main()
    .then(() => {
        console.log('Dados fictícios populados com sucesso!');
    })
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
