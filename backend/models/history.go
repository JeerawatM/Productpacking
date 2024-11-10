package models

import (
	"time"
)

type HistoryStatusEnum string

const (
	Packed   HistoryStatusEnum = "Packed"
	Unpacked HistoryStatusEnum = "Unpacked"
)

type HistoryOrder struct {
	BoxName       string
	Products      []Product
	HistoryStatus HistoryStatusEnum `json:"history_status"`
}
type HistoryDel struct {
	HistoryDelID      int         `json:"history_del_id"`
	HistoryDelBoxSize string      `json:"history_del_boxsize"`
	GenBoxDels        []GenBoxDel `json:"gen_box_dels"`
}

type GenBoxDel struct {
	GenBoxDelID     int     `json:"gen_box_del_id"`
	GenBoxDelName   string  `json:"gen_box_product_name"`
	GenBoxDelHeight float64 `json:"gen_box_product_height"`
	GenBoxDelLength float64 `json:"gen_box_product_length"`
	GenBoxDelWidth  float64 `json:"gen_box_product_width"`
	GenBoxDelWeight float64 `json:"gen_box_product_weight"`
	GenBoxDelX      float64 `json:"gen_box_del_x"`
	GenBoxDelY      float64 `json:"gen_box_del_y"`
	GenBoxDelZ      float64 `json:"gen_box_del_z"`
}

type History struct {
	HistoryID     int          `json:"history_id"`
	HistoryAmount int          `json:"history_amount"`
	HistoryTime   time.Time    `json:"history_time"`
	HistoryStatus HistoryStatusEnum `json:"history_status"`
	HistoryDels   []HistoryDel `json:"history_dels"`
	
}
