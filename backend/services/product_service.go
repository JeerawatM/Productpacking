package services

import (
	"database/sql"
	"go-backend/models"
	"log"
)

func GetProducts(db *sql.DB) ([]models.Product, error) {
	rows, err := db.Query(`SELECT product_id, product_name, product_height, product_length, product_width, product_time, product_amount, product_weight FROM products`)
	if err != nil {
		log.Println("Error querying products: ", err)
		return nil, err
	}
	defer rows.Close()

	var products []models.Product

	for rows.Next() {
		var product models.Product
		if err := rows.Scan(&product.ProductID, &product.ProductName, &product.ProductHeight, &product.ProductLength, &product.ProductWidth, &product.ProductTime, &product.ProductAmount, &product.ProductWeight); err != nil {
			log.Println("Error scanning product row: ", err)
			return nil, err
		}
		products = append(products, product)
	}

	return products, nil
}

func CreateProduct(db *sql.DB, newProduct *models.Product) error {
    query := `INSERT INTO products (product_name, product_height, product_length, product_width, product_time, product_amount, product_weight, product_userid) 
              VALUES ($1, $2, $3, $4, $5, $6, $7, $8) 
              RETURNING product_id`
    err := db.QueryRow(query, newProduct.ProductName, newProduct.ProductHeight, newProduct.ProductLength, newProduct.ProductWidth, newProduct.ProductTime, newProduct.ProductAmount, newProduct.ProductWeight,
        newProduct.ProductUserId).Scan(&newProduct.ProductID)

    if err != nil {
        log.Println("Error inserting product: ", err)
        return err
    }
    return nil
}

func UpdateProduct(db *sql.DB, updatedProduct *models.Product, productID string) error {
    query := `UPDATE products 
              SET product_name = $1, product_height = $2, product_length = $3, product_width = $4, product_time = $5, product_amount = $6, product_weight = $7, product_userid = $8
              WHERE product_id = $9`
    _, err := db.Exec(query, updatedProduct.ProductName, updatedProduct.ProductHeight, updatedProduct.ProductLength, updatedProduct.ProductWidth,
        updatedProduct.ProductTime, updatedProduct.ProductAmount, updatedProduct.ProductWeight, updatedProduct.ProductUserId, productID)
    if err != nil {
        log.Println("Error updating product: ", err)
        return err
    }
    return nil
}

func DeleteProduct(db *sql.DB, productID string) (int64, error) {
	query := `DELETE FROM products WHERE product_id = $1`
	result, err := db.Exec(query, productID)
	if err != nil {
		log.Println("Error deleting product: ", err)
		return 0, err
	}

	// ตรวจสอบจำนวนแถวที่ถูกลบ
	rowsAffected, err := result.RowsAffected()
	if err != nil {
		log.Println("Error getting rows affected: ", err)
		return 0, err
	}

	return rowsAffected, nil
}
