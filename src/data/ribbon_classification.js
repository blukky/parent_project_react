const ribbon_classif = [
    {
        "type": "block",
        "id": "fileBlock",
        "title": "Предложения",
        "items": [
            {
                "id": "save",
                "value": "Просмотр",
                "icon": "mdi mdi-magnify",
                "size": "auto"
            },
            {
                "type": "block",
                "direction": "col",
                "items": [
                    {
                        "value": "Добавить",
                        "id": "add",
                        "icon": "mdi mdi-book-plus",
                        "size": "small",
                        "ribbonHeight": "auto"
                    },
                    {
                        "value": "Редактироать",
                        "id": "edit",
                        "icon": "mdi mdi-book-edit",
                        "size": "small",
                        "ribbonHeight": "auto"
                    },
                    {
                        "value": "Печать",
                        "id": "print",
                        "icon": "mdi mdi-printer",
                        "size": "small",
                        "ribbonHeight": "auto"
                    }
                ]
            },

        ]
    },
    {
        "type": "block",
        "id": "views",
        "title": "Режимы просмотра",
        "items": [
            {
                "id": "refresh",
                "value": "Обновить",
                "icon": "mdi mdi-refresh",
                "size": "auto"
            },
            {
                "type": "block",
                "direction": "col",
                "items": [
                    {
                        "type": "block",
                        "direction": "row",
                        "id": "filter_block",
                        "items":
                            [
                                {
                                    "id": "filter",
                                    "value": "Фильтр",
                                    "icon": "mdi mdi-filter",
                                    "size": "small"
                                },
                                {
                                    "id": "delete_filter",
                                    "icon": "mdi mdi-filter-off",
                                    "value": "Сбросить фильтры",
                                    "size": "small"
                                    
                                }
                            ]
                    },
                    {
                        "type": "block",
                        "direction": "row",
                        "items":
                            [
                                {
                                    "type": "tittle",
                                    "value": "Дата ",
                                },
                                {
                                    "type": "tittle",
                                    "value": "с",
                                },
                                {
                                    "type": "datePicker",
                                    "id": "date_from",
                                },
                                {
                                    "type": "tittle",
                                    "value": "по",
                                },
                                {
                                    "id": "date_to",
                                    "type": "datePicker",
                                }
                            ]
                    },
                    {
                        "type": "block",
                        "direction": "row",
                        "items":
                            [
                                {
                                    "type": "tittle",
                                    "value": "Группировка ",
                                },
                                {
                                    "type": "selectButton",
                                    "value": "Отсутствует",
                                    "items": [
                                        {
                                            "value": "Отсутствует"
                                        }
                                    ]
                                },
                            ]
                    }

                ]
            },


        ]
    }
]


export default ribbon_classif