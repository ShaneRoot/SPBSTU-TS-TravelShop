import {getTours} from "@rest/tours";
import './assets/styles/main.scss';
import {images} from "@services/img/img";
import {ITours} from "./models/tours";
//@ts-ignore
import {getTourTemplate} from "./templates/tours";
//@ts-ignore
import {openModal} from "@services/modal/modalService";
import {initFooterTitle, initHeaderTitle} from "@services/general/general";



export let  toursDataArray: ITours[] = [];
const imagesStore = images; // ссылка на изображения нужна чтобы webpack формировал изображения в папке dist

// init data
const tourData: Promise<ITours[]> = getTours();

tourData.then((data): void => {
  console.log('call ')
  toursDataArray = data;
  initToursDivElements(data);
});


// init app

/*  - перенести все методы ниже в раздел services (сюда импортировать и вызывать)
-   создать метод initApp который будет здесь вызываться, в теле метода добавить эти имортированные методы
    - Указать в методах возвращающие типы, типы для параметров, в теле функции также указать типы чтобы не было ошибок
*/

 function initToursDivElements(data: ITours[]) {

  if (Array.isArray(data)) {
    const rootElement: Element = document.querySelector('.main-app');
    const tourWrap: HTMLElement = document.createElement('div');

    tourWrap.classList.add('tour-wrap');

    // init click for modal
    initTourElemListener(tourWrap);

    let rootElementData = '';
    data.forEach((el, i) => {
      rootElementData += getTourTemplate(el, i);
    });

    tourWrap.innerHTML = rootElementData;
    rootElement.appendChild(tourWrap);
  }
}

    // @ts-ignore
     function initTourElemListener(tourWrap:HTMLElement):void {
       tourWrap.addEventListener('click', (ev) => {
         const targetItem = ev.target as HTMLElement;
         const parentItem = (targetItem.parentNode as HTMLElement);
         let targetedDiv: HTMLElement = null;

         if (targetItem.hasAttribute('data-tour-item-index')) {
           targetedDiv = targetItem;
         } else if (parentItem.hasAttribute('data-tour-item-index')) {
           targetedDiv = parentItem;
         }

         if (!targetedDiv) {
           return;
         }

         const dataIndex = targetedDiv.getAttribute('data-tour-item-index');
         openModal('order', Number(dataIndex));
       });
     }

     function initApp(): void {
         initHeaderTitle('Туры', 'h1');
         initFooterTitle('Туры по всему миру', 'h2');
       }



