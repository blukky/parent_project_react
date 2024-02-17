const grid_reference_organization = [
    { minWidth: 200, id: "id", header: [{ text: "Номер реестровой записи" }, { content: "inputFilter" }] },
    { minWidth: 200, id: "include_at", header: [{ text: "Дата включения организации в Сводный реестр" }], type: "date", dateFormat: "%Y-%m-%d"},
    { minWidth: 200, id: "full_name", header: [{ text: "Полное наименование" }, { content: "inputFilter" }] },
    { minWidth: 200, id: "short_name", header: [{ text: "Сокращенное наименование организации" }, { content: "inputFilter" }] },
    { minWidth: 200, id: "brand_name", header: [{ text: "Фирменное наименование" }, { content: "inputFilter" }] },
    { minWidth: 200, id: "short_name_illegal", header: [{ text: "Сокращенное наименование, не предусмотренное учредительными документами" }, { content: "inputFilter" }]},
    { minWidth: 200, id: "institution_type", header: [{ text: "Тип организации" }, { content: "selectFilter" }] },
    { minWidth: 200, id: "organization_type", header: [{ text: "Тип учреждения" }, { content: "selectFilter" }] },
    { minWidth: 200, id: "iin", header: [{ text: "ИНН организации" }, { content: "inputFilter" }] },
    { minWidth: 200, id: "kpp", header: [{ text: "КПП организации" }, { content: "inputFilter" }]},
    { minWidth: 200, id: "registration_at", header: [{ text: "Дата постановки на учет в ФНС" }], type: "date", dateFormat: "%Y-%m-%d"},
]





export default grid_reference_organization