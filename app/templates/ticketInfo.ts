//import {ITours} from "../models/tours";


// указать возвращающий тип
export function initTicketElementTemplate(data:string, i:number) {
    return  `
       <div  data-item-index=${i} class="ticket-block">
           <p>${data}</p>
       </div>
    `
    ;
}