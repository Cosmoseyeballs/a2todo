export class Init {
    loade() {
        if (localStorage.getItem("todos") === null || localStorage.getItem("todos") == undefined) {
            console.log("No todus... creating...")
            var todos = [
                { id: 1, text: "Hent Emma fra brnehave" },
                { id: 2, text: "Vænter på svar fra læge" }
            ]
            localStorage.setItem("todos",JSON.stringify(todos));
        }else{
            console.log("get todos")
        }
    }
}