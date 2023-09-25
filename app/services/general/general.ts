import {ITours} from "../../models/tours";
import {getTourTemplate} from "../../templates/tours";
import {openModal} from "@services/modal/modalService";









export function initHeaderTitle(title:string, selector:string): void {
    initTopLevelElement('header', title, selector);
}


export function initFooterTitle(title:string, selector:string):void {
    initTopLevelElement('footer', title, selector);
}


export function initTopLevelElement(type:"footer"|"header", title:string, selector:string):void{
    const headerElement:HTMLElement = document.querySelector(type);
    const targetItem:HTMLElement = headerElement.querySelector(selector);
    if (targetItem) {
        targetItem.innerText = title;
    }
}

