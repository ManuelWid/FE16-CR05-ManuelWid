const animals: {[index: string]: any}[] = [];
const targetDiv = document.getElementById("main-content") as HTMLElement;

const sortTarget = document.getElementById("sortNavTarget") as HTMLElement;
sortTarget.innerHTML = '<i class="fa-solid fa-arrow-down-wide-short"></i>';

const sortNav = document.getElementById("sortNav") as HTMLElement;
sortNav.addEventListener("click", () => sortAnimals(animals));
let sortStatus: boolean = false;

const sortMain = document.getElementById("sortMain") as HTMLElement;
sortMain.addEventListener("click", () => sortBy(animals));
let sortStatusMain: string = "age";

const sortMainDir = document.getElementById("main-btn-sort") as HTMLElement;
sortMainDir.addEventListener("click", () => sortDirMain(animals));
let sortStatusMainDir: boolean = false;

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

function sortDirMain(arr: {[index: string]: any}[]): void{
    if(sortStatusMainDir){
        sortMainDir.innerHTML = '<i class="fa-solid fa-arrow-down-wide-short"></i>';
        switch(sortStatusMain){
            case "age":
                arr.sort((a,b) => a.age - b.age);
                break;
            case "kind":
                arr.sort((a,b): any => {
                    if(a.kind < b.kind){return -1}
                    if(a.kind > b.kind){return 1}
                });
                break;
            case "size":
                arr.sort((a,b) => a.size - b.size);
                break;
            default:
                console.log("something went wrong");
        }
        sortStatusMainDir = !sortStatusMainDir;
    }
    else{
        sortMainDir.innerHTML = '<i class="fa-solid fa-arrow-down-short-wide"></i>';
        switch(sortStatusMain){
            case "age":
                arr.sort((a,b) => b.age - a.age);
                break;
            case "kind":
                arr.sort((a,b): any => {
                    if(a.kind < b.kind){return 1}
                    if(a.kind > b.kind){return -1}
                });
                break;
            case "size":
                arr.sort((a,b) => b.size - a.size);
                break;
            default:
                console.log("something went wrong");
        }
        sortStatusMainDir = !sortStatusMainDir;
    };
    
    console.log(sortStatusMainDir);
    buildHTML(arr);
}

function sortBy(arr: {[index: string]: any}[]): void{
    switch(sortStatusMain){
        case "age":
            if(sortStatusMainDir){
                arr.sort((a,b): any => {
                    if(a.kind < b.kind){return 1}
                    if(a.kind > b.kind){return -1}
                });
            }else{
                arr.sort((a,b): any => {
                    if(a.kind < b.kind){return -1}
                    if(a.kind > b.kind){return 1}
                });
            }
            sortStatusMain = "kind";
            sortMain.innerHTML = sortStatusMain;
            break;
        case "kind":
            if(sortStatusMainDir){
                arr.sort((a,b) => a.size - b.size);
            }else{
                arr.sort((a,b) => b.size - a.size);
            }
            sortStatusMain = "size";
            sortMain.innerHTML = sortStatusMain;
            break;
        case "size":
            if(sortStatusMainDir){
                arr.sort((a,b) => a.age - b.age);
            }else{
                arr.sort((a,b) => b.age - a.age);
            }
            sortStatusMain = "age";
            sortMain.innerHTML = sortStatusMain;
            break;
        default:
            sortStatusMain = "age";
            sortMain.innerHTML = sortStatusMain;
    }
    buildHTML(arr);
}

new Animal("ferret", "ferry", "male", 45, 4, false, "https://cdn.pixabay.com/photo/2016/01/17/12/52/animals-1144845__340.jpg");
new Animal("bird", "fluffy", "female", 25, 8, false, "https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453__340.jpg");
new Animal("bird", "albus", "male", 30, 7, false, "https://cdn.pixabay.com/photo/2017/06/09/09/39/adler-2386314__340.jpg");

new Cat("maria", "female", 45, 12, true, "https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782_960_720.jpg", "American Shorthair", "grey striped", "https://www.petfinder.com/cat-breeds/american-shorthair/");
new Cat("manuel", "male", 50, 15, true, "https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_960_720.jpg", "Bengal", "gold spotted", "https://www.petfinder.com/cat-breeds/bengal/");
new Cat("jan", "male", 55, 14, true, "https://cdn.pixabay.com/photo/2013/12/12/03/08/kitten-227009_960_720.jpg", "Balinese", "muddy yellowish xD", "https://www.petfinder.com/cat-breeds/balinese/");

new Dog("idk", "female", 130, 8, true, "https://cdn.pixabay.com/photo/2016/11/19/15/20/dog-1839808_960_720.jpg", "Anatolian Shepherd Dog", "Yes", "https://www.purina.co.uk/find-a-pet/dog-breeds/anatolian-shepherd");
new Dog("idk", "male", 1450, 12, false, "https://cdn.pixabay.com/photo/2016/11/29/09/58/dog-1868871_960_720.jpg", "Australian Shepherd Dog", "No", "https://www.purina.co.uk/find-a-pet/dog-breeds/australian-shepherd");
new Dog("idk", "female", 110, 3, true, "https://cdn.pixabay.com/photo/2021/01/30/15/14/akita-5964180_960_720.jpg", "Black and Tan Coonhound", "Yes", "https://www.purina.co.uk/find-a-pet/dog-breeds/black-and-tan-coonhound");

buildHTML(animals);