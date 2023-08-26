import { Resolver, Query, Float, Int, Args } from '@nestjs/graphql';

@Resolver()
export class HelloworldResolver {

    @Query( () => String, { description: 'Retorna un hola mundo', name: 'Hola' } )
    helloWorld(): string {
        return 'Hola Bryan desde el resolver'
    }

    @Query( () => Float, {name: 'numeroAleatorio'} )
    getRandomNumber(): number {
        return Math.random() * 100
    }

    @Query( () => Int, {name: 'DesdeHasta', description: 'Va de 0 al numero que desee'} )
    getRandomNumberZeroTo( 
        @Args('to', {nullable: true, type: () => Int}) to:number = 6 
        ): number {
        return Math.floor(Math.random() * to) + 1
    }
}
