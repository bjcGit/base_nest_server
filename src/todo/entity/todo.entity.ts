import {Field, Int, ObjectType} from '@nestjs/graphql'

@ObjectType()
export class Todo {
    @Field( ()=> Int, {name: 'id', nullable:true} )
    id: number;

    @Field( ()=> String, {name: 'description', nullable:true} )
    description: string;

    @Field( ()=> Boolean, {name: 'done', nullable:true} )
    done:boolean = false
}