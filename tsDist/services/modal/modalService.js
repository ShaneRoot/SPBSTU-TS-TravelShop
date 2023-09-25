"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.openModal = void 0;
var modal_1 = require("../../classess/modal");
var index_1 = require("../../index"); // ссылка на массив с данными
// Определить типы для метода (возвращающие и для переменных в теле функции)
function openModal(type, i) {
    var _a;
    var data = index_1.toursDataArray[i];
    var tourId = (_a = data[i]) === null || _a === void 0 ? void 0 : _a.id;
    switch (type) {
        case "order":
            var modalTemplate = "\n      <div> \n      <p data-moda-id=\"tour-modal\" class=\"close-modal\">x</p>\n      <p>".concat(data.name, "</p>\n      <p>").concat(data.description, "</p>\n       \n       <div data-tour-id=").concat(tourId, " class=\"ticket-submit\">\n       <a href=\"/ticket.html\">\u041A\u0443\u043F\u0438\u0442\u044C \u0431\u0438\u043B\u0435\u0442</a>\n</div>\n     </div>\n  ");
            var modal = new modal_1.Modal('tour-modal');
            modal.open(modalTemplate);
            break;
        case 'ticketOK':
            var modalTemplateTicketOk = "\n            <span data-moda-id=\"tour-modal\" class=\"close-modal\">x</span>\n            <p>\n                \u0411\u0438\u043B\u0435\u0442 \u043A\u0443\u043F\u043B\u0435\u043D \u0443\u0441\u043F\u0435\u0448\u043D\u043E\n            </p>\n            ";
            var modalTicketOk = new modal_1.Modal('ticket-ok-modal');
            modalTicketOk.open(modalTemplateTicketOk);
            break;
        case 'ticketError':
            var modalTemplateTicketError = "\n            <span data-moda-id=\"tour-modal\" class=\"close-modal\">x</span>\n            <p>\n               \u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043F\u043E\u043A\u0443\u043F\u043A\u0435 \u0431\u0438\u043B\u0435\u0442\u0430\n            </p>\n            ";
            var modalTicketError = new modal_1.Modal('ticket-error-modal');
            modalTicketError.open(modalTemplateTicketError);
            break;
    }
}
exports.openModal = openModal;
//# sourceMappingURL=modalService.js.map