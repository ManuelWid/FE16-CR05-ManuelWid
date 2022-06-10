const animals: {[index: string]: any}[] = [];
const targetDiv = document.getElementById("main-content") as HTMLElement;

const sortTarget = document.getElementById("sortNavTarget") as HTMLElement;
sortTarget.innerHTML = '<i class="fa-solid fa-arrow-down-wide-short"></i>';

const sortNav = document.getElementById("sortNav") as HTMLElement;
sortNav.addEventListener("click", () => sortAnimals(animals));
let sortStatus: boolean = false;

class Animal{
    kind: string;
    name: string;
    gender: string;
    size: number;
    age: number;
    vaccine: boolean;
    image: string;

    constructor(kind: string,name: string, gender: string, size: number, age: number, vaccine: boolean, image: string){
        this.kind = kind;
        this.name = name;
        this.gender = gender;
        this.size = size;
        this.age = age;
        this.vaccine = vaccine;
        this.image = image;
        animals.push(this);
    }

    display(): string{
        let vacColor: string = "success";
        let vacIcon: string = '<i class="fa-light fa-syringe"></i>';
        let kindColor: string = "info";
        if(this.vaccine == false){
            vacColor = "danger";
            vacIcon = '<i class="fa-regular fa-xmark"></i>'
        };
        if(this.kind == "cat"){kindColor = "success";}
        else if(this.kind == "dog"){kindColor = "warning";};
        return `
        <div class="col col-sort">
            <div class="card card-body card-deco">
                <div class="card-text pb-2 d-flex justify-content-between">
                    <span class="badge bg-${kindColor}">${this.kind}</span>
                    <div class="card-bookmark">
                        <a href="#" class="deco-none"><i class="fa-regular fa-bookmark"></i></a>
                        <a href="#" class="deco-none"><i class="fa-solid fa-ellipsis-vertical ms-3"></i></a>
                    </div>
                </div>
                <img src="${this.image}" alt="" class="card-img img-thumbnail d-none d-md-block">
                <div class="text-center py-2">
                    <h5 class="card-title">${this.name}</h5>
                </div>
                <div class="card-text border-top border-bottom py-3">
                    <span>Gender:</span>
                    <span>${this.gender}</span>
                    <br>
                    <span>Size:</span>
                    <span>${this.size}</span>
                    <br>
                    <span>Age:</span>
                    <span>${this.age}</span>
                </div>
                <div class="d-flex justify-content-center gap-2 mt-3">
                    <button class="btn btn-${vacColor} vacBtn w-100">${vacIcon} Vaccine</button>
                </div>
            </div>
        </div>
        `;
    }
}

class Cat extends Animal{
    breed: string;
    pattern: string;
    web: string;

    constructor(name: string, gender: string, size: number, age: number, vaccine: boolean, image: string, breed: string, pattern: string, web: string, kind: string = "cat"){
        super(kind, name, gender, size, age, vaccine, image);
        this.breed = breed;
        this.pattern = pattern;
        this.web = web;
    }

    display(): string{
        let vacColor: string = "success";
        let vacIcon: string = '<i class="fa-light fa-syringe"></i>';
        let kindColor: string = "success";
        if(this.vaccine == false){
            vacColor = "danger";
            vacIcon = '<i class="fa-regular fa-xmark"></i>'
        };
        return `
        <div class="col col-sort">
            <div class="card card-body card-deco">
                <div class="card-text pb-2 d-flex justify-content-between">
                    <span class="badge bg-${kindColor}">${this.kind}</span>
                    <div class="card-bookmark">
                        <a href="#" class="deco-none"><i class="fa-regular fa-bookmark"></i></a>
                        <a href="#" class="deco-none"><i class="fa-solid fa-ellipsis-vertical ms-3"></i></a>
                    </div>
                </div>
                <img src="${this.image}" alt="" class="card-img img-thumbnail d-none d-md-block">
                <div class="text-center py-2">
                    <h5 class="card-title">${this.name}</h5>
                </div>
                <div class="card-text border-top border-bottom py-3">
                    <span>Gender:</span>
                    <span>${this.gender}</span>
                    <br>
                    <span>Size:</span>
                    <span>${this.size}</span>
                    <br>
                    <span>Age:</span>
                    <span>${this.age}</span>
                    <br>
                    <span>Breed:</span>
                    <span>${this.breed}</span>
                    <br>
                    <span>Pattern:</span>
                    <span>${this.pattern}</span>
                    <br>
                    <span>Info:</span>
                    <span><a href="${this.web}">${this.breed}</a></span>
                </div>
                <div class="d-flex justify-content-center gap-2 mt-3">
                    <button class="btn btn-${vacColor} vacBtn w-100">${vacIcon} Vaccine</button>
                </div>
            </div>
        </div>
        `;
    }
}

class Dog extends Animal{
    breed: string;
    skills: string;
    web: string;

    constructor(name: string, gender: string, size: number, age: number, vaccine: boolean, image: string, breed: string, skills: string, web: string, kind: string = "dog"){
        super(kind, name, gender, size, age, vaccine, image);
        this.breed = breed;
        this.skills = skills;
        this.web = web;
    }

    display(): string{
        let vacColor: string = "success";
        let vacIcon: string = '<i class="fa-light fa-syringe"></i>';
        let kindColor: string = "warning";
        if(this.vaccine == false){
            vacColor = "danger";
            vacIcon = '<i class="fa-regular fa-xmark"></i>'
        };
        return `
        <div class="col col-sort">
            <div class="card card-body card-deco">
                <div class="card-text pb-2 d-flex justify-content-between">
                    <span class="badge bg-${kindColor}">${this.kind}</span>
                    <div class="card-bookmark">
                        <a href="#" class="deco-none"><i class="fa-regular fa-bookmark"></i></a>
                        <a href="#" class="deco-none"><i class="fa-solid fa-ellipsis-vertical ms-3"></i></a>
                    </div>
                </div>
                <img src="${this.image}" alt="" class="card-img img-thumbnail d-none d-md-block">
                <div class="text-center py-2">
                    <h5 class="card-title">${this.name}</h5>
                </div>
                <div class="card-text border-top border-bottom py-3">
                    <span>Gender:</span>
                    <span>${this.gender}</span>
                    <br>
                    <span>Size:</span>
                    <span>${this.size}</span>
                    <br>
                    <span>Age:</span>
                    <span>${this.age}</span>
                    <br>
                    <span>Breed:</span>
                    <span>${this.breed}</span>
                    <br>
                    <span>Training:</span>
                    <span>${this.skills}</span>
                    <br>
                    <span>Info:</span>
                    <span><a href="${this.web}">${this.breed}</a></span>
                </div>
                <div class="d-flex justify-content-center gap-2 mt-3">
                    <button class="btn btn-${vacColor} vacBtn w-100">${vacIcon} Vaccine</button>
                </div>
            </div>
        </div>
        `;
    }
}

const a1 = new Animal("bird","vsvs", "sdf", 12, 15, true, "img/pug.png");
new Dog("fasd","male", 120,6,false,"img/pug.png", "some", "Yes", "www.123.at");
new Cat("fasd","male", 120,12,false,"img/pug.png", "some", "Yes", "www.123.at");


function buildHTML(arr: {[index: string]: any}[]): void{
    targetDiv.innerHTML = "";
    
    for(let i: number = 0; i < arr.length; i++){
        targetDiv.innerHTML += arr[i].display();
    }

    const vacBtns = document.getElementsByClassName("vacBtn") as HTMLCollection;
    for(let i: number = 0; i < vacBtns.length; i++){
        // console.log(vacBtns[i]);
        vacBtns[i].addEventListener("click", () => setVac(i));
    }
}

function setVac(e: any): void{
    // console.log(e);
    animals[e].vaccine = !animals[e].vaccine;
    buildHTML(animals);
}

function sortAnimals(arr: {[index: string]: any}[]): void{
    if(sortStatus){
        arr.sort((a,b) => a.age - b.age);
        sortStatus = !sortStatus;
        sortTarget.innerHTML = '<i class="fa-solid fa-arrow-down-wide-short"></i>';
    }
    else{
        arr.sort((a,b) => b.age - a.age);
        sortStatus = !sortStatus;
        sortTarget.innerHTML = '<i class="fa-solid fa-arrow-down-short-wide"></i>';
    }
    
    buildHTML(arr);
}

buildHTML(animals);