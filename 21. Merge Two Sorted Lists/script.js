    var mergeTwoLists = function(l1, l2) {
        //Criação do objeto que representará um nó de uma lista encadeada
        var mergedHead = { val : -1, next : null },
            
        crt = mergedHead;
        while(l1 && l2) {
            if(l1.val > l2.val) {
                crt.next = l2;
                l2 = l2.next;
            } else {
                crt.next = l1;
                l1 = l1.next;
            }
            crt = crt.next;
        }
        crt.next = l1 || l2;
            
        return mergedHead.next;
    };

    let list1 = [1,2,4]
    let list2 = [1,3,4]
    console.log(mergeTwoLists(list1, list2))