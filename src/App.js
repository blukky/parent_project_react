import React from "react";
// import {
//   Layout as LayoutDHX,
//   Sidebar as SidebarDHX,
//   Tabbar as TabbarDHX,
//   Ribbon as RibbonDHX,
//   Grid as GridDHX,
//   Chart as ChartDHX,
//   Toolbar as ToolBarDHX,
//   Form as FormDHX,
//   Tree as TreeDHX,
// } from "dhx-suite";
import layouts from "./data/layout"
import grid_reference_organization from "./data/grid";
import axios from "axios";
import base_url from "./url";
import classif_data from "./data/grid_classif_data";
import * as dhx from "dhx-suite-package"

class App extends React.Component {

  constructor(props) {
    super(props)

    this.tab_mapping = {
      "classification": { name: "Классификация", build: () => this.constructorClassification() },
      "reference_organization": { name: "НФО", build: () => this.constructorReferenceOrganization() },
      "offer_departament": { name: "Предложения департаментов", build: () => this.constructorOfferDepartament() },
      "busy_employee": { name: "Занятость сотрудников", build: () => this.constructorBusyEmployee() },
      "coordination_inspection": { name: "Координация", build: () => this.constructorCoordinationInspection() }
    };


    this.indexTab = 1

    this.attachTab = this.attachTab.bind(this);
    this.constructorClassification = this.constructorClassification.bind(this);
    this.constructorReferenceOrganization = this.constructorReferenceOrganization.bind(this);
    this.constructorOfferDepartament = this.constructorOfferDepartament.bind(this);
    this.constructorBusyEmployee = this.constructorBusyEmployee.bind(this);
    this.constructorCoordinationInspection = this.constructorCoordinationInspection.bind(this);
    this.viewClassificatorDetail = this.viewClassificatorDetail.bind(this);
  }

  componentDidMount() {

    this.layout = new dhx.Layout(this.el, {
      cols: layouts.layout
    })

    this.sidebar = new dhx.Sidebar(null, {
      css: "dhx_widget--border_right",
      width: 250,
      data: [
        {
          id: "toggle",
          css: "toggle-button",
          icon: "mdi mdi-backburger",
        },
        // {
        //   type: "customHTML",
        //   id: "userInfo",
        //   css: "user-info_item",
        //   html: `<div class='user-info_container'>
        //                 <div class='user-info_title'>
        //                     Макет АС
        //                 </div>
        //            </div>`

        // },
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
    });

    this.layout.getCell("sidebar").attach(this.sidebar)

    this.sidebar.events.on("click", (id) => {
      if (id === "toggle") {
        const toggleItem = this.sidebar.data.getItem("toggle");
        this.sidebar.toggle();
        this.layout.getCell("sidebar").toggle()
        if (this.sidebar.config.collapsed) {
          toggleItem.icon = "mdi mdi-menu";
        } else {
          toggleItem.icon = "mdi mdi-backburger";
        }
      } else if (this.tab_mapping[id] !== undefined) {
        this.attachTab(id);
      }
    });

    this.tabbar = new dhx.Tabbar(null, {
      mode: "top",
      css: "dhx_widget--bordered dhx_widget--bg_white",
      width: "100%",
      height: "100%",
      closable: Object.keys(this.tab_mapping),
      views: [
        {
          tab: "Начало",
          html:
            "<div style='padding: 20px' >" +
            "<h2><strong>Интерактивные макеты основных пользовательских интерфейсов АСУ - в вертикальном меню работают следующие пункты:</strong></h2>" +
            "<ul>" +
            // "<li>" +
            // "<strong>Справочники ⇒ Классификаторы</strong> - двойное нажатие в таблице-списке просмотра открывает карточку (таб) просмотра конкретного классификатора" +
            // "</li>" +
            "<li>" +
            "<strong>Организации ⇒ Сводный справочник </strong>- двойное нажатие в таблице-списке просмотра открывает карточку (таб) просмотра конкретной организации." +
            "</li>" +
            // "<li>" +
            // "<strong>Предложения ⇒ Предложения департаментов </strong> (двойное нажатие в таблице-списке просмотра открывает карточку (таб) просмотра конкретного предложения (здесь же реализован пример результата анализа статистических данных на вкладке «Мониторинг»)" +
            // "</li>" +
            // "<li>" +
            // "<strong>Планирование ресурсов ⇒ Занятость сотрудников </strong>(реализован только макет списковой формы)" +
            // "</li>" +
            // "<li>" +
            // "<strong>Планы ⇒ Координация проверок </strong>(реализован только макет списковой формы)" +
            // "</li>" +
            "</ul>" +
            "</div>",
        }
      ],
    });

    this.layout.getCell("main").attach(this.tabbar)

    this.tabbar.events.on("afterClose", (id) => {
      this.indexTab--;
    })
  }




  componentWillUnmount() {
    this.layout && this.layout.destructor();
    this.sidebar && this.sidebar.destructor();
    this.tabbar && this.tabbar.destructor();
  }



  render() {
    return (
      <div className="container" ref={el => (this.el = el)} ></div>
    );
  }



  attachTab(id) {
    if (this.tabbar.getCell(id) === undefined) {
      this.tabbar.addTab({ tab: this.tab_mapping[id]["name"], id: id }, this.indexTab++)
      this.tab_mapping[id].build()
    }
    this.tabbar.setActive(id);
  }

  constructorClassification() {
    const layoutReferenceOrganization = new dhx.Layout(null, {
      rows: layouts.vertical_layout
    });

    const toolbarClassification = new dhx.Toolbar(null, {
      css: "dhx_widget--bordered",
      data: [
        {
          "id": "add",
          "icon": "mdi mdi-plus",
          "value": "Добавить"
        },
        {
          "id": "edit",
          "icon": "mdi mdi-pencil",
          "value": "Изменить"
        },
        {
          "id": "remove",
          "icon": "mdi mdi-close-circle",
          "value": "Удалить"
        },
      ]
    })


    const gridClassification = new dhx.Grid(null, {
      columns: [
        { minWidth: 300, id: "name", header: [{ text: "Наименование классификатора" }, { content: "inputFilter" }] },
        { minWidth: 200, id: "count", header: [{ text: "Всего записей" }] },
        { minWidth: 200, id: "created_at", header: [{ text: "Дата создания" }], type: "date", dateFormat: "%Y-%m-%d" }
      ],
      width: "100%",
      adjust: true,
      autoWidth: true,
      autoHeight: true,
      headerAutoHeight: true,
      tooltip: false,
    })

    gridClassification.data.parse(classif_data)


    gridClassification.events.on("cellDblClick", (row, col) => {
      this.viewClassificatorDetail(row.name);
    })

    layoutReferenceOrganization.getCell("ribbon").attach(toolbarClassification);
    layoutReferenceOrganization.getCell("main").attach(gridClassification);






    this.tabbar.getCell("classification").attach(layoutReferenceOrganization);

  }


  viewClassificatorDetail(id) {

    let data = classif_data.filter((o => o.name === id))[0]

    if (this.tabbar.getCell(`classif_${id}`) === undefined) {
      this.tabbar.addTab({ tab: data.tab, id: `classif_${id}` }, this.indexTab++)
      this.tabbar.config.closable = this.tabbar.config.closable.indexOf(`classif_${id}`) === -1 ? [...this.tabbar.config.closable, `classif_${id}`] : this.tabbar.config.closable
    }
    this.tabbar.setActive(`classif_${id}`);

    const layout = new dhx.Layout(null, {
      rows: [
        {
          id: "main",
          header: data.name
        },
      ]
    })


    const tabbarClassifDetail = new dhx.Tabbar(null, {
      mode: "top",
      css: "dhx_widget--bordered dhx_widget--bg_white",
      width: "100%",
      height: "100%",
      views: [
        { id: "detail", tab: "Общие сведения" },
        { id: "content", tab: "Содержание" },
      ]
    })


    // const layoutDetail = new dhx.Layout(null, {
    //   rows: layouts.vertical_layout,
      
    // })

    // const toolbarDetail = new dhx.Toolbar(null, {
    //   css: "dhx_widget--bordered",
    //   data: [
    //     {
    //       "id": "add",
    //       "icon": "mdi mdi-plus",
    //       "value": "Добавить"
    //     },
    //     {
    //       "id": "edit",
    //       "icon": "mdi mdi-pencil",
    //       "value": "Изменить"
    //     },
    //     {
    //       "id": "remove",
    //       "icon": "mdi mdi-close-circle",
    //       "value": "Удалить"
    //     },
    //   ]
    // })

    // layoutDetail.getCell("ribbon").attach(toolbarDetail)

    const form = new dhx.Form(null, {
      css: "dhx_widget--bordered custom",
      rows: [
        {
          type: "input",
          name: "name",
          label: "Название",
          icon: "dxi-magnify",
          value: data.name
        },
        {
          type: "input",
          name: "count",
          label: "Количество итемов",
          value: data.count
        },
        {
          type: "datepicker",
          name: "datepicker",
          label: "Дата введения",
          dateFormat: "%Y-%m-%d",
          value: data.created_at
        }
      ],
    });

    // layoutDetail.getCell("main").attach(form)


    tabbarClassifDetail.getCell("detail").attach(form)

    const layoutContent = new dhx.Layout(null, {
      rows: layouts.vertical_layout
    })


    const toolbarContent = new dhx.Toolbar(null, {

      css: "dhx_widget--bordered",
      data: [
        {
          "id": "add",
          "icon": "mdi mdi-plus",
          "value": "Добавить"
        },
        {
          "id": "remove",
          "icon": "mdi mdi-close-circle",
          "value": "Удалить"
        },
      ]
    })

    const treeClasif = new dhx.TreeGrid(null, {
      css: "dhx_widget--bg_white custom-icon-tree",
      width: "100vh",
      columns: [
        { id: "kod", header: [{ text: "#" }] },
        { id: "name", header: [{ text: "Наименование" }] },
      ],
      data: data.data,
      width: "100%",
      adjust: true,
      autoWidth: true,
      autoHeight: true,
      headerAutoHeight: true,
      collapsed:true
    })

    layoutContent.getCell("ribbon").attach(toolbarContent)

    layoutContent.getCell("main").attach(treeClasif)

    tabbarClassifDetail.getCell("content").attach(layoutContent)


    layout.getCell("main").attach(tabbarClassifDetail)

    this.tabbar.getCell(`classif_${id}`).attach(layout)



  }

  async constructorReferenceOrganization() {
    const layoutReferenceOrganization = new dhx.Layout(null, {
      rows: [
        {
          id: "ribbon",
        },
        {
          id: "main",
        }
      ]
    });

    const ribbonReferenceOrganization = new dhx.Ribbon(null, {
      css: "dhx_widget--bordered dhx_widget--bg_white",
      data: [
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
                  "value": "Экспорт",
                  "id": "export",
                  "icon": "mdi mdi-export",
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
              "type": "block",
              "direction": "col",
              "items": [
                {
                  "type": "block",
                  "direction": "row",
                  "items":
                    [
                      {
                        "type": "tittle",
                        "value": "Дата регистр.",
                      },
                      {
                        "type": "tittle",
                        "value": "с",
                      },
                      {
                        "type": "datePicker",
                        "id": "date_reg_from",
                      },
                      {
                        "type": "tittle",
                        "value": "по",
                      },
                      {
                        "id": "date_reg_to",
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
                        "value": "Дата постановки",
                      },
                      {
                        "type": "tittle",
                        "value": "с",
                      },
                      {
                        "type": "datePicker",
                        "id": "date_state_from",
                      },
                      {
                        "type": "tittle",
                        "value": "по",
                      },
                      {
                        "id": "date_state_to",
                        "type": "datePicker",
                      }
                    ]
                }
              ]
            },


          ]
        }
      ]
    });


    ribbonReferenceOrganization.events.on("click", (id) => {
      if (id === "refresh") {
        gridReferenceOrganization.data.filter();
        ribbonReferenceOrganization.setState({
          "date_reg_from": "",
          "date_reg_to": "",
          "date_state_from": "",
          "date_state_to": "",
        })
      }
      else if (id === "export") {
        gridReferenceOrganization.export.csv();
      }
    })


    layoutReferenceOrganization.getCell("ribbon").attach(ribbonReferenceOrganization);


    const tabbarReferenceOrganization = new dhx.Tabbar(null, {
      mode: "top",
      css: "dhx_widget--bordered dhx_widget--bg_white",
    })

    tabbarReferenceOrganization.addTab({ tab: "Подконтрольные организации", id: "grid" }, 0);
    tabbarReferenceOrganization.addTab({ tab: "Статистика", id: "statistic" }, 1);


    const chart = new dhx.Chart(null, {
      type: "bar",
      css: "dhx_widget--bordered",
      scales: {
        "bottom": {
          text: "month"
        },
        "left": {
          maxTicks: 1,
          max: 100,
          min: 0
        }
      },
      series: [
        {
          id: "include_at",
          value: "include_at",
          color: "#81C4E8",
          fill: "#81C4E8",
          label: "Количество зарегистрированных компаний",
        },
        {
          id: "registration_at",
          value: "registration_at",
          color: "#AFC4B8",
          fill: "#AFC4B8",
          label: "Количество компаний вставших на учет ФНС",
        }
      ],
      legend: {
        series: ["include_at", "registration_at"],
        halign: "right",
        valign: "top"
      }
    })

    const gridReferenceOrganization = new dhx.Grid(null, {
      columns: grid_reference_organization,
      adjust: true,
      autoWidth: true,
      autoHeight: true,
      headerAutoHeight: true,
      editable: true,
      leftSplit: 1,
      tooltip: false,
    });


    const res = await axios.get(base_url + "api/legal_entities/", {
      params: {
        limit: 50,
        offset: 0
      }
    })

    gridReferenceOrganization.data.parse(res.data.data);


    let data = res.data.data

    const pagination = new dhx.Pagination(null, {
      css: "dhx_widget--bordered dhx_widget--no-border_top",
      data: gridReferenceOrganization.data,
      pageSize: 50
    })



    async function getData(data, count) {
      function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
      }

      let current = 50
      while (current < count - 50) {
        try {
          const res = await axios.get(base_url + "api/legal_entities/", {
            params: {
              limit: 50,
              offset: current
            }
          })
          data = [...data, ...res.data.data]
          gridReferenceOrganization.data.parse(data)
          pagination.data.parse(data)
          current += 50
          await delay(300);
        } catch {
          console.log('====================================');
          console.log("error");
          console.log('====================================');
        }

      }

    }

    getData(data, res.data.count);

    const layoutGrid = new dhx.Layout(null, {
      rows: [
        {
          id: "grid"
        },
        {
          id: "pagination"
        }
      ]
    })

    layoutGrid.getCell("grid").attach(gridReferenceOrganization);
    layoutGrid.getCell("pagination").attach(pagination);


    function getCountDate(field, year) {
      return res.data.data.filter((obj) => (new Date(Date.parse(obj[field]))).getFullYear() === year).length
    }

    chart.data.parse([
      { month: "2015", "include_at": getCountDate("include_at", 2015), "registration_at": getCountDate("registration_at", 2015) },
      { month: "2016", "include_at": getCountDate("include_at", 2016), "registration_at": getCountDate("registration_at", 2016) },
      { month: "2017", "include_at": getCountDate("include_at", 2017), "registration_at": getCountDate("registration_at", 2017) },
      { month: "2018", "include_at": getCountDate("include_at", 2018), "registration_at": getCountDate("registration_at", 2018) },
      { month: "2019", "include_at": getCountDate("include_at", 2019), "registration_at": getCountDate("registration_at", 2019) },
      { month: "2020", "include_at": getCountDate("include_at", 2020), "registration_at": getCountDate("registration_at", 2020) },
    ])


    // chart.config.scales.left.max = Math.max(...chart.data.map(o => o.organization))





    ribbonReferenceOrganization.events.on("inputChange", (id, val) => {
      var inputs = ribbonReferenceOrganization.getState();

      const getDate = (val) => {
        const parts = val.split("/");

        // Преобразуем строки в числа
        const day = parseInt(parts[0], 10); // день
        const month = parseInt(parts[1], 10); // месяц
        const year = parseInt(parts[2], 10); // год

        // Создаем объект Date
        return new Date(year + 2000, month - 1, day);
      }

      gridReferenceOrganization.data.filter((item) => {
        const include_at = Date.parse(item.include_at)
        const registration_at = Date.parse(item.registration_at)
        if (inputs.date_reg_from !== undefined) {
          let date_reg_from = getDate(inputs.date_reg_from);
          if (date_reg_from > include_at) return;
        }
        if (inputs.date_reg_to !== undefined) {
          let date_reg_to = getDate(inputs.date_reg_to);
          if (date_reg_to < include_at) return;
        }
        if (inputs.date_state_from !== undefined) {
          let date_state_from = getDate(inputs.date_state_from);
          if (date_state_from > registration_at) return;
        }
        if (inputs.date_state_to !== undefined) {
          let date_state_to = getDate(inputs.date_state_to);
          if (date_state_to < registration_at) return;
        }

        return item
      })



    })







    tabbarReferenceOrganization.getCell("grid").attach(layoutGrid);
    tabbarReferenceOrganization.getCell("statistic").attach(chart);

    layoutReferenceOrganization.getCell("main").attach(tabbarReferenceOrganization);

    this.tabbar.getCell("reference_organization").attach(layoutReferenceOrganization);

  }

  constructorOfferDepartament() {

  }

  constructorBusyEmployee() {

  }

  constructorCoordinationInspection() {

  }

}

export default App;
