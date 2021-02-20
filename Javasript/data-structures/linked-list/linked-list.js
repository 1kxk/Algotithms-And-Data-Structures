class LinkedList
{
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head
    this.length = 1
  }

  append(value) {
    const newNode = {
      value,
      next: null
    }

    this.tail.next = newNode
    this.tail = newNode
    this.length++
    return this
  }
}

const myLinkedList = new LinkedList(10)
myLinkedList.append(1)
myLinkedList.append(2)
myLinkedList.append(3)

console.log(myLinkedList)
