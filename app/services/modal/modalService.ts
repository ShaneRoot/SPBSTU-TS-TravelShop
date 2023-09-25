import {ITours} from "../../models/tours";
import {Modal} from "../../classess/modal";
import {toursDataArray} from "../../index"; // ссылка на массив с данными

export type ModalType = 'order' | 'ticketOK' | 'ticketError';
// Определить типы для метода (возвращающие и для переменных в теле функции)

export function openModal(type: ModalType, i: number) {
    const data = toursDataArray[i];
    const tourId = data[i]?.id;

    let modalInfo = {}
    switch (type) {
        case "order":
            const modalTemplate = `
      <div> 
      <p data-moda-id="tour-modal" class="close-modal">x</p>
      <p>${data.name}</p>
      <p>${data.description}</p>
       
       <div data-tour-id=${tourId} class="ticket-submit">
       <a href="ticket.html">Купить билет</a>
</div>
     </div>
  `
            const modal = new Modal('tour-modal');
            modal.open(modalTemplate);
            break;

        case 'ticketOK':
            const modalTemplateTicketOk = `
            <span data-moda-id="tour-modal" class="close-modal">x</span>
            <p>
                Билет куплен успешно
            </p>
            `;
            const modalTicketOk = new Modal('ticket-ok-modal');
            modalTicketOk.open(modalTemplateTicketOk);
            break
        case 'ticketError':
            const modalTemplateTicketError = `
            <span data-moda-id="tour-modal" class="close-modal">x</span>
            <p>
               Ошибка при покупке билета
            </p>
            `;
            const modalTicketError = new Modal('ticket-error-modal');
            modalTicketError.open(modalTemplateTicketError);
            break

    }
}




