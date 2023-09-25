import {getTicketById, postTicketData} from "@rest/tickets";
import '@myCss'; // добавлена новая ссылка - ссылка ведет на один файл
import '@assets/styles/tickets.scss'
import {initTicketElementTemplate} from "../../templates/ticketInfo";
import {IVipTicket, TicketType, ITicket, IPostTicketData} from "../../models/ticket/ticket";
import {initFooterTitle, initHeaderTitle} from "@services/general/general";
import {IUser} from "../../models/user/user";
import {openModal} from "@services/modal/modalService";


let ticketInstance: TicketType ;
let ticketPostInstance;
const  clientType='custom'

// init main  data
initApp();
registerConfirmButton();

function initApp(): void {
    const ticketData: Promise<IVipTicket[]> = getTicketById<IVipTicket>('someId');
    ticketData
        .then((data): void => {
        ticketInstance = data[0];
        const ticketName = typeof ticketInstance?.name === "string" ? ticketInstance?.name : '';
        initHeaderTitle(ticketName, 'h3');
        initFooterTitle('Туры по всему миру', 'h2');
        initTicketInfo(ticketInstance);
        registerConfirmButton();
    });
}

/*  - перенести все методы ниже в раздел services (сюда импортировать и вызывать)
    - Указать в методах возвращающие типы, в теле функции также указать типы чтобы не было ошибок
*/

function initTicketInfo(ticket: TicketType | IVipTicket) {
    const targetElement = document.querySelector('.ticket-info');

    const ticketDescription = ticket?.description;
    const ticketOperator = ticket?.tourOperator;
    let vipClientType;
    if ("vipStatus" in ticket) {
        vipClientType = ticket.vipStatus;
    }


    const ticketElemsArr: [string, string, string] = [ticketDescription, ticketOperator, vipClientType];
    let ticketElemTemplate;

    ticketElemsArr.forEach((el, i) => {
        ticketElemTemplate+= initTicketElementTemplate(el, i);
    });

    targetElement.innerHTML = ticketElemTemplate;

}

function initUserData() {
const userInfo = document.querySelectorAll('.user-info > p');
let userInfoObj;
    userInfo.forEach((el) => {
    const inputDataName = el.getAttribute('data-name');
    if (inputDataName) {
        const inputElems = el.querySelector('input');
        userInfoObj[inputDataName] = inputElems.value;
    }
    });

    console.log('userInfoObj',userInfoObj)
    return userInfoObj;
}

function initPostData(ticketInstance: IVipTicket) {
    const userData: IUser = initUserData();
    const ticketPostData: IPostTicketData = {
        ticket: ticketInstance,
        user: userData
    }

    postTicketData(ticketPostData)
        .then((data) => {
            if (data.success) {
                openModal('ticketOK', null);
            } else {
                openModal('ticketError', null);
            }
        })
        .catch(() => {
            console.error("Ошибка при отправке")
        })
}
function registerConfirmButton(): void {
    const targetEl = document.getElementById('accept-order-button');
    if (targetEl) {
        targetEl.addEventListener('click', () => {
            initPostData(ticketPostInstance);
        });
    }
}

