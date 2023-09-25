export class Modal {
    private readonly id: string;

    public static modals: any[] = [];

    constructor(id = null) {
        const findModal = Modal.modals.find(x => x.id === id);
        if (findModal) {
            Modal.removeById(this.id);
        }

        Modal.modals.push(this);
        console.log('Modal.modal', Modal.modals);
        this.id = id || (Math.random() + Modal.modals.length);
    }

    public open(template: string): void {

        const divWrap = document.createElement("div");
        divWrap.innerHTML = template;
        divWrap.id = this.id;
        divWrap.setAttribute('modal_id', this.id)
        divWrap.classList.add('modal-element');
/*        divWrap.addEventListener('click', this.closeModalHandler);*/
        document.body.appendChild(divWrap);
    }

    public remove() {
        const modalEl = document.getElementById(this.id);
        modalEl.parentNode.removeChild(modalEl);
    }

    public removeModal():void{
        Modal.removeById();
    }

    public static removeById(id: string = null) {
        let modalId = id;

        const findEl: Modal = Modal.modals.find(x => x.id === modalId);
        if (findEl) {
            findEl.remove();
            Modal.modals = Modal.modals.filter((el) => el.id !== modalId);
            } else{
            if (Array.isArray(Modal.modals)){
                const lastEl = Modal.modals.pop();
                if (lastEl){
                    lastEl.remove();
                }
            }
        }
    }

    public static removeAll(){
        if (Array.isArray(Modal.modals)){
            Modal.modals.forEach((el)=>{
                Modal.removeById(el.id);
            });
        }

    }
}

const modal = new Modal();

