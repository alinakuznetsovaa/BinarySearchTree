import { Data } from "./data.js"
 import { Node } from "./node.js"

 export class BinaryTreeSearch<K, V> {
    private root: Node<V> | null


    constructor() {
        this.root = null
    }



    findNode(node : Node<V> | null, key : Number): V | null{
        
        if (node == null) {
            return null
        }
        while(key != node.data.key){
            if (key < node.data.key)
                return this.findNode(node.left, key)
            else
                return this.findNode(node.right, key)
        }
        return node.data.value
    }

    
    find(key: Number):  V | null{
        return this.findNode(this.root, key)
    }
  

    
    addNode(node: Node<V> | null, data: Data<V>): Node<V> | null {
        if (node == null)
            return new Node<V>(data, null, null)
        
        if (data.key < node.data.key)
            node.left = this.addNode(node.left, data)
        else if (data.key > node.data.key)
            node.right = this.addNode(node.right, data)
        return node;
        
      }

    add(data: Data<V>): void{

        if (this.search(data.key) == null)
            this.root = this.addNode(this.root, data)
       
    }

    searchNode(node : Node<V> | null, key : Number): V | null{
        if (node == null) {
            return null
        }
        while(key != node.data.key){
        
        if (key < node.data.key)
            return this.searchNode(node.left, key)
        else
            return this.searchNode(node.right, key)
    }

        return node.data.value
    }
 
    search(key: Number): V | null{
        return this.searchNode(this.root, key)
    }

     
    findMin(node: Node<V>): Node<V>{
        if (node.left == null)
        return node
    return this.findMin(node.left)
    }

    removeNode(node: Node<V> | null, key: Number): Node<V> | null{
        if (node == null)
            return null
       
        if (key < node.data.key)
            node.left = this.removeNode(node.left, key)

        else if (key > node.data.key)
            node.right = this.removeNode(node.right, key)

        else if (node.left == null || node.right == null){
                if (node.right == null)
                    node = node.left
                else if (node.left == null)
                        node = node.right
                    else
                        node = null
        }
        else{
            node.data.key = this.findMin(node.right).data.key
            node.right = this.removeNode(node.right, node.data.key)
            }
        
        return node
    }

     
    remove(key: Number): void{
        if (this.search(key)!=null) 
            this.root = this.removeNode(this.root, key)
           
        
    }


    traverseInOrder(node: Node<V> | null): void{
        if (node != null){
            this.traverseInOrder(node.left)
            console.log("Key: " + node.data.key + " Value: " + node.data.value)
            this.traverseInOrder(node.right)
        }
    }

    
    printTree(): void{
        this.traverseInOrder(this.root)
    }
}
 


