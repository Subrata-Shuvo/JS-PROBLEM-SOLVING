const book1Paper = 100;
const book2Paper = 200;
const book3Paper = 300;

function paperRequirements(firstBook, secondBook, thirdBook){
    const book1Pages = firstBook * book1Paper;
    const book2Pages = secondBook * book2Paper;
    const book3Pages = thirdBook * book3Paper;

    const totalPages = book1Pages + book2Pages + book3Pages;
    return totalPages;
}

const paperInBooks = paperRequirements(2, 3, 4)
console.log(paperInBooks);