package database

import (
	"database/sql"
	"log"

	_ "github.com/lib/pq"
)

func InitDB() *sql.DB {
	connStr := "user=postgres password=Jeerawat0145 dbname=my-project sslmode=disable port=5432"
	db, err := sql.Open("postgres", connStr)
	if err != nil {
		log.Fatal("Error connecting to the database: ", err)
	}

	if err := db.Ping(); err != nil {
		log.Fatal("Unable to connect to the database: ", err)
	}

	return db
}
