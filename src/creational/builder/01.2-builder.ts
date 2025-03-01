/**
 * ! Patrón Builder:
 * Es un patrón de diseño creacional que nos permite construir objetos complejos
 * paso a paso.
 *
 * El patrón nos permite producir distintos tipos y representaciones
 * de un objeto empleando el mismo código de construcción.
 *
 * * Es útil cuando necesitamos construir un objeto complejo con muchas partes
 * * y queremos que el proceso de construcción sea independiente de las partes
 * * que lo componen.
 */

import colors from "colors";

colors.setTheme( {} );

class QueryBuilder {
  private table: string;
  private fields: string[] = [];
  private conditions: string[] = [];
  private orderFields: string[] = [];
  private limitCount?: number;

  constructor ( table: string ) {
    this.table = table;
  }

  select ( ...fields: string[] ): QueryBuilder {
    this.fields = fields.length > 0? fields : ["*"];
    return this;
  }

  where ( condition: string ): QueryBuilder {
    this.conditions.push( condition );
    return this;
  }

  orderBy ( field: string, direction: "ASC" | "DESC" = "ASC" ): QueryBuilder {
    this.orderFields.push( field );
    this.orderFields.push( direction );
    return this;
  }

  limit ( count: number ): QueryBuilder {
    this.limitCount = count;
    return this;
  }

  execute (): string {
    // Select id, name, email from users where age > 18 and country = 'Cri' order by name ASC limit 10;
    let query: string = `Select ${this.fields.join( ", " )} from ${this.table} `;
    query += this.conditions.length > 0 && `where ${this.conditions.join( " and " )}`;
    query += this.orderFields.length > 0 && ` order by ${this.orderFields.join( " " )}`;
    query += this.limitCount && ` limit ${this.limitCount}`;
    query += ";";


    return query;

  }
}

function main () {
  const usersQuery = new QueryBuilder( "users" )
    .select( "id", "name", "email" )
    .where( "age > 18" )
    .where( "country = 'Cri'" ) // Esto debe de hacer una condición AND
    .orderBy( "name", "ASC" )
    .limit( 10 )
    .execute();

  console.log( "Consulta:\n".red );
  console.log( usersQuery );
}

main();
