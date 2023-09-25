"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = void 0;
var Modal = /** @class */ (function () {
    function Modal(id) {
        var _this = this;
        if (id === void 0) { id = null; }
        this.closeModalHandler = function (ev) {
            var target = ev.target;
            if (target.classList.contains('close-modal')) {
                _this.remove();
            }
        };
        var findModal = Modal.modals.find(function (el) {
            return el.id === id;
        });
        if (findModal) {
            Modal.removeById(id);
        }
        Modal.modals.push(this);
        this.id = id || (Math.random() + Modal.modals.length).toString();
    }
    Modal.prototype.open = function (template) {
        var divWrap = document.createElement("div");
        divWrap.innerHTML = template;
        divWrap.id = this.id;
        divWrap.setAttribute('modal_id', this.id);
        divWrap.classList.add('modal-element');
        divWrap.addEventListener('click', this.closeModalHandler);
        document.body.appendChild(divWrap);
    };
    Modal.prototype.remove = function () {
        var el = document.getElementById(this.id);
        if (el) {
            el.removeEventListener('click', this.closeModalHandler);
            el.parentNode.removeChild(el);
        }
    };
    ;
    Modal.removeById = function (id) {
        var modalId = id;
        var findEl = Modal.modals.find(function (el) {
            return el.id === modalId;
        });
        if (findEl) {
            findEl.remove();
            Modal.modals = Modal.modals.filter(function (el) {
                return el.id !== modalId;
            });
        }
    };
    Modal.modals = [];
    return Modal;
}());
exports.Modal = Modal;
//# sourceMappingURL=modal.js.map