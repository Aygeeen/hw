var Starbucks = {
    coffee: {
        latte: "Латте - кофейный напиток, на основе молока, представляющий собой трёхслойную смесь из пены, молока  и кофе эспрессо. Был изобретён в Италии.}",
        cappuccino: "Капучи́но (от итал. cappuccino — капуцин) — кофейный напиток итальянской кухни на основе эспрессо с добавлением в него подогретого вспененного молока.",
        espresso: "Эспре́ссо— метод приготовления кофе путём прохождения горячей воды (92-96 °C) под давлением (около 9 бар) через фильтр с молотым кофе.",
    },
    tea: {
        green: "Зелёный чай — чай, подвергнутый минимальной ферментации. ",
        black: "Вид чая, подвергающийся полной ферментации  ",
        limon: "Чай с лимоном"
    }
}
var drink = prompt("coffee or tea")
if (drink === "coffee") {
    var coffee = prompt("Пожалуйста, выберите вид кофе: latte ,espresso , cappuccino");
    switch (coffee) {
        case "latte":
            console.log(Starbucks.coffee.latte)
            console.log("с вас 3 бакса")
            break
        case "espresso":
            console.log(Starbucks.coffee.espresso)
            console.log("с вас 5 баксов")
            break
        case "cappuccino":
            console.log(Starbucks.coffee.cappuccino)
            console.log("с вас 4 бакса")
            break
        default:
            console.log("Такого кофе нет!")
    }
} else if (drink === "tea") {
    var tea = prompt('Пожалуйста,выберите чай : green, black, limon');
    switch (tea) {
        case "green":
            console.log(Starbucks.tea.green)
            console.log("С вас 1.99 баксов")
            break
        case "black":
            console.log(Starbucks.tea.black)
            console.log("С вас 2.49 баксов")
            break
        case "limon":
            console.log(Starbucks.tea.limon)
            console.log("С вас 1.99 баксов")
            break
        default:
            console.log("Такого чая нет!")
    }
} else (console.log("Error!"))



