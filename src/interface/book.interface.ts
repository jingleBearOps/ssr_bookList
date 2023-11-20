
export enum Category {
    Fiction = "Fiction",
    NonFiction = "Non-Fiction",
    Mystery = "Mystery",
    ScienceFiction = "Science Fiction",
    Fantasy = "Fantasy",
    Biography = "Biography",
    History = "History",
    SelfHelp = "Self-Help",
    Romance = "Romance",
    Thriller = "Thriller",
    Horror = "Horror",
    Poetry = "Poetry",
    Business = "Business",
    Travel = "Travel",
    Children = "Children",
    Science = "Science",
    Technology = "Technology",
    Art = "Art",
    Philosophy = "Philosophy",
    Cookbook = "Cookbook",
    Health = "Health",
    Religion = "Religion",
    Sports = "Sports",
    Comics = "Comics",
    GraphicNovel = "Graphic Novel",
    Other = "Other",
}


export interface BookInterface {
    id: number;
    name: string;
    price: number;
    category: Category;
    description: string;
}