#include <string>
#include <iostream>
#include <stdio.h>
#include <stdlib.h>
#include <sqlite3.h>

static int callback(void *NotUsed, int argc, char **argv, char **azColName) {
   int i;
   for(i = 0; i<argc; i++) {
      printf("%s = %s\n", azColName[i], argv[i] ? argv[i] : "NULL");
   }
   printf("\n");
   return 0;
}

void insert(char *dbAddress, const char *sql) {
  sqlite3 *db;
  char *zErrMsg = 0;
  int rc;

  /* Open database */
  rc = sqlite3_open(dbAddress, &db);

  if( rc ) {
     fprintf(stderr, "Can't open database: %s\n", sqlite3_errmsg(db));
     return;
  } else {
     fprintf(stderr, "Opened database successfully\n");
  }

  /* Execute SQL statement */
  rc = sqlite3_exec(db, sql, callback, 0, &zErrMsg);

  if( rc != SQLITE_OK ){
     fprintf(stderr, "SQL error: %s\n", zErrMsg);
     sqlite3_free(zErrMsg);
  } else {
     fprintf(stdout, "Records created successfully\n");
  }
  sqlite3_close(db);
}

std::string sqlQuery(int inOut, int adultChild, std::string imageUrl) {
  return ((std::string)"INSERT INTO pedestrian (inOut, adultChild, imageUrl, createdAt, updatedAt)" + " VALUES (" + std::to_string(inOut) + ", " + std::to_string(adultChild) +
  ", '" + imageUrl + "', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP );");
}

int main(int argc, char* argv[]) {
  std::string sql;
  /* Create SQL statement */
  sql = sqlQuery(0, 1, "imagepath.jpg");
  std::cout << sql << std::endl;
  const char * c = sql.c_str();
  insert("../database.sqlite", c);
  return 0;
}
