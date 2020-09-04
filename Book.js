export class Book {
    constructor (title, author, description, pages, currentPage, read) {
        this.title = title;
        this.author =  author;
        this.description = description;
        this.pages = pages;
        this.currentPage = currentPage;
        this.read = read;
    }

    readBook(page) {
        if (page < 1 || page > this.pages) {
            return 0
        } else if (page >= 1 && page < this.pages) {
            this.currentPage = page;
            return 1;
        } else if (page === this.pages) {
            this.currentPage = page;
            this.read = true;
            return 1;
        }
    }
}

const bookOne = new Book('Born a crime', 'Trevor Noah', `Trevor Noah is one of the comedy world\'s brightest new voices,
 a light-footed but sharp-minded observer of the absurdities of politics, race, and identity, 
 sharing jokes and insights drawn from the wealth of experience acquired in his relatively young 
 life. As host of The Daily Show with Trevor Noah, he provides viewers in America and around the globe
 with their nightly dose of biting satire...`, 479,  false)

 const bookTwo = new Book ('Adam', 'Ted Dekker', `in this supernatural horror story, prolific novelist Dekker explores themes
  of good and evil through ademon-possessed serial killer with mixed results. FBI special agent Daniel Clark's obsession with 
  his job has cost him his marriage, but he's determined to find the serial killer known as "Eve." He's murdered 15 young women,
  each during a new moon, and is about to murder another. Daniel briefly sees the killer, but his memory glitches when he almost
   dies at the scene. In one of the novel's less believable plot twists...`, 596, 150, false )

const bookThree = new Book ('Forevermore', `Cathy Marie Hake', 'Historical fiction with a charming heroine and healthy doses of humor 
and romance from a best-selling author; set in turn-of-the-century rural Texas`, 502, 502, true)

const bookFour= new Book ('leota\'s garden', `Francine Rivers', 'fiction with a charming heroine and healthy doses of humor 
and romance from a best-selling author..`, 502, 502, true)
export const books = [bookOne, bookTwo, bookThree, bookFour];


