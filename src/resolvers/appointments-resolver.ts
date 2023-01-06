import { Query, Resolver } from "type-graphql";

// Type-graphql gira em torno de decorations
@Resolver()
export class AppointmentsResolver { // Aqui podemos criar todas as querys e as mutations desta determinada resolvers

    @Query()// Trasnforma isso em um query graphql
    async helloworld(){
        return 'Hellow World'
    }
} 