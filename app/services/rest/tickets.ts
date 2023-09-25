import {IPostTicketData} from "../../models/ticket/ticket";
import {ITours} from "../../models/tours";


/* - пример использования методов с generic type <T>
  -  запрос на получение информации о туре
 */
export function getTicketById<T>(id:string): Promise<T[]> {
    return fetch('https://62b9e756ff109cd1dc9dae16.mockapi.io/apiv/v1/ticket')
        .then((response) => response.json())
        .then((data:T[]) => {
            return data;
        })
        .catch((error) => {
            console.log(error);
            return [];
        });

}

export function getTicketByTourId<T>(id: string): Promise<T | null> {
    return fetch('https://62b9e756ff109cd1dc9dae16.mockapi.io/apiv/v1/ticket')
        .then((response) => response.json())
        .then((ticketsData: T[]) => {
            if (ticketsData.length <= 0) {
                return null;
            }
            return ticketsData.pop();
        })
        .catch((error) => {
            console.log(error);
            return null;
        });
}


// запрос на на отправку данных - пока не используется

export function postTicketData(postData:IPostTicketData): Promise<{success: boolean}> {
    return fetch('https://62b9e756ff109cd1dc9dae16.mockapi.io/apiv/v1/ticket')
        .then((response) => response.json())
        .then((data: {success: boolean}) => {
            return data;
        });
}

