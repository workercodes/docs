---
title: SQL
description: 'Full relational database'
---

### Introduction

Worker SQL is a relational SQL database, but it requires a different way of organizing your data. A much smaller sacrifice than other new database technologies. It requires a slightly different way of thinking, but is much more powerful than Key/Value databases or document stores. It is both familiar and new.

Worker SQL for storing or managing the data in databases that can be queried using a variant of SQL like creating databases, opening the transaction, creating tables, inserting values to tables, deleting values, and reading data.

### Quick Start

A file `content/home.yaml`:

```bash
npm i -g @wkr/db
db-quickstart
```


#### Example
Will be transformed into:

```javascript
import { DbConnect } from '@wkr/db'
 
const db = new DbConnect({
  name: 'sql.mysite.com',
})
 
async function findByName(name) {
  const resp = await db.submit({
    statement: 'SELECT * FROM users WHERE name = ?',
    arguments: [ name ],
    cacheTtl: 60
  })
 
  if(!resp.ok) {
    return new Error('fail to find user.')
  }
 
  const users = await resp.json()
 
  return users[0].name
}
 
findByName('Matthew').then(name => console.log(name))
```


## Migration
Migration is a simple schema migration library using user_version instead of an SQL table to maintain the current schema version.
Just define a set of SQL statements. Just add more SQL statement to change the schema.
- migrations with multiple SQL statements
- use of lazy_static
- migrations to previous versions (downward migrations)

### Executing migration:
Here, we define SQL statements to run with Migrations::new and run these (if necessary) with .to_latest().
```javascript
// 1️⃣ Define migrations
let migrations = Migrations::new([
    M::up("CREATE TABLE friend(name TEXT NOT NULL);"),
    // In the future, add more migrations here:
    M::up("ALTER TABLE friend ADD COLUMN email TEXT;"),
    // This migration can be reverted
    M::up("CREATE TABLE animal(name TEXT);")
    .down("DROP TABLE animal;")

    // In the future, if the need to change the schema arises, put
    // migrations here, like so:
    M::up("CREATE INDEX UX_friend_email ON friend(email);"),
    // M::up("CREATE INDEX UX_friend_name ON friend(name);"),
    ]);

let conn = Connection.open_in_memory().unwrap();

// 2️⃣ Update the database schema, atomically
migrations.to_latest(conn).unwrap();
```


## Queries

### Executing queries:
```javascript
const query = `SELECT * FROM ROOT`;
const res = await client.queryDocuments<Person>({ query });
const results = await res.json();
```


### Query with parameters

A file `content/home.yaml`:

```javascript
const query = `SELECT * FROM ROOT x WHERE x.id = @id`;
const parameters: QueryParameter[] = [{ name: '@id', value: 'xyz' }];
const res = await client.queryDocuments({ query, parameters });
const results = await res.json();
```

### INSERT Operation:

To create entries into the table as follows −
```javascript
var gfgDb = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);  

gfgDb.transaction(function (tx) {  
  tx.executeSql('CREATE TABLE IF NOT EXISTS CLASS (id unique, class)');  
  tx.executeSql('INSERT INTO CLASS (id, class) VALUES (1, "First")');  
  tx.executeSql('INSERT INTO CLASS (id, class) VALUES (2, "Second")');  
}); 
```

The second argument to executeSql maps field data to the query, like so:
```javascript
var id="1";
var text="First";

tx.executeSql('INSERT INTO CLASS (id, text) VALUES (?, ?)', [id, text]);
```
Here, .id and text are external variables, and executeSql maps each item in the array argument to the “?”s.

### Populate query metrics

A file `content/home.yaml`:

```javascript
const query = `SELECT * FROM ROOT`;
const res = await client.queryDocuments({ query, populateMetrics: true });
const metrics = res.headers.get('x-ms-documentdb-query-metrics');
```