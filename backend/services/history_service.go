package services

import (
	"database/sql"
	"go-backend/models"
	"log"
)

func GetHistory(db *sql.DB) ([]models.History, error) {
	rows, err := db.Query(`SELECT history_id, history_amount, history_time, history_status FROM gen_history_order`)
	if err != nil {
		log.Println("Error querying history: ", err)
		return nil, err
	}
	defer rows.Close()

	var history []models.History

	for rows.Next() {
		var history1 models.History
		if err := rows.Scan(&history1.HistoryID, &history1.HistoryAmount, &history1.HistoryTime, &history1.HistoryStatus); err != nil {
			log.Println("Error scanning history row: ", err)
			return nil, err
		}
		history = append(history, history1)
	}

	return history, nil
}
func GetHistoryByID(db *sql.DB, historyID string) (models.History, error) {
	query := `
        SELECT 
            ho.history_id,
            ho.history_amount,
            ho.history_time,
            ho.history_status,
            hd.history_del_id,
            hd.history_del_boxsize,
            bd.gen_box_del_id,
            bd.gen_box_del_x,
            bd.gen_box_del_y,
            bd.gen_box_del_z,
            bd.gen_box_product_name,
            bd.gen_box_product_height,
            bd.gen_box_product_length,
            bd.gen_box_product_width,
            bd.gen_box_product_weight
        FROM 
            gen_history_order ho
        LEFT JOIN 
            gen_history_del hd ON ho.history_id = hd.history_id
        LEFT JOIN 
            gen_box_del bd ON hd.history_del_id = bd.history_del_id
        WHERE 
            ho.history_id = $1;
    `

	rows, err := db.Query(query, historyID)
	if err != nil {
		log.Println("Error querying history: ", err)
		return models.History{}, err
	}
	defer rows.Close()

	history := models.History{}
	historyDelsMap := make(map[int]*models.HistoryDel)

	for rows.Next() {
		var (
			historyDelID      int
			historyDelBoxSize string
			genBoxDelID       sql.NullInt64
			genBoxDelX        sql.NullFloat64
			genBoxDelY        sql.NullFloat64
			genBoxDelZ        sql.NullFloat64
			genProductName    sql.NullString
			genProductHeight  sql.NullFloat64
			genProductLength  sql.NullFloat64
			genProductWidth   sql.NullFloat64
			genProductWeight  sql.NullFloat64
		)

		err := rows.Scan(
			&history.HistoryID,
			&history.HistoryAmount,
			&history.HistoryTime,
			&history.HistoryStatus, // เพิ่มตรงนี้
			&historyDelID,
			&historyDelBoxSize,
			&genBoxDelID,
			&genBoxDelX,
			&genBoxDelY,
			&genBoxDelZ,
			&genProductName,
			&genProductHeight,
			&genProductLength,
			&genProductWidth,
			&genProductWeight,
		)
		if err != nil {
			log.Println("Error scanning history detail: ", err)
			return models.History{}, err
		}

		if _, exists := historyDelsMap[historyDelID]; !exists {
			historyDelsMap[historyDelID] = &models.HistoryDel{
				HistoryDelID:      historyDelID,
				HistoryDelBoxSize: historyDelBoxSize,
				GenBoxDels:        []models.GenBoxDel{},
			}
		}

		if genBoxDelID.Valid {
			genBoxDel := models.GenBoxDel{
				GenBoxDelID:   int(genBoxDelID.Int64),
				GenBoxDelName: "",
				GenBoxDelX:    genBoxDelX.Float64,
				GenBoxDelY:    genBoxDelY.Float64,
				GenBoxDelZ:    genBoxDelZ.Float64,
			}

			if genProductName.Valid {
				genBoxDel.GenBoxDelName = genProductName.String
			}
			if genProductHeight.Valid {
				genBoxDel.GenBoxDelHeight = genProductHeight.Float64
			}
			if genProductLength.Valid {
				genBoxDel.GenBoxDelLength = genProductLength.Float64
			}
			if genProductWidth.Valid {
				genBoxDel.GenBoxDelWidth = genProductWidth.Float64
			}
			if genProductWeight.Valid {
				genBoxDel.GenBoxDelWeight = genProductWeight.Float64
			}

			historyDelsMap[historyDelID].GenBoxDels = append(historyDelsMap[historyDelID].GenBoxDels, genBoxDel)
		}
	}

	for _, historyDel := range historyDelsMap {
		history.HistoryDels = append(history.HistoryDels, *historyDel)
	}

	return history, nil
}
func UpdateHistory(db *sql.DB, updatedHistory *models.HistoryOrder, historyID string) error {
	query := `UPDATE gen_history_order 
			  SET history_status = $1
			  WHERE history_id = $2`
	_, err := db.Exec(query, updatedHistory.HistoryStatus, historyID)
	if err != nil {
		log.Println("Error updating history: ", err)
		return err
	}
	return nil
}

// func DeleteHistory(db *sql.DB, historyID string) (int64, error) {
// 	query := `DELETE FROM gen_history_order WHERE history_id = $1`
// 	query2 := `DELETE FROM gen_box_del WHERE history_id = $1`
// 	query3 := `DELETE FROM gen_history_order WHERE history_id = $1`
// 	result, err := db.Exec(query, historyID)
// 	if err != nil {
// 		log.Println("Error deleting history: ", err)
// 		return 0, err
// 	}

// 	rowsAffected, err := result.RowsAffected()
// 	if err != nil {
// 		log.Println("Error getting rows affected: ", err)
// 		return 0, err
// 	}

// 	return rowsAffected, nil
// }
