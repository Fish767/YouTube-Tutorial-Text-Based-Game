function game(num) {
    switch (num) {
        case 0:
            type("Are you a boy or a girl?")
            createop("Boy","S.gender='boy';game(1);")
            createop("Girl","S.gender='girl';game(1);")
            break;
        case 1:
            type("You are in a room.")
            createop("Ok","game(0)")
            createop("Why","save()")
        case 2:
            type("There is a slime.\n\nWhat do you do?")
            createop("Fight","game(3)")
            createop("Run","game(4)")
            S.inventory={}
            break;
        case 3:
            type("You killed the slime. You get a slimy patch.")
            S.inventory.slimyPatch={}
            S.inventory.slimyPatch.num=1
            S.slime=1
            createop("Cool","game(5)")
            createop("not cool","game(6)")
            break;
        case 4:
            type("You run away from the slime and find a treasure room.")
            createop("Collect treasure","game(5)")
            break;
        case 5:
            if (S.slime===1) {
                type("gg")
            }else if (S.slime===2) {
                type("You learn how to raise the dead")
            }else {
                type(" the slime kills you")
            }
            break;
        case 6:
            type("You feel bad for killing the slime and try to bring it back. It doesn't work.")
            S.slime=2
            createop("Ok","game(5)")
    }
}