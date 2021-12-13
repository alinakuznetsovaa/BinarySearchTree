import readlineSync from "readline-sync"
import { BinaryTreeSearch } from "./tree.js"
import { Data } from "./data.js"
import { Menu } from "./menu.js"



let tree = new BinaryTreeSearch<Number, Number>()

Menu.printMenu()
let exit = false

while (!exit){
    console.log("\n")
    let item = readlineSync.question('Choose menu item: ')
    switch (item) {
        case ("1"):{
            let inputKey = readlineSync.question('Write key(type is number): ')
            if (isNaN(Number(inputKey))){
                console.log("Incorrect value of key")
                continue
            }
            let key:number = Number(inputKey)
            let value:number = Number(readlineSync.question('Write value(type is number): '))
            tree.add(new Data<Number>(key, value))
            break
        }
        case ("2"):{
            let inputKey = readlineSync.question('Write key(type is number): ')
            if (isNaN(Number(inputKey))){
                console.log("Incorrect value of key")
                break
            }
            let key:number = Number(inputKey)
            let value: Number | null = tree.search(key)
            if (value == null){
                console.log("There is no node with that key in the tree")
                break
            }
            else{
                console.log("Value is: " + value)
                break
            }

        }
        case ("3"):{
            let inputKey = readlineSync.question('Write key(type is number): ')
            if (isNaN(Number(inputKey))){
                console.log("Incorrect value of key")
                continue
            }
            let key:number = Number(inputKey)
            let value: Number | null = tree.search(key)
            let res
            if (value == null){
                console.log("There is no node with that key in the tree")
                break
            } else res = tree.remove(key)
            
            break
        }
        
        case ("4"):{
            tree.printTree()
            break
        }
       
        case ("5"):{
            exit = true
            break
        }
        default:{
            console.log("Incorrect value")
            break
        }

    }
}


 