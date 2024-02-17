const sidebar_component = [
    {
        id: "toggle",
        css: "toggle-button",
        icon: "mdi mdi-backburger",
    },
    {
        type: "customHTML",
        id: "userInfo",
        css: "user-info_item",
        html: `<div class='user-info_container'>
                    <div class='user-info_title'>
                        Макет АС
                    </div>
               </div>`

    },
    {
        "id": "lk",
        "value": "Личные данные",
        "icon": "mdi mdi-account",
        "items": [
            {
                "id": "personal_data",
                "value": "Персональные данные",
                "icon": "mdi mdi-account"
            },
            {
                "id": "change_password",
                "value": "Смена пароля",
                "icon": "mdi mdi-key-variant"
            },
            {
                "id": "notification",
                "value": "Оповещение",
                "icon": "mdi mdi-bell"
            }
        ]
    },
    {
        "id": "guide",
        "value": "Справочники",
        "icon": "mdi mdi-book-edit",
        "items": [
            {
                "id": "classification",
                "value": "Классификаторы",
                "icon": "mdi mdi-book"
            },
            {
                "id": "dictionary",
                "value": "Словари",
                "icon": "mdi mdi-list-box"
            },
            {
                "id": "references",
                "value": "Справочники",
                "icon": "mdi mdi-folder"
            }
        ]
    },
    {
        "id": "organization",
        "value": "Организации",
        "icon": "mdi mdi-office-building",
        "items": [
            {
                "id": "reference_organization",
                "value": "Сводный справочник организаций",
                "icon": "mdi mdi-office-building-cog"
            },
            {
                "id": "aliances",
                "value": "Альянсы (объединения)",
                "icon": "mdi mdi-city"
            },
            {
                "id": "payment_method",
                "value": "Платежные системы",
                "icon": "mdi mdi-card-multiple"
            },
            {
                "id": "register_organization",
                "value": "Реестры организаций",
                "icon": "mdi mdi-book",
                "items": [
                    {
                        "id": "book_gos_org",
                        "value": "Книга государственной регистрации кредитных организаций",
                        "icon": "mdi mdi-home-analytics"
                    },
                    {
                        "id": "yur_entity",
                        "value": "Единый государственный реестр юридических лиц",
                        "icon": "mdi mdi-view-list"
                    },
                    {
                        "id": "strah_delo",
                        "value": "Единый государственный реестр субъектов страхового дела",
                        "icon": "mdi mdi-umbrella mdi-rotate-45"
                    },
                    {
                        "id": "pension_fond",
                        "value": "Реестр негосударственных пенсионных фондов",
                        "icon": "mdi mdi-wallet"
                    },
                    {
                        "id": "sro_fr",
                        "value": "Реестр СРО ФР",
                        "icon": "mdi mdi-city"
                    }
                ]
            },
            {
                "id": "rf_bank",
                "value": "Банк России",
                "icon": "mdi mdi-hand-coin",
                "items": [
                    {
                        "id": "management",
                        "value": "Руководство",
                        "icon": "mdi mdi-account-tie"
                    },
                    {
                        "id": "schema",
                        "value": "Структура",
                        "icon": "mdi mdi-car-shift-pattern"
                    },
                    {
                        "id": "main_inspect_br",
                        "value": "Главная инспекция БР",
                        "icon": "mdi mdi-animation-outline"
                    }
                ]
            }
        ]
    },
    {
        "id": "frame",
        "value": "Кадры",
        "icon": "mdi mdi-account-group"
    },
    {
        "id": "offer",
        "value": "Предложения",
        "icon": "mdi mdi-clipboard-list-outline",
        "items": [
            {
                "id": "offer_departament",
                "value": "Предложения департаментов",
                "icon": "mdi mdi-flag"
            },
            {
                "id": "offer_mi",
                "value": "Предложения МИ",
                "icon": "mdi mdi-flag-variant-outline"
            },
            {
                "id": "upload_offer",
                "value": "Загрузка предложений",
                "icon": "mdi mdi-content-save-all"
            }
        ]
    },
    {
        "id": "resource",
        "value": "Планироание ресурсов",
        "icon": "mdi mdi-calendar-clock",
        "items": [
            {
                "id": "busy_employee",
                "value": "Занятость сотрудников",
                "icon": "mdi mdi-calendar-account"
            },
            {
                "id": "security_check",
                "value": "Обеспеченность проверок",
                "icon": "mdi mdi-book-check"
            },
            {
                "id": "workload_departments",
                "value": "Нагрузка подразделений",
                "icon": "mdi mdi-car-shift-pattern"
            }
        ]
    },
    {
        "id": "plan",
        "value": "Планы",
        "icon": "mdi mdi-calendar-month",
        "items": [
            {
                "id": "summary_plan",
                "value": "Сводный план",
                "icon": "mdi mdi-bank"
            },
            {
                "id": "single_plan",
                "value": "Единый план",
                "icon": "mdi mdi-office-building-cog"
            },
            {
                "id": "reconf_plan",
                "value": "Сверка планов",
                "icon": "mdi mdi-checkbox-multiple-marked-outline"
            },
            {
                "id": "coordination_inspection",
                "value": "Координация проверок",
                "icon": "mdi mdi-lock-pattern"
            }
        ]
    },
    {
        "id": "check",
        "value": "Проверки",
        "icon": "mdi mdi-book-check",
        "items": [
            {
                "id": "verify",
                "value": "Проверки",
                "icon": "mdi mdi-bullseye"
            },
            {
                "id": "period_verify",
                "value": "Периодические проверки",
                "icon": "mdi mdi-autorenew"
            },
            {
                "id": "upload_file",
                "value": "Загрузка файлов",
                "icon": "mdi mdi-arrow-down-bold-box"
            }
        ]
    },
    {
        "id": "analytics",
        "value": "Аналитика",
        "icon": "mdi mdi-chart-arc",
        "items": [
            {
                "id": "financial_indicators",
                "value": "Финансовые показатели",
                "icon": "mdi mdi-chart-bar"
            },
            {
                "id": "quality_verify",
                "value": "Качество проверок",
                "icon": "mdi mdi-chart-areaspline-variant"
            },
            {
                "id": "work_extract",
                "value": "Работа с выписками",
                "icon": "mdi mdi-chart-scatter-plot-hexbin"
            },
            {
                "id": "upload_extract",
                "value": "Загрузка выписок",
                "icon": "mdi mdi-arrow-down-bold-box"
            }
        ]
    },
    {
        "id": "administrator",
        "value": "Администрироание",
        "icon": "mdi mdi-cog"
    }
]

export default sidebar_component